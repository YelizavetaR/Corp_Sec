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
            {
                path: 'add',
                name: 'appCustomerAdd',
                meta: {
                    trans: 'global.add',
                    title: 'customer.entity',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/customer/add' /* webpackChunkName: "js/app/customer/add" */),
            },
            {
                path: ':uuid',
                name: 'appCustomerView',
                meta: {
                    trans: 'global.view',
                    title: 'customer.entity',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/customer/view' /* webpackChunkName: "js/app/customer/view" */),
            },
            {
                path: ':uuid/edit',
                name: 'appCustomerEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'customer.entity',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/customer/edit' /* webpackChunkName: "js/app/customer/edit" */),
            },
        ]
    },
]