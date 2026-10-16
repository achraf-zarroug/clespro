<template>
  <div class="py-16 sm:py-20 relative overflow-hidden">
    <!-- Ambient glow backdrop -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold text-xs border border-sky-500/30 mb-4">
          Réponse Rapide Garantie
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-display">
          Contactez Votre <span class="gradient-heading">Serrurier Auto</span>
        </h1>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          Un devis immédiat, une urgence clé ou une question sur la compatibilité de votre véhicule ? Notre équipe vous répond immédiatement.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left Column: Form & WhatsApp -->
        <div class="lg:col-span-7 space-y-6">
          <div class="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            <h2 class="text-2xl font-bold text-white mb-2 font-display">Envoyez-nous un message</h2>
            <p class="text-xs sm:text-sm text-slate-400 mb-8">
              Remplissez le formulaire ci-dessous avec votre modèle de véhicule. Réponse sous quelques heures.
            </p>

            <form @submit.prevent="submitForm" class="space-y-5">
              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Nom complet / Prénom
                </label>
                <div class="relative">
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required 
                    placeholder="Ex: Alexandre Laurent"
                    class="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Adresse Email
                </label>
                <div class="relative">
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required 
                    placeholder="Ex: alexandre@exemple.fr"
                    class="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Message (Marque, Modèle, Année et Problème)
                </label>
                <textarea 
                  v-model="form.message" 
                  required 
                  rows="4" 
                  placeholder="Ex: Bonjour, j'ai une Peugeot 308 de 2018 et je souhaite refaire un double de clé avec télécommande..."
                  class="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-600/30 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span v-if="!isSubmitting">Envoyer ma demande</span>
                <span v-else>Envoi en cours...</span>
                <Send class="w-4 h-4" />
              </button>
            </form>

            <!-- Instant WhatsApp Quick Button -->
            <div class="mt-8 pt-8 border-t border-white/10">
              <span class="block text-center text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">
                Vous êtes en urgence ou préférez WhatsApp ?
              </span>
              <a 
                href="https://wa.me/33758563529" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-sm transition-all duration-200"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Échanger directement sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Info & Google Maps -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Contact Details Card -->
          <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
            <h3 class="text-xl font-bold text-white font-display mb-4">Coordonnées de l'Atelier</h3>

            <a 
              href="tel:0758563529"
              class="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-sky-500/10 border border-white/5 hover:border-sky-500/30 transition-all group"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs text-slate-400 block font-medium">Ligne directe & Urgences</span>
                <span class="font-bold text-white group-hover:text-sky-300 text-base">07 58 56 35 29</span>
              </div>
            </a>

            <a 
              href="mailto:laghak@yahoo.fr"
              class="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-sky-500/10 border border-white/5 hover:border-sky-500/30 transition-all group"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs text-slate-400 block font-medium">Courriel professionnel</span>
                <span class="font-medium text-white group-hover:text-sky-300 text-sm">laghak@yahoo.fr</span>
              </div>
            </a>

            <a 
              href="https://maps.app.goo.gl/s9ruLovE4LmMrDfe7"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-sky-500/10 border border-white/5 hover:border-sky-500/30 transition-all group"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs text-slate-400 block font-medium">Adresse physique</span>
                <span class="font-medium text-white group-hover:text-sky-300 text-sm">12 Rue de la Gare, 57140 Woippy</span>
              </div>
            </a>
          </div>

          <!-- Opening Hours Card -->
          <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
            <div class="flex items-center gap-2.5 mb-4">
              <Clock class="w-5 h-5 text-sky-400" />
              <h3 class="text-lg font-bold text-white font-display">Horaires d'Ouverture</h3>
            </div>
            <div class="space-y-2.5 text-xs sm:text-sm">
              <div class="flex justify-between items-center py-1.5 border-b border-white/5">
                <span class="text-slate-400">Lundi - Vendredi</span>
                <span class="font-semibold text-white">09h00 - 19h00</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-white/5">
                <span class="text-slate-400">Samedi</span>
                <span class="font-semibold text-white">09h00 - 17h30</span>
              </div>
              <div class="flex justify-between items-center py-1.5 text-sky-400 font-semibold">
                <span>Dimanche</span>
                <span>Sur RDV uniquement / Urgences</span>
              </div>
            </div>
          </div>

          <!-- Interactive Google Maps Frame -->
          <div class="rounded-3xl overflow-hidden border border-white/10 shadow-xl relative aspect-video">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10438.762224328515!2d6.147803176006675!3d49.149499424011886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794d93c76c29c33%3A0x5c6ad75fc32d879!2s12%20Rue%20de%20la%20Gare%2C%2057140%20Woippy%2C%20France!5e0!3m2!1sen!2stn!4v1759191654833!5m2!1sen!2stn" 
              class="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Carte de localisation Clés Pro Woippy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>

    <SchemaMarkup :markup="localBusinessSchema" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-vue-next'
import SchemaMarkup from '../components/SchemaMarkup.vue'

const isSubmitting = ref(false)

const localBusinessSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Clés Pro",
  "url": "https://www.clespro.fr",
  "image": "https://www.clespro.fr/images/votre-logo-clespro-hq.png",
  "telephone": "+33758563529",
  "email": "laghak@yahoo.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 RUE DE LA GARE",
    "addressLocality": "Woippy",
    "postalCode": "57140",
    "addressRegion": "Grand Est",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:30"
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  isSubmitting.value = true
  const templateParams = {
    from_name: form.value.name,
    from_email: form.value.email,
    message: form.value.message,
    time: new Date().toLocaleString()
  }

  emailjs.send("service_1phbb89", "template_b2m6fxe", templateParams, "QxGF81xBp2fCvx9it")
    .then(() => {
      alert("Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais. ✅")
      form.value = { name: "", email: "", message: "" }
    })
    .catch((error) => {
      console.error("Erreur d'envoi:", error)
      alert("Une erreur est survenue lors de l'envoi. Veuillez nous contacter directement par téléphone ou WhatsApp. ❌")
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>
