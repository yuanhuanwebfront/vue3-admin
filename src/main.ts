import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index';

import './style/reset.css'
import './style/font/iconfont.css'

createApp(App)
.use(router)
.mount('#app')
