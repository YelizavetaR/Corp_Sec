export default [
    {
        path: 'settings',
        name: 'appSettings',
        redirect: { name: 'appSettingsList' },
        meta: {
            title: 'settings.settings',
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
                name: 'appSettingsList',
                meta: {
                    trans: 'global.list',
                    title: 'settings.settings',
                    permissions: ['create-user']
                },
                component: () => import('@views/app/settings/index' /* webpackChunkName: "js/app/settings/index" */),
            },
        ]
    },
]