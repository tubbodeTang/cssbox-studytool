import {
    createStore
} from 'vuex'

import {
    mydraftList,
    worldList
} from '@/api/getWorksData.js'

const store = createStore({
    state() {
        return {
            pageTitle: '学习中心',
            // 当前在学习的模块
            activeModule: '',
            // 当前在学习的课程
            activeLesson: '',
            // 被点亮的卡片对象列表，包括卡片的等级等信息
            activeCardList: [],
            //—————————————讨论模块—————————————
            selectedTopic: null,
            //—————————————创意模块—————————————
            // 创意模块列表
            worldList: worldList,
            // 我的创意列表
            mydraftList: mydraftList,
            // 创作元素编号
            createEleID: 1,
            // 创作时被选中的元素id
            createActiveEleID: null,
            //—————————————用户信息—————————————
            userId: 'txb406'
        }
    },
    mutations: {
        // 页面跳转相关
        changePageName(state, newName) {
            state.pageTitle = newName
        },
        // 当前在学习的模块
        changeActiveModule(state, moduleName) {
            state.activeModule = moduleName
        },
        // 当前在学习的课程
        changeActiveLesson(state, lessonName) {
            state.activeLesson = lessonName
        },
        // 通过关卡学习，记录学习进度
        updateCardProgress(state, newCard) {
            const card = state.activeCardList.find(item => item.attr == newCard.card.attr)
            card.curRankNum = newCard.cardRank
        },
        // 通过关卡学习，记录学习进度
        pushActiveCard(state, card) {
            state.activeCardList.push(card)
        },
        //—————————————讨论模块—————————————
        selectTopic(state, topic) {
            state.selectedTopic = topic
        },
        //—————————————创意模块—————————————
        saveList(state, newItem) {
            state.mydraftList.push({
                id: 2,
                workName: '测试2',
                likeNum: 0,
                img: newItem
            })
        },
        createEleIDPlus(state) {
            state.createEleID = state.createEleID + 1
        },
        createEleIDClear(state) {
            state.createEleID = 1
        },
        changeCreateActiveEleID(state, newId) {
            state.createActiveEleID = newId
        },
        clearCreateActiveEleID(state) {
            state.createActiveEleID = null
        }

    }
})

export default store