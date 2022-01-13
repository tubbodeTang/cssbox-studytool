import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Button ,Tabbar, TabbarItem, NavBar,Progress } from 'vant';

const app = createApp(App);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(Progress);
app.use(router);
app.mount('#app');
