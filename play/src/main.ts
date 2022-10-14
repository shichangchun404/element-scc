import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SccAlert from '@shicc/components/alert'
import SccMessage from '@shicc/components/message'
import '@shicc/theme-chalk/src/index.scss'
// import * as Scc from '@shicc/components'

const app = createApp(App)
app.use(SccAlert)
app.use(SccMessage)
app.mount('#app')
