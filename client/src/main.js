import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'


import CoffeeHeader from './components/CoffeeHeader.vue'

import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue' // [เพิ่ม] Import 


import './style.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(CkeditorPlugin) 
app.use(router)

// ⭐ ลงทะเบียน Global Component
app.component('coffee-header', CoffeeHeader)

app.mount('#app')
