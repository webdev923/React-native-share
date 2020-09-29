(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(76)),i={id:"share-remote-file",title:"Share Remote PDF file"},l={unversionedId:"share-remote-file",id:"share-remote-file",isDocsHomePage:!1,title:"Share Remote PDF file",description:"When sharing a pdf file with base64, there are two current problems.",source:"@site/docs/share-remote-file.mdx",slug:"/share-remote-file",permalink:"/react-native-share/docs/share-remote-file",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/share-remote-file.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Testing",permalink:"/react-native-share/docs/testing"},next:{title:"Migrating to v4",permalink:"/react-native-share/docs/migrate-v3-to-v4"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When sharing a pdf file with base64, there are two current problems."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On WhatsApp base64 wont be recognized => nothing to share"),Object(o.b)("li",{parentName:"ol"},"In the GmailApp the file extension is wrong (.dat).")),Object(o.b)("p",null,'Therefore we use this "workaround" in order to handle pdf sharing for iOS Apps to mentioned Apps'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install react-native-fetch-blob"),Object(o.b)("li",{parentName:"ol"},"Set a specific path in the RNFetchBlob configurations"),Object(o.b)("li",{parentName:"ol"},"Download the PDF file to temp device storage"),Object(o.b)("li",{parentName:"ol"},"Share the response's path() of the donwloaded file directly")),Object(o.b)("p",null,"Code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static sharePDFWithIOS(fileUrl, type) {\n  let filePath = null;\n  let file_url_length = fileUrl.length;\n  const configOptions = {\n    fileCache: true,\n    path:\n      DIRS.DocumentDir + (type === 'application/pdf' ? '/SomeFileName.pdf' : '/SomeFileName.png') // no difference when using jpeg / jpg / png /\n  };\n  RNFetchBlob.config(configOptions)\n    .fetch('GET', fileUrl)\n    .then(async resp => {\n      filePath = resp.path();\n      let options = {\n        type: type,\n        url: filePath // (Platform.OS === 'android' ? 'file://' + filePath)\n      };\n      await Share.open(options);\n      // remove the image or pdf from device's storage\n      await RNFS.unlink(filePath);\n    });\n}\n")),Object(o.b)("p",null,"Nothing to do on Android. You can share the pdf file with base64"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static sharePDFWithAndroid(fileUrl, type) {\n  let filePath = null;\n  let file_url_length = fileUrl.length;\n  const configOptions = { fileCache: true };\n  RNFetchBlob.config(configOptions)\n    .fetch('GET', fileUrl)\n    .then(resp => {\n      filePath = resp.path();\n      return resp.readFile('base64');\n    })\n    .then(async base64Data => {\n      base64Data = `data:${type};base64,` + base64Data;\n      await Share.open({ url: base64Data });\n      // remove the image or pdf from device's storage\n      await RNFS.unlink(filePath);\n    });\n}\n")))}s.isMDXComponent=!0},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),h=r,b=f["".concat(i,".").concat(h)]||f[h]||u[h]||o;return n?a.a.createElement(b,l(l({ref:t},p),{},{components:n})):a.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);