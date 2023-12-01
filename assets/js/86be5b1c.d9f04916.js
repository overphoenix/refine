"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61697],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return t?o.createElement(m,a(a({ref:n},d),{},{components:t})):o.createElement(m,a({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(67294);var o=t(3905);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"show-button",title:"Show",swizzle:!0},p=void 0,l={unversionedId:"api-reference/antd/components/buttons/show-button",id:"api-reference/antd/components/buttons/show-button",title:"Show",description:"` uses Ant Design's  component and theshow method from useNavigation` under the hood.",source:"@site/docs/api-reference/antd/components/buttons/show.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/show-button",permalink:"/docs/api-reference/antd/components/buttons/show-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/buttons/show.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1701411048,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{id:"show-button",title:"Show",swizzle:!0},sidebar:"someSidebar",previous:{title:"Save",permalink:"/docs/api-reference/antd/components/buttons/save-button"},next:{title:"Boolean",permalink:"/docs/api-reference/antd/components/fields/boolean"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},h=u("PropTag"),m=u("PropsTable"),f={toc:c};function k(e){var{components:n}=e,t=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," uses Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component and the",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood."),(0,o.kt)("p",null,"It can be useful when redirecting the app to the show page with the record id route of resource."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n  List,\n  useTable,\n  // highlight-next-line\n  ShowButton,\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" width="100%" />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          key="actions"\n          render={(_, record) => (\n            // highlight-next-line\n            <ShowButton size="small" recordItemId={record.id} />\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { ShowButton } from "@refinedev/antd";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      resource="posts"\n      // highlight-next-line\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        show: () => {\n          return <RefineAntd.Show>Show page here...</RefineAntd.Show>;\n        },\n      },\n    ]}\n    DashboardPage={MyShowComponent}\n  />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action path of the resource, filling the necessary parameters in the route."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," component reads the id information from the route by default.")),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"The redirection endpoint is defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action path. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," uses the inferred resource from the route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/antd";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      // highlight-next-line\n      resource="categories"\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        show: () => {\n          return <RefineAntd.Show>Show page here...</RefineAntd.Show>;\n        },\n      },\n      {\n        name: "categories",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        show: () => {\n          return <RefineAntd.Show>Show page here...</RefineAntd.Show>;\n        },\n      },\n    ]}\n    DashboardPage={MyShowComponent}\n  />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action path of the resource, filling the necessary parameters in the route."),(0,o.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,o.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,o.kt)("h3",{id:"meta"},(0,o.kt)("inlineCode",{parentName:"h3"},"meta")),(0,o.kt)("p",null,"It is used to pass additional parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method. You can pass additional parameters or override the existing ones using the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action route is defined by the pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/show/:id"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <ShowButton meta={{ authorId: "10" }} />;\n};\n')),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hideText")," is used to hide the text of the button. When its ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon will be visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/antd";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      recordItemId="123"\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyShowComponent,\n        show: () => {\n          return <RefineAntd.Show>Show page here...</RefineAntd.Show>;\n        },\n      },\n    ]}\n  />,\n);\n')),(0,o.kt)("h3",{id:"accesscontrol"},(0,o.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.kt)("p",null,"This prop can be used to skip the access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with its ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. However, this only works when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/access-control-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@refinedev/antd";\n\nexport const MyListComponent = () => {\n  return (\n    <ShowButton\n      // highlight-start\n      accessControl={{\n        enabled: true,\n        hideIfUnauthorized: true,\n      }}\n      // highlight-end\n    />\n  );\n};\n')),(0,o.kt)("h3",{id:"resourcenameorroutename-"},(0,o.kt)("del",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,o.kt)(h,{deprecated:!0,mdxType:"PropTag"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.kt)("p",null,"The redirection endpoint(",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/show"),") is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as an endpoint to redirect after clicking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ShowButton } from "@refinedev/antd";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      // highlight-next-line\n      resourceNameOrRouteName="categories"\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        show: () => {\n          return <RefineAntd.Show>Show page here...</RefineAntd.Show>;\n        },\n      },\n      {\n        name: "categories",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        show: () => {\n          return <RefineAntd.Show>Show page here...</RefineAntd.Show>;\n        },\n      },\n    ]}\n    DashboardPage={MyShowComponent}\n  />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,o.kt)("inlineCode",{parentName:"p"},"/categories/show/123"),"."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(m,{module:"@refinedev/antd/ShowButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," also accepts all props of Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button")," component.")))}k.isMDXComponent=!0}}]);