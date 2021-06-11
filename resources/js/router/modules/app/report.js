export default [
    {
        path: 'report',
        name: 'appReport',
        redirect: { name: 'appReportList' },
        meta: {
            title: 'report.report',
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
                name: 'appReportList',
                meta: {
                    trans: 'global.list',
                    title: 'report.report',
                    permissions: ['create-user']
                },
                component: () => import('@views/app/report/index' /* webpackChunkName: "js/app/report/index" */),
            },
        ]
    },
]