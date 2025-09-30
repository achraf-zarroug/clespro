<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center group">
          <img 
            src="/cles.png" 
            alt="CLES PRO" 
            class="w-32 h-14 md:w-40 md:h-16 lg:w-48 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </router-link>
        <nav class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary group"
            :class="$route.name === 'Home' ? 'text-primary' : 'text-white/90 hover:text-primary'"
          >
            Accueil
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" 
                  :class="$route.name === 'Home' ? 'w-full' : ''"></span>
          </router-link>
          <router-link 
            to="/about" 
            class="relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary group"
            :class="$route.name === 'About' ? 'text-primary' : 'text-white/90 hover:text-primary'"
          >
            À propos
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                  :class="$route.name === 'About' ? 'w-full' : ''"></span>
          </router-link>
          <router-link 
            to="/services" 
            class="relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary group"
            :class="$route.name === 'Services' ? 'text-primary' : 'text-white/90 hover:text-primary'"
          >
            Services
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                  :class="$route.name === 'Services' ? 'w-full' : ''"></span>
          </router-link>
          <router-link 
            to="/contact" 
            class="relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary group"
            :class="$route.name === 'Contact' ? 'text-primary' : 'text-white/90 hover:text-primary'"
          >
            Contact
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                  :class="$route.name === 'Contact' ? 'w-full' : ''"></span>
          </router-link>
          
          <a 
            href="https://wa.me/3364178477" 
            target="_blank" 
            class="ml-4 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Devis gratuit
          </a>
        </nav>

        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden p-2 text-white/90 hover:text-primary transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            ></path>
          </svg>
        </button>
      </div>

      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden mt-6 pb-6 border-t border-white/10 animate-fade-in-up"
      >
        <nav class="flex flex-col space-y-4 mt-6">
          <router-link 
            to="/" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'Home' ? 'text-primary' : 'text-white/90'" 
            class="text-left py-2 font-medium transition-colors hover:text-primary"
          >
            Accueil
          </router-link>
          <router-link 
            to="/about" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'About' ? 'text-primary' : 'text-white/90'" 
            class="text-left py-2 font-medium transition-colors hover:text-primary"
          >
            À propos
          </router-link>
          <router-link 
            to="/services" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'Services' ? 'text-primary' : 'text-white/90'" 
            class="text-left py-2 font-medium transition-colors hover:text-primary"
          >
            Services
          </router-link>
          <router-link 
            to="/contact" 
            @click="mobileMenuOpen = false" 
            :class="$route.name === 'Contact' ? 'text-primary' : 'text-white/90'" 
            class="text-left py-2 font-medium transition-colors hover:text-primary"
          >
            Contact
          </router-link>
          <a 
            href="https://wa.me/216XXXXXXXX" 
            target="_blank" 
            class="inline-flex items-center justify-center mt-4 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
          >
            Devis gratuit
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'HeaderShow',
  setup() {
    const mobileMenuOpen = ref(false)
    return { mobileMenuOpen }
  }
}
</script>
