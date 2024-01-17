"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>c});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}},l=void 0,d={unversionedId:"tutorial/adding-crud-pages/mantine/add-edit-page",id:"tutorial/adding-crud-pages/mantine/add-edit-page",title:"2. Adding Edit Page",description:"Creating Edit Page",source:"@site/docs/tutorial/4-adding-crud-pages/mantine/add-edit-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mantine",slug:"/tutorial/adding-crud-pages/mantine/add-edit-page",permalink:"/docs/tutorial/adding-crud-pages/mantine/add-edit-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mantine/add-edit-page.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1705503061,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}}},s={},c=[{value:"Creating Edit Page",id:"creating-edit-page",level:2},{value:"Understanding the Edit Component",id:"understanding-the-edit-component",level:2},{value:"Hooks and Components in Edit Page",id:"hooks-and-components-in-edit-page",level:3},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Edit Page to the App",id:"adding-the-edit-page-to-the-app",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=m("Checklist"),h=m("ChecklistItem"),g={toc:c};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-edit-page"},"Creating Edit Page"),(0,o.kt)("p",null,"First, we need to create our file, named ",(0,o.kt)("inlineCode",{parentName:"p"},"edit.tsx"),", under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will then copy the edit page code generated by Inferencer and paste it into the file; for this, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on any of the "Edit" buttons in the "Actions" column of the table to open the edit page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You can see the edit page code generated by Inferencer. Copy it by clicking on the "Copy" button.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the code into the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"edit.tsx")," file."))),(0,o.kt)("p",null,"You can see an example edit page generated by Inferencer below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Global, MantineProvider } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { Refine } from "@refinedev/core";\nimport { ErrorComponent, ThemedLayoutV2, RefineThemes, notificationProvider } from "@refinedev/mantine";\nimport routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={RefineThemes.Blue} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <BrowserRouter>\n          <Refine\n            routerProvider={routerBindings}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={notificationProvider}\n            resources={[\n              {\n                name: "blog_posts",\n                list: "/blog-posts",\n                show: "/blog-posts/show/:id",\n                create: "/blog-posts/create",\n                edit: "/blog-posts/edit/:id",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                <Route index element={<NavigateToResource resource="blog_posts" />} />\n\n                <Route path="/blog-posts">\n                  <Route index element={<MantineInferencer />} />\n                  <Route path="show/:id" element={<MantineInferencer />} />\n                  <Route path="edit/:id" element={<MantineInferencer />} />\n                  <Route path="create" element={<MantineInferencer />} />\n                </Route>\n\n                <Route path="*" element={<ErrorComponent />} />\n              </Route>\n            </Routes>\n            <UnsavedChangesNotifier />\n          </Refine>\n        </BrowserRouter>\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"understanding-the-edit-component"},"Understanding the Edit Component"),(0,o.kt)("h3",{id:"hooks-and-components-in-edit-page"},"Hooks and Components in Edit Page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<Edit/>")," is a Refine component that is used for presentation purposes like showing the title of the page, save button, refresh button etc."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/components/basic-views/edit"},(0,o.kt)("inlineCode",{parentName:"a"},"<Edit/>")," documentation","\u2192")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook is imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package and has been developed by using the ",(0,o.kt)("strong",{parentName:"p"},"Mantine")," ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook and ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook. When used the in the edit page, it fetches record data with the URL's ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", populating and submitting the form with ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," method. It also offers ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," for the form's submit button."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/hooks/use-form/"},(0,o.kt)("inlineCode",{parentName:"a"},"useForm"),"\u2192")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},(0,o.kt)("strong",{parentName:"a"},"Mantine")," documentations","\u2192")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All other components provided by ",(0,o.kt)("strong",{parentName:"p"},"Mantine")," are used to display the form fields."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine documentation","\u2192"))))),(0,o.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,o.kt)("p",null,"On the edit page, we may need to select a record from another resource."),(0,o.kt)("p",null,"For example, if we need to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by Refine. This hook fetches the data by passing the params to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"getList")," method and then returns the necessary props to be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,o.kt)("p",null,"In the auto-generated edit page code, Inferencer used the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n  resource: "categories",\n});\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," returns 10 record by default, but the category of the blog post may not be in the first 10 records. To solve this problem, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop to set the default value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," hook like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n  resource: "categories",\n  defaultValue: blogPostsData?.category?.id,\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/hooks/use-select"},(0,o.kt)("inlineCode",{parentName:"a"},"useSelect"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/select/"},(0,o.kt)("strong",{parentName:"a"},"Mantine")," ",(0,o.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentations","\u2192"))),(0,o.kt)("h2",{id:"adding-the-edit-page-to-the-app"},"Adding the Edit Page to the App"),(0,o.kt)("p",null,"Now that we have created the edit page, we can add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the created ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"MantineInferencer")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Global, MantineProvider } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { Refine } from "@refinedev/core";\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\nimport { ErrorComponent, ThemedLayoutV2, RefineThemes, notificationProvider } from "@refinedev/mantine";\nimport routerBindings, {\n  NavigateToResource,\n  // highlight-next-line\n  UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n//highlight-next-line\nimport { BlogPostEdit } from "pages/blog-posts/edit";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={RefineThemes.Blue} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <BrowserRouter>\n          <Refine\n            routerProvider={routerBindings}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={notificationProvider}\n            resources={[\n              {\n                name: "blog_posts",\n                list: "/blog-posts",\n                show: "/blog-posts/show/:id",\n                create: "/blog-posts/create",\n                // highlight-next-line\n                edit: "/blog-posts/edit/:id",\n              },\n            ]}\n            // highlight-start\n            options={{\n              syncWithLocation: true,\n              warnWhenUnsavedChanges: true,\n            }}\n            // highlight-end\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                <Route index element={<NavigateToResource resource="blog_posts" />} />\n\n                <Route path="blog-posts">\n                  <Route index element={<BlogPostList />} />\n                  <Route path="show/:id" element={<MantineInferencer />} />\n                  {/* highlight-start */}\n                  <Route path="edit/:id" element={<BlogPostEdit />} />\n                  {/* highlight-end */}\n                  <Route path="create" element={<MantineInferencer />} />\n                </Route>\n\n                <Route path="*" element={<ErrorComponent />} />\n              </Route>\n            </Routes>\n            {/* highlight-next-line */}\n            <UnsavedChangesNotifier />\n          </Refine>\n        </BrowserRouter>\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\nexport default App;\n')),(0,o.kt)("p",null,"Now, we can see the edit page in the browser at ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123")),(0,o.kt)("br",null),(0,o.kt)(u,{mdxType:"Checklist"},(0,o.kt)(h,{id:"add-edit-page-mantine",mdxType:"ChecklistItem"},"I have added the edit page to the app."),(0,o.kt)(h,{id:"add-edit-page-mantine-2",mdxType:"ChecklistItem"},"I understood the edit page components and hooks."),(0,o.kt)(h,{id:"add-edit-page-mantine-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}f.isMDXComponent=!0}}]);