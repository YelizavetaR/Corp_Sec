export default [
    {
        path: 'entity_secretary',
        name: 'appEntitySecretary',
        redirect: { name: 'appEntitySecretaryList' },
        meta: {
            title: 'entity_secretary.entity_secretary',
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
                name: 'appEntitySecretaryList',
                meta: {
                    trans: 'global.list',
                    title: 'entity_secretary.entity_secretary',
                    permissions: ['access-user']
                },
                component: () => import('@views/app/entity_secretary/index' /* webpackChunkName: "js/app/entity_secretary/index" */),
            },
        ]
    },
]