<template>
<div id="mainContent">
  <Header/>
  <div id="about" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-8">
        <h2>Acerca de Alinsumos</h2><br>
        <h4>
          ALINSUMOS, es una empresa joven, que nace hace muy pocos años en el Noroeste del país, con un entrañable cariño por nuestro
          México, comprometidos con su desarrollo en la economía primaria, directamente en la agroindustria, tenemos muy claro
          en nuestra VISION, que debemos crear crecimiento para beneficio de productores y consumidores, coadyuvando en su
          desarrollo y así sumarnos a la solución de la cadena alimenticia, especialmente Granos.
        </h4>
        <br/>
        <p>Somos un equipo joven, emprendedor, preparado, profesional, actualizado y con visión de largo plazo. En cada contacto
          de negocios con productores, encontrarán en nosotros a un equipo confiable para fincar relaciones de largo plazo,
          en el concepto de GANAR-GANAR. Estamos seguros que el compromiso, y la búsqueda de soluciones que apoyen al productor,
          la encontrarán siempre en nuestro equipo de trabajo. Las utilidades que se obtienen de este ejercicio emprendedor,
          se re-invierten en infraestructura y nuevos servicios para que todos crezcamos y pongamos nuestro granito de arena
          al desarrollo de este nuestro México, país rico por su gente y sus recursos. Tenga por seguro que en ALINSUMOS, somos
          confiables, comprometidos y muy trabajadores.

          <br/> Muy Cordialmente
        </p>
        <br>
      </div>
      <div class="col-xs-6 col-md-4 hidden-xs">
        <div class="embed-responsive embed-responsive-4by3">
          <video class="embed-responsive-item" controls>
            <source src="video/director-message.mp4" type="video/mp4"> Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
  <Map></Map>
</div>
</template>

<script>
import Header from '../Header.vue'
import MainInfo from './components/MainInfo.vue'
import Menu from '../Menu.vue'
import Map from './components/Map.vue'
export default {
  name: 'MainContent',
  components: {
    Header,
    Menu,
    MainInfo,
    Map
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.charmain-video {
  width: 320px;
  height: 250px;
}
</style>