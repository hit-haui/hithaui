import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/Router'

createApp(App).use(router).mount('#app')
