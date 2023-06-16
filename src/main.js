// import './assets/main.css'

import {
  createApp,
  watch
} from 'vue'
import {
  createPinia
} from 'pinia'
import App from './App.vue'
import resetStore from './stores/reset-store'
import router from './router/index'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
const app = createApp(App)

const pinia = createPinia()
pinia.use(resetStore)
app.use(pinia)
app.use(router)
app.use(Antd)
app.mount('#app')
app.provide('rootNames','freelaeders')

watch(pinia.state, () => {
  console.log('render')
}, {
  deep: true
})