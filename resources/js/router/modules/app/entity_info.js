export default [
    {
        path: 'entity_info',
        name: 'appEntityInfo',
        redirect: { name: 'appEntityInfoList' },
        meta: {
            title: 'entity_info.entity_info',
            icon: '',
            hideChildren: true,
            permissions: ['access-user'],
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
                    permissions: ['access-user']
                },
                component: () => import('@views/app/entity_info/index' /* webpackChunkName: "js/app/entity_info/index" */),
            },
        ]
    },
]