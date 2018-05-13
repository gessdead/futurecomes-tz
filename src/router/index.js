import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Breed from '@/components/Breed'
import Favorite from '@/components/Favorite'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/breed',
      name: 'Bread',
      component: Breed
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    }
  ]
})
