<template>
  <div class="py-16 sm:py-20 relative overflow-hidden">
    <!-- Ambient light effects -->
    <div class="absolute top-10 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold text-xs border border-sky-500/30 mb-4">
          Artisan Serrurier Automobile à Woippy (57)
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-display">
          À Propos de <span class="gradient-heading">Clés Pro</span>
        </h1>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          L'alliance unique entre l'artisanat de précision et l'ingénierie électronique pour sécuriser et réparer vos véhicules.
        </p>
      </div>

      <!-- Story & Vision Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <span class="text-sky-400 font-bold uppercase tracking-wider text-xs">Notre ADN</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white mt-1 mb-6 font-display">
            L'Excellence Technique au Service de Votre Mobilité
          </h2>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            Née d'une véritable passion pour l'électronique automobile et la serrurerie de sûreté, <strong class="text-white">Clés Pro</strong> répond à une problématique bien réelle : la complexité sans cesse grandissante des systèmes d'antidémarrage et des clés à puce crypto.
          </p>
          <p class="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            Là où les concessionnaires imposent des délais de plusieurs semaines et des tarifs exorbitants, nous apportons une alternative immédiate, locale et garantie, grâce à un laboratoire mobile et un atelier ultra-équipé à Woippy.
          </p>

          <!-- Key Commitments -->
          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 rounded-xl glass-panel">
              <div class="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-500/30">
                <Cpu class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white mb-1">Technologie de Coupe & Codage CNC</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Investissement permanent dans les dernières machines laser numériques pour une précision chirurgicale.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-xl glass-panel">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                <ShieldCheck class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white mb-1">Pièces Certifiées & Garantie Travail</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Coques et transpondeurs répondant aux normes des constructeurs européens et mondiaux.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-xl glass-panel">
              <div class="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/30">
                <Scale class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white mb-1">Transparence Tarifaire Intégrale</h3>
                <p class="text-xs text-slate-400 leading-relaxed">Devis gratuit et chiffré avant toute opération. Aucune surprise sur la facture finale.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/images/maher1.jpg" 
              alt="Atelier Clés Pro moderne et équipé à Woippy"
              class="w-full h-[460px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel backdrop-blur-md border border-white/10">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                <span class="text-xs font-semibold text-white">Atelier ouvert au 12 Rue de la Gare, Woippy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Equipment & Facilities Section -->
      <div class="mb-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-sky-400 font-bold uppercase tracking-wider text-xs">Laboratoire & Équipements</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4 font-display">
            Des Outils de Niveau Constructeur
          </h2>
          <p class="text-slate-400 text-sm">
            Notre atelier dispose d'installations adaptées aux systèmes les plus pointus du marché.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="glass-card rounded-2xl overflow-hidden p-6 flex flex-col">
            <div class="relative h-48 rounded-xl overflow-hidden mb-5">
              <img 
                src="/images/diagno.jpg" 
                alt="Diagnostic OBD et programmation calculateur"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 font-display">Valises de Diagnostic OBD & Décodeurs Avancés</h3>
            <p class="text-slate-300 text-sm leading-relaxed mb-4">
              Capables de communiquer en profondeur avec les boîtiers BSI, UCH, CAS, FEM, BDC ou EZS de toutes générations afin de reprogrammer les calculateurs en toute sécurité.
            </p>
            <div class="mt-auto text-xs text-sky-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 class="w-4 h-4" />
              <span>Compatible 99% des véhicules du marché</span>
            </div>
          </div>

          <div class="glass-card rounded-2xl overflow-hidden p-6 flex flex-col">
            <div class="relative h-48 rounded-xl overflow-hidden mb-5">
              <img 
                src="/images/atelier1.jpg" 
                alt="Machines de taillage numérique CNC haute précision"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 font-display">Tailleuses Numériques Laser Automatisées</h3>
            <p class="text-slate-300 text-sm leading-relaxed mb-4">
              Pour reproduire les lames métalliques même usées ou cassées grâce au décodage optique et mécanique aux cotes exactes du fabricant.
            </p>
            <div class="mt-auto text-xs text-sky-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 class="w-4 h-4" />
              <span>Précision micrométrique certifiée</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Banner -->
      <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-sky-500/20 relative overflow-hidden mb-20">
        <div class="text-center mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white font-display">
            Clés Pro en Quelques <span class="gradient-heading">Chiffres Clés</span>
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <div class="text-3xl sm:text-4xl font-extrabold text-sky-400 font-display mb-1">12+</div>
            <p class="text-xs sm:text-sm text-slate-300 font-medium">Années de maîtrise métier</p>
          </div>

          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-display mb-1">1500+</div>
            <p class="text-xs sm:text-sm text-slate-300 font-medium">Clés codées avec succès</p>
          </div>

          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <div class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display mb-1">98%</div>
            <p class="text-xs sm:text-sm text-slate-300 font-medium">Satisfaction client vérifiée</p>
          </div>

          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <div class="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display mb-1">7j/7</div>
            <p class="text-xs sm:text-sm text-slate-300 font-medium">Service dépannage urgence</p>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="text-center max-w-xl mx-auto">
        <h3 class="text-2xl font-bold text-white mb-4 font-display">Une Question ou un Projet ?</h3>
        <p class="text-slate-400 text-sm mb-6">
          Passez directement nous rencontrer à l'atelier de Woippy ou appelez-nous pour un diagnostic instantané.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link 
            to="/contact" 
            class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg transition-transform active:scale-95"
          >
            Nous contacter
          </router-link>
          <a 
            href="tel:0758563529" 
            class="px-8 py-3.5 rounded-xl glass-panel text-sky-300 hover:text-white font-bold text-sm border border-sky-500/30 transition-colors"
          >
            07 58 56 35 29
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Cpu, ShieldCheck, Scale, CheckCircle2 } from 'lucide-vue-next'
</script>

