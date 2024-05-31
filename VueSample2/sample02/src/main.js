import { createApp } from 'vue'
import App from './App.vue'
import CafeMenu from './components/CafeMenu.vue'

new Vue({
    render: h => h(CafeMenu)
}).$mount('#app');