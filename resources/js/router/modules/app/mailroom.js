export default [
    {
        path: 'mailroom',
        name: 'appMailroom',
        redirect: { name: 'appMailroomList' },
        meta: {
            title: 'mailroom.mailroom',
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
                name: 'appMailroomList',
                meta: {
                    trans: 'global.list',
                    title: 'mailroom.mailroom',
                    permissions: ['list-query']
                },
                component: () => import('@views/app/mailroom/index' /* webpackChunkName: "js/app/mailroom/index" */),
            },
        ]
    },
]