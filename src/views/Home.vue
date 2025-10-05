<template>
<!-- Hero Section -->
<section class="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
  <!-- Image de fond -->
  <img 
    src="/images/maher2.jpg" 
    alt="Voiture sportive" 
    class="absolute inset-0 w-full h-full object-cover opacity-40" 
  />

  <!-- Overlay foncé pour lisibilité -->
  <div class="absolute inset-0 bg-black opacity-50"></div>

 <!-- Contenu -->
<!-- Hero Text Amélioré -->
<div class="relative z-10 text-center px-4">
  <!-- Titre principal -->
 <img 
    src="/cles.png" 
    alt="GMS57 - Groupe Motors Sport" 
    class="mx-auto"
  />

  <!-- Texte descriptif -->
  <p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300 animate-slideIn delay-200">
    <span class="block text-white font-semibold text-xl md:text-2xl mb-2"></span>
    <span class="block text-[#85c5db] font-extrabold text-lg md:text-xl drop-shadow-[0_0_1px_grey]">
      Votre Partenaire Expert en Sécurité et Mobilité</span>
  </p>

  <!-- Boutons CTA -->
  <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeIn delay-300 drop-shadow-[0_0_1px_grey]">
   <a 
      href="https://wa.me/216XXXXXXXX" 
      target="_blank" 
      class="inline-flex items-center bg-gradient-to-r from-[#40688c] to-[#85c5db]
       hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg drop-shadow-[0_0_1px_grey] font-semibold transition-colors shadow-lg"
    >
      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
      Contactez-nous
    </a>


  </div>
</div>

</section>

  <!-- Why Choose Us Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-black">Pourquoi</span> <span class="bg-gradient-to-r from-[#40688c] to-[#85c5db] bg-clip-text text-transparent drop-shadow-[0_0_1px_black]">Clés Pro</span> ?
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Serrurerie complète, production de clés de haute précision et programmation diagnostic avancée
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8 mb-16">
        <div class="text-center">
          <div class="text-4xl font-bold bg-gradient-to-r from-[#40688c] to-[#85c5db] bg-clip-text text-transparent mb-2 drop-shadow-[0_0_0.5px_black]">1500+</div>
          <p class="text-gray-600 drop-shadow-[0_0_0.1px_blue]">Véhicules Reprogrammés & Clés Codées</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-blue-500 mb-2 bg-gradient-to-r from-[#40688c] to-[#85c5db] bg-clip-text text-transparent drop-shadow-[0_0_0.5px_black]">12+</div>
          <p class="text-gray-600 drop-shadow-[0_0_0.1px_blue]">Années d'expérience</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-blue-500 mb-2 bg-gradient-to-r from-[#40688c] to-[#85c5db] bg-clip-text text-transparent drop-shadow-[0_0_0.5px_black]">98%</div>
          <p class="text-gray-600 drop-shadow-[0_0_0.1px_blue]">Clients satisfaits</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-blue-500 mb-2 bg-gradient-to-r from-[#40688c] to-[#85c5db] bg-clip-text text-transparent drop-shadow-[0_0_0.5px_black]">24h</div>
          <p class="text-gray-600 drop-shadow-[0_0_0.1px_blue]">Service dépannage</p>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg class="w-8 h-8 text-[#85c5db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-black drop-shadow-[0_0_0.1px_blue]">Équipement de Pointe</h3>
          <p class="text-gray-600 drop-shadow-[0_0_0.1px_blue]">équipé des dernières machines de coupe de clés et des outils de diagnostic
            les plus avancés pour reprogrammer les systèmes d'anti-démarrage complexes (immobilizer)</p>
        </div>

        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg class="w-8 h-8 text-[#85c5db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-black drop-shadow-[0_0_0.1px_blue]">Intervention Rapide</h3>
          <p class="text-gray-600 drop-shadow-[0_0_0.1px_blue]">Nous garantissons un service rapide et fiable pour minimiser 
            votre attente et rétablir votre sécurité immédiatement</p>
        </div>

        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg class="w-8 h-8 text-[#85c5db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-black drop-shadow-[0_0_0.1px_blue]">Prix Transparents</h3>
          <p class="text-gray-600 drop-shadow-[0_0_0.1px_blue]">Devis détaillé et prix compétitifs sans surprise ni frais cachés</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Preview -->
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white drop-shadow-[0_0_1px_blue]">Nos</span> <span class="bg-gradient-to-r from-[#40688c] to-[#85c5db] bg-clip-text text-transparent
           drop-shadow-[0_0_1px_black]">Services</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-[0_0_0.5px_blue]">
          Des services professionnels pour tous vos besoins automobiles
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative p-8">
            <div class="w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src="/images/neiman.jpg" 
                alt="Entretien" 
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
              Réparation et Adaptation de Neiman et Serrure
            </h3>
            <p class="text-gray-400 leading-relaxed">
              Nous réparons les Neiman bloqués et adaptons les serrures pour que votre clé d'origine fonctionne
               sur l'ensemble du véhicule
            </p>
          </div>
        </div>

        <!-- Carte 2 : Mécanique & Électronique -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative p-8">
            <!-- Image -->
            <div class="w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src="/images/RepCle.jpeg" 
                alt="Mécanique & Électronique" 
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <!-- Titre -->
            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
              Duplication de Clés Haute Précision
            </h3>
            <!-- Texte -->
            <p class="text-gray-400 leading-relaxed">
              Reproduction immédiate de clés simples, sécurisées (sur carte de propriété),
               et clés de voiture avec transpondeur et télécommande
            </p>
          </div>
        </div>

        <!-- Carte 3 : Diagnostic & Optimisation -->
        <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative p-8">
            <!-- Image -->
            <div class="w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src="/images/Programmation.jpg" 
                alt="Diagnostic & Optimisation" 
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <!-- Titre -->
            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
              Programmation & Diagnostic Auto
            </h3>
            <!-- Texte -->
            <p class="text-gray-400 leading-relaxed">
              Le spécialiste de la clé électronique. Codage de nouvelles clés après perte,
               réparation du système d'antidémarrage et diagnostic de pannes électroniques complexes
            </p>
          </div>
        </div>

      </div>

      <div class="text-center drop-shadow-[0_0_1px_grey]">
        <router-link to="/services" class="inline-flex items-center bg-gradient-to-r from-[#40688c] to-[#85c5db]  hover:bg-blue-600 text-white
         px-8 py-3 rounded-lg font-semibold transition-colors drop-shadow-[0_0_1px_grey]">
          Voir tous nos services
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>

 <!-- Call-to-Action Section -->
  <section class="py-20 bg-gradient-to-r from-[#40688c] to-[#85c5db]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_1px_black]">
        Ne Perdez Plus de Temps : Contactez Votre Expert Clés Pro
      </h2>
      <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto drop-shadow-[0_0_0.6px_black]">
        Un projet de sécurisation ? Une urgence pressante pour votre véhicule ou votre domicile ?
         Nos équipes sont mobilisées pour vous apporter une solution rapide et garantie
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center drop-shadow-[0_0_1px_grey]">
        <a href="https://wa.me/216XXXXXXXX" target="_blank" class="inline-flex items-center bg-white text-[#85c5db] drop-shadow-[0_0_1px_grey] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          WhatsApp
        </a>
        <router-link to="/contact" class="inline-flex items-center bg-transparent border-2 drop-shadow-[0_0_1px_grey] border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#85c5db] transition-colors">
          Devis gratuit
        </router-link>
      </div>
    </div>
  </section>
   <!-- Testimonials Section -->
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Témoignages</span> <span class="bg-gradient-to-r from-[#40688c] to-[#85c5db] bg-clip-text text-transparent">Clients</span>
        </h2>
        <p class="text-gray-400 text-lg">Ils Nous Ont Fait Confiance – Avis Vérifiés</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-black p-8 rounded-xl border border-gray-800">
          <div class="flex items-center mb-4">
            <div class="flex text-blue-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <p class="text-gray-300 mb-6 italic">"L'intervention a été faite en 30 minutes pour ouvrir ma porte claquée, sans aucun dégât.
             Professionnel, rapide et très honnête sur les tarifs. Je recommande sans hésiter pour la serrurerie."</p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              AM
            </div>
            <div>
              <p class="font-semibold text-white">Mme L. Dupont </p>
              <p class="text-gray-400 text-sm">PARIS</p>
            </div>
          </div>
        </div>

        <div class="bg-black p-8 rounded-xl border border-gray-800">
          <div class="flex items-center mb-4">
            <div class="flex text-blue-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <p class="text-gray-300 mb-6 italic">"Le seul à avoir réussi à reprogrammer la clé de mon Audi Q5 après un problème complexe sur l'immobilizer.
             Compétences en électronique automobile de très haut niveau. Merci Clés Pro !"</p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              SB
            </div>
            <div>
              <p class="font-semibold text-white">Sarah Ben Ali</p>
              <p class="text-gray-400 text-sm">METZ</p>
            </div>
          </div>
        </div>

        <div class="bg-black p-8 rounded-xl border border-gray-800">
          <div class="flex items-center mb-4">
            <div class="flex text-blue-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <p class="text-gray-300 mb-6 italic">"Excellent service de dépannage ! Intervention rapide et efficace. Une équipe vraiment fiable."</p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              KT
            </div>
            <div>
              <p class="font-semibold text-white">Karim Trabelsi</p>
              <p class="text-gray-400 text-sm">METZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</template>
<style>
@keyframes fadeIn { 0% {opacity:0} 100% {opacity:1} }
@keyframes slideIn { 0% {opacity:0; transform:translateY(20px);} 100% {opacity:1; transform:translateY(0);} }
.animate-fadeIn { animation: fadeIn 1s ease forwards; }
.animate-slideIn { animation: slideIn 1s ease forwards; }
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
</style>