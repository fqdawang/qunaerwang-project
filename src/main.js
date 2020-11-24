import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router/index.js'
import './assets/styles/index.css'

// import './assets/styles/common.css'
// import './assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)



new Vue({
  render: h => h(App),
  router
}).$mount('#app')