"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[352],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),g=s(a),k=n,c=g["".concat(p,".").concat(k)]||g[k]||d[k]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4771:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return g}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"share-single",title:"Share.shareSingle"},p=void 0,s={unversionedId:"share-single",id:"share-single",isDocsHomePage:!1,title:"Share.shareSingle",description:"The shareSingle() method allows a user to share a premade message via a single prechosen social medium. In other words, code specifies both the message that will be sent and the social medium through which the message will be sent. The user chooses only to whom the message is sent. This shared message may contain text, one or more files, or both.",source:"@site/docs/share-single.mdx",sourceDirName:".",slug:"/share-single",permalink:"/react-native-share/docs/share-single",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/share-single.mdx",tags:[],version:"current",frontMatter:{id:"share-single",title:"Share.shareSingle"},sidebar:"someSidebar",previous:{title:"Share.open",permalink:"/react-native-share/docs/share-open"},next:{title:"Share.isPackageInstalled (Android only)",permalink:"/react-native-share/docs/share-is-package-installed"}},m=[{value:"Supported Options",id:"supported-options",children:[]},{value:"Supported Applications",id:"supported-applications",children:[]},{value:"Static values for Instagram Stories",id:"static-values-for-instagram-stories",children:[]},{value:"Opening Instagram Share Screen (Camera view)",id:"opening-instagram-share-screen-camera-view",children:[{value:"Android + IOS",id:"android--ios",children:[]},{value:"Android",id:"android",children:[]},{value:"Supported options for INSTAGRAM_STORIES:",id:"supported-options-for-instagram_stories",children:[]}]},{value:"Static Values for Facebook Stories",id:"static-values-for-facebook-stories",children:[{value:"Facebook stories method list (iOS only)",id:"facebook-stories-method-list-ios-only",children:[]},{value:"Share remote videos to Instagram",id:"share-remote-videos-to-instagram",children:[]},{value:"Share Intent to Telegram",id:"share-intent-to-telegram",children:[]}]}],d={toc:m};function g(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The shareSingle() method allows a user to share a premade message via a single prechosen social medium. In other words, code specifies both the message that will be sent and the social medium through which the message will be sent. The user chooses only to whom the message is sent. This shared message may contain text, one or more files, or both."),(0,l.kt)("p",null,"Open the share dialog with the specific application. This returns a promise similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"Share.open"),", keep in mind that you will need to handle the same response when the user cancel/dismiss."),(0,l.kt)("p",null,"Using a promise implementation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const shareOptions = {\n    title: 'Share via',\n    message: 'some message',\n    url: 'some share url',\n    social: Share.Social.WHATSAPP,\n    whatsAppNumber: \"9199999999\",  // country code + phone number\n    filename: 'test' , // only for base64 file in Android\n  };\n\n  Share.shareSingle(shareOptions)\n    .then((res) => { console.log(res) })\n    .catch((err) => { err && console.log(err); });\n")),(0,l.kt)("p",null,"Or with ",(0,l.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  const shareOptions = {\n    title: 'Share via',\n    message: 'some message',\n    url: 'some share url',\n    social: Share.Social.WHATSAPP,\n    whatsAppNumber: \"9199999999\",  // country code + phone number\n    filename: 'test' , // only for base64 file in Android\n  };\n\n  const fun = async () => {\n    const shareResponse = await Share.shareSingle(shareOptions);\n  }\n")),(0,l.kt)("h2",{id:"supported-options"},"Supported Options"),(0,l.kt)("p",null,"You can pass the option that will be handled by the native code, similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"Share.open"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"left"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"URL you want to share"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"File mime type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"filename"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Custom file name for email attachment"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message sent to the share activity"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Title sent to the share activity"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"subject"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Subject sent when sharing to email"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"email"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email of addressee"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"recipient"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Phone number of SMS recipient"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"social"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"supported social apps: ",(0,l.kt)("a",{parentName:"td",href:"#static-values-for-social"},"List")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"forceDialog"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(optional) only android. Avoid showing dialog with buttons Just Once / Always. Useful for Instagram to always ask user if share as Story or Feed"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2753")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"NOTE: If both ",(0,l.kt)("inlineCode",{parentName:"em"},"message")," and ",(0,l.kt)("inlineCode",{parentName:"em"},"url")," are provided, ",(0,l.kt)("inlineCode",{parentName:"em"},"url")," will be concatenated to the end of ",(0,l.kt)("inlineCode",{parentName:"em"},"message")," to form the body of the message. If only one is provided it will be used"))),(0,l.kt)("h2",{id:"supported-applications"},"Supported Applications"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"react-native-share")," export a ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")," containing all supported apps, wich can be seen ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-share/blob/5299d95aab25bfba6815e0f5455876897ed8ddc6/index.js#L207-L219"},"here"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"left"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"FACEBOOK")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"FACEBOOK_STORIES")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"PAGESMANAGER")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"WHATSAPP")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"WHATSAPPBUSINESS")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"INSTAGRAM")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"INSTAGRAM_STORIES")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"GOOGLEPLUS")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"EMAIL")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"PINTEREST")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"SMS")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"SNAPCHAT")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"MESSENGER")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"LINKEDIN")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"TELEGRAM")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")))),(0,l.kt)("h2",{id:"static-values-for-instagram-stories"},"Static values for Instagram Stories"),(0,l.kt)("p",null,"These values can be used when you are calling the method ",(0,l.kt)("inlineCode",{parentName:"p"},"Share.single")," passing the attributes that you need (You can combine these attributes, Story will use properties that you pass)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Share from 'react-native-share';\n\nconst shareOptions = {\n    backgroundImage: 'http://urlto.png',\n    stickerImage: 'data:image/png;base64,<imageInBase64>', //or you can use \"data:\" link\n    backgroundBottomColor: '#fefefe',\n    backgroundTopColor: '#906df4',\n    attributionURL: 'http://deep-link-to-app', //in beta\n    social: Share.Social.INSTAGRAM_STORIES\n};\n\nShare.shareSingle(shareOptions);\n")),(0,l.kt)("h2",{id:"opening-instagram-share-screen-camera-view"},"Opening Instagram Share Screen (Camera view)"),(0,l.kt)("p",null,"By default IG opens New post view with Camera View. There you can find also story and gallery view to pick multiple pictures to publish."),(0,l.kt)("h3",{id:"android--ios"},"Android + IOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Share from 'react-native-share';\n\nconst shareOptions = {\n    url: 'instagram://camera', \n    social: Share.Social.INSTAGRAM\n};\n\nShare.shareSingle(shareOptions);\n")),(0,l.kt)("h3",{id:"android"},"Android"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Share from 'react-native-share';\n\nconst shareOptions = {\n    url: 'instagram://share', \n    social: Share.Social.INSTAGRAM\n};\n\nShare.shareSingle(shareOptions);\n")),(0,l.kt)("p",null,"URL patterns like ",(0,l.kt)("inlineCode",{parentName:"p"},"instagram://")," can be used on Android, but works different then documented for IOS\n",(0,l.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/instagram/sharing-to-feed/"},"https://developers.facebook.com/docs/instagram/sharing-to-feed/")),(0,l.kt)("h3",{id:"supported-options-for-instagram_stories"},"Supported options for INSTAGRAM_STORIES:"),(0,l.kt)("p",null,"Use this properties to customize the instagram storie view."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundImage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"URL you want to share"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stickerImage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"URL you want to share"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundBottomColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"default #837DF4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundTopColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"default #906df4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"attributionURL"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(optional) facebook beta-test"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundVideo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"URL you want to share"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,l.kt)("h2",{id:"static-values-for-facebook-stories"},"Static Values for Facebook Stories"),(0,l.kt)("p",null,"These can be assessed using Share.Social property\nFor eg."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import Share from 'react-native-share';\n\nconst shareOptions = {\n    method: Share.FacebookStories.SHARE_BACKGROUND_AND_STICKER_IMAGE, // iOS only\n    backgroundVideo: 'URI_TO_MP4', // Android only (uri to a local file)\n    backgroundImage: 'http://urlto.png', // url or an base64 string\n    stickerImage: 'data:image/png;base64,<imageInBase64>', //or you can use \"data:\" url\n    backgroundBottomColor: '#fefefe',\n    backgroundTopColor: '#906df4',\n    attributionURL: 'http://deep-link-to-app', //in beta\n    appId: '219376304', //facebook appId\n    social: Share.Social.FACEBOOK_STORIES\n};\n\nShare.shareSingle(shareOptions);\n")),(0,l.kt)("p",null,"Supported options for ",(0,l.kt)("inlineCode",{parentName:"p"},"FACEBOOK_STORIES"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"appId"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(required) facebook appId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundImage*"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"URL you want to share (iOS) / URI to a local file (Android)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundVideo*"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"URI to a local file (Android only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stickerImage*"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"URL you want to share (iOS) / URI to a local file (Android)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"method"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#instagram-stories-method-list"},"List")," (iOS only)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundBottomColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(optional) default #837DF4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"backgroundTopColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(optional) default #906df4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"attributionURL"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(optional) facebook beta-test")))),(0,l.kt)("p",null,"*"," check the platform specific documentation (",(0,l.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/sharing/sharing-to-stories/android-developers"},"Android"),"/",(0,l.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/sharing/sharing-to-stories/ios-developers"},"iOS"),") to understand the differences between them."),(0,l.kt)("h3",{id:"facebook-stories-method-list-ios-only"},"Facebook stories method list (iOS only)"),(0,l.kt)("p",null,"Methods available when calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"FACEBOOK_STORIES")," social option."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required options"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"SHARE_BACKGROUND_IMAGE")),(0,l.kt)("td",{parentName:"tr",align:"center"},"backgroundImage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"SHARE_STICKER_IMAGE")),(0,l.kt)("td",{parentName:"tr",align:"center"},"stickerImage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"SHARE_BACKGROUND_AND_STICKER_IMAGE")),(0,l.kt)("td",{parentName:"tr",align:"center"},"backgroundImage, stickerImage")))),(0,l.kt)("h3",{id:"share-remote-videos-to-instagram"},"Share remote videos to Instagram"),(0,l.kt)("p",null,"Instagram tries to select ",(0,l.kt)("strong",{parentName:"p"},"the very last file of the cameraroll")," so you have to save videos to the cameraroll in case you want to share them to Instagram."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Share from 'react-native-share';\nimport RNFetchBlob from 'rn-fetch-blob';\nimport CameraRoll from '@react-native-community/cameraroll';\n\nconst cache = await RNFetchBlob.config({\n            fileCache: true,\n            appendExt: 'mp4',\n          }).fetch('GET', \"YOUR OWN REMOTE VIDEO URL\", {});\nconst gallery = await CameraRoll.save(cache.path(), 'video');\ncache.flush();\nawait Share.shareSingle({\n    social: Share.Social.INSTAGRAM,\n    url: gallery,\n});\n")),(0,l.kt)("h3",{id:"share-intent-to-telegram"},"Share Intent to Telegram"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Share.shareSingle({\n    title: 'Share via',\n    message: 'some message',\n    url: 'some share url',\n    social: Share.Social.TELEGRAM,\n})\n")))}g.isMDXComponent=!0}}]);