<template>
<<<<<<< HEAD
  <div class="py-16 sm:py-20 relative overflow-hidden">
    <!-- Ambient background light -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold text-xs border border-sky-500/30 mb-4">
          Expertise Reconnue en Moselle (57)
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-display">
          Nos Services de <span class="gradient-heading">Serrurerie Auto & Clés</span>
        </h1>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          Que vous ayez perdu vos clés, besoin d'un double sécurisé ou d'une réparation de Neiman bloqué, bénéficiez de notre outillage de pointe au meilleur tarif.
        </p>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200"
            :class="activeCategory === cat.id ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'glass-panel text-slate-400 hover:text-white hover:bg-white/5'"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        <div
          v-for="(service, idx) in filteredServices"
          :key="idx"
          class="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-sky-500/40"
        >
          <!-- Image with overlays -->
          <div class="relative h-52 overflow-hidden bg-slate-900">
            <img 
              :src="service.image" 
              :alt="service.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent"></div>
            <span 
              class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md"
              :class="service.tagClass || 'bg-sky-500/80 text-white'"
            >
              {{ service.tag }}
            </span>
            <span class="absolute bottom-3 right-4 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Clock class="w-3.5 h-3.5 text-sky-400" />
              {{ service.duration }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-white mb-3 font-display group-hover:text-sky-400 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              {{ service.description }}
            </p>

            <!-- Highlights -->
            <div class="space-y-2 mb-6 mt-auto">
              <div 
                v-for="(feat, fIdx) in service.features" 
                :key="fIdx"
                class="flex items-center gap-2 text-xs text-slate-300"
              >
                <CheckCircle2 class="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>{{ feat }}</span>
              </div>
            </div>

            <!-- Action buttons -->
            <div class="pt-4 border-t border-white/10 flex items-center gap-3">
              <a 
                :href="service.whatsappLink"
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold text-center shadow-md transition-all duration-200"
              >
                {{ service.actionLabel }}
              </a>
              <a 
                href="tel:0758563529" 
                class="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                title="Appel direct"
              >
                <Phone class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Assurance Box -->
      <div class="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/30 max-w-5xl mx-auto relative overflow-hidden">
        <div class="grid md:grid-cols-3 gap-8 text-center sm:text-left">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 border border-sky-500/30">
              <ShieldCheck class="w-6 h-6" />
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Garantie 100% Fonctionnel</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Toutes nos clés sont programmées et testées directement sur votre véhicule avant validation.</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
              <BadgeEuro class="w-6 h-6" />
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Devis Gratuit & Sans Surprise</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Prix annoncé = prix payé. Économisez jusqu'à 60% par rapport aux tarifs en concession.</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
              <Zap class="w-6 h-6" />
            </div>
            <div>
              <h4 class="font-bold text-white text-base mb-1">Intervention Immédiate</h4>
              <p class="text-xs text-slate-400 leading-relaxed">Repartez avec votre clé taillée et codée le jour même en atelier ou en déplacement express.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckCircle2, Clock, Phone, ShieldCheck, BadgeEuro, Zap } from 'lucide-vue-next'

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'Tous les services' },
  { id: 'keys', label: 'Clés & Télécommandes' },
  { id: 'electronic', label: 'Électronique & OBD' },
  { id: 'emergency', label: 'Neiman & Urgences' }
]

const services = [
  {
    category: 'keys',
    tag: 'Plus Demandé',
    tagClass: 'bg-sky-500/90 text-white',
    title: 'Programmation & Codage Clés Auto',
    description: 'Spécialistes de la clé électronique automobile, nous effectuons le codage des puces transpondeurs et la synchronisation complète de télécommandes pour toutes marques.',
    image: '/images/ProgrammationService.jpg',
    duration: '20 à 30 min',
    features: [
      'Puces crypto, transpondeurs ID46, ID48, etc.',
      'Cartes mains-libres Renault, Peugeot, BMW...',
      'Test immédiat sur votre véhicule'
    ],
    actionLabel: 'Demander un codage',
    whatsappLink: 'https://wa.me/33758563529?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20la%20programmation%20d%27une%20clé%20auto'
  },
  {
    category: 'electronic',
    tag: 'Électronique Avancée',
    tagClass: 'bg-indigo-500/90 text-white',
    title: 'Diagnostic & Réparation Antidémarrage',
    description: 'Voyant clé allumé ? Votre voiture refuse de démarrer ? Nous identifions et réparons les défauts du système antidémarrage (calculateur ECU, boîtier BSI/UCH, bague réceptrice).',
    image: '/images/Antidémarrage.png',
    duration: 'Selon diagnostic',
    features: [
      'Interrogation valise OBD constructeur',
      'Résolution de pannes synchronisation calculateur',
      'Suppression / reset sécurisé du code défaut'
    ],
    actionLabel: 'Demander un diagnostic',
    whatsappLink: 'https://wa.me/33758563529?text=Bonjour,%20j%27ai%20un%20problème%20avec%20le%20système%20antidémarrage%20de%20ma%20voiture'
  },
  {
    category: 'keys',
    tag: 'Haute Précision CNC',
    tagClass: 'bg-emerald-500/90 text-white',
    title: 'Duplication de Clés Simples & Sécurisées',
    description: 'Reproduction ultra-précise au dixième de millimètre de clés de voitures, clés à vagues, clés plates, ainsi que clés de sûreté pour domicile (sur numéro ou modèle).',
    image: '/images/Duplication.jpg',
    duration: '10 à 20 min',
    features: [
      'Machines de taille numérique laser CNC',
      'Clés protégées avec carte de propriété',
      'Matériaux laiton & acier haute résistance'
    ],
    actionLabel: 'Commander une copie',
    whatsappLink: 'https://wa.me/33758563529?text=Bonjour,%20je%20souhaite%20faire%20un%20double%20de%20clé'
  },
  {
    category: 'keys',
    tag: 'Rénovation Économique',
    tagClass: 'bg-amber-500/90 text-white',
    title: 'Réparation Télécommandes & Plips',
    description: 'Bouton poussoir dessoudé, coque cassée ou pile déchargée ? Plutôt que de racheter une clé complète, nous rénovons votre télécommande pour lui redonner une seconde vie.',
    image: '/images/maxresdefault.jpg',
    duration: '15 min',
    features: [
      'Remplacement micro-switchs et condensateurs',
      'Coques neuves identiques à l\'originale',
      'Piles haute capacité & test d\'émission RF'
    ],
    actionLabel: 'Réparer ma télécommande',
    whatsappLink: 'https://wa.me/33758563529?text=Bonjour,%20je%20souhaite%20faire%20réparer%20ma%20télécommande%20plip'
  },
  {
    category: 'emergency',
    tag: 'Serrurerie Mécanique',
    tagClass: 'bg-rose-500/90 text-white',
    title: 'Réparation Neiman & Barillets Bloqués',
    description: 'Clé coincée dans le contacteur, barillet forcé ou usé ? Nous réparons et réadaptons le Neiman afin que votre clé d\'origine continue de fonctionner sur l\'ensemble du véhicule.',
    image: '/images/neiman.jpg',
    duration: '45 à 60 min',
    features: [
      'Évite de changer tout le kit de serrures',
      'Conservation de votre clé actuelle',
      'Déblocage propre sans endommager la colonne'
    ],
    actionLabel: 'Dépannage Neiman',
    whatsappLink: 'https://wa.me/33758563529?text=Bonjour,%20mon%20Neiman%20ou%20barillet%20est%20bloqué'
  },
  {
    category: 'emergency',
    tag: 'Urgence 7j/7',
    tagClass: 'bg-red-600 text-white',
    title: 'Ouverture de Porte Sans Dégât',
    description: 'Clés enfermées à l\'intérieur de l\'habitacle ou dans le coffre ? Nous ouvrons votre véhicule rapidement grâce à des outils de crochetage professionnels non destructifs.',
    image: '/images/OUVERTURE-PORTE-URGENCE.png',
    duration: 'Intervention express',
    features: [
      'Zéro bris de glace ni rayure sur la carrosserie',
      'Prise en charge tous types de verrouillage',
      'Déplacement rapide sur Metz, Woippy et 30km'
    ],
    actionLabel: 'Urgence Porte Claquée',
    whatsappLink: 'https://wa.me/33758563529?text=URGENCE%20:%20mes%20clés%20sont%20enfermées%20dans%20ma%20voiture'
  }
]

const filteredServices = computed(() => {
  if (activeCategory.value === 'all') return services
  return services.filter(s => s.category === activeCategory.value)
})
</script>
=======
  <div class="py-20 bg-white">&nbsp;
    <div class="container mx-auto px-4">&nbsp;
      <h1 class="text-5xl font-bold text-black text-center mb-16">
        Nos <span class="text-[#40688c]">Services</span>
      </h1>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <!-- Service Card 1 -->
        <div
          class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 
                 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 
                 hover:shadow-2xl hover:shadow-[#85c5db]/20 flex flex-col h-full"
        >
          <div class="relative h-48 overflow-hidden">
            <img src="/images/ProgrammationService.jpg" alt="Programmation" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">
              Programmation et Codage de Clés Auto
            </h3>
            <p class="text-gray-300 leading-relaxed">
              Spécialistes de la clé électronique, nous proposons le codage de transpondeurs 
              et la synchronisation de télécommandes pour toutes marques de véhicules.
            </p>
            <div class="mt-auto pt-4">
              <button class="w-full bg-[#40688c] hover:bg-[#85c5db] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                <router-link to="/contact">Demander un codage</router-link>
              </button>
            </div>
          </div>
        </div>

        <!-- Service Card 2 -->
        <div
          class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 
                 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 
                 hover:shadow-2xl hover:shadow-[#85c5db]/20 flex flex-col h-full"
        >
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Antidémarrage.png" alt="Antidémarrage" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">
              Diagnostic et Réparation d'Antidémarrage
            </h3>
            <p class="text-gray-300 leading-relaxed">
              Diagnostic électronique avancé pour identifier et réparer les pannes du système 
              antidémarrage, du calculateur (ECU) ou du boîtier BSI/UCH.
            </p>
            <div class="mt-auto pt-4">
              <button class="w-full bg-[#40688c] hover:bg-[#85c5db] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                <router-link to="/contact">Demander un diagnostic</router-link>
              </button>
            </div>
          </div>
        </div>

        <!-- Service Card 3 -->
        <div
          class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 
                 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 
                 hover:shadow-2xl hover:shadow-[#85c5db]/20 flex flex-col h-full"
        >
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Duplication.jpg" alt="Duplication" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">
              Duplication de Clés Simples et Sécurisées
            </h3>
            <p class="text-gray-300 leading-relaxed">
              Reproduction ultra-précise de tous types de clés de voiture et domestiques (sécurité incluse).
            </p>
            <div class="mt-auto pt-4">
              <button class="w-full bg-[#40688c] hover:bg-[#85c5db] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                <router-link to="/contact">Commander une copie</router-link>
              </button>
            </div>
          </div>
        </div>

        <!-- Service Card 4 -->
        <div
          class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 
                 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 
                 hover:shadow-2xl hover:shadow-[#85c5db]/20 flex flex-col h-full"
        >
          <div class="relative h-48 overflow-hidden">
            <img src="/images/maxresdefault.jpg" alt="Réparation Télécommandes" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">
              Réparation Télécommandes (Plips)
            </h3>
            <p class="text-gray-300 leading-relaxed">
              Réparation et rénovation de vos télécommandes (boutons, coques, circuits) 
              avec possibilité d'envoi par courrier.
            </p>
            <div class="mt-auto pt-4">
              <button class="w-full bg-[#40688c] hover:bg-[#85c5db] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              <router-link to="/contact">Réparer ma télécommande</router-link>  
              </button>
            </div>
          </div>
        </div>

        <!-- Service Card 5 -->
        <div
          class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 
                 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 
                 hover:shadow-2xl hover:shadow-[#85c5db]/20 flex flex-col h-full"
        >
          <div class="relative h-48 overflow-hidden">
            <img src="/images/coque.jpg" alt="Coques de clés" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">
              Vente Coques de Clés Voiture
            </h3>
            <p class="text-gray-300 leading-relaxed">
              Coques neuves de qualité pour protéger et redonner l'aspect d'origine à vos clés électroniques.
            </p>
            <div class="mt-auto pt-4">
              <button class="w-full bg-[#40688c] hover:bg-[#85c5db] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              <router-link to="/contact">Acheter une coque</router-link>  
              </button>
            </div>
          </div>
        </div>

        <!-- Service Card 6 -->
        <div
          class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 
                 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 
                 hover:shadow-2xl hover:shadow-[#85c5db]/20 flex flex-col h-full"
        >
          <div class="relative h-48 overflow-hidden">
            <img src="/images/OUVERTURE-PORTE-URGENCE.png" alt="Ouverture de porte" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">
              Ouverture de Porte Automobile
            </h3>
            <p class="text-gray-300 leading-relaxed">
              Intervention rapide pour l'ouverture de votre porte de voiture sans dégât, 
              si les clés sont restées à l'intérieur.
            </p>
            <div class="mt-auto pt-4">
              <button class="w-full bg-[#40688c] hover:bg-[#85c5db] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
               <router-link to="/contact">Demander un dépannage</router-link>  
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
