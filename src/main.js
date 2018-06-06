import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import VueScrollTo from 'vue-scrollto'

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

//  ---------------------- Flours ----------------------  //

import ProductFlour from '@/components/products/ProductFlour.vue'
import Blood from '@/components/products/components/flours/Blood.vue'
import Fish from '@/components/products/components/flours/Fish.vue'
import MeatBone from '@/components/products/components/flours/MeatBone.vue'
import WheatFlour from '@/components/products/components/flours/Wheat.vue'

//  -------------------- End Flours --------------------  //

//  ---------------------- Oils ----------------------  //

import ProductOil from '@/components/products/ProductOil.vue'
import Animal from '@/components/products/components/oils/Animal.vue'
import Vegetal from '@/components/products/components/oils/Vegetal.vue'

//  -------------------- End Oils --------------------  //

import Services from '@/components/services/Services.vue'
import ForFinancial from '@/components/services/components/ForFinancial.vue'
import CottonGins from '@/components/services/components/CottonGins.vue'
import PledgeGrains from '@/components/services/components/PledgeGrains.vue'
import DryingGrains from '@/components/services/components/DryingGrains.vue'
import Trucking from '@/components/services/components/Trucking.vue'
import ImportGrains from '@/components/services/components/ImportGrains.vue'
import StorageConservation from '@/components/services/components/StorageConservation.vue'

Vue.use(VueRouter)
Vue.use(VueTypedJs)
Vue.use(BootstrapVue)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

// =============== Routing =============== //

const routes = [
  { path: '/', component: MainContent },
  { path: '/directorio', component: Directory },
  {
    path: '/productos/granos',
    component: ProductGrain,
    children: [
      { path: 'maiz-forrajero', components: { grains: FodderCorn }, alias: '/productos/granos' },
      { path: 'maiz-tortillero', components: { grains: TortillaCorn } },
      { path: 'trigo', components: { grains: Wheat } },
      { path: 'sorgo', components: { grains: Sorghum } },
      { path: 'semilla-algodon', components: { grains: Cotton } },
      { path: 'cartamo', components: { grains: Safflower } }
    ]
  },
  {
    path: '/productos/pastas',
    component: ProductPasta,
    children: [
      { path: 'soya', components: { pastas: Soy }, alias: '/productos/pastas' },
      { path: 'canola', components: { pastas: Canola } },
      { path: 'ddgs', components: { pastas: DDGS } },
      { path: 'cartamo', components: { pastas: SafflowerPasta } },
      { path: 'nuez', components: { pastas: Nut } },
      { path: 'arroz', components: { pastas: Rice } },
      { path: 'salvado-trigo', components: { pastas: WheatBran } }
    ]
  },
  {
    path: '/productos/harinas',
    component: ProductFlour,
    children: [
      { path: 'carne-hueso', components: { flours: MeatBone }, alias: '/productos/harinas' },
      { path: 'sangre', components: { flours: Blood } },
      { path: 'pescado', components: { flours: Fish } },
      { path: 'trigo', components: { flours: WheatFlour } }
    ]
  },
  {
    path: '/productos/grasas',
    component: ProductOil,
    children: [
      { path: 'animal', components: { oils: Animal }, alias: '/productos/grasas' },
      { path: 'vegetal', components: { oils: Vegetal } }
    ]
  },
  {
    path: '/servicios',
    component: Services,
    children: [
      { path: 'parafinanciera', components: { services: ForFinancial }, alias: '/servicios' },
      { path: 'despepitadora-de-algodon', components: { services: CottonGins } },
      { path: 'pignoracion-de-granos', components: { services: PledgeGrains } },
      { path: 'secado-de-grano', components: { services: DryingGrains } },
      { path: 'transporte-de-mercancia', components: { services: Trucking } },
      { path: 'importacion-de-granos', components: { services: ImportGrains } },
      { path: 'almacenaje-y-conservacion', components: { services: StorageConservation } }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
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
