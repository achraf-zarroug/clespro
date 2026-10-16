import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
    title: 'Serrurier Auto Metz : Reproduction, Réparation et Clé de Sécurité - CLES PRO', 
    description: 'Votre expert en reproduction et réparation de clés auto (Plip, Neiman, Kit de démarrage) et clés de sécurité. Service rapide à Metz et Woippy.'
  }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
       meta: {
        title: 'À Propos de CLES PRO : Serrurier, Expertise Clés Auto et Sécurité à Metz',
        description: 'Découvrez l\'équipe CLES PRO, votre spécialiste en reproduction et réparation de clés de voiture, moto et domicile depuis [Année]. Des professionnels à votre service à Metz.'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
       meta: {
        title: 'Services CLES PRO : Clés Auto, Plip, Barillet, Neiman et Reproduction',
        description: 'Découvrez nos services complets : diagnostic, réparation électronique, reproduction de clé, remplacement de Barillet, Neiman, Plip et Antivol. Votre serrurier à Metz.'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
       meta: {
        title: 'Contact CLES PRO - Atelier de Réparation de Clé Auto et Serrurier à Woippy (Metz)',
        description: 'Besoin d\'un serrurier pour une clé cassée, un plip défectueux ou un Neiman ? Contactez CLES PRO. Trouvez notre adresse à Woippy et notre numéro de téléphone.'
      }
    }
  ],
   scrollBehavior() {
  return { top: 0 }
}
})
// Mise à jour des meta tags pour chaque route
router.beforeEach((to, _ , next) => {
  document.title = to.meta.title as string || 'Votre Site'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description as string || '')
  }
  next()
})
export default router