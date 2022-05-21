import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
import Contact from './../views/Contact.vue'
import FeatureBuy from './../views/FeatureBuy.vue'
import CheckOrder from './../views/CheckOrder.vue'
import RegisterPage from './../views/RegisterPage.vue'
import LoginPage from './../views/LoginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/buy',
      name: 'buy',
      component: FeatureBuy
    },
    {
      path: '/check-order',
      name: 'checkOrder',
      component: CheckOrder
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'buy' && !localStorage.getItem('access_token')) next({ name: 'login' })
  else next()
})

export default router
