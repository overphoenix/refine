"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},22102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const d={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},l=void 0,p={unversionedId:"tutorial/adding-crud-pages/mui/add-delete-feature",id:"tutorial/adding-crud-pages/mui/add-delete-feature",title:"5. Adding Delete Feature",description:"Adding Delete Feature to List Page",source:"@site/docs/tutorial/4-adding-crud-pages/mui/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-delete-feature",permalink:"/docs/tutorial/adding-crud-pages/mui/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mui/add-delete-feature.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1701411048,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},s={},u=[{value:"Adding Delete Feature to List Page",id:"adding-delete-feature-to-list-page",level:2},{value:"Enabling the Delete Feature on Show and Edit Pages",id:"enabling-the-delete-feature-on-show-and-edit-pages",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=c("Checklist"),f=c("ChecklistItem"),g={toc:u};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"adding-delete-feature-to-list-page"},"Adding Delete Feature to List Page"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," is a ",(0,n.kt)("strong",{parentName:"p"},"refine"),' component that is used for deleting records. When you click on the delete button, it will show a confirmation modal and delete the record upon confirmation. To add it to the "blog_posts" table:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component from ",(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/mui"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@refinedev/mui";\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component to the ",(0,n.kt)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    field: "actions",\n    headerName: "Actions",\n    renderCell: function render({ row }) {\n        return (\n            <>\n                <EditButton hideText recordItemId={row.id} />\n                <ShowButton hideText recordItemId={row.id} />\n                // highlight-next-line\n                <DeleteButton hideText recordItemId={row.id} />\n            </>\n        );\n    },\n    align: "center",\n    headerAlign: "center",\n    minWidth: 80,\n},\n')))),(0,n.kt)("p",null,"You can now delete a record from the list page by clicking on the delete button of any blog post."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/delete-button/"},(0,n.kt)("inlineCode",{parentName:"a"},"<DeleteButton/>")," documentation","\u2192"))),(0,n.kt)("h2",{id:"enabling-the-delete-feature-on-show-and-edit-pages"},"Enabling the Delete Feature on Show and Edit Pages"),(0,n.kt)("p",null,"We can enable the delete feature on both show and edit pages while we are defining a resource by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"canDelete")," property in the ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'src="src/App.tsx"',src:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { Layout, ErrorComponent, LightTheme, RefineSnackbarProvider, notificationProvider } from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport routerBindings from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App: React.FC = () => {\n  return (\n    <ThemeProvider theme={LightTheme}>\n      <CssBaseline />\n      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n      <RefineSnackbarProvider>\n        <BrowserRouter>\n          <Refine\n            routerProvider={routerBindings}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={notificationProvider}\n            resources={[\n              {\n                name: "blog_posts",\n                list: "/blog-posts",\n                show: "/blog-posts/show/:id",\n                create: "/blog-posts/create",\n                edit: "/blog-posts/edit/:id",\n                // highlight-start\n                meta: {\n                  canDelete: true,\n                },\n                // highlight-end\n              },\n            ]}\n          >\n            {/* ... */}\n          </Refine>\n        </BrowserRouter>\n      </RefineSnackbarProvider>\n    </ThemeProvider>\n  );\n};\nexport default App;\n')),(0,n.kt)("p",null,"After setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"canDelete")," property in ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", you will see a delete button on both show and edit pages."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#candelete"},(0,n.kt)("inlineCode",{parentName:"a"},"canDelete")," section of the ",(0,n.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation","\u2192"))),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,n.kt)("strong",{parentName:"p"},"refine")," to delete a record."),(0,n.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,n.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation","\u2192"))),(0,n.kt)("br",null),(0,n.kt)(m,{mdxType:"Checklist"},(0,n.kt)(f,{id:"add-delete-feature-mui",mdxType:"ChecklistItem"},"I have added the delete feature to the list page"),(0,n.kt)(f,{id:"add-delete-feature-mui-2",mdxType:"ChecklistItem"},"I have enabled the delete feature on the show page and edit page")))}h.isMDXComponent=!0}}]);