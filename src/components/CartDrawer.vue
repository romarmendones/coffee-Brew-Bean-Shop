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
                <div class="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-coffee-100 to-coffee-200 dark:from-coffee-700 dark:to-coffee-800">
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-full object-cover"
                    @error="e => e.target.style.display='none'"
                  />
                  <svg v-else class="w-7 h-7 m-auto mt-3 text-coffee-600 dark:text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <button @click="openCheckout" class="w-full btn-primary">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Checkout Modal -->
    <div
      v-if="showCheckout"
      class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      @click.self="closeCheckout"
    >
      <div class="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden" @click.stop>
        <!-- Modal Header -->
        <div class="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-coffee-700 to-coffee-900 text-white">
          <h3 class="text-xl font-bold font-serif">
            <span v-if="checkoutStep === 1">Delivery Details</span>
            <span v-else-if="checkoutStep === 2">Payment</span>
            <span v-else>Order Confirmed!</span>
          </h3>
          <button @click="closeCheckout" class="p-1 rounded-lg hover:bg-white/20 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Step Indicators -->
        <div v-if="checkoutStep < 3" class="flex items-center px-6 pt-4 pb-2 space-x-2">
          <div
            v-for="step in 2"
            :key="step"
            class="flex-1 h-1.5 rounded-full transition-all duration-300"
            :class="step <= checkoutStep ? 'bg-coffee-600' : 'bg-coffee-100'"
          ></div>
        </div>

        <!-- Step 1: Delivery Details -->
        <form v-if="checkoutStep === 1" @submit.prevent="goToPayment" class="px-6 py-5 space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block mb-1 text-sm font-medium text-coffee-700">First Name</label>
              <input v-model="delivery.firstName" type="text" required placeholder="Juan"
                class="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm" />
            </div>
            <div>
              <label class="block mb-1 text-sm font-medium text-coffee-700">Last Name</label>
              <input v-model="delivery.lastName" type="text" required placeholder="dela Cruz"
                class="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm" />
            </div>
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-coffee-700">Phone Number</label>
            <input v-model="delivery.phone" type="tel" required placeholder="09XXXXXXXXX"
              class="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm" />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-coffee-700">Delivery Address</label>
            <input v-model="delivery.address" type="text" required placeholder="Street, Barangay, City"
              class="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm" />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-coffee-700">Order Type</label>
            <select v-model="delivery.type" class="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm">
              <option value="delivery">Delivery</option>
              <option value="pickup">Pick-up</option>
            </select>
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-coffee-700">Special Instructions</label>
            <textarea v-model="delivery.notes" rows="2" placeholder="Any special requests? (optional)"
              class="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm resize-none"></textarea>
          </div>
          <button type="submit" class="w-full btn-primary py-3">Continue to Payment →</button>
        </form>

        <!-- Step 2: Payment -->
        <div v-else-if="checkoutStep === 2" class="px-6 py-5 space-y-4">
          <!-- Order Summary Mini -->
          <div class="p-3 rounded-xl bg-coffee-50 space-y-1">
            <div v-for="item in cartStore.cartItems" :key="item.id" class="flex justify-between text-sm text-coffee-700">
              <span>{{ item.name }} × {{ item.quantity }}</span>
              <span>₱{{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
            <div class="flex justify-between font-bold text-coffee-800 border-t border-coffee-200 pt-1 mt-1">
              <span>Total (incl. tax)</span>
              <span>₱{{ (cartStore.totalPrice * 1.085).toFixed(2) }}</span>
            </div>
          </div>

          <!-- Payment Method -->
          <div>
            <label class="block mb-2 text-sm font-medium text-coffee-700">Payment Method</label>
            <div class="space-y-2">
              <label
                v-for="method in paymentMethods"
                :key="method.id"
                class="flex items-center p-3 border rounded-xl cursor-pointer transition-colors"
                :class="payment.method === method.id ? 'border-coffee-600 bg-coffee-50' : 'border-coffee-200 hover:border-coffee-400'"
              >
                <input type="radio" v-model="payment.method" :value="method.id" class="mr-3 accent-coffee-600" />
                <span class="mr-2 text-lg">{{ method.icon }}</span>
                <span class="text-sm font-medium text-coffee-800">{{ method.label }}</span>
              </label>
            </div>
          </div>

          <!-- GCash / Maya reference field -->
          <div v-if="payment.method === 'gcash' || payment.method === 'maya'" class="space-y-2">
            <label class="block text-sm font-medium text-coffee-700">Reference Number</label>
            <input v-model="payment.reference" type="text" :placeholder="`Enter your ${payment.method === 'gcash' ? 'GCash' : 'Maya'} reference number`"
              class="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent text-sm" />
            <p class="text-xs text-coffee-500">Send payment to: <strong>09123456789</strong> ({{ payment.method === 'gcash' ? 'GCash' : 'Maya' }})</p>
          </div>

          <div class="flex gap-3 pt-2">
            <button @click="checkoutStep = 1" class="flex-1 btn-secondary py-3">← Back</button>
            <button @click="placeOrder" :disabled="!payment.method" class="flex-1 btn-primary py-3 disabled:opacity-60 disabled:cursor-not-allowed">
              Place Order
            </button>
          </div>
        </div>

        <!-- Step 3: Confirmation -->
        <div v-else class="px-6 py-8 text-center">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-green-100">
            <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 class="mb-2 text-2xl font-bold text-coffee-800">Order Placed! 🎉</h4>
          <p class="mb-1 text-coffee-600">Thank you, <strong>{{ delivery.firstName }}</strong>!</p>
          <p class="mb-1 text-sm text-coffee-500">Order #{{ orderNumber }}</p>
          <p class="mb-6 text-sm text-coffee-600">
            <span v-if="delivery.type === 'delivery'">Your order will be delivered to <strong>{{ delivery.address }}</strong> in approximately 30–45 minutes.</span>
            <span v-else>Your order will be ready for pick-up in approximately 10–15 minutes.</span>
          </p>
          <button @click="finishOrder" class="w-full btn-primary py-3">Continue Shopping</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'
import { useCartStore } from '@src/stores/cart'

export default {
  name: 'CartDrawer',
  setup() {
    const cartStore = useCartStore()

    const showCheckout = ref(false)
    const checkoutStep = ref(1)
    const orderNumber = ref('')

    const delivery = ref({
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      type: 'delivery',
      notes: ''
    })

    const payment = ref({
      method: '',
      reference: ''
    })

    const paymentMethods = [
      { id: 'cash', label: 'Cash on Delivery / Pick-up', icon: '💵' },
      { id: 'gcash', label: 'GCash', icon: '📱' },
      { id: 'maya', label: 'Maya (PayMaya)', icon: '💳' },
      { id: 'card', label: 'Credit / Debit Card (on delivery)', icon: '🏦' }
    ]

    const closeDrawer = () => {
      cartStore.isOpen = false
    }

    const openCheckout = () => {
      if (cartStore.totalItems === 0) return
      showCheckout.value = true
      checkoutStep.value = 1
    }

    const closeCheckout = () => {
      showCheckout.value = false
    }

    const goToPayment = () => {
      checkoutStep.value = 2
    }

    const placeOrder = () => {
      if (!payment.value.method) return
      // Generate a simple order number
      orderNumber.value = 'BB-' + Date.now().toString().slice(-6)
      checkoutStep.value = 3
    }

    const finishOrder = () => {
      cartStore.clearCart()
      cartStore.isOpen = false
      showCheckout.value = false
      checkoutStep.value = 1
      delivery.value = { firstName: '', lastName: '', phone: '', address: '', type: 'delivery', notes: '' }
      payment.value = { method: '', reference: '' }
    }

    return {
      cartStore,
      closeDrawer,
      showCheckout,
      checkoutStep,
      orderNumber,
      delivery,
      payment,
      paymentMethods,
      openCheckout,
      closeCheckout,
      goToPayment,
      placeOrder,
      finishOrder
    }
  }
}
</script>
