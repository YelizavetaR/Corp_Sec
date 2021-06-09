export default [
    {
        path: 'brformlist',
        name: 'brform.br_form',
        redirect: { name: 'appBRFormList' },
        meta: {
            title: 'brform.br_form',
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
                name: 'appBRFormList',
                meta: {
                    trans: 'global.list',
                    title: 'brform.br_form',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/brform/index'),
            },
            {
                path: ':uuid',
                name: 'brformview',
                meta: {
                    trans: 'global.view',
                    title: 'brform.br_form',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/brform/view'),
            },
            {
                path: ':uuid/edit',
                name: 'appBrformEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'brform.edit',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/brform/edit' /* webpackChunkName: "js/app/customer/edit" */),
            },
            {
                path: 'choose',
                name: 'appBrformchoose',
                meta: {
                    title: 'brform.choose',
                },
                component: () => import('@views/app/brform/choose' /* webpackChunkName: "js/app/customer/edit" */),
            },
            {
                path: 'faconfig',
                name: 'appfaConfig',
                redirect: { name: 'appfaConfigBasicInfo' },
                meta: {
                    prefixTitle: 'menu.setup',
                    title: 'brform.corperate',
                    icon: 'fas fa-cogs',
                    permissions: ['access-admin'],
                    isHiddenNav: true,
                },
                component: () => import('@views/app/brform/faindex' /* webpackChunkName: "js/app/config/index" */),
                children: [{
                    path: 'fa_corporate_customer_pg_1',
                    name: 'appfaConfigBasicInfo',
                    meta: {
                        title: 'brform.faform',
                        icon: '',
                        key: 'fabasic'
                    },
                    component: () =>
                        import('@views/app/brform/faform/index' /* webpackChunkName: "js/app/config/basic/index" */),
                }, {
                    path: 'fa_corporate_customer_pg_2',
                    name: 'appfacorporate_pg2',
                    meta: {
                        title: 'brform.corporate_pg_2',
                        key: 'corporate_customer_pg_2'
                    },
                    component: () =>
                        import('@views/app/brform/faform/corporate2' /* webpackChunkName: "js/app/config/assets/index" */),
                }, {
                    path: 'fa_corporate_owner',
                    name: 'appfacorporate_owner',
                    meta: {
                        title: 'brform.coporatepage3',
                        key: 'coporatepage3'
                    },
                    component: () =>
                        import('@views/app/brform/faform/corporate3' /* webpackChunkName: "js/app/config/system/index" */),
                }, {
                    path: 'mail',
                    name: 'appConfigMail',
                    meta: {
                        title: 'config.mail.mail',
                        icon: 'fas fa-envelope',
                        key: 'mail'
                    },
                    component: () =>
                        import('@views/app/config/mail/index' /* webpackChunkName: "js/app/config/mail/index" */),
                }, {
                    path: 'roles',
                    name: 'appConfigRole',
                    redirect: { name: 'appConfigRoleList' },
                    meta: {
                        title: 'config.role.roles',
                        icon: 'fas fa-users-cog',
                        hideChildren: true,
                    },
                    component: {
                        template: '<router-view></router-view>'
                    },
                    children: [{
                        path: '',
                        name: 'appConfigRoleList',
                        meta: {
                            trans: 'global.list',
                            title: 'config.role.roles',
                            icon: 'fas fa-list',
                        },
                        component: () => import('@views/app/config/role/index' /* webpackChunkName: "js/app/config/role/index" */),
                    },
                    {
                        path: 'add',
                        name: 'appConfigRoleAdd',
                        meta: {
                            trans: 'global.add',
                            title: 'config.role.role',
                            icon: 'fas fa-plus',
                        },
                        component: () => import('@views/app/config/role/add' /* webpackChunkName: "js/app/config/role/add" */),
                    },
                    ]
                }, {
                    path: 'permissions',
                    name: 'appConfigPermission',
                    meta: {
                        title: 'config.permission.permissions',
                        icon: 'fas fa-key',
                    },
                    component: () =>
                        import('@views/app/config/permission/index' /* webpackChunkName: "js/app/config/permission/index" */),
                }, {
                    path: 'authentication',
                    name: 'appConfigAuthentication',
                    meta: {
                        title: 'config.auth.auth',
                        icon: 'fas fa-sign-in-alt',
                        key: 'auth'
                    },
                    component: () =>
                        import('@views/app/config/authentication/index' /* webpackChunkName: "js/app/config/authentication/index" */),
                }, {
                    path: 'chat',
                    name: 'appConfigChat',
                    meta: {
                        title: 'config.chat.chat',
                        icon: 'fas fa-comments',
                        key: 'chat'
                    },
                    component: () =>
                        import('@views/app/config/chat/index' /* webpackChunkName: "js/app/config/chat/index" */),
                }, {
                    path: 'pusher',
                    name: 'appConfigPusher',
                    meta: {
                        title: 'config.pusher.credential',
                        icon: 'fab fa-pushed',
                        key: 'pusher'
                    },
                    component: () =>
                        import('@views/app/config/pusher/index' /* webpackChunkName: "js/app/config/pusher/index" */),
                }, {
                    path: 'sms',
                    name: 'appConfigSms',
                    meta: {
                        title: 'config.sms.sms',
                        icon: 'fas fa-comment-alt',
                        key: 'sms'
                    },
                    component: () =>
                        import('@views/app/config/sms/index' /* webpackChunkName: "js/app/config/sms/index" */),
                }, {
                    path: 'payment-gateway',
                    name: 'appConfigPaymentGateway',
                    meta: {
                        title: 'config.payment_gateway.payment_gateway',
                        icon: 'fas fa-credit-card',
                        key: 'paymentGateway'
                    },
                    component: () =>
                        import('@views/app/config/payment-gateway/index' /* webpackChunkName: "js/app/config/payment-gateway/index" */),
                }, {
                    path: 'website',
                    name: 'appConfigWebsite',
                    meta: {
                        title: 'config.website.website',
                        icon: 'fas fa-globe',
                        key: 'website'
                    },
                    component: () =>
                        import('@views/app/config/website/index' /* webpackChunkName: "js/app/config/website/index" */),
                }, {
                    path: 'social',
                    name: 'appConfigSocial',
                    meta: {
                        title: 'config.social.network',
                        icon: 'fas fa-share-alt',
                        key: 'social'
                    },
                    component: () =>
                        import('@views/app/config/social/index' /* webpackChunkName: "js/app/config/social/index" */),
                }, {
                    path: 'locales',
                    name: 'appConfigLocale',
                    redirect: { name: 'appConfigLocaleList' },
                    meta: {
                        title: 'config.locale.locales',
                        icon: 'fas fa-language',
                        hideChildren: true,
                    },
                    component: {
                        template: '<router-view></router-view>'
                    },
                    children: [{
                        path: '',
                        name: 'appConfigLocaleList',
                        meta: {
                            trans: 'global.list',
                            title: 'config.locale.locales',
                            icon: 'fas fa-list',
                        },
                        component: () => import('@views/app/config/locale/index' /* webpackChunkName: "js/app/config/locale/index" */),
                    },
                    {
                        path: 'translation',
                        name: 'appConfigLocaleTranslation',
                        meta: {
                            trans: 'global.list',
                            title: 'config.locale.translation',
                            icon: 'fas fa-language',
                        },
                        component: () => import('@views/app/config/locale/translation' /* webpackChunkName: "js/app/config/locale/translation" */),
                    },
                    {
                        path: 'add',
                        name: 'appConfigLocaleAdd',
                        meta: {
                            trans: 'global.add',
                            title: 'config.locale.locale',
                            icon: 'fas fa-plus',
                        },
                        component: () => import('@views/app/config/locale/add' /* webpackChunkName: "js/app/config/locale/add" */),
                    },
                    ]
                }]
            }
        ]
    }
]
