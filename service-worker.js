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

var precacheConfig = [["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/index.html","0fa41051f2597afa427ec4559a3ff4d4"],["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/iptables.png","0b3ce9083f875caebc5204e7e25a0252"],["E:/Github_Blogs/public/2021/02/09/Python/pip/pip/index.html","9fa4237c35229ac064af3f555a369925"],["E:/Github_Blogs/public/2021/02/09/Python/函数/if__name__='__main__'/if__name__='__main__'/index.html","867a08e9188f5a8af16ee309098a7f15"],["E:/Github_Blogs/public/2021/02/09/Python/函数/open函数/open 函数/index.html","b7eeb1fc65766334a028fc1829e053b4"],["E:/Github_Blogs/public/2021/02/09/Python/库/EasyGui库/easygui库/index.html","c3c1a89e2fb45107d4148d27f8b268f5"],["E:/Github_Blogs/public/2021/02/09/Python/库/pickle库/pickle 库/index.html","df2fcc02c703cb65b8095aa768602779"],["E:/Github_Blogs/public/2021/02/09/Python/库/random库/random/index.html","5e8957957e50b069b1f2b1c85781bb6e"],["E:/Github_Blogs/public/2021/02/09/Python/库/time库/time 库/index.html","35081f300762cd69aabd5cb979088897"],["E:/Github_Blogs/public/2021/02/09/Python/库/urllib库/urllib.request/index.html","e91d9b77752ebdf6fc6961f69f547837"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DHCP/DHCP/index.html","68f0739335a5811ac2a2d5d5886aba5a"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DNS/DNS/index.html","a4ccc2015f7832156700201e50085f60"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/NFS/NFS/index.html","20ec82413c6e8d7fe1538aa45836e63b"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Network/Network/index.html","fa140fe7c32a81b65b510571fc88d7ef"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/SELinux/SELinux/index.html","4b9831f019238c20e2e539af5d209c2e"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Samba/Samba/index.html","017f3cafc593b14bc7446c82d982d2b7"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/hosts.allow文件跟hosts.deny文件/hosts.allow、hosts.deny/index.html","94843459094dce0f0f0be664c5241841"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/ssh/ssh/index.html","329888091baa536bd226e3b1a5b6a6a5"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/vsftp/vsftp/index.html","c6f6c512c36c54716cea62de6489f35c"],["E:/Github_Blogs/public/2021/02/10/ThinkPHP/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/1.jpg","0ae5a230533e2fe653516f54edc8dbe1"],["E:/Github_Blogs/public/2021/02/10/ThinkPHP/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/2.png","da6e9db48d623752abe80fc2f531823d"],["E:/Github_Blogs/public/2021/02/10/ThinkPHP/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/3.png","813d3ef0452f3922bce4e8f6d80beb22"],["E:/Github_Blogs/public/2021/02/10/ThinkPHP/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/index.html","e6ba448900923de4ba1a8f1a0589fd2d"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/1.png","39da931387dcf2007bc115d89beafbca"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/2.png","68df7fa74b8c1cae35473165ac74a44d"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/3.png","50aae8619e710b924b83e230b638f3b9"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/4.png","d58a3d69a77f45709f97e0a9a35f759a"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/5.png","589b15fc58ba183b00657cb55c6c6477"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/6.png","fc489c5eb4710b98b04c173e41b0deed"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/7.png","23ca66b2ca13419b600b7fe1ba878624"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/8.png","d7bdcf82db3a223c8cdc7fe159a32638"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/index.html","fab3b2da8072d2d6022bb95056cd775c"],["E:/Github_Blogs/public/404.html","2639cc6e0aca08679f03dfcfd912e163"],["E:/Github_Blogs/public/archives/2021/02/index.html","6a05b3ed13a8056b27796dc7336ea916"],["E:/Github_Blogs/public/archives/2021/02/page/2/index.html","29b5e4a9765daa805197407e1527d418"],["E:/Github_Blogs/public/archives/2021/index.html","df78ad981d93636730ae9fbc361cfca6"],["E:/Github_Blogs/public/archives/2021/page/2/index.html","9a7752d1b09b3ff8ac887d401e020f44"],["E:/Github_Blogs/public/archives/index.html","5314069336df3e7f5c4cf27415d03fe4"],["E:/Github_Blogs/public/archives/page/2/index.html","1735e2fe3287d42015ec1eb0b1e22cf0"],["E:/Github_Blogs/public/categories/Linux/index.html","7d4ceee12ce854e9c49fbd387dd3a9cc"],["E:/Github_Blogs/public/categories/Python/index.html","9482470ad715b86f3aecad0412916464"],["E:/Github_Blogs/public/categories/ThinkPHP-漏洞复现/index.html","647a84ad74af49cc6062aa59b826db9a"],["E:/Github_Blogs/public/categories/Windows-漏洞复现/index.html","81e9cd36d21594245aa70655c641316e"],["E:/Github_Blogs/public/categories/index.html","2337d90b071df0fd10753b6234d14581"],["E:/Github_Blogs/public/categories/网络应用竞赛/index.html","c3b560757bf26316351332819a75cef4"],["E:/Github_Blogs/public/css/index.css","ca12b7a6b1f76993e99c66651f701686"],["E:/Github_Blogs/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Github_Blogs/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Github_Blogs/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/Github_Blogs/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Github_Blogs/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Github_Blogs/public/img/index.jpg","ec7805af22a17750033a1b2485413dbb"],["E:/Github_Blogs/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Github_Blogs/public/index.html","d293e9c44190b25c90436539a4eb2daf"],["E:/Github_Blogs/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Github_Blogs/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Github_Blogs/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Github_Blogs/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Github_Blogs/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Github_Blogs/public/link/index.html","e59d8914c880946981a252a4d1952b93"],["E:/Github_Blogs/public/page/2/index.html","abbd5dc079f01bd1d630c52df448abfd"],["E:/Github_Blogs/public/tags/Linux/index.html","18f26215449099d3128b7c7f84f92206"],["E:/Github_Blogs/public/tags/Python/index.html","0b80aea06753a9ddc9b58bf34c6b8429"],["E:/Github_Blogs/public/tags/ThinkPHP/index.html","a8ccb870b36b3c81a2dcfe035e6adbe0"],["E:/Github_Blogs/public/tags/Windows/index.html","9a71fb9174579fb352ffcc653e3b0165"],["E:/Github_Blogs/public/tags/index.html","c9fe6726bc30dcd7a380e68e1050434f"],["E:/Github_Blogs/public/tags/漏洞复现/index.html","0c6868a3aac52c48721e77d02838fa1b"]];
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







