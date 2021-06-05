export default [
    {
        path: 'mailroom',
        name: 'appMailroom',
        redirect: { name: 'appMailroomList' },
        meta: {
            title: 'mailroom.mailroom',
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
                name: 'appMailroomList',
                meta: {
                    trans: 'global.list',
                    title: 'mailroom.mailroom',
                    permissions: ['access-user']
                },
                component: () => import('@views/app/mailroom/index' /* webpackChunkName: "js/app/mailroom/index" */),
            },
        ]
    },
]