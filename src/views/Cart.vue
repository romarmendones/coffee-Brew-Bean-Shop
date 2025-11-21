<template>
  <div class="min-h-screen bg-cream-50">
    <!-- Header -->
    <section class="text-white bg-coffee-800 section-padding">
      <div class="mx-auto text-center max-w-7xl">
        <h1 class="mb-4 font-serif text-4xl font-bold md:text-5xl">Your Cart</h1>
        <p class="text-xl text-cream-100">
          Review your selections and proceed to checkout
        </p>
      </div>
    </section>

    <!-- Cart Content -->
    <section class="section-padding">
      <div class="max-w-4xl mx-auto">
        <!-- Empty Cart State -->
        <div v-if="cartStore.totalItems === 0" class="py-16 text-center">
          <div class="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-coffee-100">
            <svg class="w-12 h-12 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-coffee-800">Your cart is empty</h3>
          <p class="mb-6 text-coffee-600">Looks like you haven't added any items to your cart yet.</p>
          <router-link to="/menu" class="btn-primary">
            Browse Menu
          </router-link>
        </div>

        <!-- Cart Items -->
        <div v-else class="space-y-6">
          <div v-for="item in cartStore.cartItems" :key="item.id" class="p-6 card">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="flex items-center justify-center w-16 h-16 rounded-lg bg-coffee-200">
                  <svg class="w-8 h-8 text-coffee-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-coffee-800">{{ item.name }}</h3>
                  <p class="text-sm text-coffee-600">{{ item.description }}</p>
                  <p class="font-medium text-coffee-700">₱{{ item.price }}</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <button 
                    @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                    class="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-coffee-100 text-coffee-600 hover:bg-coffee-200"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="w-8 font-medium text-center text-coffee-800">{{ item.quantity }}</span>
                  <button 
                    @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                    class="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-coffee-100 text-coffee-600 hover:bg-coffee-200"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                
                <div class="text-right">
                  <p class="text-lg font-bold text-coffee-800">₱{{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>
                
                <button 
                  @click="cartStore.removeItem(item.id)"
                  class="transition-colors text-coffee-500 hover:text-coffee-700"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Cart Summary -->
          <div class="p-6 card">
            <div class="space-y-4">
              <div class="flex items-center justify-between py-2 border-b border-coffee-200">
                <span class="text-lg text-coffee-600">Subtotal</span>
                <span class="text-lg font-semibold text-coffee-800">₱{{ cartStore.totalPrice.toFixed(2) }}</span>
              </div>
              <div class="flex items-center justify-between py-2 border-b border-coffee-200">
                <span class="text-lg text-coffee-600">Tax (8.5%)</span>
                <span class="text-lg font-semibold text-coffee-800">₱{{ (cartStore.totalPrice * 0.085).toFixed(2) }}</span>
              </div>
              <div class="flex items-center justify-between py-2">
                <span class="text-xl font-bold text-coffee-800">Total</span>
                <span class="text-2xl font-bold text-coffee-800">₱{{ (cartStore.totalPrice * 1.085).toFixed(2) }}</span>
              </div>
            </div>
            
            <div class="mt-6 space-y-4">
              <button @click="proceedToCheckout" class="w-full py-4 text-lg btn-primary">
                Proceed to Checkout
              </button>
              <button @click="cartStore.clearCart" class="w-full py-4 text-lg btn-secondary">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info -->
    <section v-if="cartStore.totalItems > 0" class="bg-white section-padding">
      <div class="max-w-4xl mx-auto">
        <div class="grid gap-8 md:grid-cols-2">
          <div class="text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-100">
              <svg class="w-8 h-8 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-coffee-800">Fast Service</h3>
            <p class="text-coffee-600">Your order will be ready in 5-10 minutes</p>
          </div>
          
          <div class="text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-coffee-100">
              <svg class="w-8 h-8 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-coffee-800">Quality Guaranteed</h3>
            <p class="text-coffee-600">We use only the finest ingredients</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useCartStore } from '@src/stores/cart'

export default {
  name: 'Cart',
  setup() {
    const cartStore = useCartStore()

    const proceedToCheckout = () => {
      // In a real app, this would redirect to a checkout page
      alert('Checkout functionality would be implemented here!')
    }

    return {
      cartStore,
      proceedToCheckout
    }
  }
}
</script>
