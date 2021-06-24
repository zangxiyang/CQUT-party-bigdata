import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/party/:id',
    name: 'Party',
    component: () => import('../views/party/index.vue')
  },
  {
    path: '/org',
    name: 'Org',
    component: () => import('../views/org/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
