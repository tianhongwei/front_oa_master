import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '../components/HelloWorld'
import Login from '../pages/login'

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
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
