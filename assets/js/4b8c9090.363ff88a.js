"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"useDrawerForm",title:"useDrawerForm"},s=void 0,p={unversionedId:"api-reference/mantine/hooks/form/useDrawerForm",id:"version-3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm",title:"useDrawerForm",description:"useModalForm hook allows you to manage a form within a ` as well as a . It provides some useful methods to handle the form  or form `.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm.md",sourceDirName:"api-reference/mantine/hooks/form",slug:"/api-reference/mantine/hooks/form/useDrawerForm",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/form/useDrawerForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1703770505,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{id:"useDrawerForm",title:"useDrawerForm"},sidebar:"someSidebar",previous:{title:"Mantine API",permalink:"/docs/3.xx.xx/api-reference/mantine"},next:{title:"useForm",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"}},u={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>refineCoreProps</code>",id:"refinecoreprops",level:3},{value:"<code>initialValues</code>",id:"initialvalues",level:3},{value:"<code>defaultVisible</code>",id:"defaultvisible",level:3},{value:"<code>autoSubmitClose</code>",id:"autosubmitclose",level:3},{value:"<code>autoResetForm</code>",id:"autoresetform",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>visible</code>",id:"visible",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"<code>submit</code>",id:"submit",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return values",id:"return-values-1",level:3},{value:"Example",id:"example",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=m("Tabs"),k=m("TabItem"),h=m("CodeSandboxExample"),f={toc:d};function b(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useModalForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useModalForm"))," hook allows you to manage a form within a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal>")," as well as a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Drawer>"),". It provides some useful methods to handle the form ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal>")," or form ",(0,a.kt)("inlineCode",{parentName:"p"},"<Drawer>"),"."),(0,a.kt)("p",null,"We will use ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useModalForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useModalForm"))," hook as a ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," to manage a form within a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Drawer>"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," hook is extended from ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/mantine"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mantine"))," package. This means that you can use all the features of ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," is used in both."),(0,a.kt)(c,{defaultValue:"create",values:[{label:"create",value:"create"},{label:"edit",value:"edit"}],mdxType:"Tabs"},(0,a.kt)(k,{value:"create",mdxType:"TabItem"},(0,a.kt)("p",null,"In this example, we will show you how to ",(0,a.kt)("inlineCode",{parentName:"p"},'"create"')," a record with ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts",live:!0,url:"http://localhost:3000/posts"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React from "react";\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport { GetManyResponse, useMany } from "@pankod/refine-core";\nimport {\n  Box,\n  Group,\n  List,\n  ScrollArea,\n  Table,\n  Pagination,\n  // highlight-next-line\n  useModalForm as useDrawerForm,\n  Drawer,\n  Select,\n  TextInput,\n  SaveButton,\n} from "@pankod/refine-mantine";\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n  // highlight-start\n  const {\n    getInputProps,\n    saveButtonProps,\n    modal: { show, close, title, visible },\n  } = useDrawerForm({\n    refineCoreProps: { action: "create" },\n    initialValues: {\n      title: "",\n      status: "",\n      content: "",\n    },\n    validate: {\n      title: (value) => (value.length < 2 ? "Too short title" : null),\n      status: (value) => (value.length <= 0 ? "Status is required" : null),\n    },\n  });\n  // highlight-end\n\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n        meta: {\n          filterOperator: "contains",\n        },\n      },\n      {\n        id: "status",\n        header: "Status",\n        accessorKey: "status",\n        meta: {\n          filterElement: function render(props: FilterElementProps) {\n            return (\n              <Select\n                defaultValue="published"\n                data={[\n                  { label: "Published", value: "published" },\n                  { label: "Draft", value: "draft" },\n                  { label: "Rejected", value: "rejected" },\n                ]}\n                {...props}\n              />\n            );\n          },\n          filterOperator: "eq",\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      setCurrent,\n      pageCount,\n      current,\n      tableQueryResult: { data: tableData },\n    },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <>\n      {/* highlight-start */}\n      <Drawer\n        opened={visible}\n        onClose={close}\n        title={title}\n        padding="xl"\n        size="xl"\n        position="right"\n      >\n        <TextInput\n          mt={8}\n          label="Title"\n          placeholder="Title"\n          {...getInputProps("title")}\n        />\n        <Select\n          mt={8}\n          label="Status"\n          placeholder="Pick one"\n          data={[\n            { label: "Published", value: "published" },\n            { label: "Draft", value: "draft" },\n            { label: "Rejected", value: "rejected" },\n          ]}\n          {...getInputProps("status")}\n        />\n        <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n          <SaveButton {...saveButtonProps} />\n        </Box>\n      </Drawer>\n      {/* highlight-end */}\n      <ScrollArea>\n        {/* highlight-next-line */}\n        <List createButtonProps={{ onClick: () => show() }}>\n          <Table highlightOnHover>\n            <thead>\n              {getHeaderGroups().map((headerGroup) => (\n                <tr key={headerGroup.id}>\n                  {headerGroup.headers.map((header) => {\n                    return (\n                      <th key={header.id}>\n                        {!header.isPlaceholder && (\n                          <Group spacing="xs" noWrap>\n                            <Box>\n                              {flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                              )}\n                            </Box>\n                          </Group>\n                        )}\n                      </th>\n                    );\n                  })}\n                </tr>\n              ))}\n            </thead>\n            <tbody>\n              {getRowModel().rows.map((row) => {\n                return (\n                  <tr key={row.id}>\n                    {row.getVisibleCells().map((cell) => {\n                      return (\n                        <td key={cell.id}>\n                          {flexRender(\n                            cell.column.columnDef.cell,\n                            cell.getContext(),\n                          )}\n                        </td>\n                      );\n                    })}\n                  </tr>\n                );\n              })}\n            </tbody>\n          </Table>\n          <br />\n          <Pagination\n            position="right"\n            total={pageCount}\n            page={current}\n            onChange={setCurrent}\n          />\n        </List>\n      </ScrollArea>\n    </>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n    },\n  ],\n});\n\nrender(<RefineMantineDemo />);\n'))),(0,a.kt)(k,{value:"edit",mdxType:"TabItem"},(0,a.kt)("p",null,"In this example, we will show you how to ",(0,a.kt)("inlineCode",{parentName:"p"},'"edit"')," a record with ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts",live:!0,url:"http://localhost:3000/posts"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport React from "react";\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport { GetManyResponse, useMany } from "@pankod/refine-core";\nimport {\n  Box,\n  Group,\n  List,\n  ScrollArea,\n  Table,\n  Pagination,\n  // highlight-next-line\n  useModalForm as useDrawerForm,\n  Drawer,\n  Select,\n  TextInput,\n  EditButton,\n  SaveButton,\n} from "@pankod/refine-mantine";\n\nconst PostList: React.FC<IResourceComponentsProps> = () => {\n  // highlight-start\n  const {\n    getInputProps,\n    saveButtonProps,\n    modal: { show, close, title, visible },\n  } = useDrawerForm({\n    refineCoreProps: { action: "edit" },\n    initialValues: {\n      title: "",\n      status: "",\n      content: "",\n    },\n    validate: {\n      title: (value) => (value.length < 2 ? "Too short title" : null),\n      status: (value) => (value.length <= 0 ? "Status is required" : null),\n    },\n  });\n  // highlight-end\n\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n        meta: {\n          filterOperator: "contains",\n        },\n      },\n      {\n        id: "status",\n        header: "Status",\n        accessorKey: "status",\n        meta: {\n          filterElement: function render(props: FilterElementProps) {\n            return (\n              <Select\n                defaultValue="published"\n                data={[\n                  { label: "Published", value: "published" },\n                  { label: "Draft", value: "draft" },\n                  { label: "Rejected", value: "rejected" },\n                ]}\n                {...props}\n              />\n            );\n          },\n          filterOperator: "eq",\n        },\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        enableColumnFilter: false,\n        enableSorting: false,\n        cell: function render({ getValue }) {\n          return (\n            <Group spacing="xs" noWrap>\n              {/* highlight-start */}\n              <EditButton hideText onClick={() => show(getValue() as number)} />\n              {/* highlight-end */}\n            </Group>\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      setCurrent,\n      pageCount,\n      current,\n      tableQueryResult: { data: tableData },\n    },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <>\n      {/* highlight-start */}\n      <Drawer\n        opened={visible}\n        onClose={close}\n        title={title}\n        padding="xl"\n        size="xl"\n        position="right"\n      >\n        <TextInput\n          mt={8}\n          label="Title"\n          placeholder="Title"\n          {...getInputProps("title")}\n        />\n        <Select\n          mt={8}\n          label="Status"\n          placeholder="Pick one"\n          data={[\n            { label: "Published", value: "published" },\n            { label: "Draft", value: "draft" },\n            { label: "Rejected", value: "rejected" },\n          ]}\n          {...getInputProps("status")}\n        />\n        <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n          <SaveButton {...saveButtonProps} />\n        </Box>\n      </Drawer>\n      {/* highlight-end */}\n      <ScrollArea>\n        <List>\n          <Table highlightOnHover>\n            <thead>\n              {getHeaderGroups().map((headerGroup) => (\n                <tr key={headerGroup.id}>\n                  {headerGroup.headers.map((header) => {\n                    return (\n                      <th key={header.id}>\n                        {!header.isPlaceholder && (\n                          <Group spacing="xs" noWrap>\n                            <Box>\n                              {flexRender(\n                                header.column.columnDef.header,\n                                header.getContext(),\n                              )}\n                            </Box>\n                          </Group>\n                        )}\n                      </th>\n                    );\n                  })}\n                </tr>\n              ))}\n            </thead>\n            <tbody>\n              {getRowModel().rows.map((row) => {\n                return (\n                  <tr key={row.id}>\n                    {row.getVisibleCells().map((cell) => {\n                      return (\n                        <td key={cell.id}>\n                          {flexRender(\n                            cell.column.columnDef.cell,\n                            cell.getContext(),\n                          )}\n                        </td>\n                      );\n                    })}\n                  </tr>\n                );\n              })}\n            </tbody>\n          </Table>\n          <br />\n          <Pagination\n            position="right"\n            total={pageCount}\n            page={current}\n            onChange={setCurrent}\n          />\n        </List>\n      </ScrollArea>\n    </>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n    },\n  ],\n});\n\nrender(<RefineMantineDemo />);\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," doesn't automatically add a ",(0,a.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," to the each record in ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," which opens ",(0,a.kt)("inlineCode",{parentName:"p"},'"edit"')," form in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Drawer>")," when clicked."),(0,a.kt)("p",{parentName:"admonition"},"So, we have to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," on our list. In that way, ",(0,a.kt)("inlineCode",{parentName:"p"},'"edit"')," form in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Drawer>")," can fetch data by the record ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const columns = React.useMemo<ColumnDef<IPost>[]>(\n  () => [\n    // --\n    {\n      id: "actions",\n      header: "Actions",\n      accessorKey: "id",\n      enableColumnFilter: false,\n      enableSorting: false,\n      cell: function render({ getValue }) {\n        return (\n          <Group spacing="xs" noWrap>\n            <EditButton hideText onClick={() => show(getValue() as number)} />\n          </Group>\n        );\n      },\n    },\n  ],\n  [],\n);\n\nconst table = useTable({\n  columns,\n});\n'))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget to pass the record ",(0,a.kt)("inlineCode",{parentName:"p"},'"id"')," to ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," to fetch the record data. This is necessary for both ",(0,a.kt)("inlineCode",{parentName:"p"},'"edit"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"clone"')," forms.")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"refinecoreprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"refineCoreProps")),(0,a.kt)("p",null,"All ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," properties also available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm"),". You can find descriptions on ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const drawerForm = useDrawerForm({\n  refineCoreProps: {\n    action: "edit",\n    resource: "posts",\n    id: "1",\n  },\n});\n')),(0,a.kt)("h3",{id:"initialvalues"},(0,a.kt)("inlineCode",{parentName:"h3"},"initialValues")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only available in ",(0,a.kt)("inlineCode",{parentName:"p"},'"create"')," form.")),(0,a.kt)("p",null,"Default values for the form. Use this to pre-populate the form with data that needs to be displayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const drawerForm = useDrawerForm({\n  initialValues: {\n    title: "Hello World",\n  },\n});\n')),(0,a.kt)("h3",{id:"defaultvisible"},(0,a.kt)("inlineCode",{parentName:"h3"},"defaultVisible")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", drawer will be visible by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  modalProps: {\n    defaultVisible: true,\n  },\n});\n")),(0,a.kt)("h3",{id:"autosubmitclose"},(0,a.kt)("inlineCode",{parentName:"h3"},"autoSubmitClose")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"true"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", drawer will be closed after successful submit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  modalProps: {\n    autoSubmitClose: false,\n  },\n});\n")),(0,a.kt)("h3",{id:"autoresetform"},(0,a.kt)("inlineCode",{parentName:"h3"},"autoResetForm")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"true"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", form will be reset after successful submit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  modalProps: {\n    autoResetForm: false,\n  },\n});\n")),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," return values also available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),". You can find descriptions on ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},(0,a.kt)("inlineCode",{parentName:"a"},"mantine useForm"))," return values also available in ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),". You can find descriptions on ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},(0,a.kt)("inlineCode",{parentName:"a"},"mantine"))," docs.")),(0,a.kt)("h3",{id:"visible"},(0,a.kt)("inlineCode",{parentName:"h3"},"visible")),(0,a.kt)("p",null,"Current visibility state of the drawer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const drawerForm = useDrawerForm({\n  defaultVisible: true,\n});\n\nconsole.log(drawerForm.modal.visible); // true\n")),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"Title of the drawer. Based on resource and action values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n  modal: { title },\n} = useDrawerForm({\n  refineCoreProps: {\n    resource: "posts",\n    action: "create",\n  },\n});\n\nconsole.log(title); // "Create Post"\n')),(0,a.kt)("h3",{id:"close"},(0,a.kt)("inlineCode",{parentName:"h3"},"close")),(0,a.kt)("p",null,"A function that can close the drawer. It's useful when you want to close the drawer manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n  getInputProps,\n  modal: { close, visible, title },\n} = useDrawerForm();\n\nreturn (\n  <Drawer opened={visible} onClose={close} title={title}>\n    <TextInput\n      mt={8}\n      label="Title"\n      placeholder="Title"\n      {...getInputProps("title")}\n    />\n    <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n      <SaveButton {...saveButtonProps} />\n      <Button onClick={close}>Cancel</Button>\n    </Box>\n  </Drawer>\n);\n')),(0,a.kt)("h3",{id:"submit"},(0,a.kt)("inlineCode",{parentName:"h3"},"submit")),(0,a.kt)("p",null,"A function that can submit the form. It's useful when you want to submit the form manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n  modal: { submit },\n} = useDrawerForm();\n\n// ---\n\nreturn (\n  <Drawer opened={visible} onClose={close} title={title}>\n    <TextInput\n      mt={8}\n      label="Title"\n      placeholder="Title"\n      {...getInputProps("title")}\n    />\n    <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n      <Button onClick={submit}>Save</Button>\n    </Box>\n  </Drawer>\n);\n')),(0,a.kt)("h3",{id:"show"},(0,a.kt)("inlineCode",{parentName:"h3"},"show")),(0,a.kt)("p",null,"A function that can show the drawer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const {\n  getInputProps,\n  modal: { close, visible, title, show },\n} = useDrawerForm();\n\nconst onFinishHandler = (values) => {\n  onFinish(values);\n  show();\n};\n\nreturn (\n  <>\n    <Button onClick={}>Show Modal</Button>\n    <Drawer opened={visible} onClose={close} title={title}>\n      <TextInput\n        mt={8}\n        label="Title"\n        placeholder="Title"\n        {...getInputProps("title")}\n      />\n      <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n        <SaveButton {...saveButtonProps} />\n      </Box>\n    </Drawer>\n  </>\n);\n')),(0,a.kt)("h3",{id:"savebuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,a.kt)("p",null,'It contains all the props needed by the "submit" button within the drawer (disabled,loading etc.). You can manually pass these props to your custom button.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { getInputProps, modal, saveButtonProps } = useDrawerForm();\n\nreturn (\n  <Drawer {...modal}>\n    <TextInput\n      mt={8}\n      label="Title"\n      placeholder="Title"\n      {...getInputProps("title")}\n    />\n    <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n      <Button\n        {...saveButtonProps}\n        onClick={(e) => {\n          // -- your custom logic\n          saveButtonProps.onClick(e);\n        }}\n      />\n    </Box>\n  </Drawer>\n);\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the modal or drawer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#modalpropstype"},(0,a.kt)("inlineCode",{parentName:"a"},"ModalPropsType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useForm")," properties"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"modalpropstype"},"ModalPropsType"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defaultVisible"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial visibility state of the modal"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the form should be submitted when the modal is closed"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoResetForm"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the form should be reset when the form is submitted"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")))))),(0,a.kt)("h3",{id:"return-values-1"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modal"),(0,a.kt)("td",{parentName:"tr",align:null},"Relevant states and methods to control the modal or drawer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#modalreturnvalues"},(0,a.kt)("inlineCode",{parentName:"a"},"ModalReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,a.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useForm")," return values"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"modalreturnvalues"},"ModalReturnValues"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"visible"),(0,a.kt)("td",{parentName:"tr",align:null},"State of modal visibility"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the visible state to true"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"close"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the visible state to false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"submit"),(0,a.kt)("td",{parentName:"tr",align:null},"Submits the form"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(values: TVariables) => void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"Modal title based on resource and action value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean, onClick: (e: React.FormEvent<HTMLFormElement>) => void; }")))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(h,{path:"form-mantine-use-drawer-form",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);