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
                <!-- Item image -->
                <div class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-coffee-100">
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.name"
                    class="object-cover w-full h-full"
                    @error="e => e.target.style.display='none'"
                  />
                  <div v-else class="flex items-center justify-center w-full h-full">
                    <svg class="w-8 h-8 text-coffee-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg>
                  </div>
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
                  class="transition-colors text-coffee-500 hover:text-red-500"
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
              <button @click="openCheckout" class="w-full py-4 text-lg btn-primary">
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

    <!-- Checkout Modal -->
    <div
      v-if="showCheckout"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      @click.self="closeCheckout"
    >
      <div class="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
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
          <router-link to="/menu" @click="finishOrder" class="w-full block btn-primary py-3">Continue Shopping</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useCartStore } from '@src/stores/cart'

export default {
  name: 'Cart',
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

    const openCheckout = () => {
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
      orderNumber.value = 'BB-' + Date.now().toString().slice(-6)
      checkoutStep.value = 3
    }

    const finishOrder = () => {
      cartStore.clearCart()
      showCheckout.value = false
      checkoutStep.value = 1
      delivery.value = { firstName: '', lastName: '', phone: '', address: '', type: 'delivery', notes: '' }
      payment.value = { method: '', reference: '' }
    }

    return {
      cartStore,
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
