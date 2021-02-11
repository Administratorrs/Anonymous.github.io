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

var precacheConfig = [["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/index.html","6b2a808563fc6c7c27f8164e18a5ecc0"],["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/iptables.png","0b3ce9083f875caebc5204e7e25a0252"],["E:/Github_Blogs/public/2021/02/09/Python/pip/pip/index.html","0a909aa73be6aa6a55e35bf8074303b0"],["E:/Github_Blogs/public/2021/02/09/Python/函数/if__name__='__main__'/if__name__='__main__'/index.html","6e2455ab7e936ee073569d8dedda40ef"],["E:/Github_Blogs/public/2021/02/09/Python/函数/open函数/open 函数/index.html","ceb9c6e8712ec5f19f74402013e2ffe3"],["E:/Github_Blogs/public/2021/02/09/Python/库/EasyGui库/easygui库/index.html","7411fdd7319dc2846a55f27e8ea8765b"],["E:/Github_Blogs/public/2021/02/09/Python/库/pickle库/pickle 库/index.html","7d5f2098760a6f6c31188ac72811a441"],["E:/Github_Blogs/public/2021/02/09/Python/库/random库/random/index.html","1bbd8215c5ad6d0dee4de81d4c2b300d"],["E:/Github_Blogs/public/2021/02/09/Python/库/time库/time 库/index.html","a7df1d8f694cfb0f0fea8488cc3b7e09"],["E:/Github_Blogs/public/2021/02/09/Python/库/urllib库/urllib.request/index.html","dc2ed53a37a17e4120339c5635e99bb2"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DHCP/DHCP/index.html","3c34c0d8feb091de040a0c547198ca4a"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DNS/DNS/index.html","eeb52004607b351fe81f5a634459a8c9"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/NFS/NFS/index.html","2aa260822c19954c817d4dce86c5a48b"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Network/Network/index.html","51f655c6049524fd5f0e3502186fe1b0"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/SELinux/SELinux/index.html","2de5f4827ce2f9a57ab522003994930a"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Samba/Samba/index.html","3a12b29b3d64cf366aacb0b0d92e3079"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/hosts.allow文件跟hosts.deny文件/hosts.allow、hosts.deny/index.html","fbe86182a9843d8ebda63e827a31ce46"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/ssh/ssh/index.html","c827c2575aa0699ec15f75ff90c11294"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/vsftp/vsftp/index.html","a3981407ef510523f8dd0f9dbbaf4745"],["E:/Github_Blogs/public/2021/02/10/Linux/JAVA环境/JAVA环境/index.html","1fb74a451c63d6afaa4935162ff59dea"],["E:/Github_Blogs/public/2021/02/10/Linux/ubuntu 更换软件源/配置源/index.html","a6daf1b325ad4b7da61eaecf4c97b428"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/1.png","39da931387dcf2007bc115d89beafbca"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/2.png","68df7fa74b8c1cae35473165ac74a44d"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/3.png","50aae8619e710b924b83e230b638f3b9"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/4.png","d58a3d69a77f45709f97e0a9a35f759a"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/5.png","589b15fc58ba183b00657cb55c6c6477"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/6.png","fc489c5eb4710b98b04c173e41b0deed"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/7.png","23ca66b2ca13419b600b7fe1ba878624"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/8.png","d7bdcf82db3a223c8cdc7fe159a32638"],["E:/Github_Blogs/public/2021/02/10/Windows/Windows：CVE-2020-0796 RCE/index.html","90805dcc587cf40408419345f7174797"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/1.png","27ca5b390740cc48ff3bdb6ec8332250"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/bp.png","b4b52c6571cc10a4c13395ca2749b1d1"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/index.html","caba1b500fef22298ea18ca657117878"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp-2.png","4cbfc0ea1a0f58564a4b4218c4975074"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp.png","adaf1bf69a59479850847b3533bc2b40"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc-2.png","8f2449fa1f66ba9b19a3190255ec0371"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc.png","ff62ab17b6a21fa0012d686a2589d422"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin-2.png","e9b8cb78ad6a6a5b930d3c36e250629e"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin.png","bedefda57f2335e901a7fc671739b75e"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/s.png","e1254c76e72bd303872fe7d318e8b364"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/1.jpg","e4c5ace2a2e492d95f39e8a9d644ddb5"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/2.jpg","8f4842470fce6144da48b442a4fb4f07"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/index.html","d4aa8ecca69cb5a155b57dff641bc9a3"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/1.jpg","3d0f71619dcbf31bd0f3abef8da41edf"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/2.jpg","401a68f0c32e6509a7c90773a8d9268f"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/3.jpg","fca5d4ee70659692da199ddb7d8dd5bd"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/bp.jpg","69a6b1cc866a430ededd216e653b229e"],["E:/Github_Blogs/public/2021/02/11/Apache/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/index.html","fba910a76acb2d13d434e516579c5c3f"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/1.jpg","0ae5a230533e2fe653516f54edc8dbe1"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/2.png","da6e9db48d623752abe80fc2f531823d"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/3.png","813d3ef0452f3922bce4e8f6d80beb22"],["E:/Github_Blogs/public/2021/02/11/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/index.html","1ef63e11c6326bf483a808459180ab0f"],["E:/Github_Blogs/public/2021/02/11/代理/Shadowsocks/Shadowsocks/index.html","2e4c167226e1d01480e0e5bee1f064dc"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-1.png","4b68119ba11a951f38142076d2af7d14"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-2.png","cd210cb92129ceb8deb82d27e268475a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-1.png","82ab28e4922238c1c26063b953ec4612"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-2.png","2bc7012089c44b00933b4fde0c216e6a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-3.png","bf9a16ad9a1a2a4ab75ec29ea5bad2da"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/hosts.png","9ef8639d7acc08dfe7543e692a8d9f9b"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-1.png","af9d612e955fcff080b22d338f8bd306"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-2.png","1f6da9954d5cc0112ca24c053f86e3e0"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-1.png","94a8189343a12fe54d5c560e7caef890"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-2.png","cabd11044118e16df74ee63fc1ba3af1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http.png","02abefe7cbf0ed213d537b8e0330deab"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_admin.png","f9fdf4f19f39269a821374fb012b8d95"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-1.png","b2da513f4848c5c13cec3abb7fa16968"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-2.png","3fde81734a26711fed8a8b158616fef8"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/https.png","f081e663f137b3e50f31b19efb8e8d38"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/index.html","46b2eb2c74b636910e590d808c595d83"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-1.png","002fd4220711badee1c614f4041fb087"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-2.png","642edbedeccb2a73528b4efd9882b58d"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-1.png","a1e375c84b22071dffe8ec45b67eb872"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-2.png","bde90631e2db86d5aca82423638c7747"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-3.png","159cffe9afd330837afc90bb258b6aee"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/socks5.png","c094b79b304ae8e48012871442d850d7"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-1.png","d3be61ab0994859b0f29381e4f492223"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-2.png","aa9e53af5c123cd3078ceacf78a5c9b1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-3.png","c1a354b1d7045e86f60094e852250008"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-4.png","4fdcf4413f5ec8f87873a5a4bb55182a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-5.png","cef5f9ff710e609c03e2653b1c5df1a6"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-1.png","11e0b309ef3426bf95176853bbe8531a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-2.png","eff66d99218df99dc5106ef35709696c"],["E:/Github_Blogs/public/2021/02/11/代理/ubuntu 配置 socks5/socks5/index.html","c5a132fc9c515624e149183f3d942a8a"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/index.html","77a14e8efc37a78a8ea42cc1e4a03dd8"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-1.png","79f4929d247fd08451ee53bb736cf797"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-2.png","2a4534b665b31e70a3a56cb547124796"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/shodan_api.png","cc8064b045a86882845059837ffcc257"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/start.png","e3da3466796a1a491b02118ac1a3d985"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-1.png","f1b9ca82e40c62096233270a17521be9"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-2.png","512fafeb9d0a2ed1049b16fb39e0d450"],["E:/Github_Blogs/public/404.html","5f2af90fb7880a7afbb7546f48b89dd7"],["E:/Github_Blogs/public/archives/2021/02/index.html","f64a7fed8485b37d87831ea8452119b9"],["E:/Github_Blogs/public/archives/2021/02/page/2/index.html","4d580cdd410fa450ee44a46fe307efdc"],["E:/Github_Blogs/public/archives/2021/02/page/3/index.html","a819fd84e8586e92b7cdff6c787918f0"],["E:/Github_Blogs/public/archives/2021/index.html","96ec4826714ebe9ba667405b24d2413c"],["E:/Github_Blogs/public/archives/2021/page/2/index.html","d9e05a4fe5d7c637a3525ef514ad56e3"],["E:/Github_Blogs/public/archives/2021/page/3/index.html","2968f34af069d3b65ca88b2505e1e1d1"],["E:/Github_Blogs/public/archives/index.html","f40a7606c4061521a330aeae4f8445f1"],["E:/Github_Blogs/public/archives/page/2/index.html","7c1d6339d74a9eab23c823dc63f0a559"],["E:/Github_Blogs/public/archives/page/3/index.html","04142c443d8f7bb7b1f8c64274df3212"],["E:/Github_Blogs/public/categories/Apache-Shiro-漏洞复现/index.html","3a9f592731efe26d2f00c5e06e692b6c"],["E:/Github_Blogs/public/categories/Apache-Tomcat-漏洞复现/index.html","a686f1bbdbfa0e6a3f8a64537590c518"],["E:/Github_Blogs/public/categories/Linux/index.html","e88131c54167fc6319a51babde4f5ecd"],["E:/Github_Blogs/public/categories/Python/index.html","ef2a267a1588d54445fdb28a599d103d"],["E:/Github_Blogs/public/categories/ThinkPHP-漏洞复现/index.html","f4b9fc27b7d9c384d8cf9d503087e380"],["E:/Github_Blogs/public/categories/Windows-漏洞复现/index.html","04e630fc0a46df9002030bd18f84dafa"],["E:/Github_Blogs/public/categories/index.html","2918eef5a3dddbd8a34e8d5f5de9733e"],["E:/Github_Blogs/public/categories/代理/index.html","185c05d272c9548ea25f356fac76b98c"],["E:/Github_Blogs/public/categories/信息收集/index.html","49b0c282a72a28e6638c7c3cd1df099e"],["E:/Github_Blogs/public/categories/网络应用竞赛/index.html","01fd296d80bf4c01f0f6303c09a27c18"],["E:/Github_Blogs/public/css/index.css","ca12b7a6b1f76993e99c66651f701686"],["E:/Github_Blogs/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Github_Blogs/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Github_Blogs/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/Github_Blogs/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Github_Blogs/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Github_Blogs/public/img/index.jpg","ec7805af22a17750033a1b2485413dbb"],["E:/Github_Blogs/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Github_Blogs/public/index.html","0ad7f9585384deaecb5d8efdb1bba630"],["E:/Github_Blogs/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Github_Blogs/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Github_Blogs/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Github_Blogs/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Github_Blogs/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Github_Blogs/public/link/index.html","a899a6d821fbc2cfc69332d64dde191a"],["E:/Github_Blogs/public/page/2/index.html","1ff3ddc583e84aaac214e54a051e197d"],["E:/Github_Blogs/public/page/3/index.html","3ba3c284dd6a5d8f42269338fa06e167"],["E:/Github_Blogs/public/tags/Apache/index.html","a9898b1297edf5e3ee7ced03802b02d6"],["E:/Github_Blogs/public/tags/Linux/index.html","60ef9f3baf6b0815b70f0d5d703eda80"],["E:/Github_Blogs/public/tags/Linux/page/2/index.html","969d1801b3b6f3758cdcd268d61e4b39"],["E:/Github_Blogs/public/tags/Python/index.html","13f42acb0283affa795e20619b80f35e"],["E:/Github_Blogs/public/tags/ThinkPHP/index.html","32adab14b63b0cbfcaf79ffb7b76ba1d"],["E:/Github_Blogs/public/tags/Windows/index.html","ea4ef6d8fc4ccf069346247adf775a08"],["E:/Github_Blogs/public/tags/index.html","b2db30ed9f6ec025f6e094f77f7430ff"],["E:/Github_Blogs/public/tags/proxy/index.html","f087d9bd7bfc0803a9660f62c87b10ef"],["E:/Github_Blogs/public/tags/信息收集/index.html","8c467c88f73dfea0fe637f93943a711c"],["E:/Github_Blogs/public/tags/内网/index.html","968052de9a8707a834de34b8ccceee5f"],["E:/Github_Blogs/public/tags/漏洞复现/index.html","17c48fa81e80a5bf5a6d1d1c1c58beea"]];
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







