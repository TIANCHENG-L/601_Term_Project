import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const routes = [
    {
        path: '/HomePage',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/MusicAndGuitar',
        name: 'MusicAndGuitar',
        component: () => import('../components/MusicAndGuitar.vue')
    },
    {
        path: '/MyHobby',
        name: 'MyHobby',
        component: () => import('../components/MyHobby.vue')
    },
    {
      path: '/PhotoGallery',
      name: 'PhotoGallery',
      component: () => import('../components/PhotoGallery.vue')
    },
    {
        path: '/MyResume',
        name: 'MyResume',
        component: () => import('../components/MyResume.vue')
    },
    {
        path: '/ContactForm',
        name: 'ContactForm',
        component: () => import('../components/ContactForm.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router