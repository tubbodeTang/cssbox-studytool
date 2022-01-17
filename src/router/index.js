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
                name: 'StudyList',
                component: () => import('@/views/studyCenter/studyList.vue')
            },
            {
                path: 'studyPage',
                name: 'StudyPage',
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
            name: 'Discuss',
            component: () => import('@/views/discussCenter/discuss.vue')
        }]
    }, {
        path: '/collectionCenter',
        name: 'CollectionCenter',
        redirect: '/CollectionCenter/cardPage',
        component: () => import('@/views/home/index.vue'),
        children: [{
            path: '/cardPage',
            name: 'CardPage',
            component: () => import('@/views/collectionCenter/index.vue')
        }]
    }]
})

export default router