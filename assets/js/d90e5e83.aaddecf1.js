"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86],{5680:function(e,t,n){n.d(t,{xA:function(){return c},yg:function(){return g}});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},380:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(9668),o=n(1367),i=(n(6540),n(5680)),a=["components"],s={id:"troubleshooting-ios",title:"Troubleshooting iOS"},l=void 0,u={unversionedId:"troubleshooting-ios",id:"troubleshooting-ios",title:"Troubleshooting iOS",description:"LinkPresentation.h file not found",source:"@site/docs/troubleshooting-ios.mdx",sourceDirName:".",slug:"/troubleshooting-ios",permalink:"/react-native-share/docs/troubleshooting-ios",draft:!1,editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/troubleshooting-ios.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-ios",title:"Troubleshooting iOS"},sidebar:"someSidebar",previous:{title:"Migrating to v5",permalink:"/react-native-share/docs/migrate-v4-to-v5"}},c={},p=[{value:"LinkPresentation.h file not found",id:"linkpresentationh-file-not-found",level:3},{value:"Twitter integration",id:"twitter-integration",level:3}],f={toc:p},d="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,a);return(0,i.yg)(d,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"linkpresentationh-file-not-found"},"LinkPresentation.h file not found"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Check iOS SDK version running this command: ",(0,i.yg)("inlineCode",{parentName:"li"},"xcodebuild -showsdks")),(0,i.yg)("li",{parentName:"ol"},"If your SDK is 12 or lower you need to update to Xcode 11 with iOS SDK 13"),(0,i.yg)("li",{parentName:"ol"},"Build the app with Xcode 11 and everything works ok")),(0,i.yg)("h3",{id:"twitter-integration"},"Twitter integration"),(0,i.yg)("p",null,"Since Twitter stop supporting SDK ",(0,i.yg)("a",{parentName:"p",href:"https://blog.twitter.com/developer/en_us/topics/tools/2018/discontinuing-support-for-twitter-kit-sdk"},"(Check here)"),",\nit was rendering badly the post view. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/react-native-share/react-native-share/issues/930"},"(Like this)"),"\nSo, this library will open the browser, and then the Twitter app will be launched"))}g.isMDXComponent=!0}}]);