import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Fancybox } from "@fancyapps/ui"

window.Fancybox = Fancybox
import "@fancyapps/ui/dist/fancybox/fancybox.css";

createApp(App).use(store).use(router).mount('#app')
