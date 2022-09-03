import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'

import 'tailwindcss/tailwind.css'

createApp(App).use(router).use(store).mount('#app')
