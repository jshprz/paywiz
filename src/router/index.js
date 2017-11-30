import Vue from 'vue'
import Router from 'vue-router'
import waiting from '@/components/waiting-component'
import receive from '@/components/receiveAt-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'waiting',
      component: waiting
    },
    {
      path: '/receiveAt',
      name: 'receive',
      component: receive
    }
  ],
  mode: 'history'
})
