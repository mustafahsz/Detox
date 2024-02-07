"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8598],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const o={},i="detox start",l={unversionedId:"cli/start",id:"version-20.x/cli/start",title:"detox start",description:"detox start [options]",source:"@site/versioned_docs/version-20.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/Detox/docs/cli/start",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/cli/start.md",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"detox build",permalink:"/Detox/docs/cli/build"},next:{title:"detox test",permalink:"/Detox/docs/cli/test"}},p={},c=[{value:"Examples",id:"examples",level:2}],s={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"detox-start"},"detox start"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"detox start [options]")),(0,a.yg)("p",null,"Runs the ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/config/apps#properties"},(0,a.yg)("inlineCode",{parentName:"a"},"start")," command")," of the app (or apps)\nfrom the specified ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/config/overview#config-structure"},"configuration"),"."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Option"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-C, --config-path ",(0,a.yg)("inlineCode",{parentName:"td"},"<configPath>")),(0,a.yg)("td",{parentName:"tr",align:null},"Specify Detox config file path. If not supplied, Detox searches for .detoxrc","[",'.js] or "detox" section in package.json.')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-c, --configuration ",(0,a.yg)("inlineCode",{parentName:"td"},"<device config>")),(0,a.yg)("td",{parentName:"tr",align:null},'Select a local configuration from your defined configurations to extract the app "start" scripts from it. If not supplied, and there\u2019s only one configuration, Detox will default to it.')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"-f, --force"),(0,a.yg)("td",{parentName:"tr",align:null},'Ignore errors from the "start" scripts and continue.')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"--help"),(0,a.yg)("td",{parentName:"tr",align:null},"Show help")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"If you have only one configuration, you can simply use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"detox start\n")),(0,a.yg)("p",null,"To choose a specific configuration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# long alias:\ndetox start --configuration yourConfiguration\n# short alias:\ndetox start -c yourConfiguration\n")),(0,a.yg)("p",null,'To forward extra arguments to the "start" script, e.g.:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"detox start -c yourConfiguration -- --port 8082\n")),(0,a.yg)("p",null,'To ignore errors from the "start" scripts and continue:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"detox start -c yourConfiguration --force\n")))}g.isMDXComponent=!0}}]);