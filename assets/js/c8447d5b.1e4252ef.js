"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[252],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,y=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const i={},o="detox build",l={unversionedId:"cli/build",id:"cli/build",title:"detox build",description:"detox build [options]",source:"@site/../docs/cli/build.md",sourceDirName:"cli",slug:"/cli/build",permalink:"/Detox/docs/next/cli/build",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/cli/build.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"detox init",permalink:"/Detox/docs/next/cli/init"},next:{title:"detox start",permalink:"/Detox/docs/next/cli/start"}},p={},c=[{value:"Examples",id:"examples",level:2}],u={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"detox-build"},"detox build"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"detox build [options]")),(0,a.yg)("p",null,"Runs the ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/next/config/apps#properties"},(0,a.yg)("inlineCode",{parentName:"a"},"build")," command")," of the app (or apps)\nfrom the specified ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/next/config/overview#config-structure"},"configuration"),"."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Option"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-c, --configuration ",(0,a.yg)("inlineCode",{parentName:"td"},"<device config>")),(0,a.yg)("td",{parentName:"tr",align:null},"Select a device configuration from your defined configurations, if not supplied, and there\u2019s only one configuration, detox will default to it")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-C, --config-path ",(0,a.yg)("inlineCode",{parentName:"td"},"<configPath>")),(0,a.yg)("td",{parentName:"tr",align:null},"Specify Detox config file path. If not supplied, detox searches for .detoxrc","[",'.js] or "detox" section in package.json')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-i, --if-missing"),(0,a.yg)("td",{parentName:"tr",align:null},"Execute the build command only if the app binary is missing.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-s, --silent"),(0,a.yg)("td",{parentName:"tr",align:null},"Do not fail with error if an app config has no build command.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--help"),(0,a.yg)("td",{parentName:"tr",align:null},"Show help")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"If you have only one configuration, you can simply use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"detox build\n")),(0,a.yg)("p",null,"To choose a specific configuration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"detox build --configuration yourConfiguration\n")),(0,a.yg)("p",null,"To skip building an app if it already is built:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"detox build --configuration yourConfiguration --if-missing\n")))}s.isMDXComponent=!0}}]);