import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@src/router'
import App from '@src/App.vue'
import '@src/style.css'
import { useUiStore } from '@src/stores/ui'
import { useCartStore } from '@src/stores/cart'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')

// Initialize theme after app mounts
const ui = useUiStore()
ui.initializeTheme()

// Initialize cart from localStorage
const cart = useCartStore()
cart.initializeCart()
