import {
    createStore
} from 'vuex'

const store = createStore({
    state() {
        return {
            pageTitle: '学习中心',
            lastPageName: '学习中心',
            showBackBtn: false,
            // 当前在学习的模块
            activeModule: '',
            // 被点亮的卡片对象列表，包括卡片的等级等信息
            activeCardList: []
        }
    },
    mutations: {
        // 页面跳转相关
        changePageName(state, newName) {
            this.commit('saveLastPageName', state.pageTitle)
            state.pageTitle = newName
            if (newName !== '学习中心' && newName !== '讨论区' && newName !== '创意区') {
                this.commit('changeBackBtn', true)
            } else {
                this.commit('changeBackBtn', false)
            }
        },
        // 二级页面跳转相关
        changeSubPageName(state, newName) {
            state.pageTitle = newName
            if (newName !== '学习中心' && newName !== '讨论区' && newName !== '创意区') {
                this.commit('changeBackBtn', true)
            } else {
                this.commit('changeBackBtn', false)
            }
        },
        // 进入二级页面时保存返回时的一级页面名称
        saveLastPageName(state, name) {
            state.lastPageName = name
        },
        // 返回一级页面时弹出保存的一级页面名称
        popOldPageName(state) {
            this.commit('changePageName', state.lastPageName)
        },
        // 是否显示后退按钮
        changeBackBtn(state, showOrNot) {
            state.showBackBtn = showOrNot
        },
        // 当前在学习的模块
        changeActiveModule(state, moduleName) {
            state.activeModule = moduleName
        },
        // 通过关卡学习，记录学习进度
        updateCardProgress(state, newRank) {
            const card = state.activeCardList.find(item => item.attr == card.attr)
            card.curRankNum = newRank
        },
        // 通过关卡学习，记录学习进度
        pushActiveCard(state, card) {
            state.activeCardList.push(card)
        }
    }
})

export default store