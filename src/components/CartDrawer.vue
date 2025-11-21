<template>
  <div>
    <!-- Overlay -->
    <div 
      v-if="cartStore.isOpen"
      class="fixed inset-0 z-40 bg-black bg-opacity-40"
      @click="closeDrawer"
    ></div>

    <!-- Drawer -->
    <aside
      class="fixed top-0 right-0 z-50 h-full w-full max-w-md transform bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 dark:bg-coffee-900/95"
      :class="cartStore.isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex items-center justify-between px-6 py-6 border-b border-coffee-100/10">
        <h2 class="text-2xl font-serif font-bold bg-gradient-to-br from-coffee-700 to-coffee-900 bg-clip-text text-transparent dark:from-cream-100 dark:to-cream-300">
          Your Cart ({{ cartStore.totalItems }})
        </h2>
        <button 
          @click="closeDrawer" 
          class="p-2 text-coffee-600 transition-all duration-300 rounded-xl hover:bg-coffee-50 hover:text-coffee-800 dark:text-cream-200 dark:hover:bg-coffee-800"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex flex-col h-full">
        <!-- Items -->
        <div class="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <div v-if="cartStore.totalItems === 0" class="py-16 text-center">
            <div class="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-coffee-100 to-coffee-200 dark:from-coffee-800 dark:to-coffee-700">
              <svg class="w-12 h-12 text-coffee-600 dark:text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-coffee-800 dark:text-cream-100">Your cart is empty</h3>
            <router-link to="/menu" @click="closeDrawer" class="inline-flex btn-primary">Browse Menu</router-link>
          </div>

          <div v-else class="space-y-4">
            <div 
              v-for="item in cartStore.cartItems" 
              :key="item.id" 
              class="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-white to-cream-50 shadow-lg shadow-coffee-900/5 
                     hover:shadow-xl hover:shadow-coffee-900/10 transition-all duration-300 
                     dark:from-coffee-800 dark:to-coffee-900 dark:shadow-black/20"
            >
              <div class="flex items-center space-x-4">
                <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-coffee-100 to-coffee-200 dark:from-coffee-700 dark:to-coffee-800">
                  <svg class="w-7 h-7 text-coffee-600 dark:text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-coffee-800 dark:text-cream-100">{{ item.name }}</div>
                  <div class="text-sm font-medium text-coffee-600 dark:text-cream-300">₱{{ item.price }} x {{ item.quantity }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <button 
                  @click="cartStore.updateQuantity(item.id, item.quantity - 1)" 
                  class="w-8 h-8 rounded-lg bg-coffee-50 text-coffee-700 hover:bg-coffee-100 
                         flex items-center justify-center transition-colors duration-200
                         dark:bg-coffee-700 dark:text-cream-100 dark:hover:bg-coffee-600"
                >
                  -
                </button>
                <span class="w-8 text-center font-medium text-coffee-800 dark:text-cream-100">{{ item.quantity }}</span>
                <button 
                  @click="cartStore.updateQuantity(item.id, item.quantity + 1)" 
                  class="w-8 h-8 rounded-lg bg-coffee-50 text-coffee-700 hover:bg-coffee-100 
                         flex items-center justify-center transition-colors duration-200
                         dark:bg-coffee-700 dark:text-cream-100 dark:hover:bg-coffee-600"
                >
                  +
                </button>
                <button 
                  @click="cartStore.removeItem(item.id)" 
                  class="p-2 text-coffee-400 hover:text-coffee-600 transition-colors duration-200 dark:text-cream-300 dark:hover:text-cream-100"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="border-t border-coffee-100/10 bg-gradient-to-br from-white to-cream-50 dark:from-coffee-900 dark:to-coffee-800">
          <div class="px-6 py-6 space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-coffee-600 dark:text-cream-300">Subtotal</span>
              <span class="font-semibold text-coffee-800 dark:text-cream-100">₱{{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-coffee-600 dark:text-cream-300">Tax (8.5%)</span>
              <span class="font-semibold text-coffee-800 dark:text-cream-100">₱{{ (cartStore.totalPrice * 0.085).toFixed(2) }}</span>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-coffee-100/10">
              <span class="text-lg font-bold bg-gradient-to-br from-coffee-700 to-coffee-900 bg-clip-text text-transparent dark:from-cream-100 dark:to-cream-300">Total</span>
              <span class="text-xl font-bold bg-gradient-to-br from-coffee-700 to-coffee-900 bg-clip-text text-transparent dark:from-cream-100 dark:to-cream-300">₱{{ (cartStore.totalPrice * 1.085).toFixed(2) }}</span>
            </div>
            <div class="pt-4 space-y-3">
              <router-link to="/cart" @click="closeDrawer" class="w-full block text-center btn-secondary">View Cart</router-link>
              <button @click="checkout" class="w-full btn-primary">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
  
</template>

<script>
import { useCartStore } from '@src/stores/cart'

export default {
  name: 'CartDrawer',
  setup() {
    const cartStore = useCartStore()

    const closeDrawer = () => {
      cartStore.isOpen = false
    }

    const checkout = () => {
      alert('Checkout functionality would be implemented here!')
    }

    return {
      cartStore,
      closeDrawer,
      checkout
    }
  }
}
</script>


