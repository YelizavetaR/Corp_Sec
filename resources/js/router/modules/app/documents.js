export default [
    {
        path: 'documents',
        name: 'appDocuments',
        redirect: { name: 'appDocumentsList' },
        meta: {
            title: 'documents.documents',
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
                name: 'appDocumentsList',
                meta: {
                    trans: 'global.list',
                    title: 'documents.documents',
                    permissions: ['access-user']
                },
                component: () => import('@views/app/documents/index' /* webpackChunkName: "js/app/documents/index" */),
            },
        ]
    },
]