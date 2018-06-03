import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

import MainContent from '@/components/main_content/MainContent.vue'
import ProductGrain from '@/components/products/ProductGrain.vue'


Vue.use(VueRouter)
Vue.use(VueTypedJs)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

// =============== Routing =============== //

const routes = [
  { path: '/', component: MainContent },
  { path: '/granos', component: ProductGrain }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// =============== End Routing =============== //

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
