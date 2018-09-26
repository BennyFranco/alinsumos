<template>
<div id="mainContent">

  <!-- Header component -->
  <Header/>
  <!-- End header component -->

  <div id="about" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-8">
        <h2>¿QUIENES SOMOS?</h2><br>
        <h4 class="principal-text" ALIGN="justify">
          ALINSUMOS, una empresa mexicana dedicada al sector agroindustrial,
          fundada a principios del año de 1996 en el Sur de Sonora. Nace por el compromiso de sus fundadores, con el desarrollo de la economía primaria en la región, fijándose una VISION clara y concisa, el crecimiento benéfico de productores y consumidores, trabajando en conjunto para su desarrollo, siendo nuestras principales actividades el dar financiamiento a pequeños, medianos y grandes productores, acopio y comercialización de granos, semillas, pastas grasas y aceites, así como la conservación y almacenaje seguro de los mismos.
      </h4>
      </div>
      <div class="col-xs-6 col-md-4 hidden-xs">
        <img src="static/images/spike.jpg" alt="Nature" class="responsive-img">
      </div>
    </div>
  </div>

<!-- Main info component -->
  <MainInfo/>
<!-- End main info -->

<!-- Products component -->
  <MainProducts/>
<!-- Products info -->

<!-- Services component -->
<MainServices/>
<!-- Services -->

<!-- Contact component -->
  <Contact/>
<!-- Contact -->

<!-- Map component -->
  <Map/>
<!-- Map -->

</div>
</template>

<script>
import Header from '../Header.vue'
import MainInfo from './components/MainInfo.vue'
import MainProducts from './components/MainProducts.vue'
import MainServices from './components/MainServices.vue'
import Map from './components/Map.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'MainContent',
  components: {
    Header,
    MainInfo,
    MainProducts,
    MainServices,
    Map,
    Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.responsive-img {
    /*filter:hue-rotate(40deg);*/
    width: 100%;
    height: auto;
}
.principal-text {
  color: #565657 !important;
  text-shadow: 0px 0px 0px rgba(0, 0, 0);
}
</style>
