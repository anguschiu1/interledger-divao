import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SetFunding from '../components/SetFunding.vue'
import SetGoals from '../components/SetGoals.vue'
import ConfirmFunding from '../components/ConfirmFunding.vue'
import ShowTransactions from '../views/ShowTransactions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/txns',
      name: 'show transactions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShowTransactions.vue')
    },
    {
      path: '/set_funding',
      name: 'set funding',
      component: SetFunding
    },
    {
      path: '/set_goals',
      name: 'set goals',
      component: SetGoals
    },
    {
      path: '/confirm_funding',
      name: 'confirm funding',
      props: (route) => ({ amount: route.query.v }),
      component: ConfirmFunding
    },
    {
      path: '/show_txns',
      name: 'show transactions',
      component: ShowTransactions
    }
  ]
})

export default router
