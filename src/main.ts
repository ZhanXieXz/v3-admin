import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import elementPlus from './plugins/element-plus'
import { store } from './store/index'

createApp(App).use(router).use(elementPlus).use(store).mount('#app')
