import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'


import Home from './components/Home'
import Order from './components/Order'
import Customer from './components/Customer'
import Mine from './components/Mine'


import './assets/css/common.css'
import './assets/css/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter)


var router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/order", component: Order },
    { path: "/customer", component: Customer },
    { path: "/mine", component: Mine },
    { path: "/", redirect: "/home" }, 
  ],
  mode: "history", 
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')