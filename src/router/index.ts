import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import IntroPage from '../views/IntroPage.vue'
import ManageFarmPage from '../views/ManageFarmPage.vue'
import FarmDetailsPage from '../views/FarmDetailsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: IntroPage
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
    ]
  },
  {
    path: '/manage-farm',
    component: ManageFarmPage
  },
  {
    path: '/farm-details',
    component: FarmDetailsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
