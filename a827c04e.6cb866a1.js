(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(76)),o={id:"share-is-package-installed",title:"Share.isPackageInstalled (Android only)"},c={unversionedId:"share-is-package-installed",id:"share-is-package-installed",isDocsHomePage:!1,title:"Share.isPackageInstalled (Android only)",description:"It's a simple method that check if a package-name is installed with the Intent on Android. Similar to Share.open and Share.single this method will return a Promise, which will be fulfilled when the native code successfully check for the application.",source:"@site/docs/share-package-installed.mdx",slug:"/share-is-package-installed",permalink:"/react-native-share/docs/share-is-package-installed",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/share-package-installed.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Share.shareSingle",permalink:"/react-native-share/docs/share-single"},next:{title:"UI Components",permalink:"/react-native-share/docs/ui-components"}},l=[],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It's a simple method that check if a ",Object(i.b)("inlineCode",{parentName:"p"},"package-name")," is installed with the ",Object(i.b)("inlineCode",{parentName:"p"},"Intent")," on Android. Similar to ",Object(i.b)("inlineCode",{parentName:"p"},"Share.open")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Share.single")," this method will return a ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),", which will be fulfilled when the native code successfully check for the application."),Object(i.b)("p",null,"Using a promise implementation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Share.isPackageInstalled('com.instagram.android')\n  .then((response) => {\n    console.log(response);\n    // { isInstalled: true/false, message: 'Package is Installed' }\n  })\n  .catch((error) => {\n    console.log(error);\n    // { error }\n  });\n")),Object(i.b)("p",null,"Or with ",Object(i.b)("inlineCode",{parentName:"p"},"async/await"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const checkPackage = async () => {\n  const { isInstalled } = await Share.isPackageInstalled('com.instagram.android');\n}\n")),Object(i.b)("p",null,"Keep in mind, that similar to ",Object(i.b)("inlineCode",{parentName:"p"},"Share.open")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Share.single")," it's a good idea using a ",Object(i.b)("inlineCode",{parentName:"p"},"try/catch")," whenever a call to this method is requested."),Object(i.b)("p",null,"For iOS you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"Linking.canOpenURL(instagram://)")," where the ",Object(i.b)("inlineCode",{parentName:"p"},"url")," is the app scheme that you want to check. Also, note that calling the ",Object(i.b)("inlineCode",{parentName:"p"},"isPackageInstalled")," on iOS will return a ",Object(i.b)("inlineCode",{parentName:"p"},"Error: Not implemented"),"."))}p.isMDXComponent=!0},76:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?r.a.createElement(b,c(c({ref:n},s),{},{components:t})):r.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);