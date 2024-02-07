"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[156],{95788:(e,t,o)=>{o.d(t,{Iu:()=>d,yg:()=>y});var n=o(11504);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(o),m=r,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return o?n.createElement(y,a(a({ref:t},d),{},{components:o})):n.createElement(y,a({ref:t},d))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},78748:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=o(45072),r=(o(11504),o(95788));const i={id:"ios",slug:"introduction/ios",title:"Detox for iOS",sidebar_label:"Detox for iOS"},a=void 0,p={unversionedId:"ios",id:"version-19.x/ios",title:"Detox for iOS",description:"Detox for iOS",source:"@site/versioned_docs/version-19.x/Introduction.iOS.md",sourceDirName:".",slug:"/introduction/ios",permalink:"/Detox/docs/19.x/introduction/ios",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Introduction.iOS.md",tags:[],version:"19.x",frontMatter:{id:"ios",slug:"introduction/ios",title:"Detox for iOS",sidebar_label:"Detox for iOS"},sidebar:"tutorialSidebar",previous:{title:"Setting Up an Android Development & Testing Environment",permalink:"/Detox/docs/19.x/introduction/android-dev-env"},next:{title:"Detox for Android",permalink:"/Detox/docs/19.x/introduction/android"}},l={},s=[{value:"Detox for iOS",id:"detox-for-ios",level:2},{value:"1. Preliminary",id:"1-preliminary",level:3},{value:"2. Apply Detox Configuration",id:"2-apply-detox-configuration",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,n.c)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"detox-for-ios"},"Detox for iOS"),(0,r.yg)("h3",{id:"1-preliminary"},"1. Preliminary"),(0,r.yg)("p",null,"Run through the basic steps of the ",(0,r.yg)("a",{parentName:"p",href:"/Detox/docs/19.x/introduction/getting-started"},"Getting Started guide"),", such as the environment and tools setup."),(0,r.yg)("h3",{id:"2-apply-detox-configuration"},"2. Apply Detox Configuration"),(0,r.yg)("p",null,"Whether you\u2019ve selected to apply the configuration in a  ",(0,r.yg)("inlineCode",{parentName:"p"},".detoxrc.json")," or bundle it into your project\u2019s ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json")," (under the ",(0,r.yg)("inlineCode",{parentName:"p"},"detox")," section), this is what the configuration should roughly look like for iOS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": {\n    "simulator": {\n      "type": "ios.simulator",\n      "device": {\n        "type": "iPhone 12 Pro Max"\n      }\n    }\n  },\n  "apps": {\n    "ios.release": {\n      "name": "YourProject",\n      "type": "ios.app",\n      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/YourProject.app",\n      "build": "xcodebuild -project ios/YourProject.xcodeproj -scheme YourProject -sdk iphonesimulator -derivedDataPath ios/build"\n    }\n  },\n  "configurations": {\n    "ios.sim.release": {\n      "device": "simulator",\n      "app": "ios.release"\n    }\n  }\n}\n')),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For a comprehensive explanation of Detox configuration, see our ",(0,r.yg)("a",{parentName:"p",href:"/Detox/docs/19.x/config/overview"},"dedicated API-reference guide"),".")),(0,r.yg)("p",null,"In the above configuration example, make sure to provide the correct information for your project/app. Under the key ",(0,r.yg)("inlineCode",{parentName:"p"},'"binaryPath"'),", you should provide the path of the .app bundle to use. Normally, this is the path where the ",(0,r.yg)("inlineCode",{parentName:"p"},'"build\u201d')," command would output this bundle. Under the key ",(0,r.yg)("inlineCode",{parentName:"p"},'"build"'),", specify the ",(0,r.yg)("inlineCode",{parentName:"p"},"xcodebuild")," command for your project."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If your app uses CocoaPods, pass ",(0,r.yg)("inlineCode",{parentName:"p"},"-workspace")," in your ",(0,r.yg)("inlineCode",{parentName:"p"},"xcodebuild")," command, for example:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"build": "xcodebuild -workspace ios/YourProject.xcworkspace -scheme YourProject -sdk iphonesimulator -derivedDataPath ios/build"\n'))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For more information on using the xcodebuild command, visit ",(0,r.yg)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/technotes/tn2339/_index.html#//apple_ref/doc/uid/DTS40014588-CH1-HOW_DO_I_BUILD_MY_PROJECTS_FROM_THE_COMMAND_LINE_"},"Apple Docs"),".")),(0,r.yg)("p",null,"Also, make sure the simulator model specified under the key ",(0,r.yg)("inlineCode",{parentName:"p"},"device.type")," (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"iPhone 12 Pro Max")," above) is actually available on your machine (it was installed by Xcode). Check this by typing ",(0,r.yg)("inlineCode",{parentName:"p"},"applesimutils --list")," in Terminal to display all available simulators."),(0,r.yg)("p",null,"For a complete, working example, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/detox/test/package.json"},"Detox example project configuration"),"."))}u.isMDXComponent=!0}}]);