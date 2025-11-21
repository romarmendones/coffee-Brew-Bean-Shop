import { defineStore } from 'pinia'

export type CartItem = {
	id: number | string
	name: string
	description?: string
	price: number
	quantity: number
	image?: string
	category?: string
}

type State = {
	isOpen: boolean
	cartItems: CartItem[]
}

export const useCartStore = defineStore('cart', {
	state: (): State => ({
		isOpen: false,
		cartItems: []
	}),
	getters: {
		totalItems: (state) => state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
		totalPrice: (state) => state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
	},
	actions: {
		addItem(newItem: CartItem) {
			const existing = this.cartItems.find((i) => i.id === newItem.id)
			if (existing) {
				existing.quantity = Math.max(0, existing.quantity + newItem.quantity)
			} else {
				this.cartItems.push({ ...newItem })
			}
		},
		updateQuantity(itemId: CartItem['id'], newQuantity: number) {
			const item = this.cartItems.find((i) => i.id === itemId)
			if (!item) return
			const clamped = Math.max(0, newQuantity)
			if (clamped === 0) {
				this.cartItems = this.cartItems.filter((i) => i.id !== itemId)
			} else {
				item.quantity = clamped
			}
		},
		removeItem(itemId: CartItem['id']) {
			this.cartItems = this.cartItems.filter((i) => i.id !== itemId)
		},
		clearCart() {
			this.cartItems = []
		}
	}
})


