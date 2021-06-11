export default [
    {
        path: 'enquiry',
        name: 'appEnquiry',
        redirect: { name: 'appEnquiryList' },
        meta: {
            title: 'enquiry.enquiry',
            icon: '',
            hideChildren: true,
            permissions: ['create-user'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appEnquiryList',
                meta: {
                    trans: 'global.list',
                    title: 'enquiry.enquiry',
                    permissions: ['create-user']
                },
                component: () => import('@views/app/enquiry/index' /* webpackChunkName: "js/app/enquiry/index" */),
            },
            {
                path: ':uuid',
                name: 'appEnquiryView',
                meta: {
                    trans: 'global.view',
                    title: 'enquiry.enquiry',
                    permissions: ['create-user']
                },
                component: () => import('@views/app/enquiry/view' /* webpackChunkName: "js/app/enquiry/view" */),
            },
        ]
    }
]
