import {
    createStore
} from 'vuex'

const store = createStore({
    state() {
        return {
            pageTitle: '标题',
            activeModule: ''
        }
    },
    mutations: {
        changePageName(state, newName) {
            state.pageTitle = newName
        },
        changeActiveModule(state, moduleName) {
            state.activeModule = moduleName
        }
    }
})

export default store