"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5278],{95788:(e,t,r)=>{r.d(t,{Iu:()=>l,yg:()=>f});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(u,".").concat(d)]||p[d]||g[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(45072),i=(r(11504),r(95788));const o={},a="Reporting Bugs",s={unversionedId:"contributing/reporting-bugs",id:"version-20.x/contributing/reporting-bugs",title:"Reporting Bugs",description:"Encountering a bug? Your detailed report is key for us to identify and rectify the issue.",source:"@site/versioned_docs/version-20.x/contributing/reporting-bugs.md",sourceDirName:"contributing",slug:"/contributing/reporting-bugs",permalink:"/Detox/docs/contributing/reporting-bugs",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/contributing/reporting-bugs.md",tags:[],version:"20.x",frontMatter:{},sidebar:"contributeSidebar",previous:{title:"Answering Questions",permalink:"/Detox/docs/contributing/questions/answering-questions"},next:{title:"Feedback and Suggestions",permalink:"/Detox/docs/contributing/feature-requests"}},u={},c=[{value:"Search for Existing Issues",id:"search-for-existing-issues",level:2},{value:"Create a Bug Report",id:"create-a-bug-report",level:2}],l={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.c)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"reporting-bugs"},"Reporting Bugs"),(0,i.yg)("p",null,"Encountering a bug? Your detailed report is key for us to identify and rectify the issue."),(0,i.yg)("p",null,"Before reporting a bug, please review the following guidelines."),(0,i.yg)("h2",{id:"search-for-existing-issues"},"Search for Existing Issues"),(0,i.yg)("p",null,"Before creating a new issue, search for ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues"},"existing issues")," to see if the bug has already been reported.\nIf you find an existing issue, add a comment to it with any additional information you have."),(0,i.yg)("h2",{id:"create-a-bug-report"},"Create a Bug Report"),(0,i.yg)("p",null,"If you can\u2019t find an existing issue, create a new one. When creating a bug report, follow these guidelines:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Follow the Template:")," While ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/new/choose"},"creating a bug report on GitHub"),", adhere to the provided template for creating a clear and concise report."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Reproduction Steps:")," Providing a reproduction example is essential."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Artifacts:")," Include screenshots, logs, visibility artifacts, and any other relevant information. Be ready to provide more information upon request."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Detailed Description:")," Avoid creating issues with brief descriptions or general error messages. Providing a thorough description and context is vital.")),(0,i.yg)("admonition",{title:"Tip",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Creating a minimal code reproduction is crucial as it helps other contributors and maintainers understand and investigate the issue better.\n",(0,i.yg)("strong",{parentName:"p"},"Issues without a reproduction are less likely to be addressed"),".")))}g.isMDXComponent=!0}}]);