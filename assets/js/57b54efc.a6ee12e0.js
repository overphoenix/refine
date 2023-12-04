"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},s=void 0,l={unversionedId:"tutorial/getting-started/antd/generate-crud-pages",id:"version-3.xx.xx/tutorial/getting-started/antd/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/antd/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/antd",slug:"/tutorial/getting-started/antd/generate-crud-pages",permalink:"/docs/3.xx.xx/tutorial/getting-started/antd/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/antd/3-generate-crud-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1701699637,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},d={},c=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=u("Checklist"),g=u("ChecklistItem"),m={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"inferencer"},"Inferencer"),(0,r.kt)("p",null,"Inferencer is a powerful tool in the ",(0,r.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations."),(0,r.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,r.kt)("p",null,"There are several benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,r.kt)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks."),(0,r.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn about ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn about ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/inferencer/"},"how to use Inferencer with Ant Design"),".")),(0,r.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AntdInferencer/>")," component, which can be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd"),". It used to generate CRUD pages based on your API response with Ant Design components."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AntdInferencer/>")," component is used by passing to appropriate values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  notificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n//highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={notificationProvider}\n      catchAll={<ErrorComponent />}\n      //highlight-start\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n      //highlight-end\n    />\n  );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"At this point, ",(0,r.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,r.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,r.kt)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,r.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,r.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,r.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,r.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,r.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,r.kt)("h3",{id:"list-page"},"List Page"),(0,r.kt)("p",null,"To preview the list page, go back to your browser and open the ",(0,r.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,r.kt)("p",null,"You should see the list page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,r.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  notificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={notificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"create-page"},"Create Page"),(0,r.kt)("p",null,"To preview the create page, go back to your browser and open the ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' address or click the "Create" button on the list page.'),(0,r.kt)("p",null,"You should see the create page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  notificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={notificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"edit-page"},"Edit Page"),(0,r.kt)("p",null,"To preview the edit page, go back to your browser and open the ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,r.kt)("p",null,"You should see the edit page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  notificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={notificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"show-page"},"Show Page"),(0,r.kt)("p",null,"To preview the show page, go back to your browser and open the ",(0,r.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' address or click the "Show" button on the record in the list page.'),(0,r.kt)("p",null,"You should see the show page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  notificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={notificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/adding-crud-pages/antd/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,r.kt)(f,{mdxType:"Checklist"},(0,r.kt)(g,{id:"generated-crud-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,r.kt)(g,{id:"generated-crud-pages-2",mdxType:"ChecklistItem"},(0,r.kt)("p",null,"I inspected the auto-generated ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}h.isMDXComponent=!0}}]);