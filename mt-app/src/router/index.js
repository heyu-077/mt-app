import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/page/index'
import goodList from '@/page/goodList'
import changeCity from '@/page/changeCity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: 's/:name',
        name: 'goods',
        component: goodList
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
