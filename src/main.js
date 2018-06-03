import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

import MainContent from '@/components/main_content/MainContent.vue'
import Directory from '@/components/Directory.vue'

//  ---------------------- Grains ----------------------  //

import ProductGrain from '@/components/products/ProductGrain.vue'
import FodderCorn from '@/components/products/components/grains/FodderCorn.vue'
import TortillaCorn from '@/components/products/components/grains/TortillaCorn.vue'
import Wheat from '@/components/products/components/grains/Wheat.vue'
import Sorghum from '@/components/products/components/grains/Sorghum.vue'
import Cotton from '@/components/products/components/grains/Cotton.vue'
import Safflower from '@/components/products/components/grains/Safflower.vue'

//  -------------------- End Grains --------------------  //

//  ---------------------- Pastas ----------------------  //

import ProductPasta from '@/components/products/ProductPasta.vue'
import Canola from '@/components/products/components/pastas/Canola.vue'
import DDGS from '@/components/products/components/pastas/DDGS.vue'
import Nut from '@/components/products/components/pastas/Nut.vue'
import Rice from '@/components/products/components/pastas/Rice.vue'
import SafflowerPasta from '@/components/products/components/pastas/Safflower.vue'
import Soy from '@/components/products/components/pastas/Soy.vue'
import WheatBran from '@/components/products/components/pastas/WheatBran.vue'

//  -------------------- End Grains --------------------  //

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
  },
  {
    path: '/productos/pastas',
    component: ProductPasta,
    children: [
      { path: 'soya', components: { pastas: Soy}, alias: '/productos/pastas' },
      { path: 'canola', components: { pastas: Canola} },
      { path: 'ddgs', components: { pastas: DDGS} },
      { path: 'cartamo', components: { pastas: SafflowerPasta} },
      { path: 'nuez', components: { pastas: Nut} },
      { path: 'arroz', components: { pastas: Rice} },
      { path: 'salvado-trigo', components: { pastas: WheatBran} }
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
