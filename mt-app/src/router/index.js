import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/page/index'
import goodList from '@/page/goodList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: 's/:name',
        name: 'goods',
        component: goodList
      }],
      redirect: '/index'
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
