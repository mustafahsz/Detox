"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6040],{5162:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),i=a(6010);const l="tabItem_Ymn6";function m(e){let{children:t,hidden:a,className:m}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,m),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),i=a(7294),l=a(6010),m=a(2389),r=a(7392),o=a(7094),u=a(2466);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:m,values:p,groupId:c,className:g}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,r.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,o.U)(),[f,x]=(0,i.useState)(b),D=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=c){const e=N[c];null!=e&&e!==f&&k.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=D.indexOf(t),n=k[a].value;n!==f&&(S(t),x(n),null!=c&&v(c,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]??D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]??D[D.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},g)},k.map((e=>{let{value:t,label:a,attributes:m}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>D.push(e),onKeyDown:C,onClick:T},m,{className:(0,l.Z)("tabs__item",d,m?.className,{"tabs__item--active":f===t})}),a??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function c(e){const t=(0,m.Z)();return i.createElement(p,(0,n.Z)({key:String(t)},e))}},519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),l=a(814),m=a(5488),r=a(5162);const o={title:"Internal Demo Page for Styling"},u=void 0,s={unversionedId:"demo",id:"version-20.x/demo",title:"Internal Demo Page for Styling",description:"This page is for internal use only. If you are a contributor to the Detox project, you can use this page to test your changes to the website documentation pages",source:"@site/versioned_docs/version-20.x/demo.mdx",sourceDirName:".",slug:"/demo",permalink:"/Detox/docs/demo",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/demo.mdx",tags:[],version:"20.x",frontMatter:{title:"Internal Demo Page for Styling"}},d={},p=[{value:"Headings section",id:"headings-section",level:2},{value:"Third level heading",id:"third-level-heading",level:3},{value:"<code>id</code> [string | number]",id:"id-string--number",level:3},{value:"Fourth level heading",id:"fourth-level-heading",level:4},{value:"<code>id</code> [string | number]",id:"id-string--number-1",level:4},{value:"Fifth level heading",id:"fifth-level-heading",level:5},{value:"<code>id</code> [string | number]",id:"id-string--number-2",level:5},{value:"Sixth level heading",id:"sixth-level-heading",level:6},{value:"<code>id</code> [string | number]",id:"id-string--number-3",level:6},{value:"Paragraphs section",id:"paragraphs-section",level:2},{value:"Table section",id:"table-section",level:2},{value:"Admonitions section",id:"admonitions-section",level:2},{value:"Syntax highlighting section",id:"syntax-highlighting-section",level:2},{value:"npm",id:"npm",level:3},{value:"Shell",id:"shell",level:3},{value:"JSX",id:"jsx",level:3},{value:"Java",id:"java",level:3},{value:"diff",id:"diff",level:3},{value:"JSON",id:"json",level:3},{value:"YAML",id:"yaml",level:3}],c={toc:p};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"robots",content:"noindex, nofollow"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This page is for internal use only. If you are a contributor to the Detox project, you can use this page to test your changes to the website documentation pages\nstyling. If you are not a contributor, you can ignore this page. Follow this link to the ",(0,i.kt)("a",{parentName:"p",href:"/"},"Detox Home Page"),".")),(0,i.kt)("h2",{id:"headings-section"},"Headings section"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h3",{id:"third-level-heading"},"Third level heading"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h3",{id:"id-string--number"},(0,i.kt)("inlineCode",{parentName:"h3"},"id")," ","[","string ","|"," number","]"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h4",{id:"fourth-level-heading"},"Fourth level heading"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h4",{id:"id-string--number-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," ","[","string ","|"," number","]"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h5",{id:"fifth-level-heading"},"Fifth level heading"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h5",{id:"id-string--number-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"id")," ","[","string ","|"," number","]"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h6",{id:"sixth-level-heading"},"Sixth level heading"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h6",{id:"id-string--number-3"},(0,i.kt)("inlineCode",{parentName:"h6"},"id")," ","[","string ","|"," number","]"),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, odio euismod accumsan dignissim, risus mi blandit ipsum, id ullamcorper risus urna eget augue."),(0,i.kt)("h2",{id:"paragraphs-section"},"Paragraphs section"),(0,i.kt)("p",null,"Dummy double-spaced paragraph example, consectetur adipiscing elit. Curabitur euismod, arcu eu commodo tincidunt, est eros auctor augue, eget bibendum nibh tellus a mi.",(0,i.kt)("br",null),"Integer blandit, enim quis malesuada fringilla, elit augue pellentesque justo, eget euismod elit sapien id magna. Sed molestie ultrices metus, a congue erat."),(0,i.kt)("p",null,"This is a regular text, an ",(0,i.kt)("em",{parentName:"p"},"italic text"),", a ",(0,i.kt)("strong",{parentName:"p"},"bold text"),", a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"both italic and bold text")),", a ",(0,i.kt)("del",{parentName:"p"},"strikethrough text"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"inline code text"),", a ",(0,i.kt)("a",{parentName:"p",href:"#"},"simple link"),", and a ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"link with inline code")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Here is an example of a code block with plain text.\n// highlight-next-line\nAnd this is a highlighted line.\n")),(0,i.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, arcu eu commodo tincidunt, est eros auctor augue, eget bibendum nibh tellus a mi. Integer blandit, enim quis malesuada fringilla, elit augue pellentesque justo, eget euismod elit sapien id magna. Sed molestie ultrices metus, a congue erat."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://via.placeholder.com/728x450.png?text=Isquix+ConsecteturAdipiscing.ips+Siquis+lorem",alt:"This is a placeholder image."})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dummy.config.js")," \u2013 dummy config file;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dummy.test.js")," \u2013 dummy test file;"))),(0,i.kt)("li",{parentName:"ul"},"Donec in dui eget metus aliquet facilisis ac eget tortor."),(0,i.kt)("li",{parentName:"ul"},"Donec scelerisque ex lacinia, commodo eros eget, pretium leo.")),(0,i.kt)("h2",{id:"table-section"},"Table section"),(0,i.kt)("p",null,"A simple table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Dummy Params"),(0,i.kt)("th",{parentName:"tr",align:null},"Details of Dummy Text Data"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Required.")," String Literal. Dummy property to discern device types: dummy.simulator, dummy.emulator, dummy.attached, dummy.genydummy etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"device"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Required.")," Object. Device query, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},'{ "byType": "dummy_phone" }')," for dummy simulator, ",(0,i.kt)("inlineCode",{parentName:"td"},'{ "avdName": "dummy_avd" }')," for dummy emulator or ",(0,i.kt)("inlineCode",{parentName:"td"},'{ "adbName": "<pattern>" }')," for attached dummy device with name matching the regex.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bootArgs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional. String. Supported by dummy.simulator and dummy.emulator only")," ",(0,i.kt)("br",null)," Supply an extra String of arguments to dummy_simctl boot ... or emulator -verbose ... @AVD_Name.")))),(0,i.kt)("p",null,"A workaround for displaying images side by side:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"th",src:"https://via.placeholder.com/728x450.png?text=Left+image",alt:"Left image"})),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"th",src:"https://via.placeholder.com/728x450.png?text=Right+image",alt:"Right image"}))))),(0,i.kt)("h2",{id:"admonitions-section"},"Admonitions section"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Rhoncus magna eget, pellentesque auguerhoncus magna eget, pellentesque augue ",(0,i.kt)("strong",{parentName:"p"},"Android")," due to DUMMY issues:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},"rhoncus magna eget, pellentesque auguerhoncus magna eget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},"Curabitur euismod, arcu eu commodo tincidunt, est eros auctor augue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},"pellentesque auguerhoncus magna eget")))),(0,i.kt)("admonition",{title:"DANGER",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"This is a DANGER admonition SAMPLE with a custom background color, and a border color.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If your app Dummy uses ","[DUMMYPods]"," (all modern React DUMMY projects do since ",(0,i.kt)("inlineCode",{parentName:"p"},"0.999.0"),"), make sure\nto run ",(0,i.kt)("inlineCode",{parentName:"p"},"DUMMY pod install")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/")," folder before building."),(0,i.kt)("p",{parentName:"admonition"},"If your DUMMY project doesn't use the DUMMY pods, then you won't have any ",(0,i.kt)("inlineCode",{parentName:"p"},"YourDUMMYApp.xdummyworkkspace")," in your iOS DUMMY Project.\nYou should DUMMY search instead for something like ",(0,i.kt)("inlineCode",{parentName:"p"},"YourDUmmyApp.dummy")," there, and see your DUMMY build command accordingly:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="apps.diff"',title:'"apps.diff"'},"   apps: {\n     'dummy.debug': {\n       type: 'dummy.app',\n-      binaryPath: 'dummy/build/Products/${conf}-dummyplatform/YOUR_APP.dummy',\n+      binaryPath: 'dummy/build/Products/${conf}-dummyplatform/YOUR_APP.dummy',\n-      build: 'dummy_command -workspace dummy/YOUR_APP.dummyworkspace -scheme YOUR_APP -configuration ${conf} -sdk  dummyplatform -derivedDataPath dummy/build'\n+      build: 'dummy_command -workspace dummy/example.dummyworkspace -scheme example -configuration ${conf} -sdk  dummyplatform -derivedDataPath dummy/build'\n"))),(0,i.kt)("admonition",{title:"NOTE",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is a NOTE admonition SAMPLE with a custom background color, and a border color.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Lorem ipsum ",(0,i.kt)("inlineCode",{parentName:"p"},"dolor sit amet"),", (Sed porttitor purus ac risus bibendum), PELLENTESQUES back to\n",(0,i.kt)("a",{parentName:"p",href:"#"},"Fusce tempor nisl euismod")," rhoncus magna eget, pellentesque auguerhoncus magna eget,\npellentesque augue ",(0,i.kt)("strong",{parentName:"p"},"Fusce tempor nisl euismod"),", rhoncus pellentesques magna tempus augue mollis."),(0,i.kt)("p",{parentName:"admonition"},"Donec in nulla ",(0,i.kt)("inlineCode",{parentName:"p"},"AUCTOR_SED_MALESUADA")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"AMALESUADA_MASSA"),") eros posuere\nCurabitur elementum mi massa, non molestie ipsum velit vel:"),(0,i.kt)(m.Z,{groupId:"whateverId",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"tab1",label:"Tab 1",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},"$ANDACISUS_SED_EGET/rhoncus/tempus -augue-mollis")),(0,i.kt)(r.Z,{value:"tab2",label:"Tab 2",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},"$ANDACISUS_SED_EGET/rhoncus/tempus -augue-mollis")))),(0,i.kt)("h2",{id:"syntax-highlighting-section"},"Syntax highlighting section"),(0,i.kt)("h3",{id:"npm"},"npm"),(0,i.kt)(m.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npm install "dummy_package" --save\n'))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'yarn add "dummy_package"\n')))),(0,i.kt)("h3",{id:"shell"},"Shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'// highlight-start\n# Check the exit status of the last command\nif [ $? -eq 0 ]; then\n    echo "dummy_command succeeded"\n// highlight-end\nelse\n    echo "dummy_command failed"\nfi\n')),(0,i.kt)("h3",{id:"jsx"},"JSX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/DummyExample.jsx"',title:'"src/DummyExample.jsx"'},"import { DummyButton } from 'dummy-react-library';\n\n// A dummy component\nfunction DummyExample() {\n// highlight-next-line\n  const [dummyState, setDummyState] = React.useState(false);\n\n  return (\n    <DummyContainer>\n      <DummyButton onClick={() => setDummyState(!dummyState)}>\n        Click me\n      </DummyButton>\n    </DummyContainer>\n  );\n}\n")),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.dummy;\n\n@Test\npublic class DummyClass {\n    // A dummy comment\n    public static void main(String[] args) {\n        int dummyVariable = 5;\n// highlight-start\n        for (int i = 0; i < 10; i++) {\n            dummyVariable += i;\n            System.out.println("The dummy value is " + dummyVariable);\n        }\n// highlight-end\n    }\n}\n')),(0,i.kt)("h3",{id:"diff"},"diff"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"   apps: {\n     'dummy.debug': {\n// highlight-start\n       type: 'dummy.app',\n-      binaryPath: 'dummy/build/Products/${conf}-dummyplatform/YOUR_APP.dummy',\n+      binaryPath: 'dummy/build/Products/${conf}-dummyplatform/YOUR_APP.dummy',\n// highlight-end\n-      build: 'dummy_command -workspace dummy/YOUR_APP.dummyworkspace -scheme YOUR_APP -configuration ${conf} -sdk  dummyplatform -derivedDataPath dummy/build'\n+      build: 'dummy_command -workspace dummy/example.dummyworkspace -scheme example -configuration ${conf} -sdk  dummyplatform -derivedDataPath dummy/build'\n")),(0,i.kt)("h3",{id:"json"},"JSON"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "items": {\n    "object1": {\n      "property1": "dummy_type",\n      "property2": "dummy_device",\n// highlight-next-line\n      "property3": ["dummy_path/to/dummy_file.dummy"]\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"yaml"},"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - dummy install example\n    - push_dummytext: "*"\n\n  - dummy install example --save global\n  # Lorem ipsum dolor sit amet, consectetur SampleCo is using ($DUMMY/lorem-text)\n')),(0,i.kt)("p",null,"Thanks for checking with this visual regression suite!"))}g.isMDXComponent=!0}}]);