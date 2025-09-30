<template>
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
