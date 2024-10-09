"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2800],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>y});var n=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),g=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(o),d=a,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return o?n.createElement(y,r(r({ref:t},p),{},{components:o})):n.createElement(y,r({ref:t},p))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var g=2;g<i;g++)r[g]=o[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},46991:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=o(58168),a=(o(96540),o(15680));const i={authors:["asafkorem"],tags:["minor-release","detox-copilot","ai-integration"]},r="Introducing Detox Copilot",l={permalink:"/Detox/blog/2024/10/09/detox-copilot-is-out",editUrl:"https://github.com/wix/Detox/edit/master/website/blog/2024-10-09-detox-copilot-is-out.md",source:"@site/blog/2024-10-09-detox-copilot-is-out.md",title:"Introducing Detox Copilot",description:"Detox Copilot: Write Tests in Natural Language",date:"2024-10-09T00:00:00.000Z",formattedDate:"October 9, 2024",tags:[{label:"minor-release",permalink:"/Detox/blog/tags/minor-release"},{label:"detox-copilot",permalink:"/Detox/blog/tags/detox-copilot"},{label:"ai-integration",permalink:"/Detox/blog/tags/ai-integration"}],readingTime:3.27,hasTruncateMarker:!1,authors:[{name:"Asaf Korem",title:"Detox Core Contributor",url:"https://github.com/asafkorem",imageURL:"https://github.com/asafkorem.png",key:"asafkorem"}],frontMatter:{authors:["asafkorem"],tags:["minor-release","detox-copilot","ai-integration"]},nextItem:{title:"Detox 20 is out",permalink:"/Detox/blog/2022/11/10/detox-20-is-out"}},s={authorsImageUrls:[void 0]},g=[{value:"Detox Copilot: Write Tests in Natural Language",id:"detox-copilot-write-tests-in-natural-language",level:2},{value:"Why Natural Language Testing?",id:"why-natural-language-testing",level:3},{value:"Key Features of Detox Copilot",id:"key-features-of-detox-copilot",level:2},{value:"Write Tests in Plain Text",id:"write-tests-in-plain-text",level:3},{value:"Seamless Integration with Detox",id:"seamless-integration-with-detox",level:3},{value:"LLM-Agnostic Design",id:"llm-agnostic-design",level:3},{value:"How Detox Copilot Works",id:"how-detox-copilot-works",level:2},{value:"Getting Started with Detox Copilot",id:"getting-started-with-detox-copilot",level:2},{value:"Extending Beyond Detox",id:"extending-beyond-detox",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Join the Future of Testing",id:"join-the-future-of-testing",level:2}],p={toc:g},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.yg)(u,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"detox-copilot-write-tests-in-natural-language"},"Detox Copilot: Write Tests in Natural Language"),(0,a.yg)("p",null,"We're excited to announce ",(0,a.yg)("strong",{parentName:"p"},"Detox Copilot"),", a groundbreaking feature that brings natural language testing to Detox. With Detox Copilot, you can now write end-to-end tests using plain textual commands, making test creation more intuitive and accessible than ever."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Detox Copilot in action GIF",src:o(16031).A,width:"600",height:"388"})),(0,a.yg)("p",null,"Detox Copilot leverages advanced Large Language Models (LLMs) to interpret natural language instructions and translate them into Detox actions and assertions. This means you can describe your test scenarios in everyday language, aligning perfectly with ",(0,a.yg)("strong",{parentName:"p"},"Behavior-Driven Development (BDD)")," principles."),(0,a.yg)("h3",{id:"why-natural-language-testing"},"Why Natural Language Testing?"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Improved Collaboration"),": Teams can collaborate more effectively, as tests are written in plain language understandable by developers, QA engineers, and non-technical stakeholders alike."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Faster Test Creation"),": Reduce the time spent writing and maintaining complex test scripts."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Enhanced Test Coverage"),": Lower the barrier to writing tests, encouraging more comprehensive testing."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Reduced Maintenance Costs"),": Thanks to the decoupling from specific matchers (e.g., avoiding brittle XPath selectors or relying on ",(0,a.yg)("inlineCode",{parentName:"li"},"testID")," attributes commonly used in React Native apps), tests are less prone to breaking when the UI changes, leading to lower maintenance overhead.")),(0,a.yg)("h2",{id:"key-features-of-detox-copilot"},"Key Features of Detox Copilot"),(0,a.yg)("h3",{id:"write-tests-in-plain-text"},"Write Tests in Plain Text"),(0,a.yg)("p",null,"Detox Copilot allows you to write tests using natural language commands. Each step corresponds to a specific action or assertion within your app."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"it('should navigate and add a product to the cart', async () => {\n  await copilot.perform(\n    'Navigate to the \"Products\" page',\n    'Tap on the \"Add to Cart\" button for the first product',\n    'Verify that the \"Added to Cart\" pop-up is displayed'\n  );\n});\n")),(0,a.yg)("h3",{id:"seamless-integration-with-detox"},"Seamless Integration with Detox"),(0,a.yg)("p",null,"Detox Copilot is built into Detox and requires no additional installation. Simply initialize it in your test setup, and you're ready to start writing natural language tests."),(0,a.yg)("h3",{id:"llm-agnostic-design"},"LLM-Agnostic Design"),(0,a.yg)("p",null,"Detox Copilot uses LLMs to interpret instructions but is designed to be LLM-agnostic. This means you can connect it to your preferred language model service, offering flexibility and future-proofing your testing strategy."),(0,a.yg)("h2",{id:"how-detox-copilot-works"},"How Detox Copilot Works"),(0,a.yg)("p",null,"Once you've written your tests using natural language instructions, Detox Copilot takes care of the rest.\nHere is a high-level overview of the execution flow:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Gather Context"),": Collect relevant app state, view hierarchy, and previous step results."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Interpret Intent"),": Use the LLM to interpret the natural language instruction."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Generate Code"),": Create the appropriate Detox commands."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Execute Action"),": Run the generated Detox code."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Cache Results"),": Store execution results to optimize future runs."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Provide Feedback"),": Return values or confirm actions for subsequent steps.")),(0,a.yg)("p",null,"By combining these steps, Detox Copilot effectively bridges the gap between natural language instructions and concrete test actions."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Check Detox Copilot ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/copilot/technical-overview"},"Technical Overview"))," for a detailed explanation of the building blocks and the execution flow.")),(0,a.yg)("h2",{id:"getting-started-with-detox-copilot"},"Getting Started with Detox Copilot"),(0,a.yg)("p",null,"Getting started with Detox Copilot is easy. Simply initialize Copilot in your test setup and start writing tests using natural language instructions."),(0,a.yg)("p",null,"Check our ",(0,a.yg)("a",{parentName:"p",href:"/docs/copilot/testing-with-copilot"},"Testing with Copilot guide")," for detailed instructions on setting up and writing tests with Detox Copilot."),(0,a.yg)("h2",{id:"extending-beyond-detox"},"Extending Beyond Detox"),(0,a.yg)("p",null,"Detox Copilot is built on a standalone core library called ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wix-incubator/detox-copilot"},"detox-copilot")," designed to interpret natural language testing instructions and generate test code. Though initially developed for Detox, it can be extended to work with other testing frameworks."),(0,a.yg)("h2",{id:"learn-more"},"Learn More"),(0,a.yg)("p",null,"For detailed guidance, check out our ",(0,a.yg)("a",{parentName:"p",href:"/docs/copilot/testing-with-copilot"},"Testing with Copilot guide")," and the ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/copilot"},"Detox Copilot API Documentation"),"."),(0,a.yg)("h2",{id:"join-the-future-of-testing"},"Join the Future of Testing"),(0,a.yg)("p",null,"Detox Copilot represents a major step forward in making end-to-end testing more accessible and efficient. By embracing natural language testing, you can enhance collaboration, speed up test creation, and improve overall test coverage."),(0,a.yg)("p",null,"We're ",(0,a.yg)("strong",{parentName:"p"},"excited")," to see how you'll leverage Detox Copilot in your tests! Share your experiences, feedback, and suggestions with us as we continue to refine and expand this groundbreaking feature."))}c.isMDXComponent=!0},16031:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/copilot-demo-5c8641f24001c1d6e3effd175dc8ec2b.gif"}}]);