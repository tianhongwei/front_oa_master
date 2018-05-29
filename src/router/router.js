import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '../components/HelloWorld'
import Map from '../components/baidumap'
import Login from '../pages/login'
import Navigation from '../pages/navigation'
import Home from '../pages/home'
import OrderList from '../pages/orderList'
import OrderDetail from '../pages/orderDetail'
import OrderMap from '../pages/orderMap'

Vue.use(Router)
Vue.use(VueResource)

Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Navigation/:noPermitInRole',
      name: 'Navigation',
      component: Navigation,
      children: [
        {
          path: 'Home/:noPermitInRole',
          name: 'Home',
          component: Home
        },
        {
          path: 'Hello',
          name: 'Hello',
          component: Hello
        },
        {
          path: 'Map',
          name: 'Map',
          component: Map
        },
        {
          path: 'OrderList',
          name: 'OrderList',
          component: OrderList
        },
        {
          path: 'OrderDetail',
          name: 'OrderDetail',
          component: OrderDetail
        },
        {
          path: 'OrderMap',
          name: 'OrderMap',
          component: OrderMap
        }
      ]
    }
  ]
})
