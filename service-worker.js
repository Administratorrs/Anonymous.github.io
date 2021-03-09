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

var precacheConfig = [["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/index.html","f9d61fcf6553ec5327b0d99d7daf6706"],["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/iptables.png","0b3ce9083f875caebc5204e7e25a0252"],["E:/Github_Blogs/public/2021/02/09/Python/pip/pip/index.html","5dd38f070db020b5e2cabf109579bb4e"],["E:/Github_Blogs/public/2021/02/09/Python/函数/if__name__='__main__'/if__name__='__main__'/index.html","461cf2be0a228bae767755ac54fed13f"],["E:/Github_Blogs/public/2021/02/09/Python/函数/open函数/open 函数/index.html","4a2189e7b0b736fedf2f0160aa2f4c03"],["E:/Github_Blogs/public/2021/02/09/Python/库/EasyGui库/easygui库/index.html","d51243856cda4c37449a3d3e91e888ec"],["E:/Github_Blogs/public/2021/02/09/Python/库/pickle库/pickle 库/index.html","89c25af5916a319c5302dc9355a3d195"],["E:/Github_Blogs/public/2021/02/09/Python/库/random库/random/index.html","539c429fff953f06e74dfac24520688d"],["E:/Github_Blogs/public/2021/02/09/Python/库/time库/time 库/index.html","4e9736d9e8b316fcf386f9a4ec7fcc41"],["E:/Github_Blogs/public/2021/02/09/Python/库/urllib库/urllib.request/index.html","f31661c03f1fff6499ab4c5d71ea706e"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DHCP/DHCP/index.html","ac288141d7c8873e88bcff484b2c988e"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DNS/DNS/index.html","7d3bfc98a9b3aa5707af36bf25f54ff0"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/NFS/NFS/index.html","893be5a5b16ca1815733b635fbe4e7a1"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Network/Network/index.html","5d9b3e9a6cf80b9abf1c0c015b6bb1cd"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/SELinux/SELinux/index.html","2637fb21693b380540b19c382f47acf2"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Samba/Samba/index.html","3c52f4ce99ad67998f9bcc3c8a9173c2"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/hosts.allow文件跟hosts.deny文件/hosts.allow、hosts.deny/index.html","f9a01519229bc7ad45a0e52924ea5baf"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/ssh/ssh/index.html","bbfd3ad1ea8b522309d6893e5fde8277"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/vsftp/vsftp/index.html","6091596fa4e93c00db41470af20a28d9"],["E:/Github_Blogs/public/2021/02/10/Linux/JAVA环境/JAVA环境/index.html","4d14199f0caaac8385b9b8d8926c52b2"],["E:/Github_Blogs/public/2021/02/10/Linux/ubuntu 更换软件源/配置源/index.html","b0c2ce1316b060df32cdc6408eb0c1ba"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/1.png","39da931387dcf2007bc115d89beafbca"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/2.png","68df7fa74b8c1cae35473165ac74a44d"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/3.png","50aae8619e710b924b83e230b638f3b9"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/4.png","d58a3d69a77f45709f97e0a9a35f759a"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/5.png","589b15fc58ba183b00657cb55c6c6477"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/6.png","fc489c5eb4710b98b04c173e41b0deed"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/7.png","23ca66b2ca13419b600b7fe1ba878624"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/8.png","d7bdcf82db3a223c8cdc7fe159a32638"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/index.html","14ca48d327dc92b1871a5f2c9126dcda"],["E:/Github_Blogs/public/2021/02/11/代理/Shadowsocks/Shadowsocks/index.html","1537cc60a880d77b7906faf6883ec867"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-1.png","4b68119ba11a951f38142076d2af7d14"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-2.png","cd210cb92129ceb8deb82d27e268475a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-1.png","82ab28e4922238c1c26063b953ec4612"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-2.png","2bc7012089c44b00933b4fde0c216e6a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-3.png","bf9a16ad9a1a2a4ab75ec29ea5bad2da"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/hosts.png","9ef8639d7acc08dfe7543e692a8d9f9b"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-1.png","af9d612e955fcff080b22d338f8bd306"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-2.png","1f6da9954d5cc0112ca24c053f86e3e0"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-1.png","94a8189343a12fe54d5c560e7caef890"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-2.png","cabd11044118e16df74ee63fc1ba3af1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http.png","02abefe7cbf0ed213d537b8e0330deab"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_admin.png","f9fdf4f19f39269a821374fb012b8d95"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-1.png","b2da513f4848c5c13cec3abb7fa16968"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-2.png","3fde81734a26711fed8a8b158616fef8"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/https.png","f081e663f137b3e50f31b19efb8e8d38"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/index.html","139187dc53fa10616ba5bf7ee1b9da38"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-1.png","002fd4220711badee1c614f4041fb087"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-2.png","642edbedeccb2a73528b4efd9882b58d"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-1.png","a1e375c84b22071dffe8ec45b67eb872"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-2.png","bde90631e2db86d5aca82423638c7747"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-3.png","159cffe9afd330837afc90bb258b6aee"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/socks5.png","c094b79b304ae8e48012871442d850d7"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-1.png","d3be61ab0994859b0f29381e4f492223"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-2.png","aa9e53af5c123cd3078ceacf78a5c9b1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-3.png","c1a354b1d7045e86f60094e852250008"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-4.png","4fdcf4413f5ec8f87873a5a4bb55182a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-5.png","cef5f9ff710e609c03e2653b1c5df1a6"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-1.png","11e0b309ef3426bf95176853bbe8531a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-2.png","eff66d99218df99dc5106ef35709696c"],["E:/Github_Blogs/public/2021/02/11/代理/ubuntu 配置 socks5/socks5/index.html","31c1aab44a9cb01cdee6dae1d72267bf"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/index.html","f297db93452fda40a59828ccd59c1870"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-1.png","79f4929d247fd08451ee53bb736cf797"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-2.png","2a4534b665b31e70a3a56cb547124796"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/shodan_api.png","cc8064b045a86882845059837ffcc257"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/start.png","e3da3466796a1a491b02118ac1a3d985"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-1.png","f1b9ca82e40c62096233270a17521be9"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-2.png","512fafeb9d0a2ed1049b16fb39e0d450"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/1.png","27ca5b390740cc48ff3bdb6ec8332250"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/bp.png","b4b52c6571cc10a4c13395ca2749b1d1"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/index.html","f8ccda97f0ff7a345c64d5fc4c81da26"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp-2.png","4cbfc0ea1a0f58564a4b4218c4975074"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp.png","adaf1bf69a59479850847b3533bc2b40"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc-2.png","8f2449fa1f66ba9b19a3190255ec0371"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc.png","ff62ab17b6a21fa0012d686a2589d422"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin-2.png","e9b8cb78ad6a6a5b930d3c36e250629e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin.png","bedefda57f2335e901a7fc671739b75e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/s.png","e1254c76e72bd303872fe7d318e8b364"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/1.jpg","e4c5ace2a2e492d95f39e8a9d644ddb5"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/2.jpg","8f4842470fce6144da48b442a4fb4f07"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/index.html","7b0e9c5fd7504b9357a4204cacf779c0"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/1.jpg","3d0f71619dcbf31bd0f3abef8da41edf"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/2.jpg","401a68f0c32e6509a7c90773a8d9268f"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/3.jpg","fca5d4ee70659692da199ddb7d8dd5bd"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/bp.jpg","69a6b1cc866a430ededd216e653b229e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/index.html","8371d61eac32f2b27fcd81ad89302a6e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/1.jpg","0ae5a230533e2fe653516f54edc8dbe1"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/2.png","da6e9db48d623752abe80fc2f531823d"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/3.png","813d3ef0452f3922bce4e8f6d80beb22"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/index.html","537f52c296ae4cc98cde704556cf9499"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/bp.png","fea8c48405e3f7d1fc835f74c98e2546"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/index.html","735ffd33b03a8cf28de71e8507dcf10e"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/nc-1.png","2b063e57f8fe120c14bf87eaf97e4b64"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/nc-2.png","2600525b17cc40d1eb7e6ab28b52a8ce"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/web-1.png","2a7057c72e6f7a5cf873f4d9d144915a"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/web-2.png","323634fd7a5d07d5690cec6c33065315"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/connect.png","78b23aa7b97b55acb05445736330ce1c"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/getname.png","71063435b4988e6f3b64a6847b3a023f"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/index.html","d47dafbdfdf7272bd7bbb1c979ea2739"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/info.png","6c5eb91200026d86098e86702f480e26"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/keys.png","c8a029090a1a926d7a89109811a54224"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/webshell-1.png","2cbf91fbb9c62df2cda0961b7ba31edf"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/webshell-2.png","41f97cbda53c8df71c33cf70bd6a3001"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/exp.png","4ab2518bd7078d6bc38d4e11300f38bd"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/index.html","7565927669df96e23d2c0cb477a49c3c"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/sudo_version.png","965edd10a83564e93eea7171057d7239"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/system_version.png","74eb1506d32a0f13db9ae4dbd2c8ae83"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/target.png","b6963c7ace5cf8be83f26dc94409c23e"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/test_user.png","1ca5621d8dad5091d911120bb484f4af"],["E:/Github_Blogs/public/404.html","bf16d4f3b7dcd60d317e2561300c1250"],["E:/Github_Blogs/public/archives/2021/02/index.html","a431910f26a797ea1febe9de14b59419"],["E:/Github_Blogs/public/archives/2021/02/page/2/index.html","9a321fb2647a6ecd67fa9aec279c642d"],["E:/Github_Blogs/public/archives/2021/02/page/3/index.html","167ea1e91a1f0d903f1e163bd974aab1"],["E:/Github_Blogs/public/archives/2021/02/page/4/index.html","98acfba980300aa1f00062c8dad60c9b"],["E:/Github_Blogs/public/archives/2021/index.html","3f1848ed7e3c0fc966c0c6fea8fb447a"],["E:/Github_Blogs/public/archives/2021/page/2/index.html","3fe52cc06409cccdc59b7c3deb52b436"],["E:/Github_Blogs/public/archives/2021/page/3/index.html","6f9d43492c7109e2d1290b03bea34fc7"],["E:/Github_Blogs/public/archives/2021/page/4/index.html","e5d2a7f78be5e1faee86d42420ad79a4"],["E:/Github_Blogs/public/archives/index.html","13d645dcabdd39a288cc44940bfe4efb"],["E:/Github_Blogs/public/archives/page/2/index.html","2548b86c3713f178df534134434644c6"],["E:/Github_Blogs/public/archives/page/3/index.html","1a78d678e09c0269c7f16de358f30aac"],["E:/Github_Blogs/public/archives/page/4/index.html","1fe8b7f46101079222460ed4b1824668"],["E:/Github_Blogs/public/categories/Apache-Shiro-漏洞复现/index.html","0c41cd9ff0179e52f7cf912cf6881a0c"],["E:/Github_Blogs/public/categories/Apache-Tomcat-漏洞复现/index.html","d6561c9bd8d1f86e40f90689616309ff"],["E:/Github_Blogs/public/categories/Linux/index.html","cd44eeb8f1728f0536000fb0c8198e8c"],["E:/Github_Blogs/public/categories/Python/index.html","c9c519dfb68fc3168c5194d80641a936"],["E:/Github_Blogs/public/categories/ThinkPHP-漏洞复现/index.html","9a9e914afd82b278b48e9f1d6e8d6452"],["E:/Github_Blogs/public/categories/Windows-漏洞复现/index.html","043b5892e685aac75e810a7ae47d4c40"],["E:/Github_Blogs/public/categories/index.html","e17718f2f3103f8c98fa78027aec8a87"],["E:/Github_Blogs/public/categories/代理/index.html","6266c5b6b0190d432fd9524b767d16ec"],["E:/Github_Blogs/public/categories/信息收集/index.html","69a64b9bcb8d6a4f7be2904daaba7158"],["E:/Github_Blogs/public/categories/漏洞复现/index.html","fcd3a84e7cd360f14e3f03f9ccd09cf0"],["E:/Github_Blogs/public/categories/网络应用竞赛/index.html","617621c3c9c339a222529c0bcdcfa864"],["E:/Github_Blogs/public/css/index.css","ca12b7a6b1f76993e99c66651f701686"],["E:/Github_Blogs/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Github_Blogs/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Github_Blogs/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/Github_Blogs/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Github_Blogs/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Github_Blogs/public/img/index.jpg","ec7805af22a17750033a1b2485413dbb"],["E:/Github_Blogs/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Github_Blogs/public/index.html","438bf2c90eedfafa64b2044ab8389445"],["E:/Github_Blogs/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Github_Blogs/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Github_Blogs/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Github_Blogs/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Github_Blogs/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Github_Blogs/public/link/index.html","af889570bd91f341b509851b03c52b39"],["E:/Github_Blogs/public/page/2/index.html","dc298f646e5553ef95cf5fb9b59ec764"],["E:/Github_Blogs/public/page/3/index.html","65b5ab73c13f11582984e19bea114684"],["E:/Github_Blogs/public/page/4/index.html","e2f2553b694d890fbba2f1c74f716a08"],["E:/Github_Blogs/public/tags/Apache-Druid-漏洞复现/index.html","636a0a7cc43d7641c3604bb94afb473c"],["E:/Github_Blogs/public/tags/Apache-Shiro-漏洞复现/index.html","4e09730efaf191b63322d0948f800edd"],["E:/Github_Blogs/public/tags/Apache-Tomcat-漏洞复现/index.html","52bbff05fc82490ee714450fa85d2e35"],["E:/Github_Blogs/public/tags/Linux-漏洞复现/index.html","f6684ed79ec876f80fad9582a1f7390f"],["E:/Github_Blogs/public/tags/Linux/index.html","b0d9e46e7b62203429a11f24d19e8cb3"],["E:/Github_Blogs/public/tags/Linux/page/2/index.html","5824e30fea1eae42c9c5e3f38464e96d"],["E:/Github_Blogs/public/tags/Python/index.html","94a850dac0127df3e04f30431d453d40"],["E:/Github_Blogs/public/tags/Redis-漏洞复现/index.html","5e2565589bdffd957b34da7cd37ea66a"],["E:/Github_Blogs/public/tags/ThinkPHP-漏洞复现/index.html","95024064c0fb1c3bc966cd79471fd3c4"],["E:/Github_Blogs/public/tags/Windows/index.html","65c2991663cb2d97fe88e9da5fc0d3bc"],["E:/Github_Blogs/public/tags/index.html","f74f7d759bc66d1d99d8d95a72259c97"],["E:/Github_Blogs/public/tags/proxy/index.html","cfc5cf424b8b66ff2e28e9a591c78e81"],["E:/Github_Blogs/public/tags/信息收集/index.html","68881edff307e7f91b65337fc8294259"],["E:/Github_Blogs/public/tags/内网/index.html","6396c7f2e3b7a04e7ec432f3eb9afacb"],["E:/Github_Blogs/public/tags/漏洞复现/index.html","443cc6ca26627e56883c80c6f406bd77"]];
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







