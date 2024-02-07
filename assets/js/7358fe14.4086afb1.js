"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5168],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>g});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(g,o(o({ref:t},s),{},{components:a})):r.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87768:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(11504),n=a(14971);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.c)(l.tabItem,o),hidden:a},t)}},61268:(e,t,a)=>{a.d(t,{c:()=>x});var r=a(45072),n=a(11504),l=a(14971),o=a(53943),i=a(55592),u=a(10632),c=a(27128),s=a(21148);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.Uz)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._M)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,c]=g({queryString:a,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.IN)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,l]),tabValues:l}}var b=a(93664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.MV)(),p=e=>{const t=e.currentTarget,a=s.indexOf(t),r=c[a].value;r!==i&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.c)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.c)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=y(e);return n.createElement("div",{className:(0,l.c)("tabs-container",f.tabList)},n.createElement(h,(0,r.c)({},e,t)),n.createElement(v,(0,r.c)({},e,t)))}function x(e){const t=(0,b.c)();return n.createElement(N,(0,r.c)({key:String(t)},e))}},9756:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(45072),n=(a(11504),a(95788)),l=a(61268),o=a(87768);const i={},u="detox",c={unversionedId:"cli/overview",id:"version-20.x/cli/overview",title:"detox",description:"Detox CLI lets you operate Detox from command line.",source:"@site/versioned_docs/version-20.x/cli/overview.md",sourceDirName:"cli",slug:"/cli/overview",permalink:"/Detox/docs/cli/overview",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/cli/overview.md",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Test runner",permalink:"/Detox/docs/config/testRunner"},next:{title:"detox init",permalink:"/Detox/docs/cli/init"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"detox"},"detox"),(0,n.yg)("p",null,"Detox CLI lets you operate Detox from command line."),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("p",null,"Install ",(0,n.yg)("inlineCode",{parentName:"p"},"detox-cli")," globally via ",(0,n.yg)("a",{parentName:"p",href:"http://npmjs.org/detox-cli"},"npm"),":"),(0,n.yg)(l.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.yg)(o.c,{value:"npm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install detox-cli --global\n"))),(0,n.yg)(o.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"yarn global add detox-cli\n"))),(0,n.yg)(o.c,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"pnpm add detox-cli --global\n")))),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"detox <command> [options]\n")),(0,n.yg)("h2",{id:"commands"},"Commands"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Command"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/init"},"init")),(0,n.yg)("td",{parentName:"tr",align:null},"Create initial E2E tests folder for Detox.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/build"},"build")),(0,n.yg)("td",{parentName:"tr",align:null},"Run the command defined in 'build' property of the specified configuration.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/test"},"test")),(0,n.yg)("td",{parentName:"tr",align:null},"Initiating your test suite.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/recorder"},"recorder")),(0,n.yg)("td",{parentName:"tr",align:null},"Starts a ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder")," recording.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/build-framework-cache"},"build-framework-cache")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"MacOS only.")," Builds Detox.framework to ","~","/Library/Detox. The framework cache is specific for each combination of Xcode and Detox versions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/clean-framework-cache"},"clean-framework-cache")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"MacOS only.")," Deletes all compiled framework binaries from ","~","/Library/Detox, they will be rebuilt on 'npm install' or when running 'build-framework-cache'.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/rebuild-framework-cache"},"rebuild-framework-cache")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("strong",{parentName:"td"},"MacOS only.")," Rebuilds the Detox cache.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/reset-lock-file"},"reset-lock-file")),(0,n.yg)("td",{parentName:"tr",align:null},"Resets Detox lock file completely - all devices are marked as available after that.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/Detox/docs/cli/run-server"},"run-server")),(0,n.yg)("td",{parentName:"tr",align:null},"Starts a standalone Detox server.")))),(0,n.yg)("h2",{id:"options"},"Options"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Options"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--version"),(0,n.yg)("td",{parentName:"tr",align:null},"Show version number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--help"),(0,n.yg)("td",{parentName:"tr",align:null},"Show help")))))}g.isMDXComponent=!0}}]);