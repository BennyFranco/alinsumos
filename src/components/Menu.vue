<template>
  <b-navbar toggleable="md" type="" variant="" fixed="top">
    <b-navbar-brand href="/"><img src="images/imagotipo_web.svg" alt="Alinsumos"/></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item href="#top">Inicio</b-nav-item>
          <b-nav-item href="#about">Nosotros</b-nav-item>
          <b-nav-item href="#products">Productos</b-nav-item>
          <b-nav-item href="#services">Servicios</b-nav-item>
          <b-nav-item href="#contact">Contáctanos</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Menu',
  data (){
    return {
      scrollPosition: 0
    }
  },
  methods: {
    updateScroll:function() {
      this.scrollPosition = window.scrollY
      if(window.scrollY > 500) {
          if(document.getElementsByTagName("nav")[0].classList.contains("v-end"))
            document.getElementsByTagName("nav")[0].classList.remove("v-end");
          document.getElementsByTagName("nav")[0].classList.add("v-start");
      } else {
          if(document.getElementsByTagName("nav")[0].classList.contains("v-start"))
            document.getElementsByTagName("nav")[0].classList.remove("v-start");
          document.getElementsByTagName("nav")[0].classList.add("v-end");
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-small {
  color: #884f20;
  font-size: 50px;
}
.logo {
  color: #884f20;
  font-size: 200px;
}
.navbar {
  margin-bottom: 0;
  background-color: transparent;
  z-index: 9999;
  border: 0;
  font-size: 12px !important;
  line-height: 1.42857 !important;
  letter-spacing: 4px;
  border-radius: 0;
  font-weight: 700;
  padding-top: 0;
  padding-bottom: 0;
}
.navbar .navbar-brand {
  color: #fff !important;
  padding: 10px 0;
}
.navbar li a {
  color: #fff !important;
  text-transform: uppercase;
  text-shadow: 2px 3px 4px #000;
  font-size: 14px;
}
.navbar li :hover, .navbar li :active {
  background-color: rgba(255, 255, 255, 0.4) !important;
}
.navbar-default .navbar-toggle {
  border-color: transparent;
  color: #fff !important;
}

.v-start {
    animation: fadein 1.0s;
    background-color: #884f20;
}

.v-end {
    animation: fadeout 1.0s;
    background-color: transparent;
}

@keyframes fadein {
    0% {
        background-color: transparent;
    }
    100% {
        background-color: #884f20;
    }
}

@keyframes fadeout {
    0% {
        background-color: #884f20;
    }
    100% {
         background-color: transparent;
    }
}
</style>
