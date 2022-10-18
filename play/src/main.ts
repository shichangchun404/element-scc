import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@shicc/theme-chalk/src/index.scss'
import SccUI from '@shicc/components'
// import { SccAlert } from '@shicc/components'

const app = createApp(App)
app.use(SccUI)
// app.use(SccAlert)
// app.use(SccMessage)
app.mount('#app')
