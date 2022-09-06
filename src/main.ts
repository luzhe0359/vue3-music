import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'

import '@/utils/extend'
import '@/assets/base.scss'
import '@/assets/theme.scss'

createApp(App).use(router).use(store).mount('#app')
