export default [
    {
        path: 'requests',
        name: 'appRequests',
        redirect: { name: 'appRequestsList' },
        meta: {
            title: 'requests.requests',
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
                name: 'appRequestsList',
                meta: {
                    trans: 'global.list',
                    title: 'requests.requests',
                    permissions: ['access-user']
                },
                component: () => import('@views/app/requests/index' /* webpackChunkName: "js/app/requests/index" */),
            },
        ]
    },
]