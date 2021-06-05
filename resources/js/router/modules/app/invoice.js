export default [
    {
        path: 'invoice',
        name: 'appInvoice',
        redirect: { name: 'appInvoiceList' },
        meta: {
            title: 'invoice.invoice',
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
                name: 'appInvoiceList',
                meta: {
                    trans: 'global.list',
                    title: 'invoice.invoice',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/invoice/index' /* webpackChunkName: "js/app/invoice/index" */),
            },
        ]
    },
]