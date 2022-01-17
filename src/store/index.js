import {
    createStore
} from 'vuex'

const store = createStore({
    state() {
        return {
            pageTitle: '标题',
            showBackBtn: false,
            // 当前在学习的模块
            activeModule: '',
            // 被点亮的卡片对象列表，包括卡片的等级等信息
            activeCardList: []
        }
    },
    mutations: {
        changePageName(state, newName) {
            state.pageTitle = newName
            if(newName!=='标题'){
                
            }
        },
        changeBackBtn(state,payload){

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