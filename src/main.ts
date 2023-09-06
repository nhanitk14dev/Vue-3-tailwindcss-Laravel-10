import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// https://vuejs.org/guide/components/registration.html#global-registration
app.component('DefaultLayout', DefaultLayout)
app.component('AuthLayout', AuthLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')
