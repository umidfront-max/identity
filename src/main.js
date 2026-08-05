import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { reveal, tilt, magnet } from './composables/useMotion.js'
import { loadAnalytics } from './composables/useAnalytics.js'
import './assets/css/base.css'

const app = createApp(App)

app.use(router)
app.directive('reveal', reveal)
app.directive('tilt', tilt)
app.directive('magnet', magnet)

loadAnalytics()
app.mount('#app')
