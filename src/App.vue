<template>
  <div id="app">
    <!-- Menu Component -->
    <Menu/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/fa-svg-with-js.css'
import '@/assets/js/fontawesome-all.min.js'
import '@/assets/css/main.css'

import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
.parallax {
  /* The image used */
  background-image: url('assets/corn-header.jpg');
  /* Full height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
