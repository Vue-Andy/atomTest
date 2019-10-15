import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/login/loginPage'
import index from '@/components/index'
import pandect from '@/components/page/pandect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      name: 'loginPage',
      component: loginPage
    }, {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path: '/index/pandect',
          name: 'pandect',
          component: pandect
        }
      ]
    }
  ]
})
