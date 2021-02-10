/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/index.html","e3bf54fc523709953f73a55b78800d99"],["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/iptables.png","0b3ce9083f875caebc5204e7e25a0252"],["E:/Github_Blogs/public/2021/02/09/Python/pip/pip/index.html","85e1f29857acd4980e8ceea6326445b8"],["E:/Github_Blogs/public/2021/02/09/Python/函数/if__name__='__main__'/if__name__='__main__'/index.html","d5ce1843411f2bb2bbcd2523e4ec1293"],["E:/Github_Blogs/public/2021/02/09/Python/函数/open函数/open 函数/index.html","11c4747e89af29a247726c3a6e37a54b"],["E:/Github_Blogs/public/2021/02/09/Python/库/EasyGui库/easygui库/index.html","0ed14dfc69d78d80edf74261ef0da35c"],["E:/Github_Blogs/public/2021/02/09/Python/库/pickle库/pickle 库/index.html","0fe5bb19fd5bba1349db6b864e8680f8"],["E:/Github_Blogs/public/2021/02/09/Python/库/random库/random/index.html","282f1128060355996e3fbb14bb01a8a3"],["E:/Github_Blogs/public/2021/02/09/Python/库/time库/time 库/index.html","f6d63c21b65030d16f16fe1522fe07b8"],["E:/Github_Blogs/public/2021/02/09/Python/库/urllib库/urllib.request/index.html","8c178415c560fb4c2756e6034f105310"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DHCP/DHCP/index.html","07547965b243c9aa50ab3ce4f5ee2360"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DNS/DNS/index.html","37fca580078e7065a90c78b94bfb5f66"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/NFS/NFS/index.html","a4fbe52c87c1bd79b17a51a4bbebf811"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Network/Network/index.html","5828f9ab8df3e01cb689d60846e0c810"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/SELinux/SELinux/index.html","28b7b9cfad19848cfcb31d77583d81ce"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Samba/Samba/index.html","80278480029249beffadf3d05134bef5"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/hosts.allow文件跟hosts.deny文件/hosts.allow、hosts.deny/index.html","5f9f273d61ab073bba14e85241474a0d"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/ssh/ssh/index.html","5b43bf329eef4ae8145f1929defef851"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/vsftp/vsftp/index.html","1a29546f559a103bde36997944450264"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/1.png","39da931387dcf2007bc115d89beafbca"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/2.png","68df7fa74b8c1cae35473165ac74a44d"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/3.png","50aae8619e710b924b83e230b638f3b9"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/4.png","d58a3d69a77f45709f97e0a9a35f759a"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/5.png","589b15fc58ba183b00657cb55c6c6477"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/6.png","fc489c5eb4710b98b04c173e41b0deed"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/7.png","23ca66b2ca13419b600b7fe1ba878624"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/8.png","d7bdcf82db3a223c8cdc7fe159a32638"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/index.html","6815880111eb6fee7704d161ab6df7aa"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/1.png","27ca5b390740cc48ff3bdb6ec8332250"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/bp.png","b4b52c6571cc10a4c13395ca2749b1d1"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/index.html","a6dab6bd51f51f2b54c52f76d8c2d9db"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp-2.png","4cbfc0ea1a0f58564a4b4218c4975074"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp.png","adaf1bf69a59479850847b3533bc2b40"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc-2.png","8f2449fa1f66ba9b19a3190255ec0371"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc.png","ff62ab17b6a21fa0012d686a2589d422"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin-2.png","e9b8cb78ad6a6a5b930d3c36e250629e"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin.png","bedefda57f2335e901a7fc671739b75e"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/s.png","e1254c76e72bd303872fe7d318e8b364"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/1.jpg","e4c5ace2a2e492d95f39e8a9d644ddb5"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/2.jpg","8f4842470fce6144da48b442a4fb4f07"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/index.html","f6893794735150933fb659177fffe7ed"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/1.jpg","3d0f71619dcbf31bd0f3abef8da41edf"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/2.jpg","401a68f0c32e6509a7c90773a8d9268f"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/3.jpg","fca5d4ee70659692da199ddb7d8dd5bd"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/bp.jpg","69a6b1cc866a430ededd216e653b229e"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/index.html","a6aa7aa9c53d90be01dab452fb1d3402"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/1.jpg","0ae5a230533e2fe653516f54edc8dbe1"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/2.png","da6e9db48d623752abe80fc2f531823d"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/3.png","813d3ef0452f3922bce4e8f6d80beb22"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/index.html","846e905a1881790052527d30175d7132"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/index.html","8ff38c6276a30134676230a1543896fc"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-1.png","79f4929d247fd08451ee53bb736cf797"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-2.png","2a4534b665b31e70a3a56cb547124796"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/shodan_api.png","cc8064b045a86882845059837ffcc257"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/start.png","e3da3466796a1a491b02118ac1a3d985"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-1.png","f1b9ca82e40c62096233270a17521be9"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-2.png","512fafeb9d0a2ed1049b16fb39e0d450"],["E:/Github_Blogs/public/404.html","ca36e735054ab06096516d9ee034d042"],["E:/Github_Blogs/public/archives/2021/02/index.html","9b211ca73eeec594a70bd8d6aa5d4d3b"],["E:/Github_Blogs/public/archives/2021/02/page/2/index.html","78b0794e66d42037149f3c75ed44380d"],["E:/Github_Blogs/public/archives/2021/02/page/3/index.html","cd6394bec0fc653e9494b6b146c56019"],["E:/Github_Blogs/public/archives/2021/index.html","44c54112a125d834da615289492e5ca4"],["E:/Github_Blogs/public/archives/2021/page/2/index.html","4998c54250b0c2ab3672cbfba008fdc2"],["E:/Github_Blogs/public/archives/2021/page/3/index.html","8b87b4cdc1b6bb29c9060fa8fcec4bba"],["E:/Github_Blogs/public/archives/index.html","ea4d61f18815a0739e8fef3ba37fb43e"],["E:/Github_Blogs/public/archives/page/2/index.html","3d9b912a433f3645bef7b11738b6dbab"],["E:/Github_Blogs/public/archives/page/3/index.html","0356e59d286ac9f0face6cda9609fc06"],["E:/Github_Blogs/public/categories/Apache-Shiro-漏洞复现/index.html","7e18b8100a8aed0d9a87e3b984f4bb3e"],["E:/Github_Blogs/public/categories/Apache-Tomcat-漏洞复现/index.html","1d02a3aa3ac19808f2df207ab2f8ab15"],["E:/Github_Blogs/public/categories/Linux/index.html","2bd57ca79d86300396db53589af48a1e"],["E:/Github_Blogs/public/categories/Python/index.html","d1ddd6788bc86b759f916de61106f3b8"],["E:/Github_Blogs/public/categories/ThinkPHP-漏洞复现/index.html","86c67ff8bfc3925d2ae5363faf7b453e"],["E:/Github_Blogs/public/categories/Windows-漏洞复现/index.html","3c5943df91ec9e6bd1001097a5221482"],["E:/Github_Blogs/public/categories/index.html","4d3050227ec700933bcb0443023b8f38"],["E:/Github_Blogs/public/categories/信息收集/index.html","331f7a88b0796a59b5fa882351e4a0b0"],["E:/Github_Blogs/public/categories/网络应用竞赛/index.html","07245e80076f7e964e0debad25c296ae"],["E:/Github_Blogs/public/css/index.css","ca12b7a6b1f76993e99c66651f701686"],["E:/Github_Blogs/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Github_Blogs/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Github_Blogs/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/Github_Blogs/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Github_Blogs/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Github_Blogs/public/img/index.jpg","ec7805af22a17750033a1b2485413dbb"],["E:/Github_Blogs/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Github_Blogs/public/index.html","db785440b94e4356d2d104576d05b509"],["E:/Github_Blogs/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Github_Blogs/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Github_Blogs/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Github_Blogs/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Github_Blogs/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Github_Blogs/public/link/index.html","5d278e4e86df1ea783c91ac3df092fdb"],["E:/Github_Blogs/public/page/2/index.html","6b529b2b5756a25fef96583d60778c42"],["E:/Github_Blogs/public/page/3/index.html","a65546ddc44e090a34df022466a6223a"],["E:/Github_Blogs/public/tags/Apache/index.html","4c780df276ea17cbf7c970ff6141d105"],["E:/Github_Blogs/public/tags/Linux/index.html","067080a564855b8d61ecb5a3fdd5b7b6"],["E:/Github_Blogs/public/tags/Python/index.html","6d5235b527ff439f04df6dbc324aa464"],["E:/Github_Blogs/public/tags/ThinkPHP/index.html","e2d4a83e781ba9a95ac25c57bc7c8d7a"],["E:/Github_Blogs/public/tags/Windows/index.html","a711e131005b610666de10917c6e27d4"],["E:/Github_Blogs/public/tags/index.html","5205305ad7700e06f711333da76c5eb4"],["E:/Github_Blogs/public/tags/信息收集/index.html","125c25ac4fde035adf7381b070d8f577"],["E:/Github_Blogs/public/tags/漏洞复现/index.html","ae183886eeee4b9883d55a83a3e4e7e0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







