import { createRouter, createWebHashHistory } from 'vue-router'
import share_reviews from '../views/share_reviews.vue'
import booking from '../views/booking.vue'

import booking_1 from '../views/booking_step_1.vue'

const routes = [
  {
    path: '/',
    name: 'share_reviews',
    component: share_reviews
  },
  {
    path: '/booking',
    name: 'booking',
    component: booking
  },
  {
    path: '/booking_1',
    name: 'booking_1',
    component: booking_1
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
