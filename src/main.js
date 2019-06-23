import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Router)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
