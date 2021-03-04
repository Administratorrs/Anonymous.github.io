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

var precacheConfig = [["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/index.html","75e3b07fd2387c98929ac47393cf6701"],["E:/Github_Blogs/public/2021/02/09/Linux/iptables/iptables/iptables.png","0b3ce9083f875caebc5204e7e25a0252"],["E:/Github_Blogs/public/2021/02/09/Python/pip/pip/index.html","995788970c12c52a8bde8d1d56235245"],["E:/Github_Blogs/public/2021/02/09/Python/函数/if__name__='__main__'/if__name__='__main__'/index.html","136adf81e1bc0fb08873062c43703efa"],["E:/Github_Blogs/public/2021/02/09/Python/函数/open函数/open 函数/index.html","60be83b3139467fc532785299054d772"],["E:/Github_Blogs/public/2021/02/09/Python/库/EasyGui库/easygui库/index.html","b35f50d741cafaab43c774e4e67d067e"],["E:/Github_Blogs/public/2021/02/09/Python/库/pickle库/pickle 库/index.html","aec628b395614a4597883b0d8de61428"],["E:/Github_Blogs/public/2021/02/09/Python/库/random库/random/index.html","aa1f8970bc04b31ba869218fb90be959"],["E:/Github_Blogs/public/2021/02/09/Python/库/time库/time 库/index.html","861f619f55b67b41e699986d12b7b9ba"],["E:/Github_Blogs/public/2021/02/09/Python/库/urllib库/urllib.request/index.html","6c4196934dff49f24a3e750e0dfe6990"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DHCP/DHCP/index.html","f77dbe172e62a19310593ce9c3138867"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/DNS/DNS/index.html","551405c418bcf2fc3cd23cc9ce2e9f1a"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/NFS/NFS/index.html","f5d4f7642f884b2ea91f1fe84648f1cf"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Network/Network/index.html","eb502c97f8a5b0ff85d3a5d8b2f776dc"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/SELinux/SELinux/index.html","ee50f907ab05a39f155e63b222df4dcb"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/Samba/Samba/index.html","db77ce2d5f109e06a937873dc1c52dcd"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/hosts.allow文件跟hosts.deny文件/hosts.allow、hosts.deny/index.html","ac13ec07533a79926640068954799c64"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/ssh/ssh/index.html","b6eee95b5688394b6ac94a83807891dd"],["E:/Github_Blogs/public/2021/02/09/网络应用竞赛/vsftp/vsftp/index.html","ca03bc67053217c89ad77c399ed4e9a4"],["E:/Github_Blogs/public/2021/02/10/Linux/JAVA环境/JAVA环境/index.html","f70aa490f084d2a39e4a53a35c1c6726"],["E:/Github_Blogs/public/2021/02/10/Linux/ubuntu 更换软件源/配置源/index.html","09fa6df690693a752e4cc3d3903efa75"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/1.png","39da931387dcf2007bc115d89beafbca"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/2.png","68df7fa74b8c1cae35473165ac74a44d"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/3.png","50aae8619e710b924b83e230b638f3b9"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/4.png","d58a3d69a77f45709f97e0a9a35f759a"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/5.png","589b15fc58ba183b00657cb55c6c6477"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/6.png","fc489c5eb4710b98b04c173e41b0deed"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/7.png","23ca66b2ca13419b600b7fe1ba878624"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/8.png","d7bdcf82db3a223c8cdc7fe159a32638"],["E:/Github_Blogs/public/2021/02/10/漏洞复现/Windows 漏洞复现/Windows：CVE-2020-0796 RCE/index.html","565522c9a7abdcfb581cb3b30ef4bfd8"],["E:/Github_Blogs/public/2021/02/11/代理/Shadowsocks/Shadowsocks/index.html","547be06c0ebef436767f51a2ea4d621c"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-1.png","4b68119ba11a951f38142076d2af7d14"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/dns-2.png","cd210cb92129ceb8deb82d27e268475a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-1.png","82ab28e4922238c1c26063b953ec4612"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-2.png","2bc7012089c44b00933b4fde0c216e6a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/fw-3.png","bf9a16ad9a1a2a4ab75ec29ea5bad2da"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/hosts.png","9ef8639d7acc08dfe7543e692a8d9f9b"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-1.png","af9d612e955fcff080b22d338f8bd306"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/dashboard-2.png","1f6da9954d5cc0112ca24c053f86e3e0"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-1.png","94a8189343a12fe54d5c560e7caef890"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http-2.png","cabd11044118e16df74ee63fc1ba3af1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http.png","02abefe7cbf0ed213d537b8e0330deab"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_admin.png","f9fdf4f19f39269a821374fb012b8d95"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-1.png","b2da513f4848c5c13cec3abb7fa16968"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/http/http_ip-2.png","3fde81734a26711fed8a8b158616fef8"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/https.png","f081e663f137b3e50f31b19efb8e8d38"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/index.html","128c002e92126b49f6b02dbc9f9f3f43"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-1.png","002fd4220711badee1c614f4041fb087"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/kh-2.png","642edbedeccb2a73528b4efd9882b58d"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-1.png","a1e375c84b22071dffe8ec45b67eb872"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-2.png","bde90631e2db86d5aca82423638c7747"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/lianjie-3.png","159cffe9afd330837afc90bb258b6aee"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/socks5.png","c094b79b304ae8e48012871442d850d7"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-1.png","d3be61ab0994859b0f29381e4f492223"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-2.png","aa9e53af5c123cd3078ceacf78a5c9b1"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-3.png","c1a354b1d7045e86f60094e852250008"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-4.png","4fdcf4413f5ec8f87873a5a4bb55182a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/ssh-5.png","cef5f9ff710e609c03e2653b1c5df1a6"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-1.png","11e0b309ef3426bf95176853bbe8531a"],["E:/Github_Blogs/public/2021/02/11/代理/frp/frp/wj-2.png","eff66d99218df99dc5106ef35709696c"],["E:/Github_Blogs/public/2021/02/11/代理/ubuntu 配置 socks5/socks5/index.html","b6be3f0cb551c3624e024fee3e434b87"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/index.html","69a3f13851c150880dc3e6266dfcd818"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-1.png","79f4929d247fd08451ee53bb736cf797"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/set_config-2.png","2a4534b665b31e70a3a56cb547124796"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/shodan_api.png","cc8064b045a86882845059837ffcc257"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/start.png","e3da3466796a1a491b02118ac1a3d985"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-1.png","f1b9ca82e40c62096233270a17521be9"],["E:/Github_Blogs/public/2021/02/11/信息收集/Watchdog/Watchdog/web-2.png","512fafeb9d0a2ed1049b16fb39e0d450"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/1.png","27ca5b390740cc48ff3bdb6ec8332250"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/bp.png","b4b52c6571cc10a4c13395ca2749b1d1"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/index.html","4eec888908d930485f9bb0b33a15bee4"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp-2.png","4cbfc0ea1a0f58564a4b4218c4975074"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/jrmp.png","adaf1bf69a59479850847b3533bc2b40"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc-2.png","8f2449fa1f66ba9b19a3190255ec0371"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/nc.png","ff62ab17b6a21fa0012d686a2589d422"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin-2.png","e9b8cb78ad6a6a5b930d3c36e250629e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/plugin.png","bedefda57f2335e901a7fc671739b75e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Shiro 漏洞复现/Shiro 1.2.4/Apache Shiro 1.2.4/s.png","e1254c76e72bd303872fe7d318e8b364"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/1.jpg","e4c5ace2a2e492d95f39e8a9d644ddb5"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/2.jpg","8f4842470fce6144da48b442a4fb4f07"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 6,7,8,9/CVE-2020-1938/index.html","4dd43394570b13ea0103d3ad3198a1b8"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/1.jpg","3d0f71619dcbf31bd0f3abef8da41edf"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/2.jpg","401a68f0c32e6509a7c90773a8d9268f"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/3.jpg","fca5d4ee70659692da199ddb7d8dd5bd"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/bp.jpg","69a6b1cc866a430ededd216e653b229e"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/Apache 漏洞复现/Apache Tomcat 漏洞复现/Tomcat 7,8/CVE-2017-12615/index.html","df6110088fb11498992ee7ad3c9f93ea"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/1.jpg","0ae5a230533e2fe653516f54edc8dbe1"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/2.png","da6e9db48d623752abe80fc2f531823d"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/3.png","813d3ef0452f3922bce4e8f6d80beb22"],["E:/Github_Blogs/public/2021/02/11/漏洞复现/ThinkPHP 漏洞复现/ThinkPHP 5.0.2-5.0.23/ThinkPHP5 5.0.23/index.html","00e530a56dec5f3582471b2cac705980"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/bp.png","fea8c48405e3f7d1fc835f74c98e2546"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/index.html","46e45ad3d7ab02c3b6e073d3f467a6dc"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/nc-1.png","2b063e57f8fe120c14bf87eaf97e4b64"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/nc-2.png","2600525b17cc40d1eb7e6ab28b52a8ce"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/web-1.png","2a7057c72e6f7a5cf873f4d9d144915a"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Apache 漏洞复现/Apache Druid 漏洞复现/CVE-2021-25646/web-2.png","323634fd7a5d07d5690cec6c33065315"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/connect.png","78b23aa7b97b55acb05445736330ce1c"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/getname.png","71063435b4988e6f3b64a6847b3a023f"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/index.html","d1e2bf661aee50bc533dff808aa71389"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/info.png","6c5eb91200026d86098e86702f480e26"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/keys.png","c8a029090a1a926d7a89109811a54224"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/webshell-1.png","2cbf91fbb9c62df2cda0961b7ba31edf"],["E:/Github_Blogs/public/2021/02/15/漏洞复现/Redis 漏洞复现/Redis 未授权访问/webshell-2.png","41f97cbda53c8df71c33cf70bd6a3001"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/exp.png","4ab2518bd7078d6bc38d4e11300f38bd"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/index.html","f9215ba330340b936b847fb78a918025"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/sudo_version.png","965edd10a83564e93eea7171057d7239"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/system_version.png","74eb1506d32a0f13db9ae4dbd2c8ae83"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/target.png","b6963c7ace5cf8be83f26dc94409c23e"],["E:/Github_Blogs/public/2021/02/17/漏洞复现/Linux 漏洞复现/sudo/sudo 提权漏洞/test_user.png","1ca5621d8dad5091d911120bb484f4af"],["E:/Github_Blogs/public/404.html","1da890c76123611a670b56aa56d400d8"],["E:/Github_Blogs/public/archives/2021/02/index.html","1780360b6f1f1a0df1f1f4a1ebbed9bd"],["E:/Github_Blogs/public/archives/2021/02/page/2/index.html","915ece369100274df9115673db399241"],["E:/Github_Blogs/public/archives/2021/02/page/3/index.html","7b741c0896773aeffa06ec3369bf0e92"],["E:/Github_Blogs/public/archives/2021/02/page/4/index.html","56b80ca9c6af19054f15961730e91742"],["E:/Github_Blogs/public/archives/2021/index.html","35bb8aebaabd8e8fd1c4a9643a2ad86d"],["E:/Github_Blogs/public/archives/2021/page/2/index.html","415f7c3775f0c38704cc8ccd964dff5e"],["E:/Github_Blogs/public/archives/2021/page/3/index.html","f5360f305cc91ea9f4240e008504216c"],["E:/Github_Blogs/public/archives/2021/page/4/index.html","fac4d4cdb2900f21d70c51e70d78c566"],["E:/Github_Blogs/public/archives/index.html","0f359dacbff4f8c879fc6ec8a3b5f431"],["E:/Github_Blogs/public/archives/page/2/index.html","ec2172b300df736200a8ba7a95f65afa"],["E:/Github_Blogs/public/archives/page/3/index.html","f8f311985404d0ca7672646c3ffd3ffc"],["E:/Github_Blogs/public/archives/page/4/index.html","1697d41d7997fd948deebe4ff29569de"],["E:/Github_Blogs/public/categories/Apache-Shiro-漏洞复现/index.html","8ce2a85df5aed9461d33f5b6c747fd30"],["E:/Github_Blogs/public/categories/Apache-Tomcat-漏洞复现/index.html","bef561e40be3c59f145bd652550c16f1"],["E:/Github_Blogs/public/categories/Linux/index.html","1164ac51b1c4e995ccecbfe96b1255e1"],["E:/Github_Blogs/public/categories/Python/index.html","183bd24e65b79815bec45a3ae33fee27"],["E:/Github_Blogs/public/categories/ThinkPHP-漏洞复现/index.html","2a96d8273cb1656fe041a9e14d75f2fc"],["E:/Github_Blogs/public/categories/Windows-漏洞复现/index.html","266e6196f48274c176c0db60dc65a749"],["E:/Github_Blogs/public/categories/index.html","428d41de93dc0e7cb8a6e7d56116e769"],["E:/Github_Blogs/public/categories/代理/index.html","586063fad081fd7a9a9aacd8e68baa54"],["E:/Github_Blogs/public/categories/信息收集/index.html","782fa094bdd8e30de734f10e1dfc7507"],["E:/Github_Blogs/public/categories/漏洞复现/index.html","6ef21963781eb315fa7958484c66ec32"],["E:/Github_Blogs/public/categories/网络应用竞赛/index.html","482363f8b9c57b041fde6a5fbfbd110a"],["E:/Github_Blogs/public/css/index.css","ca12b7a6b1f76993e99c66651f701686"],["E:/Github_Blogs/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Github_Blogs/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Github_Blogs/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/Github_Blogs/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Github_Blogs/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Github_Blogs/public/img/index.jpg","ec7805af22a17750033a1b2485413dbb"],["E:/Github_Blogs/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Github_Blogs/public/index.html","76a6e1077abb73432956a31b327eb3b2"],["E:/Github_Blogs/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["E:/Github_Blogs/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/Github_Blogs/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/Github_Blogs/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/Github_Blogs/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/Github_Blogs/public/link/index.html","9299e7c1f3535dda06437a9fcac5b626"],["E:/Github_Blogs/public/page/2/index.html","f3c2eddeb53b68b16da4f572e18ff0af"],["E:/Github_Blogs/public/page/3/index.html","ebecf9d647d14f8334fc8f1b27ee6fa3"],["E:/Github_Blogs/public/page/4/index.html","f0d76d1a4e6ca223b83f0ebbf8d2ffc3"],["E:/Github_Blogs/public/tags/Apache-Druid-漏洞复现/index.html","ba821003bb93403f8351dab2a3e69c1d"],["E:/Github_Blogs/public/tags/Apache-Shiro-漏洞复现/index.html","b4d407c51de6546d5ceee4deafefa54e"],["E:/Github_Blogs/public/tags/Apache-Tomcat-漏洞复现/index.html","070fcbcabc89f5c628c884535b5c3cfc"],["E:/Github_Blogs/public/tags/Linux-漏洞复现/index.html","efca2375620896c87b5b17fe00b4d249"],["E:/Github_Blogs/public/tags/Linux/index.html","b267424fbb563d5f709176115322e69d"],["E:/Github_Blogs/public/tags/Linux/page/2/index.html","6eeb44adb66528d288cfbb67776047c0"],["E:/Github_Blogs/public/tags/Python/index.html","7e0df90015c18397f85e85aab38c4cce"],["E:/Github_Blogs/public/tags/Redis-漏洞复现/index.html","770d155bda3081ef70aefb88865a645d"],["E:/Github_Blogs/public/tags/ThinkPHP-漏洞复现/index.html","1cc608c1abd5421f8204e264813ecd07"],["E:/Github_Blogs/public/tags/Windows/index.html","a8229487a526e83ac16b8fdb95af8853"],["E:/Github_Blogs/public/tags/index.html","a39b9a408d0f0b2c99eefd4395080413"],["E:/Github_Blogs/public/tags/proxy/index.html","73757643d83a3e950ed20491e7c75737"],["E:/Github_Blogs/public/tags/信息收集/index.html","cf0046ea32cb4e12d9ecf40af7793ff2"],["E:/Github_Blogs/public/tags/内网/index.html","39fcf18d6f5ab106f5c9f4978208dbbb"],["E:/Github_Blogs/public/tags/漏洞复现/index.html","d79656e13beb662c44c7f74d2d8f59e7"]];
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







