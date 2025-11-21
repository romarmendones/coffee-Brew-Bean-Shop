<template>
  <div class="min-h-screen bg-cream-50">
    <!-- Hero Section -->
    <section class="relative overflow-hidden text-white bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-700">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?random=coffee-hero" 
          alt="Coffee beans and brewing equipment" 
          class="object-cover w-full h-full opacity-40"
        />
      </div>
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 section-padding">
        <div class="text-center">
          <h1 class="mb-6 font-serif text-4xl font-bold md:text-6xl animate-fade-in">
            Our Story
          </h1>
          <p class="max-w-3xl mx-auto text-xl leading-relaxed text-cream-100 animate-fade-in-delay">
            From humble beginnings to becoming the heart of our community, 
            Brew & Bean has been crafting exceptional coffee experiences since 2010.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="bg-white section-padding">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="space-y-6">
            <h2 class="font-serif text-3xl font-bold md:text-4xl text-coffee-800">
              A Passion for Perfect Coffee
            </h2>
            <p class="text-lg leading-relaxed text-coffee-600">
              It all started with a simple dream: to create a space where people could enjoy 
              exceptional coffee in a warm, welcoming atmosphere. Our founder, Sarah Chen, 
              discovered her love for coffee while traveling through the coffee regions of 
              Central America and East Africa.
            </p>
            <p class="text-lg leading-relaxed text-coffee-600">
              What began as a small coffee cart in 2010 has grown into a beloved community 
              gathering place, where every cup tells a story and every customer becomes family.
            </p>
            <div class="flex space-x-4">
              <button 
                @click="playStoryVideo" 
                class="flex items-center px-6 py-3 space-x-2 text-white transition-colors rounded-lg bg-coffee-600 hover:bg-coffee-700"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
                <span>Watch Our Story</span>
              </button>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                <button 
                  @click="downloadStoryPDF" 
                class="flex items-center px-6 py-3 space-x-2 transition-colors border rounded-lg border-coffee-600 text-coffee-600 hover:bg-coffee-50"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download PDF</span>
              </button>
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="w-full overflow-hidden shadow-xl h-96 rounded-2xl">
              <img 
                src="https://picsum.photos/800/600?random=founder" 
                alt="Sarah Chen, founder of Brew & Bean" 
                class="object-cover w-full h-full transition-transform duration-500 cursor-pointer hover:scale-105"
                @click="openImageModal('https://picsum.photos/800/600?random=founder', 'Sarah Chen, Founder')"
              />
            </div>
            <div class="absolute px-4 py-2 bg-white rounded-lg bottom-4 left-4 bg-opacity-90">
              <p class="text-sm font-medium text-coffee-800">Sarah Chen, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-cream-50">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold md:text-4xl text-coffee-800">
            Our Values
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-coffee-600">
            These core principles guide everything we do, from sourcing our beans to serving our community.
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-3">
          <div 
            v-for="(value, index) in values" 
            :key="index"
            class="text-center transition-all duration-300 transform cursor-pointer group hover:scale-105"
            @click="showValueDetails(value)"
          >
            <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-colors rounded-full bg-coffee-100 group-hover:bg-coffee-200">
              <component :is="value.icon" class="w-10 h-10 text-coffee-600" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-coffee-800">{{ value.title }}</h3>
            <p class="text-coffee-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-white section-padding">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold md:text-4xl text-coffee-800">
            Meet Our Team
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-coffee-600">
            The passionate people behind every perfect cup of coffee.
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="member in teamMembers" 
            :key="member.id" 
            class="text-center transition-all duration-300 transform cursor-pointer group hover:scale-105"
            @click="showTeamMemberDetails(member)"
          >
            <div class="w-32 h-32 mx-auto mb-6 overflow-hidden transition-shadow rounded-full shadow-lg group-hover:shadow-xl">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 class="mb-2 text-xl font-semibold text-coffee-800">{{ member.name }}</h3>
            <p class="mb-2 font-medium text-coffee-600">{{ member.role }}</p>
            <p class="text-sm text-coffee-600">{{ member.description }}</p>
            <div class="flex justify-center mt-3 space-x-2">
              <button 
                v-if="member.social?.linkedin"
                @click="openSocialLink(member.social.linkedin)"
                class="transition-colors text-coffee-600 hover:text-coffee-800"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 2.998v5.618H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button 
                v-if="member.social?.instagram"
                @click="openSocialLink(member.social.instagram)"
                class="transition-colors text-coffee-600 hover:text-coffee-800"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="text-white section-padding bg-coffee-800">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 text-center md:grid-cols-4">
          <div v-for="stat in stats" :key="stat.id" class="group">
            <div class="mb-2 text-4xl font-bold transition-all duration-500 group-hover:scale-110">
              <span ref="statCounter">{{ stat.value }}</span>
            </div>
            <div class="text-cream-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="bg-white section-padding">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="mb-4 font-serif text-3xl font-bold md:text-4xl text-coffee-800">
            Behind the Scenes
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-coffee-600">
            Take a peek at our daily operations and the passion that goes into every cup.
          </p>
        </div>
        
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="index"
            class="relative overflow-hidden rounded-lg cursor-pointer group"
            @click="openImageModal(image.src, image.alt)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-30">
              <svg class="w-8 h-8 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-cream-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="mb-4 font-serif text-3xl font-bold text-coffee-800">
          Join Our Coffee Family
        </h2>
        <p class="mb-8 text-lg text-coffee-600">
          Experience the passion, quality, and community that makes Brew & Bean special.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <router-link to="/menu" class="btn-primary">
            Explore Our Menu
          </router-link>
          <router-link to="/contact" class="btn-secondary">
            Visit Us Today
          </router-link>
          <button 
            @click="scheduleTour" 
            class="btn-tertiary"
          >
            Schedule a Tour
          </button>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click="closeModal"
    >
      <div class="relative max-w-4xl max-h-full">
        <img 
          :src="modalImage.src" 
          :alt="modalImage.alt"
          class="object-contain w-full h-auto max-h-full"
        />
        <div class="absolute top-4 right-4">
          <button 
            @click="closeModal"
            class="p-2 transition-all bg-white rounded-full bg-opacity-90 hover:bg-opacity-100"
          >
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="absolute px-4 py-2 bg-white rounded-lg bottom-4 left-4 bg-opacity-90">
          <p class="text-sm font-medium text-gray-800">{{ modalImage.alt }}</p>
        </div>
      </div>
    </div>

    <!-- Team Member Modal -->
    <div 
      v-if="showTeamModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click="closeTeamModal"
    >
      <div class="w-full max-w-2xl p-6 bg-white rounded-lg" @click.stop>
        <div class="flex items-start space-x-4">
          <img 
            :src="selectedTeamMember.image" 
            :alt="selectedTeamMember.name"
            class="object-cover w-24 h-24 rounded-full"
          />
          <div class="flex-1">
            <h3 class="mb-2 text-2xl font-bold text-coffee-800">{{ selectedTeamMember.name }}</h3>
            <p class="mb-3 font-medium text-coffee-600">{{ selectedTeamMember.role }}</p>
            <p class="mb-4 text-coffee-600">{{ selectedTeamMember.description }}</p>
            <div class="flex space-x-3">
              <button 
                v-if="selectedTeamMember.social?.linkedin"
                @click="openSocialLink(selectedTeamMember.social.linkedin)"
                class="px-4 py-2 text-white transition-colors rounded-lg bg-coffee-600 hover:bg-coffee-700"
              >
                LinkedIn
              </button>
              <button 
                v-if="selectedTeamMember.social?.instagram"
                @click="openSocialLink(selectedTeamMember.social.instagram)"
                class="px-4 py-2 text-white transition-colors rounded-lg bg-coffee-600 hover:bg-coffee-700"
              >
                Instagram
              </button>
            </div>
          </div>
        </div>
        <button 
          @click="closeTeamModal"
          class="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import QualityIcon from '@src/components/icons/QualityIcon.vue'
import SustainabilityIcon from '@src/components/icons/SustainabilityIcon.vue'
import CommunityIcon from '@src/components/icons/CommunityIcon.vue'

export default {
  name: 'About',
  components: {
    QualityIcon,
    SustainabilityIcon,
    CommunityIcon
  },
  setup() {
    const showModal = ref(false)
    const showTeamModal = ref(false)
    const modalImage = ref({ src: '', alt: '' })
    const selectedTeamMember = ref({})
    const statCounter = ref(null)

    const values = [
      {
        title: 'Quality First',
        description: 'We never compromise on quality, from bean selection to the final cup. Every detail matters.',
        icon: QualityIcon,
        details: 'Our quality assurance process includes multiple checkpoints: from sourcing single-origin beans to testing every batch before roasting, to ensuring proper brewing temperatures and techniques. We work with certified organic farms and maintain strict standards throughout the entire process.'
      },
      {
        title: 'Sustainability',
        description: 'We\'re committed to ethical sourcing and environmentally responsible practices.',
        icon: SustainabilityIcon,
        details: 'We partner with Rainforest Alliance certified farms, use compostable packaging, implement energy-efficient equipment, and support local environmental initiatives. Our goal is to be carbon-neutral by 2025.'
      },
      {
        title: 'Community',
        description: 'We believe in building strong relationships with our customers and supporting local initiatives.',
        icon: CommunityIcon,
        details: 'We host monthly community events, support local artists and musicians, donate to food banks, and partner with schools for coffee education programs. We believe coffee brings people together.'
      }
    ]

          const teamMembers = [
        {
          id: 1,
          name: 'Sarah Chen',
          role: 'Founder & CEO',
          image: 'https://picsum.photos/400/400?random=sarah',
          description: 'Coffee enthusiast with 15+ years in the industry. Passionate about creating memorable experiences.',
          social: {
            linkedin: 'https://linkedin.com/in/sarahchen',
            instagram: 'https://instagram.com/sarahchencoffee'
          }
        },
        {
          id: 2,
          name: 'Marcus Rodriguez',
          role: 'Head Barista',
          image: 'https://picsum.photos/400/400?random=marcus',
          description: 'Certified coffee professional who brings creativity and precision to every cup.',
          social: {
            linkedin: 'https://linkedin.com/in/marcusrodriguez',
            instagram: 'https://instagram.com/marcusbarista'
          }
        },
        {
          id: 3,
          name: 'Emma Thompson',
          role: 'Operations Manager',
          image: 'https://picsum.photos/400/400?random=emma',
          description: 'Ensures smooth operations and maintains our high standards of service.',
          social: {
            linkedin: 'https://linkedin.com/in/emmathompson'
          }
        },
        {
          id: 4,
          name: 'David Kim',
          role: 'Coffee Roaster',
          image: 'https://picsum.photos/400/400?random=david',
          description: 'Expert roaster who carefully crafts our signature coffee profiles.',
          social: {
            linkedin: 'https://linkedin.com/in/davidkim',
            instagram: 'https://instagram.com/davidroaster'
          }
        },
        {
          id: 5,
          name: 'Lisa Park',
          role: 'Customer Experience',
          image: 'https://picsum.photos/400/400?random=lisa',
          description: 'Makes sure every customer feels welcome and leaves with a smile.',
          social: {
            instagram: 'https://instagram.com/lisapark'
          }
        },
        {
          id: 6,
          name: 'James Wilson',
          role: 'Kitchen Manager',
          image: 'https://picsum.photos/400/400?random=james',
          description: 'Creates delicious pastries and snacks that perfectly complement our coffee.',
          social: {
            linkedin: 'https://linkedin.com/in/jameswilson'
          }
        }
      ]

    const stats = [
      { id: 1, value: '13+', label: 'Years of Experience' },
      { id: 2, value: '50K+', label: 'Happy Customers' },
      { id: 3, value: '15+', label: 'Coffee Origins' },
      { id: 4, value: '100%', label: 'Quality Guaranteed' }
    ]

    const galleryImages = [
      { src: 'https://picsum.photos/800/600?random=roasting', alt: 'Coffee beans being roasted' },
      { src: 'https://picsum.photos/800/600?random=barista', alt: 'Barista crafting latte art' },
      { src: 'https://picsum.photos/800/600?random=farm', alt: 'Coffee farm in Central America' },
      { src: 'https://picsum.photos/800/600?random=cupping', alt: 'Coffee cupping session' },
      { src: 'https://picsum.photos/800/600?random=grinding', alt: 'Fresh coffee grinding' },
      { src: 'https://picsum.photos/800/600?random=brewing', alt: 'Pour-over coffee brewing' },
      { src: 'https://picsum.photos/800/600?random=packing', alt: 'Coffee packaging process' },
      { src: 'https://picsum.photos/800/600?random=tasting', alt: 'Coffee tasting event' }
    ]

    const openImageModal = (src, alt) => {
      modalImage.value = { src, alt }
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    const showTeamMemberDetails = (member) => {
      selectedTeamMember.value = member
      showTeamModal.value = true
    }

    const closeTeamModal = () => {
      showTeamModal.value = false
    }

    const showValueDetails = (value) => {
      alert(`${value.title}\n\n${value.details}`)
    }

    const playStoryVideo = () => {
      alert('Video player would open here with our story video')
    }

    const downloadStoryPDF = () => {
      alert('PDF download would start here')
    }

    const scheduleTour = () => {
      alert('Tour scheduling form would open here')
    }

    const openSocialLink = (url) => {
      window.open(url, '_blank')
    }

    const animateCounters = () => {
      const counters = document.querySelectorAll('[ref="statCounter"]')
      counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''))
        const increment = target / 100
        let current = 0
        
        const updateCounter = () => {
          if (current < target) {
            current += increment
            counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '')
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = counter.textContent.replace(/\D/g, '') + (counter.textContent.includes('+') ? '+' : '')
          }
        }
        
        updateCounter()
      })
    }

    onMounted(() => {
      nextTick(() => {
        // Trigger counter animation when stats section comes into view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCounters()
              observer.unobserve(entry.target)
            }
          })
        })
        
        const statsSection = document.querySelector('.bg-coffee-800')
        if (statsSection) {
          observer.observe(statsSection)
        }
      })
    })

    return {
      showModal,
      showTeamModal,
      modalImage,
      selectedTeamMember,
      statCounter,
      values,
      teamMembers,
      stats,
      galleryImages,
      openImageModal,
      closeModal,
      showTeamMemberDetails,
      closeTeamModal,
      showValueDetails,
      playStoryVideo,
      downloadStoryPDF,
      scheduleTour,
      openSocialLink
    }
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary {
  @apply bg-coffee-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-coffee-700 transition-colors;
}

.btn-secondary {
  @apply border-2 border-coffee-600 text-coffee-600 px-8 py-3 rounded-lg font-medium hover:bg-coffee-600 hover:text-white transition-colors;
}

.btn-tertiary {
  @apply bg-coffee-100 text-coffee-800 px-8 py-3 rounded-lg font-medium hover:bg-coffee-200 transition-colors;
}

.section-padding {
  @apply py-16 md:py-24;
}
</style>
