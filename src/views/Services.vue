<template>
  <div class="py-20 bg-white">&nbsp;
    <div class="container mx-auto px-4">&nbsp;
      <h1 class="text-5xl font-bold text-black text-center mb-16">Nos <span class="text-[#40688c]">Services</span> </h1>
      
      <!-- Modern card grid with images instead of emojis -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Service Card 1: Entretien & Révision -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#85c5db]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/ProgrammationService.jpg" 
                 alt="Entretien & Révision" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">Programmation et Codage de Clés Auto</h3>
            <p class="text-gray-300 leading-relaxed">Spécialistes de la clé électronique, nous proposons le codage de transpondeurs et la synchronisation de télécommandes pour toutes marques de véhicules,
               y compris haut de gamme.</p>
          </div>
        </div>

        <!-- Service Card 2: Mécanique & Electronique -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#85c5db]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Antidémarrage.png" 
                 alt="Mécanique & Electronique" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db]
             transition-colors">Diagnostic et Réparation d'Antidémarrage (Immobilizer)</h3>
            <p class="text-gray-300 leading-relaxed">Si votre véhicule refuse de démarrer (problème d'immobilisation),
               nous réalisons un diagnostic électronique avancé pour identifier et réparer les pannes du système antidémarrage,
                du calculateur (ECU) ou du boîtier BSI/UCH.
            </p>
          </div>
        </div>

        <!-- Service Card 3: Diagnostic & Optimisation moteur -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#85c5db]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/Duplication.jpg" 
                 alt="Diagnostic & Optimisation moteur" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">Duplication de Clés Simples et Sécurisées</h3>
            <p class="text-gray-300 leading-relaxed">Reproduction ultra-précise de tous types de clés de voiture (clés pliables, clés à carte, etc.) et de clés domestiques (cylindres classiques, 
              clés de sécurité avec carte de propriété).</p>
          </div>
        </div>

        <!-- Service Card 4: Carrosserie & Pneumatique -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#85c5db]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/SerrurerieService.jpg" 
                 alt="Carrosserie & Pneumatique" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">Dépannage Serrurerie Urgent 24h/7j</h3>
            <p class="text-gray-300 leading-relaxed">
              Intervention rapide et efficace pour toutes les urgences : ouverture de porte claquée ou verrouillée, réparation après effraction ou perte de clés.
               Nous intervenons 24 heures sur 24, 7 jours sur 7.
            </p>
          </div>
        </div>

        <!-- Service Card 5: Électricité auto -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#85c5db]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/images.jpg" 
                 alt="Électricité auto" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">Installation et Remplacement de Serrurerie</h3>
            <p class="text-gray-300 leading-relaxed">nstallation de serrures de haute sécurité certifiées A2P (1, 2 ou 3 étoiles), de verrous multipoints, de cylindres européens et de barres de sécurité. 
              Remplacement de serrures endommagées ou obsolètes.</p>
          </div>
        </div>

        <!-- Service Card 6: Dépannage -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#85c5db] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#85c5db]/20">
          <div class="relative h-48 overflow-hidden">
            <img src="/images/blindage.jpg" 
                 alt="Dépannage" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#85c5db] transition-colors">Sécurisation et Blindage de Porte</h3>
            <p class="text-gray-300 leading-relaxed"> Augmentez la résistance de vos accès. Nous réalisons le blindage de porte (recouvrement métallique) et l'installation de portes blindées complètes (blocs-portes).</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

