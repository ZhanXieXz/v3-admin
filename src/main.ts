import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router/'
import elementPlus from './plugins/element-plus'
import { store } from './store/index'
import dialogform from './components/DialogForm/index'

createApp(App).use(router).use(elementPlus).use(dialogform).use(store).mount('#app')
