import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHammer from './utils/testHammer.ts'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueHammer, {
	threshold: 0,
});
app.mount('#app');