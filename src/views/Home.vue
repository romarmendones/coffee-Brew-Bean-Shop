<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-700">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-black/40 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-coffee-900 via-transparent to-transparent z-20"></div>
        <!-- Animated background patterns -->
        <div class="absolute inset-0 opacity-30">
          <div class="absolute w-96 h-96 bg-coffee-500 rounded-full blur-3xl animate-blob top-1/4 -left-20"></div>
          <div class="absolute w-96 h-96 bg-coffee-600 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 right-0"></div>
          <div class="absolute w-96 h-96 bg-coffee-700 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-0 left-1/3"></div>
        </div>
      </div>

      <div class="relative z-30 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 section-padding min-h-[90vh] flex items-center">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="space-y-8">
            <h1 class="font-serif text-5xl font-bold leading-tight md:text-7xl">
              Welcome to
              <span class="block mt-2 text-transparent bg-gradient-to-r from-cream-200 to-cream-100 bg-clip-text">
                Brew & Bean
              </span>
            </h1>
            <p class="text-xl leading-relaxed text-cream-100/90">
              Experience the perfect blend of tradition and innovation. Our artisanal coffee is crafted with passion, 
              bringing you the finest flavors from around the world.
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <router-link to="/menu" class="text-center btn-primary">
                Explore Menu
              </router-link>
              <router-link to="/about" class="text-center btn-secondary">
                Our Story
              </router-link>
            </div>
            <!-- Coffee Counter -->
            <div class="flex items-center gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
              <div class="text-center">
                <div class="text-3xl font-bold text-transparent bg-gradient-to-r from-cream-200 to-cream-100 bg-clip-text">
                  {{ coffeeCount }}
                </div>
                <div class="text-sm font-medium text-cream-100/80">Cups Brewed Today</div>
              </div>
              <button 
                @click="incrementCoffee" 
                class="px-5 py-3 text-sm font-medium rounded-xl text-coffee-800 bg-gradient-to-r from-cream-200 to-cream-100 
                       hover:from-cream-100 hover:to-cream-50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                +1 Cup
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="relative w-full overflow-hidden h-[500px] rounded-2xl group transform hover:-rotate-2 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Artisanal coffee cup with latte art" 
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent"></div>
              <div class="absolute bottom-6 left-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div class="text-sm font-medium text-cream-200">Today's Special</div>
                <div class="text-xl font-bold text-cream-100">Caramel Macchiato</div>
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-coffee-500/20 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-coffee-600/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-white section-padding">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold md:text-4xl text-coffee-800">
            Why Choose Brew & Bean?
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-coffee-600">
            We're committed to delivering exceptional coffee experiences through quality, sustainability, and community.
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-3">
          <div class="text-center cursor-pointer group" @click="showFeatureDetails('quality')">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors rounded-full bg-coffee-100 group-hover:bg-coffee-200">
              <svg class="w-8 h-8 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold transition-colors text-coffee-800 group-hover:text-coffee-600">Premium Quality</h3>
            <p class="text-coffee-600">Sourced from the finest coffee regions, roasted to perfection for exceptional taste.</p>
          </div>
          
          <div class="text-center cursor-pointer group" @click="showFeatureDetails('sustainability')">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors rounded-full bg-coffee-100 group-hover:bg-coffee-200">
              <svg class="w-8 h-8 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold transition-colors text-coffee-800 group-hover:text-coffee-600">Sustainable</h3>
            <p class="text-coffee-600">Committed to ethical sourcing and environmentally friendly practices.</p>
          </div>
          
          <div class="text-center cursor-pointer group" @click="showFeatureDetails('community')">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors rounded-full bg-coffee-100 group-hover:bg-coffee-200">
              <svg class="w-8 h-8 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold transition-colors text-coffee-800 group-hover:text-coffee-600">Community</h3>
            <p class="text-coffee-600">A welcoming space where coffee lovers gather to share stories and create memories.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="section-padding bg-cream-50">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold md:text-4xl text-coffee-800">
            Featured Brews
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-coffee-600">
            Discover our most popular coffee selections, carefully crafted for your enjoyment.
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-3">
          <div v-for="product in featuredProducts" :key="product.id" class="p-6 transition-all duration-300 card group hover:shadow-xl">
            <div class="relative flex items-center justify-center w-full h-48 mb-4 overflow-hidden rounded-lg bg-coffee-200">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 transition-colors bg-coffee-900/20 group-hover:bg-coffee-900/10"></div>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-coffee-800">{{ product.name }}</h3>
            <p class="mb-4 text-coffee-600">{{ product.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-coffee-700">₱{{ product.price }}</span>
              <button @click="(e) => addToCart(product, e)" class="transition-colors btn-primary group-hover:bg-coffee-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <router-link to="/menu" class="btn-primary">
            View Full Menu
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="text-white section-padding bg-coffee-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="mb-4 font-serif text-3xl font-bold md:text-4xl">
          Ready to Experience Great Coffee?
        </h2>
        <p class="mb-8 text-xl text-cream-100">
          Visit us today and discover why Brew & Bean is the talk of the town.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <router-link to="/menu" class="btn-primary">
            Order Now
          </router-link>
          <router-link to="/contact" class="btn-secondary">
            Get Directions
          </router-link>
        </div>
      </div>
    </section>

    <!-- Feature Details Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click="closeModal">
      <div class="max-w-md p-6 mx-4 bg-white rounded-lg shadow-xl" @click.stop>
        <h3 class="mb-4 text-xl font-bold text-coffee-800">{{ selectedFeature.title }}</h3>
        <p class="mb-4 text-coffee-600">{{ selectedFeature.description }}</p>
        <button @click="closeModal" class="w-full px-4 py-2 font-medium text-white transition-colors rounded-lg bg-coffee-600 hover:bg-coffee-700">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@src/stores/cart'
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const cartStore = useCartStore()
    const coffeeCount = ref(42)
    const showModal = ref(false)
    const selectedFeature = ref({})

    const featuredProducts = [
      {
        id: 1,
        name: 'Ethiopian Yirgacheffe',
        description: 'Light roast with floral notes and citrus undertones.',
        price: 150.00,
        image: 'https://frontiercoffeeroasters.com/cdn/shop/articles/ethiopian_yirgacheffe_coffee_being_poured_in_a_cup.png?v=1739973719'
      },
      {
        id: 2,
        name: 'Colombian Supremo',
        description: 'Medium roast with rich chocolate and nutty flavors.',
        price: 150.00,
        image: 'https://images.squarespace-cdn.com/content/v1/58e7873e440243ae10bc8093/1648156507916-IL0JHZPK9PZYQQGKCVE1/lacas_coffee_0322_0332+2+1.jpg?format=1500w'
      },
      {
        id: 3,
        name: 'Sumatra Mandheling',
        description: 'Dark roast with earthy tones and full body.',
        price: 150.00,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap5OhbMlkYXUpgc61JNsDPtH-fNFRzickjQ&s'
      }
    ]

    const addToCart = (product, e) => {
      cartStore.addItem(product)
      cartStore.isOpen = true
      if (e && e.currentTarget) {
        e.currentTarget.classList.add('scale-95')
        setTimeout(() => e.currentTarget.classList.remove('scale-95'), 150)
      }
    }

    const incrementCoffee = () => {
      coffeeCount.value++
    }

    const showFeatureDetails = (feature) => {
      const features = {
        quality: {
          title: 'Premium Quality Coffee',
          description: 'We source our beans from the world\'s finest coffee regions including Ethiopia, Colombia, and Guatemala. Each batch is carefully roasted in small batches to ensure perfect flavor profiles and consistency.'
        },
        sustainability: {
          title: 'Sustainable Practices',
          description: 'We partner with fair-trade certified farms and use eco-friendly packaging. Our roasting process minimizes carbon footprint, and we support reforestation projects in coffee-growing regions.'
        },
        community: {
          title: 'Building Community',
          description: 'Brew & Bean is more than a coffee shop - it\'s a gathering place for coffee enthusiasts, artists, and friends. We host weekly coffee tastings, art exhibitions, and community events.'
        }
      }
      selectedFeature.value = features[feature]
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    return {
      featuredProducts,
      coffeeCount,
      showModal,
      selectedFeature,
      addToCart,
      incrementCoffee,
      showFeatureDetails,
      closeModal
    }
  }
}
</script>
