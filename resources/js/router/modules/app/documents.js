export default [
    {
        path: 'documents',
        name: 'appDocuments',
        redirect: { name: 'appDocumentsList' },
        meta: {
            title: 'documents.documents',
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
                name: 'appDocumentsList',
                meta: {
                    trans: 'global.list',
                    title: 'documents.documents',
                    permissions: ['list-query']
                },
                component: () => import('@views/app/documents/index' /* webpackChunkName: "js/app/documents/index" */),
            },
        ]
    },
]