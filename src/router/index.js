import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/login/loginPage'
import index from '@/components/index'
import pandect from '@/components/page/pandect'
import ProductList from '@/components/page/productList/productList'
import EpcProductList from '@/components/page/EpcProductList/EpcProductList'
import EpcSkuProductList from '@/components/page/SkuProductList/SkuProductList'
import TempSku from '@/components/page/TempSku/TempSku'

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
        }, {
          path: '/index/ProductList',
          name: 'ProductList',
          component: ProductList,
         /*  beforeEnter: (to, from, next) => {
            if(to.name === 'ProductList'){
              next('TempSku')
            }
            next()
          } */
        }, {
          path: '/index/EpcProductList',
          name: 'EpcProductList',
          component: EpcProductList
        }, {
          path: '/index/EpcSkuProductList',
          name: 'EpcSkuProductList',
          component: EpcSkuProductList
        }, {
          path: '/index/TempSku',
          name: 'TempSku',
          component: TempSku
        }
      ]
    }
  ]
})
