export default [
    {
        path: 'brformlist',
        name: 'brform.br_form',
        redirect: { name: 'appBRFormList' },
        meta: {
            title: 'brform.br_form',
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
                name: 'appBRFormList',
                meta: {
                    trans: 'global.list',
                    title: 'brform.br_form',
                    permissions: ['create-user'],
                },
                component: () => import('@views/app/brform/index'),
            },
            {
                path: ':uuid',
                name: 'brformview',
                meta: {
                    trans: 'global.view',
                    title: 'brform.br_form',
                    permissions: ['create-user'],
                },
                component: () => import('@views/app/brform/view'),
            },
            {
                path: ':uuid/edit',
                name: 'appBrformEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'brform.edit',
                    permissions: ['create-user'],
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
                    permissions: ['create-user'],
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
                    path: 'fa_corporate_agent',
                    name: 'appfacorporate_agent',
                    meta: {
                        title: 'AGENT',
                        key: 'agent'
                    },
                    component: () =>
                        import('@views/app/brform/faform/corporate4' /* webpackChunkName: "js/app/config/mail/index" */),
                }, {
                    path: 'fa_corporate_pg1',
                    name: 'appfacorporate_pg1',
                    meta: {
                        title: 'brform.coporatepage5',
                        key: 'pep_pg1'
                    },
                    component: () =>
                        import('@views/app/brform/faform/corporatepg1' /* webpackChunkName: "js/app/config/mail/index" */),
                },
                {
                    path: 'fa_corporate_pg2',
                    name: 'appfacorporate_peppg2',
                    meta: {
                        title: 'brform.coporatepage6',
                        key: 'pep_pg2'
                    },
                    component: () =>
                        import('@views/app/brform/faform/corporatepg2' /* webpackChunkName: "js/app/config/mail/index" */),
                },
                {
                    path: 'fa_corporate_declartion',
                    name: 'appfacorporate_declartion',
                    meta: {
                        title: 'brform.coporatepage7',
                        key: 'declartion'
                    },
                    component: () =>
                        import('@views/app/brform/faform/corporatedelection' /* webpackChunkName: "js/app/config/mail/index" */),
                }
                ]
            },
            {
                path: 'individual',
                name: 'appfaapplication',
                redirect: { name: 'appfaApplicationBasicInfo' },
                meta: {
                    prefixTitle: 'menu.setup',
                    title: 'brform.individual',
                    icon: 'fas fa-cogs',
                    // permissions: ['create-user'],
                    isHiddenNav: true,
                },
                component: () => import('@views/app/brform/individual' /* webpackChunkName: "js/app/config/index" */),
                children: [{
                    path: 'fa_individual_customer',
                    name: 'appfaApplicationBasicInfo',
                    meta: {
                        title: 'brform.faform',
                        icon: '',
                        key: 'fabasic'
                    },
                    component: () =>
                        import('@views/app/brform/inform/individual_custom' /* webpackChunkName: "js/app/config/basic/index" */),
                }, {
                    path: 'fa_individual_owner',
                    name: 'appfaindividual_owner',
                    meta: {
                        title: 'brform.coporatepage3',
                        key: 'individual_owner'
                    },
                    component: () =>
                        import('@views/app/brform/inform/individual3' /* webpackChunkName: "js/app/config/system/index" */),
                }, {
                    path: 'fa_indvidual_agent',
                    name: 'appfaindvidual_agent',
                    meta: {
                        title: 'AGENT',
                        key: 'agent'
                    },
                    component: () =>
                        import('@views/app/brform/inform/individual4' /* webpackChunkName: "js/app/config/mail/index" */),
                }, {
                    path: 'fa_individual_pg1',
                    name: 'appfaindividual_pg1',
                    meta: {
                        title: 'brform.coporatepage5',
                        key: 'pep_pg1'
                    },
                    component: () =>
                        import('@views/app/brform/inform/individualpg1' /* webpackChunkName: "js/app/config/mail/index" */),
                },
                {
                    path: 'fa_individual_pg2',
                    name: 'appfaindividual_peppg2',
                    meta: {
                        title: 'brform.coporatepage6',
                        key: 'pep_pg2'
                    },
                    component: () =>
                        import('@views/app/brform/inform/individualpg2' /* webpackChunkName: "js/app/config/mail/index" */),
                },
                {
                    path: 'fa_individual_declartion',
                    name: 'appfaindividual_declartion',
                    meta: {
                        title: 'brform.coporatepage7',
                        key: 'declartion'
                    },
                    component: () =>
                        import('@views/app/brform/inform/individualdelection' /* webpackChunkName: "js/app/config/mail/index" */),
                }
                ]
            }
        ]
    }]