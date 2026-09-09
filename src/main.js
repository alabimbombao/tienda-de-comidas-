import { createApp } from 'vue'
import './style.css'
import './views-shared.css'
import App from './App.vue'
import { router } from "../routes/routes.js"
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


const app = createApp(App)

app.use(router)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')