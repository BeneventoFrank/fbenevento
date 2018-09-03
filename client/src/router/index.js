import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home/home'
import lambdaBlog from '@/views/lambdaSchool/blog'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/lambdaBlog',
      name: 'lambdaBlog',
      component: lambdaBlog
    },


  ]
})
