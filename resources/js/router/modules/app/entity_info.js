export default [
    {
        path: 'entity_info',
        name: 'appEntityInfo',
        redirect: { name: 'appEntityInfoList' },
        meta: {
            title: 'entity_info.entity_info',
            icon: '',
            hideChildren: true,
            permissions: ['list-query'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appEntityInfoList',
                meta: {
                    trans: 'global.list',
                    title: 'entity_info.entity_info',
                    permissions: ['list-query']
                },
                component: () => import('@views/app/entity_info/index' /* webpackChunkName: "js/app/entity_info/index" */),
            },
        ]
    },
]