<template>
  <div class="min-h-screen bg-cream-50">
    <!-- Header -->
    <section class="text-white bg-coffee-800 section-padding">
      <div class="mx-auto text-center max-w-7xl">
        <h1 class="mb-4 font-serif text-4xl font-bold md:text-5xl">Our Menu</h1>
        <p class="max-w-2xl mx-auto text-xl text-cream-100">
          Discover our carefully curated selection of premium coffees, teas, and delicious treats.
        </p>
      </div>
    </section>

    <!-- Menu Content -->
    <section class="section-padding">
      <div class="mx-auto max-w-7xl">
        <!-- Search and Filters -->
        <div class="mb-8">
          <div class="flex flex-col gap-4 mb-6 md:flex-row">
            <!-- Search Bar -->
            <div class="relative flex-1">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search menu items..."
                class="w-full px-4 py-3 pl-12 border rounded-lg border-coffee-200 focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
              />
              <svg class="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-coffee-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <!-- Sort Options -->
            <select
              v-model="sortBy"
              class="px-4 py-3 border rounded-lg border-coffee-200 focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = category.id"
              class="px-6 py-3 font-medium transition-all duration-200 rounded-full"
              :class="selectedCategory === category.id 
                ? 'bg-coffee-600 text-white shadow-lg' 
                : 'bg-white text-coffee-600 hover:bg-coffee-100 border border-coffee-200'"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- Menu Items -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="item in filteredAndSortedMenu" 
            :key="item.id" 
            class="relative p-6 transition-transform duration-300 card hover:scale-105 group"
          >
            <!-- Favorite Button -->
            <button
              @click="toggleFavorite(item.id)"
              class="absolute z-10 flex items-center justify-center w-8 h-8 transition-all duration-200 rounded-full top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white"
              :class="item.isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-400'"
            >
              <svg v-if="item.isFavorite" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <!-- Image Container -->
            <div class="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-coffee-200">
              <img
                :src="item.image"
                :alt="item.name"
                @error="handleImageError"
                class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <!-- Rating Badge -->
              <div class="absolute flex items-center px-2 py-1 space-x-1 rounded-full top-2 left-2 bg-white/90 backdrop-blur-sm">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-sm font-medium text-coffee-800">{{ item.rating }}</span>
              </div>
            </div>
            
            <div class="mb-4">
              <h3 class="mb-2 text-xl font-semibold text-coffee-800">{{ item.name }}</h3>
              <p class="mb-2 text-sm text-coffee-600">{{ item.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-coffee-700">₱{{ item.price }}</span>
                <span class="px-2 py-1 text-sm rounded-full text-coffee-500 bg-coffee-100">
                  {{ item.category }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <button 
                  @click="updateQuantity(item.id, item.quantity - 1)"
                  class="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-coffee-100 text-coffee-600 hover:bg-coffee-200"
                  :disabled="item.quantity <= 0"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                  </svg>
                </button>
                <span class="w-8 font-medium text-center text-coffee-800">{{ item.quantity }}</span>
                <button 
                  @click="updateQuantity(item.id, item.quantity + 1)"
                  class="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-coffee-100 text-coffee-600 hover:bg-coffee-200"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              
              <button 
                @click="addToCart(item)"
                class="btn-primary"
                :disabled="item.quantity <= 0"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredAndSortedMenu.length === 0" class="py-16 text-center">
          <div class="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-coffee-100">
            <svg class="w-12 h-12 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-coffee-800">No items found</h3>
          <p class="text-coffee-600">Try adjusting your search or category filter.</p>
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="bg-white section-padding">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold text-coffee-800">Special Offers</h2>
          <p class="text-lg text-coffee-600">Limited time deals you won't want to miss!</p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-2">
          <div class="p-8 text-white bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-2xl">
            <h3 class="mb-4 text-2xl font-bold">Happy Hour</h3>
            <p class="mb-4 text-cream-100">50% off all drinks from 2 PM to 5 PM, Monday through Friday!</p>
            <button class="btn-secondary">Learn More</button>
          </div>
          
          <div class="p-8 text-white bg-gradient-to-r from-coffee-800 to-coffee-900 rounded-2xl">
            <h3 class="mb-4 text-2xl font-bold">Loyalty Program</h3>
            <p class="mb-4 text-cream-100">Earn points with every purchase and get free drinks on your birthday!</p>
            <button class="btn-secondary">Join Now</button>
          </div>
        </div>
      </div>
    </section>
    
    <router-link
      to="/cart"
      class="fixed z-20 flex items-center gap-2 px-4 py-3 text-white rounded-full shadow-lg bottom-6 right-6 bg-coffee-600 hover:bg-coffee-700"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
      </svg>
      <span>View Cart</span>
      <span class="flex items-center justify-center w-6 h-6 text-sm font-semibold bg-white rounded-full text-coffee-800">
        {{ cartStore.totalItems }}
      </span>
    </router-link>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@src/stores/cart'

export default {
  name: 'Menu',
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()
    const selectedCategory = ref('all')
    const searchQuery = ref('')
    const sortBy = ref('name')

    const categories = [
      { id: 'all', name: 'All Items' },
      { id: 'coffee', name: 'Coffee' },
      { id: 'tea', name: 'Tea' },
      { id: 'pastries', name: 'Pastries' },
      { id: 'snacks', name: 'Snacks' }
    ]

    const menuItems = [
      // Coffee
      { 
        id: 1, 
        name: 'Ethiopian Yirgacheffe', 
        description: 'Light roast with floral notes and citrus undertones', 
        price: 150.00, 
        category: 'coffee', 
        quantity: 0,
        image: 'https://blueapplecoffee.com/cdn/shop/products/Untitleddesign_67_1024x1024.png?v=1658153427',
        rating: 4.8,
        isFavorite: false
      },
      { 
        id: 2, 
        name: 'Colombian Supremo', 
        description: 'Medium roast with rich chocolate and nutty flavors', 
        price: 150.00, 
        category: 'coffee', 
        quantity: 0,
        image: 'https://images.squarespace-cdn.com/content/v1/58e7873e440243ae10bc8093/1648156507916-IL0JHZPK9PZYQQGKCVE1/lacas_coffee_0322_0332+2+1.jpg?format=1500w',
        rating: 4.6,
        isFavorite: false
      },
      { 
        id: 3, 
        name: 'Cappuccino', 
        description: 'Dark roast with earthy tones and full body', 
        price: 150.00, 
        category: 'coffee', 
        quantity: 0,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Cappuccino_in_original.jpg',
        rating: 4.7,
        isFavorite: false
      },
      { 
        id: 4, 
        name: 'Espresso', 
        description: 'Medium-dark roast with spicy and chocolate notes', 
        price: 150.00, 
        category: 'coffee', 
        quantity: 0,
        image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
        rating: 4.5,
        isFavorite: false
      },
      { 
        id: 5, 
        name: 'Costa Rican Tarrazu', 
        description: 'Bright acidity with honey and caramel sweetness', 
        price: 150.00, 
        category: 'coffee', 
        quantity: 0,
        image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&h=300&fit=crop',
        rating: 4.9,
        isFavorite: false
      },
      
      // Tea
      { 
        id: 6, 
        name: 'Earl Grey', 
        description: 'Classic black tea with bergamot oil', 
        price: 150.00, 
        category: 'tea', 
        quantity: 0,
        image: 'https://weeteacompany.com/wp-content/uploads/2024/11/Vanilla-Earl-Grey-Tea.webp',
        rating: 4.4,
        isFavorite: false
      },
      { 
        id: 7, 
        name: 'Chai Latte', 
        description: 'Spiced black tea with steamed milk', 
        price: 150.00, 
        category: 'tea', 
        quantity: 0,
        image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop',
        rating: 4.6,
        isFavorite: false
      },
      { 
        id: 8, 
        name: 'Green Tea', 
        description: 'Light and refreshing with subtle sweetness', 
        price: 150.00, 
        category: 'tea', 
        quantity: 0,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
        rating: 4.3,
        isFavorite: false
      },
      
      // Pastries
      { 
        id: 9, 
        name: 'Croissant', 
        description: 'Buttery, flaky French pastry', 
        price: 150.00, 
        category: 'pastries', 
        quantity: 0,
        image: 'https://delishglobe.com/wp-content/uploads/2024/11/Croissants-article.png',
        rating: 4.7,
        isFavorite: false
      },
      { 
        id: 10, 
        name: 'Blueberry Muffin', 
        description: 'Moist muffin bursting with fresh blueberries', 
        price: 150.00, 
        category: 'pastries', 
        quantity: 0,
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Blueberry-Muffin-Recipe-1-1200.jpg',
        rating: 4.5,
        isFavorite: false
      },
      { 
        id: 11, 
        name: 'Chocolate Chip Cookie', 
        description: 'Warm, gooey cookie with chocolate chips', 
        price: 100.00, 
        category: 'pastries', 
        quantity: 0,
        image: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg',
        rating: 4.8,
        isFavorite: false
      },
      
      // Snacks
      { 
        id: 12, 
        name: 'Mixed Nuts', 
        description: 'Premium selection of roasted nuts', 
        price: 150.00, 
        category: 'snacks', 
        quantity: 0,
        image: 'https://purehubnutrition.ph/cdn/shop/products/3.jpg?v=1741244484&width=1445',
        rating: 4.4,
        isFavorite: false
      },
      { 
        id: 13, 
        name: 'Granola Bar', 
        description: 'Healthy oats, nuts, and dried fruits', 
        price: 75.00, 
        category: 'snacks', 
        quantity: 0,
        image: 'https://www.allrecipes.com/thmb/h33pPUtDyjUbgvEDUKFQSfLl81o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-11382-chewy-granola-bars-ddmfs-3x4-d1603280d6f5475783aa2aacbf98574c.jpg',
        rating: 4.2,
        isFavorite: false
      },
      {
        id: 14,
        name: 'Chocolate Cake',
        description: 'Rich and decadent chocolate cake',
        price: 98.00,
        category: 'snacks',
        quantity: 0,
        image: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
        rating: 4.2,
        isFavorite: false
      },
      {
        id: 15,
        name: 'Black Forest Cake',
        description: 'Rich and decadent chocolate cake',
        price: 98.00,
        category: 'snacks',
        quantity: 0,
        image: 'https://thescranline.com/wp-content/uploads/2023/06/BLACK-FOREST-CAKE-S-01.jpg',
        rating: 4.2,
        isFavorite: false
      }
    ]

    const filteredAndSortedMenu = computed(() => {
      let filtered = menuItems
      
      // Filter by category
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory.value)
      }
      
      // Filter by search query
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(item => 
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
        )
      }
      
      // Sort items
      const sorted = [...filtered].sort((a, b) => {
        switch (sortBy.value) {
          case 'price-low':
            return a.price - b.price
          case 'price-high':
            return b.price - a.price
          case 'rating':
            return b.rating - a.rating
          case 'name':
          default:
            return a.name.localeCompare(b.name)
        }
      })
      
      return sorted
    })

    const updateQuantity = (itemId, newQuantity) => {
      const item = menuItems.find(item => item.id === itemId)
      if (item) {
        item.quantity = Math.max(0, newQuantity)
      }
    }

    const addToCart = (item) => {
      if (item.quantity > 0) {
        const cartItem = { ...item }
        cartItem.quantity = item.quantity
        cartStore.addItem(cartItem)
        cartStore.isOpen = true
        router.push('/cart')
        item.quantity = 0
      }
    }

    const toggleFavorite = (itemId) => {
      const item = menuItems.find(item => item.id === itemId)
      if (item) {
        item.isFavorite = !item.isFavorite
      }
    }

    const handleImageError = (event) => {
      // Fallback to a placeholder image if the main image fails to load
      event.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
    }

    return {
      cartStore,
      categories,
      selectedCategory,
      searchQuery,
      sortBy,
      filteredAndSortedMenu,
      updateQuantity,
      addToCart,
      toggleFavorite,
      handleImageError
    }
  }
}
</script>
