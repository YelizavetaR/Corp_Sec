import system from './system';

// loading app routes
import user from './user'

import utility from './utility'
import config from './config'
import uiConfig from './ui-config'
import userPreference from './user-preference'
import activity from './activity'
import site from './site'

import customer from './customer';
import enquiry from './enquiry';
import brforms from './brform';
import cdd from './cdd';
import calendar from './calendar';
import invoice from './invoice';
import report from './report';
import settings from './settings';

import entity_secretary from './entity_secretary';
import documents from './documents';
import mailroom from './mailroom';
import requests from './requests';
import enquiry_user from './enquiry_user';
import entity_info from './entity_info';
import billing from './billing';

export default [
    {
        path: 'dashboard',
        name: 'appDashboard',
        meta: {
            title: 'dashboard.dashboard',
            description: '',
            icon: 'fas fa-home',
        },
        components: {
            header: () => import('@views/app/dashboard/header' /* webpackChunkName: "js/app/dashboard/header" */),
            special: () => import('@views/app/dashboard/index' /* webpackChunkName: "js/app/dashboard/index" */),
        },
    },
    {
        path: '',
        meta: {
            isHiddenNav: true,
        },
        components: {
            header: () => import('@views/layouts/partials/app-common-page-header' /* webpackChunkName: "js/layouts/partials/app-common-page-header" */),
            default: { template: '<router-view></router-view>' },
        },
        children: [
            ...system,
            ...customer,
            ...enquiry,
            ...brforms,
            ...cdd,
            ...calendar,
            ...user,
            ...invoice,
            ...report,
            ...settings,

            ...entity_secretary,
            ...documents,
            ...mailroom,
            ...requests,
            ...enquiry_user,
            ...entity_info,
            ...billing,

            // ...utility,
            // ...config,
            // ...uiConfig,
            // ...userPreference,
            // ...activity,
            // ...site,
        ]
    },
]