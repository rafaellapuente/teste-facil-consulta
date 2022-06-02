import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMask from '@devindex/vue-mask'
import store from './store'

const app = createApp(App)
app.use(VueMask)
app.use(store)
app.use(router)
app.mount("#app")