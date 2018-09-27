<template>
  <b-navbar toggleable="md" type="dark" variant="" fixed="top">
    <b-navbar-brand :href="base_url"><img :src="base_url+'static/images/imagotipo_web.png'" alt="Alinsumos"/></b-navbar-brand>

    <b-navbar-toggle @click.native="change" target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="this.$route.path == '/'" v-scroll-to="'#top'">Inicio</b-nav-item>
          <b-nav-item v-else :href="base_url">Inicio</b-nav-item>
          <b-nav-item v-if="this.$route.path == '/'" v-scroll-to="'#about'">Nosotros</b-nav-item>
          <b-nav-item v-else :href="base_url+'#about'">Nosotros</b-nav-item>
          <b-nav-item v-if="this.$route.path == '/'" v-scroll-to="'#products'">Productos</b-nav-item>
          <b-nav-item v-else :href="base_url+'#products'">Productos</b-nav-item>
          <b-nav-item v-if="this.$route.path == '/'" v-scroll-to="'#services'">Servicios</b-nav-item>
          <b-nav-item v-else :href="base_url+'#services'">Servicios</b-nav-item>
          <b-nav-item v-if="this.$route.path == '/'" v-scroll-to="'#contact'">Contáctanos</b-nav-item>
          <b-nav-item v-else :href="base_url+'#contact'">Contáctanos</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      scrollPosition: 0,
      base_url: process.env.BASE_URL,
      isToggleClicked: false
    }
  },
  methods: {
    getPositionScroll: function () {
      var agente = window.navigator.userAgent
      var navegadores = ['Chrome', 'Firefox', 'Safari', 'Opera', 'Trident', 'MSIE', 'Edge']
      for (var i in navegadores) {
        if (agente.indexOf(navegadores[i]) != -1) {
          if (navegadores[i].localeCompare('Edge')) {
            return window.pageYOffset
          } else {
            return window.scrollY
          }
        }
      }
    },
    updateScroll: function () {
      this.scrollPosition = this.getPositionScroll()
      if (this.$route.path == '/') {
        if (this.getPositionScroll() > 500) {
          if (
            document.getElementsByTagName('nav')[0].classList.contains('v-end')
          ) {
            document.getElementsByTagName('nav')[0].classList.remove('v-end')
          }
          document.getElementsByTagName('nav')[0].classList.add('v-start')
        } else if (!this.isToggleClicked) {
          if (
            document
              .getElementsByTagName('nav')[0]
              .classList.contains('v-start')
          ) {
            document.getElementsByTagName('nav')[0].classList.remove('v-start')
          }
          document.getElementsByTagName('nav')[0].classList.add('v-end')
        }
      }
    },
    menuMustbeTransparent () {
      if (this.$route.path != '/') {
        if (
          document.getElementsByTagName('nav')[0].classList.contains('v-end')
        ) {
          document.getElementsByTagName('nav')[0].classList.remove('v-end')
        }
        document.getElementsByTagName('nav')[0].classList.add('v-start')
      } else {
        if (this.getPositionScroll() > 500) {
          document.getElementsByTagName('nav')[0].classList.add('v-start')
        } else {
          document.getElementsByTagName('nav')[0].classList.add('v-end')
        }
      }
    },
    change () {
      if (this.getPositionScroll() <= 500 && this.$route.path == '/') {
        this.isToggleClicked = !this.isToggleClicked
        if (
          document.getElementsByTagName('nav')[0].classList.contains('v-end')
        ) {
          document.getElementsByTagName('nav')[0].classList.remove('v-end')
          document.getElementsByTagName('nav')[0].classList.add('v-start')
        } else {
          document.getElementsByTagName('nav')[0].classList.add('v-end')
          document.getElementsByTagName('nav')[0].classList.remove('v-start')
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
    window.addEventListener('load', this.menuMustbeTransparent)
    // window.addEventListener('nav_collapse', this.change)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ml-auto {
  padding-left: 15px;
}
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
  font-family: 'UbuntuBold';
  padding-left: 0px;
  padding-top: 0;
  padding-bottom: 0;
}
.navbar .navbar-brand {
  padding: 10px 35px 10px 5px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 128, 0, 0.733);
  background-color: rgb(255, 255, 255);
  -webkit-clip-path: polygon(100% 0, 80% 100%, 0 100%, 0 0);
  clip-path: polygon(100% 0, 80% 100%, 0 100%, 0 0);
}
.navbar li a {
  color: #fff !important;
  text-transform: uppercase;
  text-shadow: 2px 3px 4px #000;
  font-size: 14px;

}
.navbar li :hover,
.navbar li :active {
  background-color: rgba(255, 255, 255, 0.4) !important;
}

.v-start {
  animation: fadein 1s;
  background-color: #884f20;
}

.v-end {
  animation: fadeout 1s;
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
