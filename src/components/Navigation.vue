<template>
  <nav class="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg border-coffee-100">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-3 group">
            <div class="flex items-center justify-center w-10 h-10 transition-transform duration-300 transform bg-gradient-to-br from-coffee-500 to-coffee-700 rounded-xl group-hover:rotate-3">
              <LogoIcon classes="w-6 h-6 text-white" />
            </div>
            <span class="font-serif text-2xl font-bold text-transparent bg-gradient-to-br from-coffee-700 to-coffee-900 bg-clip-text">Brew & Bean</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-baseline ml-10 space-x-1">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group"
              :class="$route.path === item.href ? 'text-coffee-800 bg-coffee-50' : 'text-coffee-600 hover:text-coffee-800'"
            >
              {{ item.name }}
              <div class="absolute inset-0 transition-colors duration-300 rounded-lg bg-coffee-100/0 group-hover:bg-coffee-50"></div>
            </router-link>
          </div>
        </div>

        <!-- Cart, Theme Toggle and Mobile Menu Button -->
        <div class="flex items-center space-x-2">
          <!-- Theme Toggle -->
          <button 
            @click="ui.toggleTheme"
            class="p-3 transition-all duration-300 rounded-xl bg-coffee-50 text-coffee-600 hover:text-coffee-800 hover:bg-coffee-100"
            :title="`Switch to ${ui.theme === 'dark' ? 'light' : 'dark'} mode`"
          >
            <svg v-if="ui.theme === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>

          <!-- Cart Button -->
          <button 
            @click="cartStore.toggleCart"
            class="relative p-3 transition-all duration-300 rounded-xl bg-coffee-50 text-coffee-600 hover:text-coffee-800 hover:bg-coffee-100"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span 
              v-if="cartStore.totalItems > 0"
              class="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full shadow-lg -top-1 -right-1 bg-gradient-to-br from-coffee-600 to-coffee-700 shadow-coffee-600/20"
            >
              {{ cartStore.totalItems }}
            </span>
          </button>

          <!-- Mobile menu button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-3 transition-all duration-300 md:hidden rounded-xl bg-coffee-50 text-coffee-600 hover:text-coffee-800 hover:bg-coffee-100"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <div class="px-4 pt-3 pb-4 space-y-2 border-t border-coffee-100 bg-white/80 backdrop-blur-lg">
        <router-link 
          v-for="item in navigationItems" 
          :key="item.name"
          :to="item.href"
          @click="isMobileMenuOpen = false"
          class="block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl"
          :class="$route.path === item.href ? 'bg-coffee-50 text-coffee-800' : 'text-coffee-600 hover:bg-coffee-50 hover:text-coffee-800'"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useCartStore } from '@src/stores/cart'
import { useUiStore } from '@src/stores/ui'
import LogoIcon from '@src/components/icons/LogoIcon.vue'

export default {
  name: 'Navigation',
  components: { LogoIcon },
  setup() {
    const cartStore = useCartStore()
    const isMobileMenuOpen = ref(false)
    const ui = useUiStore()

    const navigationItems = [
      { name: 'Home', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ]

    return {
      cartStore,
      isMobileMenuOpen,
      navigationItems,
      ui
    }
  }
}
</script>
