import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

createApp(App).use(router).mount('#app')
