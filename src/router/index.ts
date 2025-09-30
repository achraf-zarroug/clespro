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
        title: 'Page d acceuil - CLES PRO',
        description: 'page d acceuil de CLES PRO'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'à propos - CLES PRO',
        description: 'informations de CLES PRO'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: {
        title: 'Services - CLES PRO',
        description: 'liste des services de CLES PRO'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact - CLES PRO',
        description: 'page de contact de CLES PRO'
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