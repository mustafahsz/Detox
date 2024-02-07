"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3168],{87768:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(11504),r=n(14971);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.c)(o.tabItem,i),hidden:n},t)}},61268:(e,t,n)=>{n.d(t,{c:()=>w});var a=n(45072),r=n(11504),o=n(14971),i=n(53943),l=n(55592),d=n(10632),s=n(27128),u=n(21148);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.Uz)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._M)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,s]=g({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.IN)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=d??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),y(e)}),[s,y,o]),tabValues:o}}var h=n(93664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:d,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.MV)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.c)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.c)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,o.c)("tabs-container",f.tabList)},r.createElement(b,(0,a.c)({},e,t)),r.createElement(N,(0,a.c)({},e,t)))}function w(e){const t=(0,h.c)();return r.createElement(v,(0,a.c)({key:String(t)},e))}},11388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var a=n(45072),r=(n(11504),n(95788)),o=n(61268),i=n(87768),l=n(26516);const d={},s="Devices",u={unversionedId:"config/devices",id:"version-20.x/config/devices",title:"Devices",description:"The format of Detox config allows you to define inside it multiple device configs in a key-value manner, i.e.:",source:"@site/versioned_docs/version-20.x/config/devices.mdx",sourceDirName:"config",slug:"/config/devices",permalink:"/Detox/docs/config/devices",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/config/devices.mdx",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Overview",permalink:"/Detox/docs/config/overview"},next:{title:"Apps",permalink:"/Detox/docs/config/apps"}},p={},c=[{value:"Location",id:"location",level:2},{value:"Examples",id:"examples",level:2},{value:"Properties",id:"properties",level:2}],m={toc:c},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"devices"},"Devices"),(0,r.yg)("p",null,"The format of Detox config allows you to define inside it multiple device configs in a key-value manner, i.e.:"),(0,r.yg)("h2",{id:"location"},"Location"),(0,r.yg)(l.cp,{sectionName:"devices",propertyName:"device",mdxType:"Location"}),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)(o.c,{groupId:"deviceType",mdxType:"Tabs"},(0,r.yg)(i.c,{value:"ios.simulator",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ios.simulator",\n  "device": {\n    // one of these or a combination of them\n    "id": "D53474CF-7DD1-4673-8517-E75DAD6C34D6",\n    "type": "iPhone 11 Pro",\n    "name": "MySim",\n    "os": "iOS 13.0"\n  },\n}\n'))),(0,r.yg)(i.c,{value:"android.emulator",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "android.emulator",\n  "device": {\n    "avdName": "Pixel_2_API_29"\n  },\n  "utilBinaryPaths": [\n    "optional-property-with/path/to/test-butler-or-anything-else.apk"\n  ]\n}\n'))),(0,r.yg)(i.c,{value:"android.attached",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "android.attached",\n  "device": {\n    "adbName": "YOGAA1BBB412"\n  }\n}\n'))),(0,r.yg)(i.c,{value:"android.genycloud",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "android.genycloud",\n  "device": {\n    // one of these:\n    "recipeUUID": "11111111-2222-3333-4444-555555555555"\n    "recipeName": "MyRecipeName",\n  }\n}\n')))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("p",null,"A device config can have the following params:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Configuration Params"),(0,r.yg)("th",{parentName:"tr",align:null},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"type")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},(0,r.yg)("strong",{parentName:"em"},"Required.")," String Literal"),". Mandatory property to discern device types: ",(0,r.yg)("inlineCode",{parentName:"td"},"ios.simulator"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"android.emulator"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"android.attached"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"android.genycloud")," etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"device")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},(0,r.yg)("strong",{parentName:"em"},"Required.")," Object.")," Device query, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},'{ "byType": "iPhone 11 Pro" }')," for iOS simulator, ",(0,r.yg)("inlineCode",{parentName:"td"},'{ "avdName": "Pixel_2_API_29" }')," for Android emulator or ",(0,r.yg)("inlineCode",{parentName:"td"},'{ "adbName": "<pattern>" }')," for attached Android device with name matching the regex.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bootArgs")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional. String. Supported by ",(0,r.yg)("inlineCode",{parentName:"em"},"ios.simulator")," and ",(0,r.yg)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,r.yg)("br",null)," Supply an extra ",(0,r.yg)("em",{parentName:"td"},"String")," of arguments to ",(0,r.yg)("inlineCode",{parentName:"td"},"xcrun simctl boot ...")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"emulator -verbose ... @AVD_Name"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"forceAdbInstall")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional. Boolean. Supported for Android devices only.")," ",(0,r.yg)("br",null)," A ",(0,r.yg)("em",{parentName:"td"},"Boolean")," value, ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," by default. When set to ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", it tells ",(0,r.yg)("inlineCode",{parentName:"td"},"device.installApp()")," to use ",(0,r.yg)("inlineCode",{parentName:"td"},"adb install"),". Otherwise, it would use the combination of ",(0,r.yg)("inlineCode",{parentName:"td"},"adb push <app.apk>")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"adb shell pm install"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"utilBinaryPaths")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional. Array of strings. Supported for Android devices only.")," ",(0,r.yg)("br",null)," An array of relative paths of ",(0,r.yg)("em",{parentName:"td"},"utility")," app (APK) binary-files to preinstall on the tested devices - once before the test execution begins.",(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": these are not affected by various install-lifecycle events, such as launching an app with ",(0,r.yg)("inlineCode",{parentName:"td"},"device.launchApp({delete: true})"),", which reinstalls the app. A good example of why this might come in handy is ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/linkedin/test-butler"},"Test Butler"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gpuMode")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional. String Literal (",(0,r.yg)("code",null,"auto ","|"," host ","|"," swiftshader","_","indirect ","|"," angle","_","indirect ","|"," guest"),"). Supported by ",(0,r.yg)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,r.yg)("br",null)," A fixed ",(0,r.yg)("strong",{parentName:"td"},"string")," , which tells ",(0,r.yg)("a",{parentName:"td",href:"https://developer.android.com/studio/run/emulator-acceleration#command-gpu"},"in which GPU mode")," the emulator should be booted.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"headless")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional. Boolean.")," ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," by default. When set to ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", it tells Detox to boot an Android emulator with ",(0,r.yg)("inlineCode",{parentName:"td"},"-no-window")," option, or to not open the iOS Simulator app when running with Android or iOS respectively.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"readonly")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Optional. Boolean. Supported by ",(0,r.yg)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,r.yg)("br",null),"  ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," by default. When set to ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", it forces Detox to boot even a single emulator with ",(0,r.yg)("inlineCode",{parentName:"td"},"-read-only")," option.",(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": when used with multiple workers, this setting has no effect \u2014 emulators will be booted always with ",(0,r.yg)("inlineCode",{parentName:"td"},"-read-only"),".")))))}y.isMDXComponent=!0},26516:(e,t,n)=>{n.d(t,{cp:()=>d});var a=n(45072),r=(n(11504),n(95788)),o=n(54628);const i={toc:[]},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(l,(0,a.c)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can define the ",n.propertyName," config in two ways: ",(0,r.yg)("i",null,"aliased")," and ",(0,r.yg)("i",null,"inlined")," (per a configuration):"),(0,r.yg)(o.c,{title:".detoxrc.js",language:"javascript",mdxType:"CodeBlock"},["/** @type {Detox.DetoxConfig} */","module.exports = {",`  ${n.sectionName}: {`,"// highlight-start",`    ${n.propertyName}Key: {`,`      /* \u2026 ${n.propertyName} config \u2026 */`,"    }","// highlight-end","  },","  /* \u2026 */","  configurations: {","    'example.aliased': {","      /* \u2026 */","// highlight-next-line",`      ${n.propertyName}: '${n.propertyName}Key', // (1)`,"    },","    'example.inlined': {","      /* \u2026 */","// highlight-start",`      ${n.propertyName}: { // (2)`,`        /* \u2026 ${n.propertyName} config \u2026 */`,"      },","// highlight-end","    },","  },","};"].join("\n")))}d.isMDXComponent=!0}}]);