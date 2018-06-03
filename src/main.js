import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

import MainContent from '@/components/main_content/MainContent.vue'
import ProductGrain from '@/components/products/ProductGrain.vue'
import FodderCorn from '@/components/products/components/FodderCorn.vue'
import TortillaCorn from '@/components/products/components/TortillaCorn.vue'

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
