import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

import pinia from './store'


const app = createApp(App)
app.use(pinia);
app.use(ElementPlus)
app.use(router) //注册路由
app.mount('#app')