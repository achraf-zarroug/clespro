<template>
<<<<<<< HEAD
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
=======
  <footer class="bg-background border-t border-border py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div class="md:col-span-2">
          <div class="mb-6">
            <img 
              src="/cles.png" 
              alt="CLES PRO - Serrurerie, production de clés et programmation diagnostic" 
              class="w-48 h-auto"
            />
          </div>
          <p class="text-muted-foreground leading-relaxed max-w-md">
            Tous travaux de serrurerie, production de clés et programmation diagnostic. 
            Votre partenaire de confiance pour l'excellence automobile.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">Contact</h4>
          <div class="space-y-4">
            <a 
              href="tel:0758563529" 
              class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.036 3.11a1 1 0 01-.272 1.06l-2.2 2.2a16.001 16.001 0 006.586 6.586l2.2-2.2a1 1 0 011.06-.272l3.11 1.036a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span class="font-medium">07 58 56 35 29</span>
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
            </a>

            <a 
              href="mailto:laghak@yahoo.fr" 
<<<<<<< HEAD
              class="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-colors">
                <Mail class="w-4 h-4" />
              </div>
              <div>
                <span class="block text-xs text-slate-500">Email</span>
                <span class="font-medium text-slate-300 group-hover:text-sky-400">laghak@yahoo.fr</span>
              </div>
=======
              class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="font-medium">laghak@yahoo.fr</span>
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
            </a>

            <a
              href="https://maps.app.goo.gl/68iL1AK3g4Xwabuk8"
              target="_blank" 
<<<<<<< HEAD
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
=======
              rel="noopener"
              class="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mt-0.5">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1 1 0 01-1.414 0l-4.243-4.243a8 8 0 1110.607 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span class="font-medium">12 RUE DE LA GARE<br>57140 WOIPPY</span>
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
            </a>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">Suivez-nous</h4>
          <div class="space-y-3">
            <a 
              href="https://www.facebook.com/profile.php?id=61573495541938" 
              class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </div>
              <span class="font-medium">Facebook</span>
            </a>
            
            <a 
              href="#" 
              class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
              </div>
              <span class="font-medium">Instagram</span>
            </a>
            
            <a 
              href="https://www.snapchat.com/@karimlagha25?share_id=KFg3e2vYgnQ&locale=fr-FR" 
              class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
               <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512">
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M496.9 366.6c-3.4-9.2-9.8-14.1-17.1-18.2-1.4-.8-2.6-1.5-3.7-1.9-2.2-1.1-4.4-2.2-6.6-3.4-22.8-12.1-40.6-27.3-53-45.4a102.9 102.9 0 0 1 -9.1-16.1c-1.1-3-1-4.7-.2-6.3a10.2 10.2 0 0 1 2.9-3c3.9-2.6 8-5.2 10.7-7 4.9-3.2 8.8-5.7 11.2-7.4 9.4-6.5 15.9-13.5 20-21.3a42.4 42.4 0 0 0 2.1-35.2c-6.2-16.3-21.6-26.4-40.3-26.4a55.5 55.5 0 0 0 -11.7 1.2c-1 .2-2.1 .5-3.1 .7 .2-11.2-.1-22.9-1.1-34.5-3.5-40.8-17.8-62.1-32.7-79.2A130.2 130.2 0 0 0 332.1 36.4C309.5 23.5 283.9 17 256 17S202.6 23.5 180 36.4a129.7 129.7 0 0 0 -33.3 26.8c-14.9 17-29.2 38.4-32.7 79.2-1 11.6-1.2 23.4-1.1 34.5-1-.3-2-.5-3.1-.7a55.5 55.5 0 0 0 -11.7-1.2c-18.7 0-34.1 10.1-40.3 26.4a42.4 42.4 0 0 0 2 35.2c4.1 7.8 10.7 14.7 20 21.3 2.5 1.7 6.4 4.2 11.2 7.4 2.6 1.7 6.5 4.2 10.3 6.7a11.1 11.1 0 0 1 3.3 3.3c.8 1.6 .8 3.4-.4 6.6a102 102 0 0 1 -8.9 15.8c-12.1 17.7-29.4 32.6-51.4 44.6C32.4 348.6 20.2 352.8 15.1 366.7c-3.9 10.5-1.3 22.5 8.5 32.6a49.1 49.1 0 0 0 12.4 9.4 134.3 134.3 0 0 0 30.3 12.1 20 20 0 0 1 6.1 2.7c3.6 3.1 3.1 7.9 7.8 14.8a34.5 34.5 0 0 0 9 9.1c10 6.9 21.3 7.4 33.2 7.8 10.8 .4 23 .9 36.9 5.5 5.8 1.9 11.8 5.6 18.7 9.9C194.8 481 217.7 495 256 495s61.3-14.1 78.1-24.4c6.9-4.2 12.9-7.9 18.5-9.8 13.9-4.6 26.2-5.1 36.9-5.5 11.9-.5 23.2-.9 33.2-7.8a34.6 34.6 0 0 0 10.2-11.2c3.4-5.8 3.3-9.9 6.6-12.8a19 19 0 0 1 5.8-2.6A134.9 134.9 0 0 0 476 408.7a48.3 48.3 0 0 0 13-10.2l.1-.1C498.4 388.5 500.7 376.9 496.9 366.6zm-34 18.3c-20.7 11.5-34.5 10.2-45.3 17.1-9.1 5.9-3.7 18.5-10.3 23.1-8.1 5.6-32.2-.4-63.2 9.9-25.6 8.5-42 32.8-88 32.8s-62-24.3-88.1-32.9c-31-10.3-55.1-4.2-63.2-9.9-6.6-4.6-1.2-17.2-10.3-23.1-10.7-6.9-24.5-5.7-45.3-17.1-13.2-7.3-5.7-11.8-1.3-13.9 75.1-36.4 87.1-92.6 87.7-96.7 .6-5 1.4-9-4.2-14.1-5.4-5-29.2-19.7-35.8-24.3-10.9-7.6-15.7-15.3-12.2-24.6 2.5-6.5 8.5-8.9 14.9-8.9a27.6 27.6 0 0 1 6 .7c12 2.6 23.7 8.6 30.4 10.2a10.7 10.7 0 0 0 2.5 .3c3.6 0 4.9-1.8 4.6-5.9-.8-13.1-2.6-38.7-.6-62.6 2.8-32.9 13.4-49.2 26-63.6 6.1-6.9 34.5-37 88.9-37s82.9 29.9 88.9 36.8c12.6 14.4 23.2 30.7 26 63.6 2.1 23.9 .3 49.5-.6 62.6-.3 4.3 1 5.9 4.6 5.9a10.6 10.6 0 0 0 2.5-.3c6.7-1.6 18.4-7.6 30.4-10.2a27.6 27.6 0 0 1 6-.7c6.4 0 12.4 2.5 14.9 8.9 3.5 9.4-1.2 17-12.2 24.6-6.6 4.6-30.4 19.3-35.8 24.3-5.6 5.1-4.8 9.1-4.2 14.1 .5 4.2 12.5 60.4 87.7 96.7C468.6 373 476.1 377.5 462.9 384.9z" />
                </svg>
              </span>
              </div>
              <span class="font-medium">Snapchat</span>
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-border pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-muted-foreground text-sm">
            &copy; 2025 CLES PRO - Serrurerie et production de clés. Tous droits réservés.
          </p>
         
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
        </div>
      </div>
    </div>
  </footer>
</template>

<<<<<<< HEAD
<script setup lang="ts">
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-vue-next'
=======
<script lang="ts">
export default {
  name: 'FooterShow',
  setup() {
    return {}
  }
}
>>>>>>> 4bd727a53b9521e15b01da79e4fb309c0f1e6ee6
</script>
