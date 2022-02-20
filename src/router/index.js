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
        path: '/creationCenter',
        name: 'CreationCenter',
        redirect: '/creationCenter/creation',
        component: () => import('@/views/home/index.vue'),
        children: [{
            path: 'creation',
            name: 'Creation',
            component: () => import('@/views/creationCenter/index.vue')
        },
        {
            path: 'addCreation',
            name: 'AddCreation',
            component: () => import('@/views/creationCenter/addCreation.vue')
        }]
    },{
        path: '/discussCenter',
        name: 'DiscussCenter',
        redirect: '/discussCenter/discuss',
        component: () => import('@/views/home/index.vue'),
        children: [{
            path: 'discuss',
            name: 'Discuss',
            component: () => import('@/views/discussCenter/discuss.vue')
        },
        {
            path: 'topicDetail',
            name: 'TopicDetail',
            component: () => import('@/views/discussCenter/topicDetail.vue')
        }]
    }, {
        path: '/collectionCenter',
        name: 'CollectionCenter',
        redirect: '/collectionCenter/cardList',
        component: () => import('@/views/home/index.vue'),
        children: [{
            path: 'cardList',
            name: 'CardList',
            component: () => import('@/views/collectionCenter/index.vue')
        },
        {
            path: 'cardPage',
            name: 'CardPage',
            component: () => import('@/views/collectionCenter/cardPage.vue')
        }]
    }]
})

export default router