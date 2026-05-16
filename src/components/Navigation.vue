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
            <span class="font-serif text-2xl font-bold text-transparent bg-gradient-to-br from-coffee-700 to-coffee-900 bg-clip-text">Brew &amp; Bean</span>
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

        <!-- Cart, Search, Theme Toggle and Mobile Menu Button -->
        <div class="flex items-center space-x-2">
          <!-- Search Button -->
          <button
            @click="isSearchOpen = true"
            class="p-3 transition-all duration-300 rounded-xl bg-coffee-50 text-coffee-600 hover:text-coffee-800 hover:bg-coffee-100"
            title="Search menu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

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

  <!-- Search Overlay -->
  <div
    v-if="isSearchOpen"
    class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex flex-col"
    @click.self="closeSearch"
  >
    <div class="bg-white shadow-2xl">
      <div class="px-4 py-4 mx-auto max-w-3xl flex items-center space-x-3">
        <svg class="w-5 h-5 text-coffee-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref="searchInputRef"
          v-model="searchQuery"
          type="text"
          placeholder="Search coffees, teas, pastries…"
          class="flex-1 text-lg font-medium text-coffee-800 bg-transparent border-none outline-none placeholder-coffee-300"
          @keydown.esc="closeSearch"
          @keydown.enter="goToMenuSearch"
        />
        <button @click="closeSearch" class="p-2 rounded-lg text-coffee-500 hover:text-coffee-800 hover:bg-coffee-50 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Live Results -->
      <div v-if="searchQuery.trim() && searchResults.length > 0" class="border-t border-coffee-100 mx-auto max-w-3xl max-h-80 overflow-y-auto">
        <div
          v-for="item in searchResults"
          :key="item.id"
          class="flex items-center justify-between px-4 py-3 hover:bg-coffee-50 transition-colors cursor-pointer"
          @click="addSearchItemToCart(item)"
        >
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-lg overflow-hidden bg-coffee-100 flex-shrink-0">
              <img v-if="item.image" :src="item.image" :alt="item.name" class="w-full h-full object-cover" @error="e => e.target.style.display='none'" />
            </div>
            <div>
              <p class="font-medium text-coffee-800">{{ item.name }}</p>
              <p class="text-xs text-coffee-500">{{ item.category }} · ₱{{ item.price }}</p>
            </div>
          </div>
          <button class="text-xs px-3 py-1.5 bg-coffee-600 text-white rounded-lg hover:bg-coffee-700 transition-colors">
            + Add
          </button>
        </div>
      </div>
      <div v-else-if="searchQuery.trim() && searchResults.length === 0" class="border-t border-coffee-100 px-4 py-6 text-center max-w-3xl mx-auto">
        <p class="text-coffee-500">No items found for "{{ searchQuery }}"</p>
        <router-link to="/menu" @click="closeSearch" class="text-coffee-600 hover:text-coffee-800 text-sm mt-1 inline-block">Browse full menu →</router-link>
      </div>
      <div v-else class="border-t border-coffee-100 px-4 py-4 max-w-3xl mx-auto">
        <p class="text-xs font-medium text-coffee-400 uppercase tracking-wider mb-2">Popular searches</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tag in popularTags"
            :key="tag"
            @click="searchQuery = tag"
            class="px-3 py-1.5 text-sm text-coffee-600 bg-coffee-50 rounded-full hover:bg-coffee-100 transition-colors"
          >{{ tag }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, nextTick } from 'vue'
import { useCartStore } from '@src/stores/cart'
import { useUiStore } from '@src/stores/ui'
import { useRouter } from 'vue-router'
import LogoIcon from '@src/components/icons/LogoIcon.vue'

// Full menu data for search
const allMenuItems = [
  { id: 1, name: 'Ethiopian Yirgacheffe', category: 'coffee', price: 150, image: 'https://blueapplecoffee.com/cdn/shop/products/Untitleddesign_67_1024x1024.png?v=1658153427' },
  { id: 2, name: 'Colombian Supremo', category: 'coffee', price: 150, image: 'https://images.squarespace-cdn.com/content/v1/58e7873e440243ae10bc8093/1648156507916-IL0JHZPK9PZYQQGKCVE1/lacas_coffee_0322_0332+2+1.jpg?format=1500w' },
  { id: 3, name: 'Cappuccino', category: 'coffee', price: 150, image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Cappuccino_in_original.jpg' },
  { id: 4, name: 'Espresso', category: 'coffee', price: 150, image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg' },
  { id: 5, name: 'Costa Rican Tarrazu', category: 'coffee', price: 150, image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&h=300&fit=crop' },
  { id: 6, name: 'Earl Grey', category: 'tea', price: 150, image: 'https://weeteacompany.com/wp-content/uploads/2024/11/Vanilla-Earl-Grey-Tea.webp' },
  { id: 7, name: 'Chai Latte', category: 'tea', price: 150, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop' },
  { id: 8, name: 'Green Tea', category: 'tea', price: 150, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop' },
  { id: 9, name: 'Croissant', category: 'pastries', price: 150, image: 'https://delishglobe.com/wp-content/uploads/2024/11/Croissants-article.png' },
  { id: 10, name: 'Blueberry Muffin', category: 'pastries', price: 150, image: 'https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Blueberry-Muffin-Recipe-1-1200.jpg' },
  { id: 11, name: 'Chocolate Chip Cookie', category: 'pastries', price: 100, image: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg' },
  { id: 12, name: 'Mixed Nuts', category: 'snacks', price: 150, image: 'https://purehubnutrition.ph/cdn/shop/products/3.jpg?v=1741244484&width=1445' },
  { id: 13, name: 'Granola Bar', category: 'snacks', price: 75, image: '' },
  { id: 14, name: 'Chocolate Cake', category: 'snacks', price: 98, image: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg' },
  { id: 15, name: 'Black Forest Cake', category: 'snacks', price: 98, image: 'https://thescranline.com/wp-content/uploads/2023/06/BLACK-FOREST-CAKE-S-01.jpg' }
]

export default {
  name: 'Navigation',
  components: { LogoIcon },
  setup() {
    const cartStore = useCartStore()
    const isMobileMenuOpen = ref(false)
    const ui = useUiStore()
    const router = useRouter()

    // Search state
    const isSearchOpen = ref(false)
    const searchQuery = ref('')
    const searchInputRef = ref(null)

    const popularTags = ['Espresso', 'Cappuccino', 'Croissant', 'Tea', 'Cake']

    const searchResults = computed(() => {
      if (!searchQuery.value.trim()) return []
      const q = searchQuery.value.toLowerCase()
      return allMenuItems.filter(item =>
        item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      ).slice(0, 6)
    })

    const openSearch = async () => {
      isSearchOpen.value = true
      await nextTick()
      searchInputRef.value?.focus()
    }

    const closeSearch = () => {
      isSearchOpen.value = false
      searchQuery.value = ''
    }

    const goToMenuSearch = () => {
      router.push({ path: '/menu' })
      closeSearch()
    }

    const addSearchItemToCart = (item) => {
      cartStore.addItem({ ...item, quantity: 1 })
      cartStore.isOpen = true
      closeSearch()
    }

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
      ui,
      isSearchOpen,
      searchQuery,
      searchInputRef,
      popularTags,
      searchResults,
      openSearch,
      closeSearch,
      goToMenuSearch,
      addSearchItemToCart
    }
  }
}
</script>
