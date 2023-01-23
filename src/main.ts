import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createPinia } from 'pinia'
import '@arco-design/web-vue/dist/arco.css';

const pinia = createPinia()

createApp(App)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .use(pinia)
    .mount('#app')
