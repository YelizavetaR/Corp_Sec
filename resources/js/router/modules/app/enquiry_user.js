export default [
    {
        path: 'enquiry_user',
        name: 'appEnquiryUser',
        redirect: { name: 'appEnquiryUserList' },
        meta: {
            title: 'enquiry.enquiry',
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
                name: 'appEnquiryUserList',
                meta: {
                    trans: 'global.list',
                    title: 'enquiry.enquiry',
                    permissions: ['list-query']
                },
                component: () => import('@views/app/enquiry_user/index' /* webpackChunkName: "js/app/enquiry_user/index" */),
            },
        ]
    },
]