import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

import MainContent from '@/components/main_content/MainContent.vue'
import Directory from '@/components/Directory.vue'
import ProductGrain from '@/components/products/ProductGrain.vue'
import FodderCorn from '@/components/products/components/FodderCorn.vue'
import TortillaCorn from '@/components/products/components/TortillaCorn.vue'
import Wheat from '@/components/products/components/Wheat.vue'
import Sorghum from '@/components/products/components/Sorghum.vue'
import Cotton from '@/components/products/components/Cotton.vue'
import Safflower from '@/components/products/components/Safflower.vue'

Vue.use(VueRouter)
Vue.use(VueTypedJs)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

// =============== Routing =============== //

const routes = [
  { path: '/', component: MainContent },
  { path: '/directorio', component: Directory},
  {
    path: '/productos/granos',
    component: ProductGrain,
    children: [
      { path: 'maiz-forrajero', components: { grains: FodderCorn}, alias: '/productos/granos' },
      { path: 'maiz-tortillero', components: { grains: TortillaCorn} },
      { path: 'trigo', components: { grains: Wheat} },
      { path: 'sorgo', components: { grains: Sorghum} },
      { path: 'semilla-algodon', components: { grains: Cotton} },
      { path: 'cartamo', components: { grains: Safflower} }
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
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
