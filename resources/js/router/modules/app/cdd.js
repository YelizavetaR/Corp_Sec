export default [
    {
        path: 'cdd',
        name: 'appCdd',
        redirect: { name: 'appCddList' },
        meta: {
            title: 'cdd.cdd',
            icon: '',
            hideChildren: true,
            permissions: ['create-user'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appCddList',
                meta: {
                    trans: 'global.list',
                    title: 'cdd.cdd',
                    permissions: ['create-user']
                },
                component: () => import('@views/app/cdd/index' /* webpackChunkName: "js/app/cdd/index" */),
            },
        ]
    },
]