import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'

import '@/utils/extend'
import '@/assets/base.scss'
import '@/assets/theme.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App).use(router).use(store).mount('#app')
