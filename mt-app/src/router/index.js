import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/page/index'
import goodList from '@/page/goodList'
import changeCity from '@/page/changeCity'
import login from '@/page/login'
import register from '@/page/register'

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
      name: 'blank',
      component: blankPage,
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
