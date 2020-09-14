(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(75)),i={id:"contributing",title:"Contributing Guide"},c={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing Guide",description:"react-native-share uses semantic-release for creating new releases. Also, we follow the commit-lint specification with husky to handle our commit messages.",source:"@site/docs/contributing.mdx",slug:"/contributing",permalink:"/react-native-share/docs/contributing",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/contributing.mdx",version:"current"},l=[{value:"Documentation",id:"documentation",children:[]},{value:"Using the Example App",id:"using-the-example-app",children:[]},{value:"Where is the package.json and node_modules?",id:"where-is-the-packagejson-and-node_modules",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-native-share")," uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/semantic-release/semantic-release"}),Object(o.b)("inlineCode",{parentName:"a"},"semantic-release"))," for creating new releases. Also, we follow the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/conventional-changelog/commitlint#readme"}),Object(o.b)("inlineCode",{parentName:"a"},"commit-lint"))," specification with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typicode/husky#readme"}),Object(o.b)("inlineCode",{parentName:"a"},"husky"))," to handle our commit messages."),Object(o.b)("p",null,"So whenever a new commit arrives at the ",Object(o.b)("inlineCode",{parentName:"p"},"master"),", if it's attending the ",Object(o.b)("inlineCode",{parentName:"p"},"semantic-release")," config to release a newer version in just a few minutes a new release will be published to npm. \ud83d\ude80"),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/docusaurus"}),"Docusaurus")," to build our documentation. Everything you need to change the docs is located at ",Object(o.b)("inlineCode",{parentName:"p"},"./website"),".\nYou just need to run a:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn; yarn start\n")),Object(o.b)("p",null,"And you will be able to run a local version of Docusaurus. Everytime a PR is merged on the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch, a new version of the docs will be published. So you just need to think about writing some cool ",Object(o.b)("inlineCode",{parentName:"p"},".mdx"),"."),Object(o.b)("h2",{id:"using-the-example-app"},"Using the Example App"),Object(o.b)("p",null,"To run the example app, which is located at ",Object(o.b)("inlineCode",{parentName:"p"},"./example"),", just run at the root project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn && cd example/ios && pod install && cd -\n")),Object(o.b)("p",null,"And finally a ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," at the root folder."),Object(o.b)("p",null,"After that, open the file ",Object(o.b)("inlineCode",{parentName:"p"},"example/ios/example.xcworkspace")," with XCode or run a ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start:android")," to start the android simulator."),Object(o.b)("h2",{id:"where-is-the-packagejson-and-node_modules"},"Where is the package.json and node_modules?"),Object(o.b)("p",null,"We don't need a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," or ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," because we are using a custom config with ",Object(o.b)("inlineCode",{parentName:"p"},"react-native.config.js"),", that let us use easily the rootFolder of the project."),Object(o.b)("p",null,"Also, we changed some native files like: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-share/blob/56faa20d7ad30501056b89b24205f22c9efb93f3/example/ios/example/AppDelegate.m#L36"}),Object(o.b)("inlineCode",{parentName:"a"},"AppDelegate.M")),",\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-share/blob/56faa20d7ad30501056b89b24205f22c9efb93f3/example/android/app/src/main/java/com/example/MainApplication.java#L33"}),Object(o.b)("inlineCode",{parentName:"a"},"MainApplication.java"))," and\nother files. By doing this, we are able to use the root-version of react-native-share and react at ",Object(o.b)("inlineCode",{parentName:"p"},"../../../"),"."),Object(o.b)("p",null,"If you want to do something similar on your library, or other project I recommend looking at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/datetimepicker"}),"datetimepicker")," which was the base to apply this changes."))}s.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);