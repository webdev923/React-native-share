(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={id:"troubleshooting-ios",title:"Troubleshooting iOS"},u={unversionedId:"troubleshooting-ios",id:"troubleshooting-ios",isDocsHomePage:!1,title:"Troubleshooting iOS",description:"LinkPresentation.h file not found",source:"@site/docs/troubleshooting-ios.mdx",sourceDirName:".",slug:"/troubleshooting-ios",permalink:"/react-native-share/docs/troubleshooting-ios",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/troubleshooting-ios.mdx",version:"current",frontMatter:{id:"troubleshooting-ios",title:"Troubleshooting iOS"},sidebar:"someSidebar",previous:{title:"Migrating to v5",permalink:"/react-native-share/docs/migrate-v4-to-v5"}},l=[{value:"LinkPresentation.h file not found",id:"linkpresentationh-file-not-found",children:[]}],s={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"linkpresentationh-file-not-found"},"LinkPresentation.h file not found"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check iOS SDK version running this command: ",(0,i.kt)("inlineCode",{parentName:"li"},"xcodebuild -showsdks")),(0,i.kt)("li",{parentName:"ol"},"If your SDK is 12 or lower you need to update to Xcode 11 with iOS SDK 13"),(0,i.kt)("li",{parentName:"ol"},"Build the app with Xcode 11 and everything works ok")))}p.isMDXComponent=!0}}]);