import { createRouter, createWebHashHistory } from 'vue-router'
import share_reviews from '../views/share_reviews.vue'
import booking from '../views/booking.vue'

import booking_1 from '../views/booking_step_1.vue'

import star_rating from '../views/star_rating.vue'
import comment from '../views/comment.vue'
import goolge_comment from '../views/goolge_comment.vue'

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
  },
  {
    path: '/star_rating',
    name: 'star_rating',
    component: star_rating
  },
  {
    path: '/comment',
    name: 'comment',
    component: comment
  },
  {
    path: '/goolge_comment',
    name: 'goolge_comment',
    component: goolge_comment
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
