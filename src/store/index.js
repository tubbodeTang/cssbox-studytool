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
        changePageName(state, newName) {
            this.commit('saveLastPageName', state.pageTitle)
            state.pageTitle = newName
            if (newName !== '学习中心' &&newName !== '讨论区' && newName !== '创意区') {
                this.commit('changeBackBtn', true)
            }else{
                this.commit('changeBackBtn', false)
            }
        },
        changeSubPageName(state, newName) {
           // this.commit('saveLastPageName', state.pageTitle)
            state.pageTitle = newName
            if (newName !== '学习中心' &&newName !== '讨论区' && newName !== '创意区') {
                this.commit('changeBackBtn', true)
            }else{
                this.commit('changeBackBtn', false)
            }
        },
        saveLastPageName(state, name) {
            state.lastPageName = name
        },
        popOldPageName(state){
            this.commit('changePageName',state.lastPageName)
        },
        changeBackBtn(state, showOrNot) {
            state.showBackBtn = showOrNot

        },
        changeActiveModule(state, moduleName) {
            state.activeModule = moduleName
        },
        pushActiveCard(state, card) {
            state.activeCardList.push(card)
        }
    }
})

export default store