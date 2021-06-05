export default [
    {
        path: 'billing',
        name: 'appBilling',
        redirect: { name: 'appBillingList' },
        meta: {
            title: 'billing.billing',
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
                name: 'appBillingList',
                meta: {
                    trans: 'global.list',
                    title: 'billing.billing',
                    permissions: ['access-user']
                },
                component: () => import('@views/app/billing/index' /* webpackChunkName: "js/app/billing/index" */),
            },
        ]
    },
]