export default [
    {
        path: 'customers',
        name: 'appCustomer',
        redirect: { name: 'appCustomerList' },
        meta: {
            title: 'customer.customers',
            icon: '',
            hideChildren: true,
            permissions: ['access-admin'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appCustomerList',
                meta: {
                    trans: 'global.list',
                    title: 'customer.entity',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/customer/index' /* webpackChunkName: "js/app/customer/index" */),
            },
        ]
    },
]