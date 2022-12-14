import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@element-scc/theme-chalk/src/index.scss'
import SccUI from 'element-scc/index'
// import { SccAlert } from 'element-scc/index'
// import SccUI from '../../dist/es/index.mjs'
// import { SccAlert } from '../../dist/element-scc/es/index.mjs'
// import '../../dist/element-scc/theme-chalk/css/index.css'

const app = createApp(App)
app.use(SccUI)
// app.use(SccAlert)
// app.use(SccMessage)
app.mount('#app')
