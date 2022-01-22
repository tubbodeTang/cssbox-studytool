import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
    Button,
    Tabbar,
    TabbarItem,
    NavBar,
    Progress,
    Icon,
    Col,
    Row,
    Popup
    // Swipe,
    // SwipeItem
} from 'vant';

const app = createApp(App);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(Progress);
app.use(Icon);
app.use(Col);
app.use(Row);
app.use(Popup);
// app.use(Swipe);
// app.use(SwipeItem);
app.use(router);
app.use(store);
app.mount('#app');