import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SccAlert from '@shicc/components/alert'
import SccMessage from '@shicc/components/message'

const app = createApp(App)
app.use(SccAlert)
app.use(SccMessage)
app.mount('#app')
