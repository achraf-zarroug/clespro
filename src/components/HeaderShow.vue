<template>
<<<<<<< HEAD
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <!-- Top Announcement / Emergency Hotline Bar -->
    <div class="bg-gradient-to-r from-sky-950/90 via-slate-900/90 to-sky-950/90 border-b border-sky-500/20 py-1.5 px-4 text-xs">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2 text-slate-300">
          <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Ouvert & Disponible
          </span>
          <span class="hidden sm:inline text-slate-400">|</span>
          <span class="hidden sm:inline text-slate-300">Metz, Woippy & 30km aux alentours</span>
        </div>

        <div class="flex items-center gap-4 text-slate-200">
          <a 
            href="tel:0758563529" 
            class="flex items-center gap-1.5 font-bold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <Phone class="w-3.5 h-3.5 text-sky-400" />
            <span>07 58 56 35 29</span>
          </a>
          <span class="text-slate-600 hidden md:inline">|</span>
          <span class="hidden md:inline text-slate-400 text-[11px]">7j/7 Intervention Rapide</span>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="glass-panel border-b border-white/10 backdrop-blur-xl">
      <div class="container mx-auto px-4 sm:px-6 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo Brand -->
          <router-link to="/" class="flex items-center gap-3 group">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src="/cles.png" 
                alt="CLES PRO - Serrurier Auto Metz" 
                class="relative h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div class="hidden lg:flex flex-col">
              <span class="font-extrabold text-white text-base tracking-wider uppercase font-display">Clés Pro</span>
              <span class="text-[10px] text-sky-400 font-medium tracking-widest uppercase">Expert Clé Auto & Sécurité</span>
            </div>
          </router-link>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-1 lg:gap-2">
            <router-link 
              to="/" 
              class="relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              :class="isActiveRoute('home') ? 'text-white bg-white/10 shadow-sm border border-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'"
            >
              Accueil
              <span 
                v-if="isActiveRoute('home')" 
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-sky-400 rounded-full"
              ></span>
            </router-link>

            <router-link 
              to="/services" 
              class="relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              :class="isActiveRoute('services') ? 'text-white bg-white/10 shadow-sm border border-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'"
            >
              Nos Services
              <span 
                v-if="isActiveRoute('services')" 
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-sky-400 rounded-full"
              ></span>
            </router-link>

            <router-link 
              to="/about" 
              class="relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              :class="isActiveRoute('about') ? 'text-white bg-white/10 shadow-sm border border-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'"
            >
              À Propos
              <span 
                v-if="isActiveRoute('about')" 
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-sky-400 rounded-full"
              ></span>
            </router-link>

            <router-link 
              to="/contact" 
              class="relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              :class="isActiveRoute('contact') ? 'text-white bg-white/10 shadow-sm border border-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'"
            >
              Contact & Accès
              <span 
                v-if="isActiveRoute('contact')" 
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-sky-400 rounded-full"
              ></span>
            </router-link>
          </nav>

          <!-- Action Buttons -->
          <div class="hidden sm:flex items-center gap-3">
            <a 
              href="tel:0758563529" 
              class="flex items-center gap-2 px-4 py-2 rounded-lg border border-sky-500/30 bg-sky-950/40 text-sky-300 text-sm font-semibold hover:bg-sky-900/50 hover:border-sky-400 transition-all duration-200"
            >
              <Phone class="w-4 h-4 text-sky-400" />
              <span class="hidden xl:inline">07 58 56 35 29</span>
              <span class="xl:hidden">Appeler</span>
            </a>

            <a 
              href="https://wa.me/33758563529" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-sky-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Devis Express</span>
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Menu de navigation"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Collapsible Menu -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div 
            v-if="mobileMenuOpen" 
            class="md:hidden mt-3 pt-4 pb-2 border-t border-white/10 flex flex-col gap-2"
          >
            <router-link 
              to="/" 
              @click="mobileMenuOpen = false" 
              class="px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-between"
              :class="isActiveRoute('home') ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-300 hover:bg-white/5 hover:text-white'"
            >
              <span>Accueil</span>
              <ChevronRight class="w-4 h-4 opacity-50" />
            </router-link>

            <router-link 
              to="/services" 
              @click="mobileMenuOpen = false" 
              class="px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-between"
              :class="isActiveRoute('services') ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-300 hover:bg-white/5 hover:text-white'"
            >
              <span>Nos Services</span>
              <ChevronRight class="w-4 h-4 opacity-50" />
            </router-link>

            <router-link 
              to="/about" 
              @click="mobileMenuOpen = false" 
              class="px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-between"
              :class="isActiveRoute('about') ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-300 hover:bg-white/5 hover:text-white'"
            >
              <span>À Propos</span>
              <ChevronRight class="w-4 h-4 opacity-50" />
            </router-link>

            <router-link 
              to="/contact" 
              @click="mobileMenuOpen = false" 
              class="px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-between"
              :class="isActiveRoute('contact') ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-300 hover:bg-white/5 hover:text-white'"
            >
              <span>Contact & Localisation</span>
              <ChevronRight class="w-4 h-4 opacity-50" />
            </router-link>

            <div class="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a 
                href="tel:0758563529" 
                class="flex items-center justify-center gap-2 py-3 rounded-lg bg-sky-950/60 border border-sky-500/40 text-sky-300 font-bold text-sm"
              >
                <Phone class="w-4 h-4" />
                <span>07 58 56 35 29 (Appel direct)</span>
              </a>

              <a 
                href="https://wa.me/33758563529" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md"
              >
                <span>Demander un devis WhatsApp</span>
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>
        </transition>
=======
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
            href="https://wa.me/33758563529" 
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
            href="https://wa.me/33758563529" 
            target="_blank" 
            class="inline-flex items-center justify-center mt-4 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
          >
            Devis gratuit
          </a>
        </nav>
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
      </div>
    </div>
  </header>
</template>

<<<<<<< HEAD
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, ArrowRight, Menu, X, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const mobileMenuOpen = ref(false)

const isActiveRoute = (name: string) => {
  return route.name === name || route.path === (name === 'home' ? '/' : `/${name}`)
}
</script>

=======
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
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
