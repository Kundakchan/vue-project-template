import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/style.scss'
import initializeHttpInterceptors from '@/services/http/interceptors'

import App from './App.vue'
import router from './router'

initializeHttpInterceptors()
createApp(App).use(createPinia()).use(router).mount('#app')
