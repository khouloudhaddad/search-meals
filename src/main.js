import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocials from 'vue-socials';

createApp(App)
.use(router)
.use(store)
.use(VueSocials)
.mount('#app')
