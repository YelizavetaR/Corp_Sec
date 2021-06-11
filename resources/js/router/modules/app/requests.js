export default [
    {
        path: 'requests',
        name: 'appRequests',
        redirect: { name: 'appRequestsList' },
        meta: {
            title: 'requests.requests',
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
                name: 'appRequestsList',
                meta: {
                    trans: 'global.list',
                    title: 'requests.requests',
                    permissions: ['list-query']
                },
                component: () => import('@views/app/requests/index' /* webpackChunkName: "js/app/requests/index" */),
            },
        ]
    },
]