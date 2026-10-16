<template>
  <footer class="bg-[#05070c] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
    <!-- Subtle top glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>

    <div class="container mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        
        <!-- Brand & Description -->
        <div class="lg:col-span-1">
          <router-link to="/" class="inline-flex items-center gap-3 mb-5 group">
            <img 
              src="/cles.png" 
              alt="CLES PRO - Serrurerie Auto Metz" 
              class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </router-link>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            Votre spécialiste serrurier en reproduction et codage de clés automobiles, réparation Neiman, plip et clés de sécurité à Metz et Woippy.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Intervention 7j/7 - 24h</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-5 font-display flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-sky-500"></span>
            Navigation
          </h4>
          <ul class="space-y-3 text-sm text-slate-400 font-medium">
            <li>
              <router-link to="/" class="hover:text-sky-400 transition-colors flex items-center gap-2">
                <ChevronRight class="w-3.5 h-3.5 text-sky-500/50" />
                <span>Accueil</span>
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-sky-400 transition-colors flex items-center gap-2">
                <ChevronRight class="w-3.5 h-3.5 text-sky-500/50" />
                <span>Nos Prestations Auto</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-sky-400 transition-colors flex items-center gap-2">
                <ChevronRight class="w-3.5 h-3.5 text-sky-500/50" />
                <span>À Propos & Équipements</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-sky-400 transition-colors flex items-center gap-2">
                <ChevronRight class="w-3.5 h-3.5 text-sky-500/50" />
                <span>Contact & Localisation</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Direct -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-5 font-display flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-sky-500"></span>
            Coordonnées
          </h4>
          <div class="space-y-3.5 text-sm">
            <a 
              href="tel:0758563529" 
              class="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-colors">
                <Phone class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-slate-500">Téléphone / Dépannage</span>
                <span class="font-bold text-white group-hover:text-sky-400">07 58 56 35 29</span>
              </div>
            </a>

            <a 
              href="mailto:laghak@yahoo.fr" 
              class="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-colors">
                <Mail class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-slate-500">Email</span>
                <span class="font-medium text-slate-300 group-hover:text-sky-400">laghak@yahoo.fr</span>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/68iL1AK3g4Xwabuk8"
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-start gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-colors mt-0.5">
                <MapPin class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-slate-500">Atelier à Woippy (Metz)</span>
                <span class="font-medium text-slate-300 group-hover:text-sky-400">12 Rue de la Gare, 57140 Woippy</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Socials & Opening Hours -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-5 font-display flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-sky-500"></span>
            Horaires Atelier
          </h4>
          <div class="p-4 rounded-xl glass-panel space-y-2 text-xs mb-5">
            <div class="flex justify-between items-center text-slate-300">
              <span>Lun - Ven :</span>
              <span class="font-semibold text-white">09h00 - 19h00</span>
            </div>
            <div class="flex justify-between items-center text-slate-300">
              <span>Samedi :</span>
              <span class="font-semibold text-white">09h00 - 17h30</span>
            </div>
            <div class="flex justify-between items-center text-sky-400 font-semibold pt-1 border-t border-white/5">
              <span>Dimanche :</span>
              <span>Sur RDV / Urgences</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <a 
              href="https://www.facebook.com/profile.php?id=61573495541938" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              aria-label="Facebook Clés Pro"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            <a 
              href="https://www.snapchat.com/@karimlagha25?share_id=KFg3e2vYgnQ&locale=fr-FR" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-200"
              aria-label="Snapchat Clés Pro"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.001 2.002c-4.418 0-8 3.582-8 8 0 3.315 2.015 6.16 4.908 7.37-.156.417-.384.807-.674 1.157-.34.409-.813.682-1.32.79-.317.068-.535.343-.513.666.023.322.281.571.604.576 1.488.021 2.871-.537 3.896-1.56 1.026 1.023 2.408 1.581 3.896 1.56.323-.005.581-.254.604-.576.022-.323-.196-.598-.513-.666-.507-.108-.98-.381-1.32-.79-.29-.35-.518-.74-.674-1.157 2.893-1.21 4.908-4.055 4.908-7.37 0-4.418-3.582-8-8-8z"/></svg>
            </a>

            <a 
              href="https://wa.me/33758563529" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              aria-label="WhatsApp Clés Pro"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Copyright & Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 CLÉS PRO. Tous droits réservés. Reproduction de clés & serrurerie auto à Metz (57).</p>
        <div class="flex items-center gap-6">
          <router-link to="/services" class="hover:text-slate-300 transition-colors">Services</router-link>
          <router-link to="/about" class="hover:text-slate-300 transition-colors">À Propos</router-link>
          <router-link to="/contact" class="hover:text-slate-300 transition-colors">Mentions Légales & Contact</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-vue-next'
</script>
