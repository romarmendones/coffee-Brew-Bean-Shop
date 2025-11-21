import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false
  }),
  
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    cartItems: (state) => state.items
  },
  
  actions: {
    initializeCart() {
      try {
        const raw = localStorage.getItem('cart')
        if (raw) {
          const parsed = JSON.parse(raw)
          if (Array.isArray(parsed)) {
            this.items = parsed
          }
        }
      } catch (_) {
        // ignore malformed data
      }
    },

    saveToStorage() {
      try {
        localStorage.setItem('cart', JSON.stringify(this.items))
      } catch (_) {
        // storage may be unavailable; fail silently
      }
    },

    addItem(product) {
      const quantityToAdd = (typeof product.quantity === 'number' && product.quantity > 0)
        ? product.quantity
        : 1

      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantityToAdd
      } else {
        const itemToInsert = { ...product, quantity: quantityToAdd }
        this.items.push(itemToInsert)
      }
      this.saveToStorage()
    },
    
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
      this.saveToStorage()
    },
    
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId)
        } else {
          item.quantity = quantity
          this.saveToStorage()
        }
      }
    },
    
    clearCart() {
      this.items = []
      this.saveToStorage()
    },
    
    toggleCart() {
      this.isOpen = !this.isOpen
    }
  }
})
