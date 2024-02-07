"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4790],{32436:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var o=a(45072),t=(a(11504),a(95788)),i=a(26184);const l={},p="Behavior",r={unversionedId:"config/behavior",id:"config/behavior",title:"Behavior",description:"If you need to tweak the flow of detox.init() or detox.cleanup() steps,",source:"@site/../docs/config/behavior.mdx",sourceDirName:"config",slug:"/config/behavior",permalink:"/Detox/docs/next/config/behavior",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/config/behavior.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Artifacts",permalink:"/Detox/docs/next/config/artifacts"},next:{title:"Logger",permalink:"/Detox/docs/next/config/logger"}},s={},u=[{value:"Location",id:"location",level:2},{value:"Default values",id:"default-values",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>behavior.init.reinstallApp</code> [boolean]",id:"behaviorinitreinstallapp-boolean",level:3},{value:"<code>behavior.init.exposeGlobals</code> [boolean]",id:"behaviorinitexposeglobals-boolean",level:3},{value:"<code>behavior.launchApp</code> [enum]",id:"behaviorlaunchapp-enum",level:3},{value:"<code>behavior.cleanup.shutdownDevice</code> [boolean]",id:"behaviorcleanupshutdowndevice-boolean",level:3}],d={toc:u},c="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,o.c)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"behavior"},"Behavior"),(0,t.yg)("p",null,"If you need to tweak the flow of ",(0,t.yg)("inlineCode",{parentName:"p"},"detox.init()")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"detox.cleanup()")," steps,\nyou have a few options to change. These are the default behavior values:"),(0,t.yg)("h2",{id:"location"},"Location"),(0,t.yg)(i.cp,{sectionName:"behavior",mdxType:"Location"}),(0,t.yg)("h2",{id:"default-values"},"Default values"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "behavior": {\n    "init": {\n      "reinstallApp": true,\n      "exposeGlobals": true,\n    },\n    "launchApp": "auto",\n    "cleanup": {\n      "shutdownDevice": false\n    }\n  }\n}\n')),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"behaviorinitreinstallapp-boolean"},(0,t.yg)("inlineCode",{parentName:"h3"},"behavior.init.reinstallApp")," ","[","boolean]"),(0,t.yg)("p",null,"Default: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,t.yg)("p",null,"When ",(0,t.yg)("em",{parentName:"p"},"true"),", Detox will uninstall and install the app upon the initialization."),(0,t.yg)("p",null,"Setting it to ",(0,t.yg)("em",{parentName:"p"},"false")," forces the tests to use the previously installed app on the device,\nprovided you have installed it beforehand ",(0,t.yg)("a",{parentName:"p",href:"/Detox/docs/next/api/device#deviceinstallapp"},"explicitly")," or manually."),(0,t.yg)("h3",{id:"behaviorinitexposeglobals-boolean"},(0,t.yg)("inlineCode",{parentName:"h3"},"behavior.init.exposeGlobals")," ","[","boolean]"),(0,t.yg)("p",null,"Default: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,t.yg)("p",null,"When ",(0,t.yg)("em",{parentName:"p"},"true"),", it forces Detox to expose ",(0,t.yg)("inlineCode",{parentName:"p"},"device"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"expect"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"element"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"by")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"waitFor"),"\nas global variables."),(0,t.yg)("p",null,"When ",(0,t.yg)("em",{parentName:"p"},"false"),", you should import them explicitly instead:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"const { by, device, expect, element } = require('detox');\n")),(0,t.yg)("p",null,"or, in TypeScript:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"import { by, device, expect, element } from 'detox';\n")),(0,t.yg)("h3",{id:"behaviorlaunchapp-enum"},(0,t.yg)("inlineCode",{parentName:"h3"},"behavior.launchApp")," ","[","enum]"),(0,t.yg)("p",null,"Default: ",(0,t.yg)("inlineCode",{parentName:"p"},"auto"),"."),(0,t.yg)("p",null,"Possible values: ",(0,t.yg)("inlineCode",{parentName:"p"},"auto"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"manual"),"."),(0,t.yg)("p",null,"When set to ",(0,t.yg)("inlineCode",{parentName:"p"},"manual"),", Detox won't be launching your app automatically. Instead, it will\nbe waiting until you launch it manually from IDE and press any key to resume the test\nexecution. This is useful when you want to ",(0,t.yg)("a",{parentName:"p",href:"/Detox/docs/next/introduction/debugging"},"debug the native codebase")," when running Detox tests."),(0,t.yg)("p",null,"Also, setting it to ",(0,t.yg)("inlineCode",{parentName:"p"},"manual")," resets ",(0,t.yg)("inlineCode",{parentName:"p"},"behavior.reinstallApp")," to ",(0,t.yg)("em",{parentName:"p"},"false"),"."),(0,t.yg)("h3",{id:"behaviorcleanupshutdowndevice-boolean"},(0,t.yg)("inlineCode",{parentName:"h3"},"behavior.cleanup.shutdownDevice")," ","[","boolean]"),(0,t.yg)("p",null,"Default: ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("p",null,"When set to ",(0,t.yg)("em",{parentName:"p"},"true"),", Detox will shut down the device after the tests finish."))}g.isMDXComponent=!0},26184:(e,n,a)=>{a.d(n,{cp:()=>r});var o=a(45072),t=(a(11504),a(95788)),i=a(54628);const l={toc:[]},p="wrapper";function r(e){let{components:n,...a}=e;return(0,t.yg)(p,(0,o.c)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"You can define the ",(0,t.yg)("code",null,a.sectionName)," config section in two ways: ",(0,t.yg)("i",null,"globally")," and ",(0,t.yg)("i",null,"locally")," (per a configuration):"),(0,t.yg)(i.c,{title:".detoxrc.js",language:"javascript",mdxType:"CodeBlock"},["/** @type {Detox.DetoxConfig} */","module.exports = {","// highlight-start",`  ${a.sectionName}: {`,"    /* global section */","  },","// highlight-end","  devices: { /* \u2026 */ },","  apps: { /* \u2026 */ },","  configurations: {","    'ios.sim.debug': {","      device: 'iphone',","      app: 'ios.debug',","// highlight-start",`      ${a.sectionName}: {`,"        /* local (per-configuration) section */","      },","// highlight-end","    },","  },","};"].join("\n")))}r.isMDXComponent=!0}}]);