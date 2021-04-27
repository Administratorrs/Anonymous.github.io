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

var precacheConfig = [["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/index.html","9994565ee4d7798ae3668a0558ec734e"],["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/iptables.png","0b3ce9083f875caebc5204e7e25a0252"],["E:/Github_Blogs/public/2021/02/09/Python/pip/pip/index.html","51185724f408d69b9bc325aa0947076d"],["E:/Github_Blogs/public/2021/02/09/Python/函数/if__name__='__main__'/if__name__='__main__'/index.html","289f9102a3a0e43af6f8aac36dc978ff"],["E:/Github_Blogs/public/2021/02/09/Python/函数/open函数/open 函数/index.html","8ea22d41fbd81b078280291baed7d12b"],["E:/Github_Blogs/public/2021/02/09/Python/库/EasyGui库/easygui库/index.html","4110fbe068af9bd7b97bff4315b7392c"],["E:/Github_Blogs/public/2021/02/09/Python/库/pickle库/pickle 库/index.html","81ce3ecd5f7753b77525acd2c8d9e34a"],["E:/Github_Blogs/public/2021/02/09/Python/库/random库/random/index.html","81ee72667e46461d5e7b5aef09e12845"],["E:/Github_Blogs/public/2021/02/09/Python/库/time库/time 库/index.html","421102865c6106e07ed4fd593731d23b"],["E:/Github_Blogs/public/2021/02/09/Python/库/urllib库/urllib.request/index.html","2e1e0efb2383b6f1771c6b36c47f2ec9"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DHCP/DHCP/index.html","63312a40316298e157acb12c36be6fcf"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DNS/DNS/index.html","653371fb624da671738a244bd294a244"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/NFS/NFS/index.html","4e632a58fdacb81841483f139fa487ca"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Network/Network/index.html","80efc0f1d7891a0f19ab12e88029fba0"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/SELinux/SELinux/index.html","566210bcd74cab3829fc12ba1b166530"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Samba/Samba/index.html","2aa2d3d1f992dd5dbcc4731c7e4756ef"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/hosts.allow文件跟hosts.deny文件/hosts.allow、hosts.deny/index.html","b57d033b4d05d9cfc47cc4fa5f1d582b"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/ssh/ssh/index.html","c8e992e5bee3a1f218f09a4b1e1a3eb7"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/vsftp/vsftp/index.html","687ed926ae20a19fdb0bfaa234217704"],["E:/Github_Blogs/public/2021/02/10/Linux/JAVA环境/JAVA环境/index.html","13945b66ad8324fc4c77ca4ecfc6e871"],["E:/Github_Blogs/public/2021/02/10/Linux/ubuntu 更换软件源/配置源/index.html","316b1954b6dd830a48b40e7cafc1cb0b"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/1.png","39da931387dcf2007bc115d89beafbca"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/2.png","68df7fa74b8c1cae35473165ac74a44d"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/3.png","50aae8619e710b924b83e230b638f3b9"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/4.png","d58a3d69a77f45709f97e0a9a35f759a"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/5.png","589b15fc58ba183b00657cb55c6c6477"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/6.png","fc489c5eb4710b98b04c173e41b0deed"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/7.png","23ca66b2ca13419b600b7fe1ba878624"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/8.png","d7bdcf82db3a223c8cdc7fe159a32638"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/index.html","da639eccc3bf3805495bcc7c965628ec"],["E:/Github_Blogs/public/2021/02/11/代理/Shadowsocks/Shadowsocks/index.html","b79dd3a42548bcadd98c94f7866f6c3b"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-1.png","4b68119ba11a951f38142076d2af7d14"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-2.png","cd210cb92129ceb8deb82d27e268475a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-1.png","82ab28e4922238c1c26063b953ec4612"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-2.png","2bc7012089c44b00933b4fde0c216e6a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-3.png","bf9a16ad9a1a2a4ab75ec29ea5bad2da"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/hosts.png","9ef8639d7acc08dfe7543e692a8d9f9b"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-1.png","af9d612e955fcff080b22d338f8bd306"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-2.png","1f6da9954d5cc0112ca24c053f86e3e0"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-1.png","94a8189343a12fe54d5c560e7caef890"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-2.png","cabd11044118e16df74ee63fc1ba3af1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http.png","02abefe7cbf0ed213d537b8e0330deab"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_admin.png","f9fdf4f19f39269a821374fb012b8d95"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-1.png","b2da513f4848c5c13cec3abb7fa16968"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-2.png","3fde81734a26711fed8a8b158616fef8"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/https.png","f081e663f137b3e50f31b19efb8e8d38"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/index.html","0f5cd7f957ed96a8c831767b696b27d6"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-1.png","002fd4220711badee1c614f4041fb087"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-2.png","642edbedeccb2a73528b4efd9882b58d"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-1.png","a1e375c84b22071dffe8ec45b67eb872"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-2.png","bde90631e2db86d5aca82423638c7747"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-3.png","159cffe9afd330837afc90bb258b6aee"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/socks5.png","c094b79b304ae8e48012871442d850d7"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-1.png","d3be61ab0994859b0f29381e4f492223"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-2.png","aa9e53af5c123cd3078ceacf78a5c9b1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-3.png","c1a354b1d7045e86f60094e852250008"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-4.png","4fdcf4413f5ec8f87873a5a4bb55182a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-5.png","cef5f9ff710e609c03e2653b1c5df1a6"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-1.png","11e0b309ef3426bf95176853bbe8531a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-2.png","eff66d99218df99dc5106ef35709696c"],["E:/Github_Blogs/public/2021/02/11/代理/ubuntu 配置 socks5/socks5/index.html","7a1b7c243531b86fa0532c0106f4b3d4"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/index.html","1a4d51bacb25dbdbe4b950ba5ca9df1c"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-1.png","79f4929d247fd08451ee53bb736cf797"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-2.png","2a4534b665b31e70a3a56cb547124796"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/shodan_api.png","cc8064b045a86882845059837ffcc257"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/start.png","e3da3466796a1a491b02118ac1a3d985"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-1.png","f1b9ca82e40c62096233270a17521be9"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-2.png","512fafeb9d0a2ed1049b16fb39e0d450"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/1.png","27ca5b390740cc48ff3bdb6ec8332250"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/bp.png","b4b52c6571cc10a4c13395ca2749b1d1"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/index.html","5651bbb9755a2f3f8bd0c64e6df07e2b"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp-2.png","4cbfc0ea1a0f58564a4b4218c4975074"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp.png","adaf1bf69a59479850847b3533bc2b40"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc-2.png","8f2449fa1f66ba9b19a3190255ec0371"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc.png","ff62ab17b6a21fa0012d686a2589d422"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin-2.png","e9b8cb78ad6a6a5b930d3c36e250629e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin.png","bedefda57f2335e901a7fc671739b75e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/s.png","e1254c76e72bd303872fe7d318e8b364"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/1.jpg","e4c5ace2a2e492d95f39e8a9d644ddb5"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/2.jpg","8f4842470fce6144da48b442a4fb4f07"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/index.html","b383354555e82a7539c0bdc9a05c060a"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/1.jpg","3d0f71619dcbf31bd0f3abef8da41edf"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/2.jpg","401a68f0c32e6509a7c90773a8d9268f"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/3.jpg","fca5d4ee70659692da199ddb7d8dd5bd"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/bp.jpg","69a6b1cc866a430ededd216e653b229e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/index.html","cd9f733429f89121e36a27ba456b0ebb"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/1.jpg","0ae5a230533e2fe653516f54edc8dbe1"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/2.png","da6e9db48d623752abe80fc2f531823d"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/3.png","813d3ef0452f3922bce4e8f6d80beb22"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/index.html","a5e053b61c2bd714e4a8b5ca0448d0d8"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/bp.png","fea8c48405e3f7d1fc835f74c98e2546"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/index.html","13a8efce6fa45f0a64526278231306de"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/nc-1.png","2b063e57f8fe120c14bf87eaf97e4b64"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/nc-2.png","2600525b17cc40d1eb7e6ab28b52a8ce"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/web-1.png","2a7057c72e6f7a5cf873f4d9d144915a"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/web-2.png","323634fd7a5d07d5690cec6c33065315"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/connect.png","78b23aa7b97b55acb05445736330ce1c"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/getname.png","71063435b4988e6f3b64a6847b3a023f"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/index.html","1463d80a1610c2344bd894c67b7ec78e"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/info.png","6c5eb91200026d86098e86702f480e26"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/keys.png","c8a029090a1a926d7a89109811a54224"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/webshell-1.png","2cbf91fbb9c62df2cda0961b7ba31edf"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/webshell-2.png","41f97cbda53c8df71c33cf70bd6a3001"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/exp.png","4ab2518bd7078d6bc38d4e11300f38bd"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/index.html","64a89e20c55c2c1ed02945e89abec2f4"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/sudo_version.png","965edd10a83564e93eea7171057d7239"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/system_version.png","74eb1506d32a0f13db9ae4dbd2c8ae83"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/target.png","b6963c7ace5cf8be83f26dc94409c23e"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/test_user.png","1ca5621d8dad5091d911120bb484f4af"],["E:/Github_Blogs/public/2021/04/23/漏洞复现/Linux 漏洞复现/内核提权漏洞复现/内核提权漏洞/1.png","92c44538c2de39444f280014a2c26fa1"],["E:/Github_Blogs/public/2021/04/23/漏洞复现/Linux 漏洞复现/内核提权漏洞复现/内核提权漏洞/2.png","32a3e4ca5348defe0e0dc4bec1a28146"],["E:/Github_Blogs/public/2021/04/23/漏洞复现/Linux 漏洞复现/内核提权漏洞复现/内核提权漏洞/3.png","d333b3b4a798d4387a9114b425c5e045"],["E:/Github_Blogs/public/2021/04/23/漏洞复现/Linux 漏洞复现/内核提权漏洞复现/内核提权漏洞/4.png","79aae719759d04c2f3a0874278724f4d"],["E:/Github_Blogs/public/2021/04/23/漏洞复现/Linux 漏洞复现/内核提权漏洞复现/内核提权漏洞/index.html","dae26a9bdf8255d2dad0f5bbc241526a"],["E:/Github_Blogs/public/404.html","30f8a00cdff07afa190b2c087452730f"],["E:/Github_Blogs/public/archives/2021/02/index.html","16d531aeb441c1e35025c1fc041e6d66"],["E:/Github_Blogs/public/archives/2021/02/page/2/index.html","8e85fdfb96edd078f1468e4f768f4483"],["E:/Github_Blogs/public/archives/2021/02/page/3/index.html","c03a8423ce5edf43112e402897fe60ef"],["E:/Github_Blogs/public/archives/2021/02/page/4/index.html","d59f7cea92fcb8da1ab8950496947240"],["E:/Github_Blogs/public/archives/2021/04/index.html","5bdf0aa14ef46d439bfc31eeece92d6f"],["E:/Github_Blogs/public/archives/2021/index.html","2b691a5b5b0d6f1be078a237514a3d44"],["E:/Github_Blogs/public/archives/2021/page/2/index.html","ca9d9872cc4a3d03518a5331b8426e1a"],["E:/Github_Blogs/public/archives/2021/page/3/index.html","f9eeca391b641b5e74ef095fc185c99e"],["E:/Github_Blogs/public/archives/2021/page/4/index.html","1f25ee4fb75adec7cb523e05c3c63d7e"],["E:/Github_Blogs/public/archives/index.html","7229261895339f65fe7015df1797705b"],["E:/Github_Blogs/public/archives/page/2/index.html","6f8ec932820e704bffa2bc0392b15d1f"],["E:/Github_Blogs/public/archives/page/3/index.html","4e53e0cf8a9f8a9af9f955ecb62be2ba"],["E:/Github_Blogs/public/archives/page/4/index.html","52e636d41ae88df0a1224daed1aec96e"],["E:/Github_Blogs/public/categories/Apache-Shiro-漏洞复现/index.html","94ce12403f6271e307e22ccde6d83554"],["E:/Github_Blogs/public/categories/Apache-Tomcat-漏洞复现/index.html","63e740555520b5c69fdbc9df1421ad60"],["E:/Github_Blogs/public/categories/Linux/index.html","bb3ac029b90053e1f659002024b40bf8"],["E:/Github_Blogs/public/categories/Python/index.html","7bcd63e9c671bae6683957565621758e"],["E:/Github_Blogs/public/categories/ThinkPHP-漏洞复现/index.html","c22a92b86c4576c4a4624b223c4e510a"],["E:/Github_Blogs/public/categories/Windows-漏洞复现/index.html","9bdccb46c3d6341569f8513df621c784"],["E:/Github_Blogs/public/categories/index.html","b205904ebe2b724f2650d78ae73313bf"],["E:/Github_Blogs/public/categories/代理/index.html","4d36b3cb85c7fc05bbc88dff5e5601b8"],["E:/Github_Blogs/public/categories/信息收集/index.html","9ee2aa69009b8eaddf143599ec285c78"],["E:/Github_Blogs/public/categories/漏洞复现/index.html","3344c1941d24e392b05618c0f7509238"],["E:/Github_Blogs/public/categories/网络应用竞赛/index.html","be3976fec0d4ab0be363a800edf73d0c"],["E:/Github_Blogs/public/css/index.css","ca12b7a6b1f76993e99c66651f701686"],["E:/Github_Blogs/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Github_Blogs/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Github_Blogs/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/Github_Blogs/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Github_Blogs/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Github_Blogs/public/img/index.jpg","ec7805af22a17750033a1b2485413dbb"],["E:/Github_Blogs/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Github_Blogs/public/index.html","9fa58f1b70c61a7350ea2309e80f2a38"],["E:/Github_Blogs/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Github_Blogs/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Github_Blogs/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Github_Blogs/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Github_Blogs/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Github_Blogs/public/link/index.html","3c0f2cc0b39db9f8beb98e6e68b0c921"],["E:/Github_Blogs/public/page/2/index.html","23f9158d69d0bebad1de3628bb455896"],["E:/Github_Blogs/public/page/3/index.html","a159b3cd875759b041ba4ba2a2fc8ba5"],["E:/Github_Blogs/public/page/4/index.html","06650caf5db2a4cac969274e152380f8"],["E:/Github_Blogs/public/tags/Apache-Druid-漏洞复现/index.html","b6e619b004e8e5701b861da0d601f88e"],["E:/Github_Blogs/public/tags/Apache-Shiro-漏洞复现/index.html","12e9d2525b31d71f91ff49b4ca67ccba"],["E:/Github_Blogs/public/tags/Apache-Tomcat-漏洞复现/index.html","0ec3ecd2bf8040ea5add7000edecaa24"],["E:/Github_Blogs/public/tags/Linux-漏洞复现/index.html","beb25d516935b8cae20b8e6e0678f0a3"],["E:/Github_Blogs/public/tags/Linux/index.html","bf51cb8d52b379b25ed95effc258afdb"],["E:/Github_Blogs/public/tags/Linux/page/2/index.html","16d7df3d7ac505993f2b6b149ed39b48"],["E:/Github_Blogs/public/tags/Python/index.html","1709da40e4d9568bab8394c155a4e925"],["E:/Github_Blogs/public/tags/Redis-漏洞复现/index.html","32cd472ef2fa67441d15c1c8492a5235"],["E:/Github_Blogs/public/tags/ThinkPHP-漏洞复现/index.html","8890041bb3b4cda0a67fbd327bee7571"],["E:/Github_Blogs/public/tags/Windows/index.html","1d0b40425a1a3513a2051feb7b1e54e4"],["E:/Github_Blogs/public/tags/index.html","52385d9aae236b8e356296a732913d74"],["E:/Github_Blogs/public/tags/proxy/index.html","4c0ad8382c55db0c191dedf6d8b3cad5"],["E:/Github_Blogs/public/tags/信息收集/index.html","c46df0a6e1eb89837706688da477987b"],["E:/Github_Blogs/public/tags/内网/index.html","5a4e9418132a01b9c64672bf1dda7084"],["E:/Github_Blogs/public/tags/漏洞复现/index.html","5dfaa6293c8d796f182c4c2e9d8785cd"]];
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







