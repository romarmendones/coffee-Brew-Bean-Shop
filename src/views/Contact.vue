<template>
  <div class="min-h-screen bg-cream-50">
    <!-- Header with Background Image -->
    <section class="relative overflow-hidden text-white bg-coffee-800 section-padding">
      <!-- Background Image -->
      <div class="absolute inset-0 z-10 bg-black/40"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-coffee-700 to-coffee-900"></div>
      <div class="relative z-20 mx-auto text-center max-w-7xl">
        <h1 class="mb-4 font-serif text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p class="max-w-2xl mx-auto text-xl text-cream-100">
          We'd love to hear from you! Get in touch for questions, feedback, or just to say hello.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section-padding">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Contact Form -->
          <div class="p-8 card">
                          <div class="flex items-center mb-6">
                <div class="flex items-center justify-center w-8 h-8 mr-3 rounded-full text-coffee-600 bg-coffee-100">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 class="font-serif text-2xl font-bold text-coffee-800">Send us a Message</h2>
              </div>
            
            <!-- Success Message -->
            <div v-if="showSuccess" class="flex items-center p-4 mb-6 text-green-700 bg-green-100 border border-green-400 rounded-lg">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              {{ successMessage }}
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label for="firstName" class="block mb-2 text-sm font-medium text-coffee-700">First Name</label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors',
                      errors.firstName ? 'border-red-500' : 'border-coffee-200'
                    ]"
                    placeholder="Your first name"
                    @blur="validateField('firstName')"
                  >
                  <p v-if="errors.firstName" class="mt-1 text-sm text-red-500">{{ errors.firstName }}</p>
                </div>
                <div>
                  <label for="lastName" class="block mb-2 text-sm font-medium text-coffee-700">Last Name</label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors',
                      errors.lastName ? 'border-red-500' : 'border-coffee-200'
                    ]"
                    placeholder="Your last name"
                    @blur="validateField('lastName')"
                  >
                  <p v-if="errors.lastName" class="mt-1 text-sm text-red-500">{{ errors.lastName }}</p>
                </div>
              </div>
              
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-coffee-700">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors',
                    errors.email ? 'border-red-500' : 'border-coffee-200'
                  ]"
                  placeholder="your.email@example.com"
                  @blur="validateField('email')"
                >
                <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
              </div>
              
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-coffee-700">Subject</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors',
                    errors.subject ? 'border-red-500' : 'border-coffee-200'
                  ]"
                  @blur="validateField('subject')"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="employment">Employment</option>
                  <option value="other">Other</option>
                </select>
                <p v-if="errors.subject" class="mt-1 text-sm text-red-500">{{ errors.subject }}</p>
              </div>
              
              <div>
                <label for="message" class="block mb-2 text-sm font-medium text-coffee-700">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors resize-none',
                    errors.message ? 'border-red-500' : 'border-coffee-200'
                  ]"
                  placeholder="Tell us what's on your mind..."
                  @blur="validateField('message')"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
                <div class="flex items-center justify-between mt-2">
                  <span class="text-sm text-coffee-500">{{ form.message.length }}/500 characters</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="flex items-center justify-center w-full py-4 text-lg btn-primary"
                :class="{ 'opacity-75 cursor-not-allowed': isSubmitting }"
              >
                <svg v-if="isSubmitting" class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Information with Images -->
          <div class="space-y-8">
            <!-- Location with Image -->
            <div class="p-6 card">
              <div class="flex items-start space-x-4">
                <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-coffee-100">
                  <svg class="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="mb-2 text-xl font-semibold text-coffee-800">Visit Us</h3>
                  <p class="mb-2 text-coffee-600">7650 Ayala Avenue, Legazpi Village</p>
                  <p class="mb-2 text-coffee-600">Makati, Metro Manila 1226</p>
                  <p class="mb-3 text-coffee-600">Philippines</p>
                  <div class="flex items-center justify-center w-full h-32 rounded-lg bg-gradient-to-r from-coffee-200 to-coffee-300">
                    <svg class="w-12 h-12 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Hours -->
            <div class="p-6 card">
              <div class="flex items-start space-x-4">
                <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-coffee-100">
                  <svg class="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="mb-2 text-xl font-semibold text-coffee-800">Business Hours</h3>
                  <div class="mb-3 space-y-1 text-coffee-600">
                    <div class="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>6:00 AM - 8:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Saturday:</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Sunday:</span>
                      <span>7:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                  <div class="p-3 rounded-lg bg-coffee-50">
                    <p class="text-sm font-medium text-coffee-700">Currently: <span class="text-green-600">{{ currentStatus }}</span></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Methods -->
            <div class="p-6 card">
              <div class="flex items-start space-x-4">
                <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-coffee-100">
                  <svg class="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="mb-2 text-xl font-semibold text-coffee-800">Get in Touch</h3>
                  <div class="mb-3 space-y-2 text-coffee-600">
                    <p class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      (555) 123-4567
                    </p>
                    <p class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      hello@brewandbean.com
                    </p>
                    <p class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a3 3 0 01-.879 2.121z" clip-rule="evenodd" />
                      </svg>
                      @brewandbean
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <button @click="copyToClipboard('(555) 123-4567')" class="transition-colors text-coffee-600 hover:text-coffee-800">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                    <button @click="copyToClipboard('hello@brewandbean.com')" class="transition-colors text-coffee-600 hover:text-coffee-800">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Team Section -->
            <div class="p-6 card">
              <h3 class="mb-4 text-xl font-semibold text-coffee-800">Meet Our Team</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                  <div class="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-full text-coffee-600 bg-coffee-100">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm font-medium text-coffee-700">Sarah</p>
                  <p class="text-xs text-coffee-500">Head Barista</p>
                </div>
                <div class="text-center">
                  <div class="flex items-center justify-center w-16 h-16 mx-auto mb-2 rounded-full text-coffee-600 bg-coffee-100">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm font-medium text-coffee-700">Mike</p>
                  <p class="text-xs text-coffee-500">Coffee Roaster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section with Enhanced Visuals -->
    <section class="bg-white section-padding">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold text-coffee-800">Find Us</h2>
          <p class="text-lg text-coffee-600">We're located in the heart of Makati, Metro Manila — easy to find and accessible.</p>
        </div>
        
        <div class="grid gap-8 lg:grid-cols-3">
          <!-- Map Placeholder -->
          <div class="lg:col-span-2">
            <div class="relative w-full overflow-hidden h-96 rounded-2xl">
              <iframe
                class="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps?q=7650%20Ayala%20Avenue%2C%20Legazpi%20Village%2C%20Makati%2C%20Metro%20Manila%201226&z=16&output=embed"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Brew & Bean - 7650 Ayala Avenue, Makati"
              ></iframe>
            </div>
          </div>
          
          <!-- Directions -->
          <div class="space-y-4">
            <div class="p-4 card">
              <h4 class="mb-2 font-semibold text-coffee-800">Getting Here</h4>
              <div class="space-y-2 text-sm text-coffee-600">
                <p><strong>By Car:</strong> Nearby parking at Ayala Triangle Gardens and Greenbelt</p>
                <p><strong>By Jeepney/Bus:</strong> Ayala Avenue routes stopping at Paseo de Roxas or Makati Ave</p>
                <p><strong>By MRT:</strong> Ayala Station (about a 10-minute walk)</p>
              </div>
            </div>
            
            <div class="p-4 card">
              <h4 class="mb-2 font-semibold text-coffee-800">Nearby Landmarks</h4>
              <div class="space-y-2 text-sm text-coffee-600">
                <p>• Ayala Triangle Gardens</p>
                <p>• Greenbelt Mall</p>
                <p>• Glorietta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section with Enhanced Interactions -->
    <section class="section-padding bg-cream-50">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold text-coffee-800">Frequently Asked Questions</h2>
          <p class="text-lg text-coffee-600">Quick answers to common questions about Brew & Bean.</p>
        </div>
        
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.id" class="p-6 transition-all duration-200 card hover:shadow-lg">
            <button 
              @click="toggleFaq(faq.id)"
              class="flex items-center justify-between w-full text-left group"
            >
              <h3 class="text-lg font-semibold transition-colors text-coffee-800 group-hover:text-coffee-600">{{ faq.question }}</h3>
              <svg 
                class="w-5 h-5 transition-transform duration-200 text-coffee-600 group-hover:text-coffee-800"
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-if="faq.isOpen" 
              class="mt-4 overflow-hidden transition-all duration-300 text-coffee-600"
              :class="faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="text-white section-padding bg-coffee-800">
              <div class="max-w-4xl mx-auto text-center">
          <div class="w-24 h-24 mx-auto mb-6 text-coffee-600 opacity-20">
            <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h2 class="mb-4 font-serif text-3xl font-bold">Still Have Questions?</h2>
        <p class="mb-8 text-xl text-cream-100">We're here to help! Reach out to us anytime.</p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <button @click="scrollToForm" class="px-8 py-3 text-lg btn-secondary">
            Send us a Message
          </button>
          <button @click="callUs" class="px-8 py-3 text-lg btn-outline">
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })

    const errors = ref({})
    const isSubmitting = ref(false)
    const showSuccess = ref(false)
    const successMessage = ref('')

    const faqs = ref([
      {
        id: 1,
        question: 'Do you offer delivery services?',
        answer: 'Yes! We offer delivery through our partner delivery services. You can also place orders for pickup through our website or by calling us directly.',
        isOpen: false
      },
      {
        id: 2,
        question: 'Can I host events at your coffee shop?',
        answer: 'Absolutely! We love hosting events and can accommodate groups of various sizes. Please contact us at least a week in advance to discuss your event needs.',
        isOpen: false
      },
      {
        id: 3,
        question: 'Do you have vegetarian and vegan options?',
        answer: 'Yes, we offer a variety of vegetarian and vegan options including plant-based milk alternatives, vegan pastries, and vegetarian snacks.',
        isOpen: false
      },
      {
        id: 4,
        question: 'What makes your coffee special?',
        answer: 'We source our beans from sustainable farms, roast them in small batches to ensure freshness, and our baristas are trained to extract the perfect flavor from every cup.',
        isOpen: false
      },
      {
        id: 5,
        question: 'Do you offer coffee subscriptions?',
        answer: 'Yes! We have several subscription options for coffee beans, including monthly deliveries of our seasonal roasts and customizable frequency options.',
        isOpen: false
      }
    ])

    // Computed property for current business status
    const currentStatus = computed(() => {
      const now = new Date()
      const hour = now.getHours()
      const day = now.getDay()
      
      if (day === 0) { // Sunday
        return hour >= 7 && hour < 19 ? 'Open' : 'Closed'
      } else if (day === 6) { // Saturday
        return hour >= 7 && hour < 21 ? 'Open' : 'Closed'
      } else { // Monday-Friday
        return hour >= 6 && hour < 20 ? 'Open' : 'Closed'
      }
    })

    const validateField = (fieldName) => {
      const value = form.value[fieldName]
      errors.value[fieldName] = ''

      switch (fieldName) {
        case 'firstName':
        case 'lastName':
          if (!value.trim()) {
            errors.value[fieldName] = `${fieldName === 'firstName' ? 'First' : 'Last'} name is required`
          } else if (value.trim().length < 2) {
            errors.value[fieldName] = `${fieldName === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!value.trim()) {
            errors.value[fieldName] = 'Email is required'
          } else if (!emailRegex.test(value)) {
            errors.value[fieldName] = 'Please enter a valid email address'
          }
          break
        case 'subject':
          if (!value) {
            errors.value[fieldName] = 'Please select a subject'
          }
          break
        case 'message':
          if (!value.trim()) {
            errors.value[fieldName] = 'Message is required'
          } else if (value.trim().length < 10) {
            errors.value[fieldName] = 'Message must be at least 10 characters'
          } else if (value.trim().length > 500) {
            errors.value[fieldName] = 'Message must be less than 500 characters'
          }
          break
      }
    }

    const validateForm = () => {
      const fields = ['firstName', 'lastName', 'email', 'subject', 'message']
      fields.forEach(field => validateField(field))
      return !Object.values(errors.value).some(error => error)
    }

    const toggleFaq = (id) => {
      const faq = faqs.value.find(f => f.id === id)
      if (faq) {
        faq.isOpen = !faq.isOpen
      }
    }

    const submitForm = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      isSubmitting.value = false
      showSuccess.value = true
      successMessage.value = `Thank you ${form.value.firstName}! We'll get back to you soon.`
      
      // Reset form
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      }
      errors.value = {}
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        showSuccess.value = false
        successMessage.value = ''
      }, 5000)
    }

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        // You could add a toast notification here
        console.log('Copied to clipboard:', text)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }

    const scrollToForm = () => {
      const formElement = document.querySelector('form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const callUs = () => {
      window.location.href = 'tel:+15551234567'
    }

    onMounted(() => {
      // Auto-open first FAQ on mobile
      if (window.innerWidth < 768) {
        faqs.value[0].isOpen = true
      }
    })

    return {
      form,
      errors,
      faqs,
      isSubmitting,
      showSuccess,
      successMessage,
      currentStatus,
      validateField,
      toggleFaq,
      submitForm,
      copyToClipboard,
      scrollToForm,
      callUs
    }
  }
}
</script>

<style scoped>
.btn-outline {
  @apply border-2 border-white text-white hover:bg-white hover:text-coffee-800 transition-colors duration-200;
}

.btn-secondary {
  @apply bg-cream-100 text-coffee-800 hover:bg-cream-200 transition-colors duration-200;
}

/* Smooth transitions for FAQ animations */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #8B4513;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #654321;
}
</style>
