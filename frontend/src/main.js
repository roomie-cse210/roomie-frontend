import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'

import './scss/main.css'

createApp(App).use(router).mount('#app')
