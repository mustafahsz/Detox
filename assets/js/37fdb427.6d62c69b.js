"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3688],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>m});var o=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,m=c["".concat(l,".").concat(g)]||c[g]||p[g]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},64116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(45072),i=(n(11504),n(95788));const r={},a="Building and Testing",s={unversionedId:"contributing/code/building-and-testing",id:"contributing/code/building-and-testing",title:"Building and Testing",description:"Our JavaScript code is thoroughly verified with comprehensive unit tests, complemented by integration tests.",source:"@site/../docs/contributing/code/building-and-testing.md",sourceDirName:"contributing/code",slug:"/contributing/code/building-and-testing",permalink:"/Detox/docs/next/contributing/code/building-and-testing",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/contributing/code/building-and-testing.md",tags:[],version:"current",frontMatter:{},sidebar:"contributeSidebar",previous:{title:"Setting up the Development Environment",permalink:"/Detox/docs/next/contributing/code/setting-up-the-dev-environment"},next:{title:"Example Projects",permalink:"/Detox/docs/next/contributing/code/example-projects"}},l={},d=[{value:"Unit Tests (JavaScript)",id:"unit-tests-javascript",level:2},{value:"Unit Tests - Android Native",id:"unit-tests---android-native",level:2},{value:"iOS: Rebuilding the Framework",id:"ios-rebuilding-the-framework",level:2},{value:"Building the Detox Test App",id:"building-the-detox-test-app",level:2},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Running the CI Scripts Locally",id:"running-the-ci-scripts-locally",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,o.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"building-and-testing"},"Building and Testing"),(0,i.yg)("p",null,"Our JavaScript code is thoroughly verified with comprehensive unit tests, complemented by integration tests.\nAdditionally, our native code undergoes rigorous testing through both unit and integration tests.\nTo ensure complete functionality, we conduct end-to-end tests on a fully-featured React Native application, designed to encompass all our public APIs (refer to our ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/detox/test"},"test app")," for details)."),(0,i.yg)("admonition",{title:"Important",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Before submitting a pull request, please ensure at a minimum that your code adheres to our linting standards and that all unit tests run successfully without any errors.")),(0,i.yg)("p",null,"The following sections describe how to build and test our code, with a general instruction.\nHowever, we recommend you to refer to our ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," files for a complete list of available scripts:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Detox Framework: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/wix/Detox/blob/master/detox/package.json"},(0,i.yg)("inlineCode",{parentName:"a"},"detox/package.json"))),(0,i.yg)("li",{parentName:"ul"},"Detox Test App: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/wix/Detox/blob/master/detox/test/package.json"},(0,i.yg)("inlineCode",{parentName:"a"},"detox/test/package.json")))),(0,i.yg)("h2",{id:"unit-tests-javascript"},"Unit Tests (JavaScript)"),(0,i.yg)("p",null,"We use ",(0,i.yg)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," for running our unit tests."),(0,i.yg)("p",null,"Under the ",(0,i.yg)("inlineCode",{parentName:"p"},"detox/")," directory, run the following command to run the unit tests with coverage:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd detox\nnpm run unit\n")),(0,i.yg)("p",null,"The unit tests reside alongside the JavaScript code. Typically, they can also be easily run directly from within an IDE such as ",(0,i.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/webstorm/"},"WebStorm")," or ",(0,i.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"vscode"),", even in debug (i.e step-by-step execution) mode."),(0,i.yg)("h2",{id:"unit-tests---android-native"},"Unit Tests - Android Native"),(0,i.yg)("p",null,"We also have unit tests for our native code (Android only). They reside alongside Detox's native Android code, under a dedicated subdirectory called ",(0,i.yg)("inlineCode",{parentName:"p"},"testFull"),". You can run them using the following commands:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd detox\nnpm run unit:android-release\n")),(0,i.yg)("p",null,"The native unit tests can also be run in ",(0,i.yg)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio")," (i.e. the IDE for Android apps development). Most tests can be run seamlessly using Android Studio's build-in support for unit-tests, but some require a plugin called ",(0,i.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/10915-spek-framework"},"Spek"),", which can be installed from within Android Studio itself - under the Plugins marketplace."),(0,i.yg)("h2",{id:"ios-rebuilding-the-framework"},"iOS: Rebuilding the Framework"),(0,i.yg)("p",null,"After changing the native code of Detox iOS, you need to rebuild the Detox framework. This is done when running:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"detox build-framework-cache\n")),(0,i.yg)("p",null,"Note that it is only required when you change the native code of Detox, or one of its dependencies (e.g. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/DetoxSync"},"DetoxSync"),").\nIf you are only changing the JavaScript code, you don't need to rebuild the framework."),(0,i.yg)("h2",{id:"building-the-detox-test-app"},"Building the Detox Test App"),(0,i.yg)("p",null,"The Detox self-test app is a full-feature React Native app for testing Detox end-to-end."),(0,i.yg)("p",null,"Before running the tests, you must first build the Detox test app. To do so, under ",(0,i.yg)("inlineCode",{parentName:"p"},"detox/test"),", use the ",(0,i.yg)("inlineCode",{parentName:"p"},"build")," command of the Detox CLI.\nList of available configurations can be found under ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/6e87dc13826341dba21ed0a732e5b57efa08e7b5/detox/test/e2e/detox.config.js#L137"},(0,i.yg)("inlineCode",{parentName:"a"},"detox/test/e2e/detox.config.js")),"."),(0,i.yg)("p",null,"For example, to build the Detox test app for iOS in release mode, run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\ndetox build --configuration ios.sim.release\n\n### End-to-End Tests\n\nTo run the end-to-end tests (after building the app), use the `test` command of the Detox CLI.\n\nFor example, to run the end-to-end tests for iOS in release mode, run:\n\n```bash\ncd detox/test\ndetox test --configuration ios.sim.release\n")),(0,i.yg)("p",null,"To run in Android release mode, run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\ndetox test --configuration android.emu.release\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Mind that on Android, Detox expects a specific AVD with a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/24f68c3bd7675ed6f508e3f5fea97509eb7991b2/detox/test/e2e/detox.config.js#L111"},"specific name")," to be available on your computer.\nBe sure to ",(0,i.yg)("a",{parentName:"p",href:"https://developer.android.com/studio/run/managing-avds#createavd"},"install such an AVD"),", beforehand.")),(0,i.yg)("h2",{id:"integration-tests"},"Integration Tests"),(0,i.yg)("p",null,"Besides unit tests and end-to-end tests, we have some middle ground integration tests, which typically run Detox in a custom headless-like mode (i.e. stubs replace devices). Those tests typically execute Detox from a command line in that mode, and then do some post-processing of the results. We use ",(0,i.yg)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," for running our integration tests."),(0,i.yg)("p",null,"The integration reside under a dedicated directory alongside Detox's the self-test app's code."),(0,i.yg)("p",null,"Run the following command to run the integration tests:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nnpm run integration\n\n### Linting\n\nWe use [ESLint] for linting our JavaScript code.\n\nYou can run the linter locally using the following command (under `detox/test`):\n\n```bash\nnpm run lint\n")),(0,i.yg)("p",null,"We also test our types using the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm run test:types\n")),(0,i.yg)("h2",{id:"running-the-ci-scripts-locally"},"Running the CI Scripts Locally"),(0,i.yg)("p",null,"On our CI, we test our changes on both iOS and Android, and we lint-check our code.\nYou can run the same scripts we run on our CI locally, to ensure your changes are passing the tests (under the project's root directory):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm run ci.ios\nnpm run ci.android\n")),(0,i.yg)("p",null,"Refer to the scripts ",(0,i.yg)("inlineCode",{parentName:"p"},"scripts/ci.ios.sh")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"scripts/ci.android.sh")," to see how we run the tests on our CI."))}p.isMDXComponent=!0}}]);