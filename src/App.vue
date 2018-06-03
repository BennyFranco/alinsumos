<template>
  <div id="app">
    <!-- Menu Component -->
    <Menu/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
/*
#884F20: #884F20;
#FEC32B: #FEC32B;
#77A23D: #77A23D;
#77A23D-active: #5a7b2e;

*/

@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Lato');

body {
  font: 400 15px -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.8;
  color: #818181;
}

h2 {
  font-size: 24px;
  text-transform: uppercase;
  color: #303030;
  font-weight: 600;
  margin-bottom: 30px;
}

h4 {
  font-size: 19px;
  line-height: 1.375em;
  color: #303030;
  font-weight: 400;
  margin-bottom: 30px;
}

.parallax {
  /* The image used */
  background-image: url('../public/images/corn-header.jpg');
  /* Full height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container-fluid {
  padding: 60px 50px;
}

.bg-grey {
  background-color: #f6f6f6;
}

.logo-small {
  color: #884F20;
  font-size: 50px;
}

.logo {
  color: #884F20;
  font-size: 200px;
}

/*.thumbnail {
  padding: 0 0 15px 0;
  border: none;
  border-radius: 0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  // margin-bottom: 10px;
}*/

.carousel-control.right, .carousel-control.left {
  background-image: none;
  color: #884F20;
}

.carousel-indicators li {
  border-color: #884F20;
}

.carousel-indicators li.active {
  background-color: #884F20
}

.item h4 {
  font-size: 19px;
  line-height: 1.375em;
  font-weight: 400;
  font-style: italic;
  margin: 70px 0;
}

.item span {
  font-style: normal;
}

.panel {
  border: 1px solid #884F20;
  border-radius: 0 !important;
  transition: box-shadow 0.5s;
}

.panel:hover {
  box-shadow: 5px 0 40px rgba(0, 0, 0, .2);
}

.panel-footer .btn:hover {
  border: 1px solid #884F20;
  background-color: #fff !important;
  color: #884F20;
}

.panel-heading {
  color: #fff !important;
  background-color: #884F20 !important;
  padding: 25px;
  border-bottom: 1px solid transparent;
  border-radius: 0;
}

.panel-footer {
  background-color: white !important;
}

.panel-footer h3 {
  font-size: 32px;
}

.panel-footer h4 {
  color: #aaa;
  font-size: 14px;
}

.panel-footer .btn {
  margin: 15px 0;
  background-color: #884F20;
  color: #fff;
}

.slideanim {
  visibility: hidden;
}

.slide {
  animation-name: slide;
  -webkit-animation-name: slide;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  visibility: visible;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(70%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@-webkit-keyframes slide {
  0% {
    opacity: 0;
    -webkit-transform: translateY(70%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0%);
  }
}

@media screen and (max-width: 768px) {
  .col-sm-4 {
    text-align: center;
    margin: 25px 0;
  }

  .btn-lg {
    width: 100%;
    margin-bottom: 35px;
  }
}

@media screen and (max-width: 480px) {
  .logo {
    font-size: 150px;
  }
}
</style>
