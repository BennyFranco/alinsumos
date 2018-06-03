import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

import MainContent from '@/components/main_content/MainContent.vue'
import ProductGrain from '@/components/products/ProductGrain.vue'
import FodderCorn from '@/components/products/components/FodderCorn.vue'
import TortillaCorn from '@/components/products/components/TortillaCorn.vue'

import Services from '@/components/services/Services.vue'
import ForFinancial from '@/components/services/components/ForFinancial.vue'
import CottonGins from '@/components/services/components/CottonGins.vue'
import PledgeGrains from '@/components/services/components/PledgeGrains.vue'

Vue.use(VueRouter)
Vue.use(VueTypedJs)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

// =============== Routing =============== //

const routes = [
  { path: '/', component: MainContent },
  {
    path: '/productos/granos',
    component: ProductGrain,
    children: [
      { path: 'maiz-forrajero', components: { grains: FodderCorn}, alias: '/productos/granos' },
      { path: 'maiz-tortillero', components: { grains: TortillaCorn} }
    ]
  },
  {
    path: '/servicios',
    component: Services,
    children: [
      { path: 'parafinanciera', components: { services: ForFinancial}, alias: '/servicios' },
      { path: 'despepitadora-algodon', components: { services: CottonGins} },
      { path: 'pignoracion-granos', components: { services: PledgeGrains} }
    ]
  }
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
