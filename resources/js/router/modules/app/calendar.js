export default [
    {
        path: 'calendar',
        name: 'appCalendar',
        redirect: { name: 'appCalendarList' },
        meta: {
            title: 'calendar.calendar',
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
                name: 'appCalendarList',
                meta: {
                    trans: 'global.list',
                    title: 'calendar.calendar',
                    permissions: ['access-admin']
                },
                component: () => import('@views/app/calendar/index' /* webpackChunkName: "js/app/calendar/index" */),
            },
        ]
    },
]