export default [
    {
        path: 'settings',
        name: 'appSettings',
        redirect: { name: 'appSettingsList' },
        meta: {
            title: 'settings.settings',
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
                name: 'appSettingsList',
                meta: {
                    trans: 'global.list',
                    title: 'settings.settings',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/settings/index' /* webpackChunkName: "js/app/settings/index" */),
            },
        ]
    },
]