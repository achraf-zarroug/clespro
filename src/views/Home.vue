<template>
<<<<<<< HEAD
  <div>
    <!-- HERO SECTION -->
    <section class="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <!-- Background Image with Modern Cinematic Overlays -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/maher2.jpg" 
          alt="Atelier Clés Pro serrurerie automobile Metz" 
          class="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow opacity-30" 
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#080b11]/80 via-[#080b11]/90 to-[#080b11]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.25),rgba(255,255,255,0))]"></div>
        <!-- Grid pattern overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10 py-16 lg:py-24">
        <div class="max-w-4xl mx-auto text-center">
          
          <!-- Urgent Live Pill -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-sky-950/50">
            <span class="flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Serrurier Automobile & Sécurité • Metz, Woippy & Environs</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
            Reproduction & Codage de <span class="gradient-heading">Clés de Voiture</span> en Lorraine
          </h1>

          <!-- Subtitle -->
          <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Perte totale de clés, double de clé avec télécommande, Neiman bloqué ou réparation de plip. Service immédiat, matériel de pointe et tarifs jusqu'à <span class="text-sky-400 font-semibold">60% moins chers qu'en concession</span>.
          </p>

          <!-- High-Converting CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a 
              href="tel:0758563529" 
              class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold text-base shadow-xl shadow-sky-600/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <PhoneCall class="w-5 h-5 text-white animate-bounce" />
              <span>Urgence : 07 58 56 35 29</span>
            </a>

            <a 
              href="https://wa.me/33758563529" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-panel border border-white/15 hover:border-emerald-500/50 text-white font-bold text-base hover:bg-emerald-950/30 hover:text-emerald-300 transition-all duration-300 shadow-lg"
            >
              <svg class="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Devis WhatsApp en 2 min</span>
            </a>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div class="glass-card p-4 rounded-xl text-center">
              <div class="text-2xl sm:text-3xl font-extrabold text-white font-display mb-1">1500+</div>
              <div class="text-xs text-slate-400 font-medium">Clés codées & programmées</div>
            </div>

            <div class="glass-card p-4 rounded-xl text-center">
              <div class="text-2xl sm:text-3xl font-extrabold text-sky-400 font-display mb-1">30 min</div>
              <div class="text-xs text-slate-400 font-medium">Délai moyen d'intervention</div>
            </div>

            <div class="glass-card p-4 rounded-xl text-center">
              <div class="text-2xl sm:text-3xl font-extrabold text-white font-display mb-1">12+ ans</div>
              <div class="text-xs text-slate-400 font-medium">Savoir-faire serrurier auto</div>
            </div>

            <div class="glass-card p-4 rounded-xl text-center">
              <div class="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display mb-1">100%</div>
              <div class="text-xs text-slate-400 font-medium">Garantie fonctionnement</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CAR BRANDS BANNER -->
    <section class="border-y border-white/10 bg-[#0b101c]/60 py-6 overflow-hidden">
      <div class="container mx-auto px-4">
        <p class="text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
          Toutes marques de véhicules prises en charge à 100%
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-semibold text-slate-300">
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Audi</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">BMW</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Mercedes-Benz</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Volkswagen</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Peugeot</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Renault</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Citroën</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Ford</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Toyota</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Fiat</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Seat / Skoda</span>
          <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">+ Toutes autres marques</span>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE SITUATION / PROBLEM SOLVER -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-sky-400 font-bold uppercase tracking-wider text-xs">Diagnostic Express</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 font-display">
            Quelle est votre situation ?
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Sélectionnez votre problème pour découvrir notre solution immédiate et le temps d'intervention estimé.
          </p>
        </div>

        <!-- Problem Selector Tabs -->
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl glass-panel mb-8">
            <button 
              v-for="(item, idx) in situations" 
              :key="idx"
              @click="activeSituation = idx"
              class="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center flex flex-col items-center justify-center gap-1.5"
              :class="activeSituation === idx ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'"
            >
              <component :is="item.icon" class="w-4 h-4" />
              <span>{{ item.title }}</span>
            </button>
          </div>

          <!-- Dynamic Active Situation Card -->
          <div class="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/20 shadow-2xl relative overflow-hidden">
            <div class="absolute -right-16 -top-16 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span class="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-semibold text-xs border border-sky-500/30 mb-3">
                  {{ situations[activeSituation].tag }}
                </span>
                <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
                  {{ situations[activeSituation].headline }}
                </h3>
                <p class="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {{ situations[activeSituation].description }}
                </p>

                <div class="space-y-2.5 mb-6">
                  <div 
                    v-for="(bullet, bIdx) in situations[activeSituation].bullets" 
                    :key="bIdx"
                    class="flex items-center gap-2 text-sm text-slate-200"
                  >
                    <CheckCircle2 class="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>{{ bullet }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <a 
                    :href="situations[activeSituation].ctaLink" 
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <span>{{ situations[activeSituation].ctaText }}</span>
                    <ArrowRight class="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div class="relative rounded-xl overflow-hidden aspect-video sm:aspect-auto sm:h-72 border border-white/10 shadow-lg">
                <img 
                  :src="situations[activeSituation].image" 
                  :alt="situations[activeSituation].headline"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div class="flex items-center gap-2 text-xs font-semibold text-sky-300">
                    <Clock class="w-4 h-4" />
                    <span>Temps moyen : {{ situations[activeSituation].time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES SHOWCASE -->
    <section class="py-20 bg-[#0a0f1b]/80 border-t border-white/5">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-sky-400 font-bold uppercase tracking-wider text-xs">Excellence & Maîtrise</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 font-display">
            Nos Prestations Spécialisées
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            De la reproduction au millimètre au codage d'antidémarrage sécurisé, profitez d'une expertise certifiée.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Card 1 -->
          <div class="glass-card rounded-2xl overflow-hidden flex flex-col group">
            <div class="relative h-52 overflow-hidden">
              <img 
                src="/images/ProgrammationService.jpg" 
                alt="Programmation et Codage de Clé Électronique" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent"></div>
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-md text-white text-xs font-bold">
                Le + Demandé
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-white mb-2 font-display group-hover:text-sky-400 transition-colors">
                Codage & Programmation Clé Auto
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                Appairage de transpondeurs, synchronisation de cartes mains-libres et plip centralisé pour toutes marques de voitures.
              </p>
              <div class="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-medium">Diagnostic inclus</span>
                <router-link 
                  to="/services" 
                  class="text-sky-400 hover:text-sky-300 font-bold text-sm inline-flex items-center gap-1 group/link"
                >
                  <span>Détails</span>
                  <ChevronRight class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </router-link>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="glass-card rounded-2xl overflow-hidden flex flex-col group">
            <div class="relative h-52 overflow-hidden">
              <img 
                src="/images/neiman.jpg" 
                alt="Réparation Neiman bloqué et serrure voiture" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent"></div>
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500/80 backdrop-blur-md text-white text-xs font-bold">
                Dépannage Rapide
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-white mb-2 font-display group-hover:text-sky-400 transition-colors">
                Réparation Neiman & Barillet
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                Clé bloquée dans le contacteur ou barillet forcé ? Nous débloquons, réparons et adaptons sans remplacer toutes les clés.
              </p>
              <div class="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-medium">Sans endommager l'auto</span>
                <router-link 
                  to="/services" 
                  class="text-sky-400 hover:text-sky-300 font-bold text-sm inline-flex items-center gap-1 group/link"
                >
                  <span>Détails</span>
                  <ChevronRight class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </router-link>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="glass-card rounded-2xl overflow-hidden flex flex-col group">
            <div class="relative h-52 overflow-hidden">
              <img 
                src="/images/RepCle.jpeg" 
                alt="Duplication de clés haute précision CNC" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent"></div>
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-white text-xs font-bold">
                Haute Précision CNC
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-white mb-2 font-display group-hover:text-sky-400 transition-colors">
                Taillage Laser & Clés de Sûreté
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                Reproduction numérique au dixième de millimètre de clés à vagues, micropoints, cartes de propriété et serrures de sécurité.
              </p>
              <div class="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-medium">Clés garanties</span>
                <router-link 
                  to="/services" 
                  class="text-sky-400 hover:text-sky-300 font-bold text-sm inline-flex items-center gap-1 group/link"
                >
                  <span>Détails</span>
                  <ChevronRight class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Services CTA -->
        <div class="text-center">
          <router-link 
            to="/services" 
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-panel border border-sky-500/30 hover:border-sky-400 text-sky-300 hover:text-white font-bold text-sm transition-all duration-300 hover:bg-sky-500/10"
          >
            <span>Découvrir l'ensemble de nos prestations</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- BENTO GRID: POURQUOI CHOISIR CLÉS PRO -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-sky-400 font-bold uppercase tracking-wider text-xs">Nos Avantages Concurrentiels</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 font-display">
            Pourquoi Confier Votre Clé à <span class="gradient-heading">Clés Pro</span> ?
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            La sérénité d'un travail soigné, sans délai d'attente de concessionnaire et sans mauvaise surprise.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- Bento 1 -->
          <div class="glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6 border border-sky-500/30">
                <Cpu class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white mb-3 font-display">Équipement de Diagnostic OBD Officiel</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                Nous intervenons directement sur le boîtier BSI, UCH ou ECU de votre véhicule avec des logiciels constructeurs fiables et sécurisés.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-sky-400 font-semibold">
              <CheckCircle2 class="w-4 h-4" />
              <span>Zéro risque pour votre électronique</span>
            </div>
          </div>

          <!-- Bento 2 -->
          <div class="glass-card p-8 rounded-2xl flex flex-col justify-between md:col-span-2 bg-gradient-to-br from-sky-950/30 via-slate-900/40 to-slate-900/60 border-sky-500/30">
            <div>
              <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
                <Zap class="w-6 h-6" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 font-display">Prise en Charge Express : Repartez avec Votre Clé</h3>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Alors qu'un concessionnaire officiel demande souvent entre 10 et 21 jours pour commander et coder une clé, nous effectuons la duplication et la synchronisation immédiatement à l'atelier à Woippy ou en urgence.
              </p>
            </div>
            <div class="mt-8 grid sm:grid-cols-2 gap-4">
              <div class="p-3 rounded-lg bg-black/40 border border-white/5">
                <span class="text-xs text-slate-400 block">Concessionnaire classique :</span>
                <span class="text-sm font-semibold text-rose-400">1 à 3 semaines d'attente</span>
              </div>
              <div class="p-3 rounded-lg bg-sky-950/40 border border-sky-500/30">
                <span class="text-xs text-sky-300 block">Clés Pro Metz :</span>
                <span class="text-sm font-bold text-emerald-400">Prêt en 30 minutes</span>
              </div>
            </div>
          </div>

          <!-- Bento 3 -->
          <div class="glass-card p-8 rounded-2xl flex flex-col justify-between md:col-span-2">
            <div>
              <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6 border border-amber-500/30">
                <BadgeEuro class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white mb-3 font-display">Tarifs Transparents & Économies Réelles</h3>
              <p class="text-slate-400 text-sm leading-relaxed max-w-xl">
                Devis immédiat et clair avant toute manipulation. Aucune mauvaise surprise sur la facture. Économisez jusqu'à la moitié du prix demandé par les garages traditionnels.
              </p>
            </div>
            <div class="mt-6 flex items-center gap-4 text-xs text-slate-300">
              <span class="px-2.5 py-1 rounded bg-white/5 border border-white/5 font-semibold">Devis gratuit</span>
              <span class="px-2.5 py-1 rounded bg-white/5 border border-white/5 font-semibold">Sans frais cachés</span>
              <span class="px-2.5 py-1 rounded bg-white/5 border border-white/5 font-semibold">Paiement sécurisé</span>
            </div>
          </div>

          <!-- Bento 4 -->
          <div class="glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/30">
                <ShieldCheck class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white mb-3 font-display">Garantie Totale & Test Direct</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                Toutes nos clés sont testées sur votre véhicule (antidémarrage, ouverture centralisée, coffre) avant remise en main propre.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-purple-300 font-semibold">
              <CheckCircle2 class="w-4 h-4" />
              <span>Garantie pièces & main d'œuvre</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS WORKFLOW -->
    <section class="py-20 bg-[#080d17] border-y border-white/10">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-sky-400 font-bold uppercase tracking-wider text-xs">Simplicité & Efficacité</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 font-display">
            Comment se déroule votre intervention ?
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Un processus rapide en 4 étapes pour vous remettre sur la route en toute tranquillité.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div class="glass-panel p-6 rounded-xl border border-white/10 relative">
            <span class="text-3xl font-extrabold text-sky-500/40 font-display block mb-3">01</span>
            <h4 class="text-base font-bold text-white mb-2 font-display">Contact & Diagnostic</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Vous nous indiquez la marque, le modèle et l'année de votre voiture par téléphone ou WhatsApp.
            </p>
          </div>

          <div class="glass-panel p-6 rounded-xl border border-white/10 relative">
            <span class="text-3xl font-extrabold text-sky-500/40 font-display block mb-3">02</span>
            <h4 class="text-base font-bold text-white mb-2 font-display">Taillage Numérique CNC</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Découpe au laser ultra-précise de l'insert métallique selon les cotes d'origine constructeur.
            </p>
          </div>

          <div class="glass-panel p-6 rounded-xl border border-white/10 relative">
            <span class="text-3xl font-extrabold text-sky-500/40 font-display block mb-3">03</span>
            <h4 class="text-base font-bold text-white mb-2 font-display">Programmation Électronique</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Connexion à l'ordinateur de bord (OBD) pour encoder la puce antidémarrage et appairer la télécommande.
            </p>
          </div>

          <div class="glass-panel p-6 rounded-xl border border-white/10 relative">
            <span class="text-3xl font-extrabold text-sky-500/40 font-display block mb-3">04</span>
            <h4 class="text-base font-bold text-white mb-2 font-display">Essai Réel & Validation</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Vérification complète du démarrage et des commandes à distance. Vous repartez immédiatement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- VERIFIED CUSTOMER REVIEWS -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="flex items-center justify-center gap-1 text-amber-400 mb-3">
            <Star v-for="i in 5" :key="i" class="w-5 h-5 fill-current" />
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            Avis Clients Vérifiés à Metz & Environs
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Découvrez les retours d'expérience de conducteurs dépannés rapidement.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- Review 1 -->
          <div class="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1 text-amber-400 mb-4">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
              </div>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                « Intervention en 30 minutes chrono pour ouvrir ma porte claquée sans aucun dégât. Professionnel, rapide et très honnête sur les tarifs. Je recommande sans hésiter pour toute la serrurerie auto. »
              </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-white/10">
              <div class="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-sm border border-sky-500/30">
                LD
              </div>
              <div>
                <h4 class="text-sm font-bold text-white">Mme L. Dupont</h4>
                <span class="text-xs text-slate-400">Metz & Environs • Porte claquée</span>
              </div>
            </div>
          </div>

          <!-- Review 2 -->
          <div class="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border-sky-500/30">
            <div>
              <div class="flex items-center gap-1 text-amber-400 mb-4">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
              </div>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                « Le seul serrurier auto à avoir réussi à reprogrammer la clé de mon Audi Q5 après un problème complexe sur l'immobilizer. Compétences en électronique automobile de très haut niveau. »
              </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-white/10">
              <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
                SB
              </div>
              <div>
                <h4 class="text-sm font-bold text-white">Sarah Ben Ali</h4>
                <span class="text-xs text-slate-400">Metz • Audi Q5 (Antidémarrage)</span>
              </div>
            </div>
          </div>

          <!-- Review 3 -->
          <div class="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1 text-amber-400 mb-4">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
              </div>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                « Neiman bloqué sur ma Peugeot un samedi après-midi. Déblocage et réadaptation de clé faits rapidement à un tarif très raisonnable. Équipe sérieuse et accueillante. »
              </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-white/10">
              <div class="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-sm border border-purple-500/30">
                KT
              </div>
              <div>
                <h4 class="text-sm font-bold text-white">Karim Trabelsi</h4>
                <span class="text-xs text-slate-400">Woippy • Réparation Neiman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION (Accordion) -->
    <section class="py-20 bg-[#090d16] border-t border-white/10">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-sky-400 font-bold uppercase tracking-wider text-xs">Questions Fréquentes</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 font-display">
            Tout ce que vous devez savoir
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Vous avez une question sur la reproduction de votre clé ? Voici les réponses les plus courantes.
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="(faq, fIdx) in faqs" 
            :key="fIdx"
            class="glass-panel rounded-xl overflow-hidden border border-white/10 transition-colors"
          >
            <button 
              @click="faq.open = !faq.open"
              class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-sky-300 transition-colors"
            >
              <span>{{ faq.q }}</span>
              <ChevronDown 
                class="w-5 h-5 text-sky-400 transition-transform duration-300 flex-shrink-0"
                :class="faq.open ? 'rotate-180' : ''"
              />
            </button>
            <div 
              v-show="faq.open" 
              class="px-6 pb-4 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CALL TO ACTION BANNER -->
    <section class="py-20 relative overflow-hidden bg-gradient-to-br from-sky-950/80 via-slate-900 to-[#080b11]">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(14,165,233,0.2),rgba(0,0,0,0))]"></div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
        <span class="inline-block px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold text-xs border border-sky-500/30 mb-4">
          Intervention 7j/7 à Metz et Woippy
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-display tracking-tight">
          Besoin d'une Nouvelle Clé ou d'un Dépannage Immédiat ?
        </h2>
        <p class="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Contactez notre technicien dès maintenant pour recevoir un devis clair et précis en moins de 2 minutes.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:0758563529" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-sky-600/30 transition-transform active:scale-95"
          >
            <Phone class="w-5 h-5" />
            <span>Appeler : 07 58 56 35 29</span>
          </a>

          <a 
            href="https://wa.me/33758563529" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-panel border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40 font-bold text-base shadow-lg transition-colors"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>Message WhatsApp direct</span>
          </a>

          <router-link 
            to="/contact" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel border border-white/10 hover:border-white/30 text-white font-bold text-base transition-colors"
          >
            <MapPin class="w-4 h-4 text-sky-400" />
            <span>Venir à l'atelier</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  PhoneCall, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  Cpu, 
  Zap, 
  ShieldCheck, 
  BadgeEuro, 
  Star, 
  MapPin, 
  Key, 
  Car, 
  Wrench, 
  Lock 
} from 'lucide-vue-next'

const activeSituation = ref(0)

const situations = [
  {
    icon: Car,
    title: 'Perte Totale',
    tag: 'Urgence Sans Double',
    headline: 'Toutes les clés de votre véhicule sont perdues ?',
    description: 'Pas besoin de remorquer la voiture en concession ! Nous venons sur place ou intervenons rapidement pour décoder la serrure, tailler une nouvelle clé et programmer le transpondeur.',
    bullets: [
      'Ouverture de porte sans aucune rayure ni dégât',
      'Taillage de la lame mécanique sur mesure',
      'Effacement des anciennes clés perdues du système pour votre sécurité',
      'Codage immédiat de la nouvelle clé avec télécommande'
    ],
    time: '45 à 60 minutes',
    image: '/images/Antidémarrage.png',
    ctaText: 'Dépannage Perte Totale',
    ctaLink: 'tel:0758563529'
  },
  {
    icon: Key,
    title: 'Double de Clé',
    tag: 'Prévention & Confort',
    headline: 'Besoin d\'un double de clé avec centralisation ?',
    description: 'Ne restez pas avec une seule clé au risque de tout perdre. Nous reproduisons vos clés avec transpondeur ID46, crypto ou carte de démarrage pour tous modèles récents.',
    bullets: [
      'Clé complète taillée et prête à l\'emploi',
      'Télécommande centralisée haute qualité',
      'Jusqu\'à 60% moins cher qu\'en concession officielle',
      'Réalisation rapide sur place à l\'atelier'
    ],
    time: '20 à 30 minutes',
    image: '/images/RepCle.jpeg',
    ctaText: 'Commander un Double',
    ctaLink: 'https://wa.me/33758563529'
  },
  {
    icon: Wrench,
    title: 'Neiman Bloqué',
    tag: 'Serrurerie Mécanique',
    headline: 'Votre clé ne tourne plus dans le Neiman ?',
    description: 'Le Neiman ou la serrure de porte est grippé ou cassé ? Nous procédons à la réparation et à l\'adaptation des paillettes pour conserver votre clé d\'origine.',
    bullets: [
      'Évite le remplacement coûteux de toutes les serrures',
      'Conservation de votre clé et télécommande actuelle',
      'Remplacement des goupilles et pièces d\'usure défectueuses',
      'Intervention propre et garantie'
    ],
    time: '1h environ',
    image: '/images/neiman.jpg',
    ctaText: 'Réparer mon Neiman',
    ctaLink: 'tel:0758563529'
  },
  {
    icon: Lock,
    title: 'Clé Sécurité',
    tag: 'Habitat & Entreprise',
    headline: 'Clés de sécurité pour domicile ou locaux pro',
    description: 'Reproduction de clés de haute sécurité (Vachette, Bricard, Iseo, Fichet, Pollux) simples ou sur numéro avec carte de propriété.',
    bullets: [
      'Reproduction fidèle haute précision',
      'Prise en charge des cylindres européens et serrures blindées',
      'Service rapide pour particuliers et gestionnaires immobiliers'
    ],
    time: 'Immédiat selon modèle',
    image: '/images/atelier1.jpg',
    ctaText: 'Demander un devis serrurerie',
    ctaLink: 'https://wa.me/33758563529'
  }
]

const faqs = ref([
  {
    q: 'Puis-je refaire une clé si j\'ai perdu toutes les clés de ma voiture ?',
    a: 'Oui, tout à fait ! C\'est l\'une de nos spécialités. Grâce à notre équipement de décodage mécanique et nos valises de programmation OBD, nous pouvons recréer et reprogrammer une clé fonctionnelle même en cas de perte totale, sans passer par la concession.',
    open: true
  },
  {
    q: 'Quels documents dois-je fournir pour refaire une clé de voiture ?',
    a: 'Pour des raisons strictes de sécurité et de conformité légale, vous devez impérativement présenter la carte grise du véhicule à votre nom ainsi qu\'une pièce d\'identité en cours de validité.',
    open: false
  },
  {
    q: 'Combien de temps faut-il pour obtenir ma nouvelle clé ?',
    a: 'Pour un simple double de clé ou une reprogrammation de plip, l\'intervention prend généralement entre 15 et 30 minutes à notre atelier à Woippy.',
    open: false
  },
  {
    q: 'Pourquoi passer par Clés Pro plutôt que par mon concessionnaire ?',
    a: 'Chez un concessionnaire officiel, vous devez souvent patienter entre 1 et 3 semaines pour recevoir la clé depuis l\'usine et payer le prix fort. Chez Clés Pro, l\'intervention est immédiate, garantie et coûte jusqu\'à 50 à 60% moins cher.',
    open: false
  },
  {
    q: 'Intervenez-vous en urgence en dehors des horaires d\'atelier ?',
    a: 'Oui, nous disposons d\'un service dépannage d\'urgence 7j/7 pour les portes claquées, les clés enfermées dans le coffre ou les pertes totales sur Metz et dans un rayon de 30 km.',
    open: false
  }
])
</script>
=======
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
<h1 class="   font-extrabold mb-4 animate-slideIn">
        CLÉS PRO : Votre Serrurier Spécialiste de la Clé Auto et de Sécurité à Metz
    </h1>
  <!-- Texte descriptif -->
  <p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300 animate-slideIn delay-200">
    <span class="block text-white font-semibold text-xl md:text-2xl mb-2"></span>
    <span class="block text-[#85c5db] font-extrabold text-lg md:text-xl drop-shadow-[0_0_1px_grey]">
      Votre Partenaire Expert en Sécurité et Mobilité</span>
  </p>
  <!-- Boutons CTA -->
  <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeIn delay-300 drop-shadow-[0_0_1px_grey]">
   <a 
      href="https://wa.me/33758563529" 
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
        <a href="https://wa.me/33758563529" target="_blank" class="inline-flex items-center bg-white text-[#85c5db] drop-shadow-[0_0_1px_grey] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
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
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
