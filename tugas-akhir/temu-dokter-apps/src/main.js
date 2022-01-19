import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/custom.css'
import '@/assets/custom.js'

createApp(App).use(router).mount('#app')
