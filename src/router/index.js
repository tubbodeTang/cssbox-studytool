import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [{
        path: '/',
        name: 'Home',
        redirect: '/study/studyList',
    }, {
        path: '/study',
        name: 'Study',
        redirect: '/study/studyList',
        component: () => import('@/views/home/index.vue'),
        children: [{
                path: 'studyList',
                component: () => import('@/views/studyCenter/studyList.vue')
            },
            {
                path: 'studyPage',
                component: () => import('@/views/studyCenter/studyPage.vue')
            }
        ]
    }, {
        path: '/discussCenter',
        name: 'DiscussCenter',
        redirect: '/DiscussCenter/discuss',
        component: () => import('@/views/home/index.vue'),
        children: [{
            path: 'discuss',
            component: () => import('@/views/discussCenter/discuss.vue')
        }]
    }]
})

export default router