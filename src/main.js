import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

// import { get } from "./assets/request/index.js";


import Home from './components/Home'
import Order from './components/Order'
import Customer from './components/Customer'
import Mine from './components/Mine'

// test
import Test1 from './components/test1.vue'


import './assets/css/common.css'
import './assets/css/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

// Vue.prototype.axios = {
//   get
// };

const routes = [
  { path: "/home", component: Home },
  {
    path: "/order",
    component: Order,
    children: [
      { path: "test", component: Test1 },
    ]
  },
  { path: "/customer", component: Customer },
  { path: "/mine", component: Mine },
  { path: "/", redirect: "/home" },
]

var router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')