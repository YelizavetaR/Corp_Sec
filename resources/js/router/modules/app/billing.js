export default [
    {
        path: 'billing',
        name: 'appBilling',
        redirect: { name: 'appBillingList' },
        meta: {
            title: 'billing.billing',
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
                name: 'appBillingList',
                meta: {
                    trans: 'global.list',
                    title: 'billing.billing',
                    permissions: ['list-query']
                },
                component: () => import('@views/app/billing/index' /* webpackChunkName: "js/app/billing/index" */),
            },
        ]
    },
]