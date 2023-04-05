import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import SetFunding from './components/SetFunding.vue'
import SetGoals from './components/SetGoals.vue'
import ConfirmFunding from './components/ConfirmFunding.vue'
import ShowTransactions from './components/ShowTransactions.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/txns',
      name: 'show.transactions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./components/ShowTransactions.vue')
    },
    {
      path: '/set.funding',
      name: 'set.funding',
      component: SetFunding
    },
    {
      path: '/set.goals',
      name: 'set.goals',
      component: SetGoals
    },
    {
      path: '/confirm.funding/:amount',
      name: 'confirm.funding',
      component: ConfirmFunding,
      props: true
    },
    {
      path: '/show.txns/:accountId/:paymentType',
      name: 'show.txns',
      component: ShowTransactions,
      props: true
    }
  ]
})

export default router
