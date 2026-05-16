<template>
  <div id="app" class="min-h-screen bg-cream-50">
    <Navigation />
    <main>
      <router-view />
    </main>
    <CartDrawer />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@src/components/Navigation.vue'
import Footer from '@src/components/Footer.vue'
import CartDrawer from '@src/components/CartDrawer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    CartDrawer
  }
}
</script>
