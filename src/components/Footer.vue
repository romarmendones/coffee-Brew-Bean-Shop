<template>
  <footer class="text-white bg-coffee-900">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-4">
        <!-- Company Info --> 
        <div class="col-span-2">
          <div class="flex items-center mb-4 space-x-2">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-coffee-600">
              <LogoIcon classes="w-5 h-5 text-white" />
            </div>
            <span class="font-serif text-xl font-bold">Brew & Bean</span>
          </div>
          <p class="max-w-md mb-6 text-cream-200">
            Crafting exceptional coffee experiences since 2010. We're passionate about quality, 
            sustainability, and building community through the perfect cup of coffee.
          </p>
          <div class="flex space-x-4">
            <!-- Twitter / X -->
            <a href="#" aria-label="Twitter" class="transition-colors text-cream-200 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <!-- Instagram -->
            <a href="#" aria-label="Instagram" class="transition-colors text-cream-200 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <!-- Facebook -->
            <a href="#" aria-label="Facebook" class="transition-colors text-cream-200 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="transition-colors text-cream-200 hover:text-white">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/menu" class="transition-colors text-cream-200 hover:text-white">
                Menu
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="transition-colors text-cream-200 hover:text-white">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="transition-colors text-cream-200 hover:text-white">
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="mb-4 text-lg font-semibold">Contact Info</h3>
          <div class="space-y-2 text-cream-200">
            <p>Manila, Philippines</p>
            <p>Tondo, Manila</p>
            <p class="mt-4">Phone: 09123456789</p>
            <p>Email: brewandbean@gmail.com</p>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 mt-12 border-t border-coffee-800">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <p class="text-sm text-cream-300">
            © 2024 Brew & Bean. All rights reserved.
          </p>
          <div class="flex mt-4 space-x-6 md:mt-0">
            <a href="#" class="text-sm transition-colors text-cream-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" class="text-sm transition-colors text-cream-300 hover:text-white">
              Terms of Service
            </a>
            <a href="#" class="text-sm transition-colors text-cream-300 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoIcon from '@src/components/icons/LogoIcon.vue'

export default {
  name: 'Footer',
  components: { LogoIcon }
}
</script>
