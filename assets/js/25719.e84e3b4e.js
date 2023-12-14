"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25719],{25719:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"`useList` is a modified version of `react-query`\'s {@link https://react-query.tanstack.com/guides/queries `useQuery`} used for retrieving items from a `resource` with pagination, sort, and filter configurations.\\n\\nIt uses the `getList` method as the query function from the `dataProvider` which is passed to `<Refine>`.","displayName":"useList","props":{"resource":{"defaultValue":null,"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{}},"queryOptions":{"defaultValue":null,"description":"Tanstack Query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetListResponse<TQueryFnData>, TError, GetListResponse<TData>, QueryKey>"},"tags":{}},"config":{"defaultValue":null,"description":"Configuration for pagination, sorting and filtering","name":"config","required":false,"type":{"name":"[`UseListConfig`](/docs/api-reference/core/hooks/data/useList/#config-parameters)"},"tags":{"type":"[`UseListConfig`] (/docs/api-reference/core/hooks/data/useList/#config-parameters)","deprecated":"`config` property is deprecated. Use `pagination`, `hasPagination`, `sorters` and `filters` instead."}},"pagination":{"defaultValue":null,"description":"Pagination properties","name":"pagination","required":false,"type":{"name":"Pagination"},"tags":{}},"hasPagination":{"defaultValue":null,"description":"Whether to use server-side pagination or not","name":"hasPagination","required":false,"type":{"name":"boolean"},"tags":{"deprecated":"`hasPagination` property is deprecated. Use `pagination.mode` instead."}},"sorters":{"defaultValue":null,"description":"Sorter parameters","name":"sorters","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{}},"filters":{"defaultValue":null,"description":"Filter parameters","name":"filters","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{}},"meta":{"defaultValue":null,"description":"Meta data query for `dataProvider`","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Meta data query for `dataProvider`","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: GetListResponse<TData>, values?: { config?: UseListConfig; ... 6 more ...; dataProviderName?: string | undefined; } | undefined, resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: { config?: UseListConfig; pagination?: Pagination | undefined; ... 5 more ...; dataProviderName?: string | undefined; } | undefined, resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"overtimeOptions":{"defaultValue":null,"description":"","name":"overtimeOptions","required":false,"type":{"name":"UseLoadingOvertimeCoreOptions"},"tags":{}}},"generatedAt":1702546484273}')}}]);