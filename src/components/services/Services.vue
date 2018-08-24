<template>
<div id="services-financial" class="container-fluid">
    <div class="page-header">
        <h1>Servicios</h1>
    </div>
    <div class="row">
        <div class="col-sm-5 col-md-3">
            <!-- <b-nav vertical class="w-25"> -->
            <b-nav vertical pills>
              <b-nav-item to="/servicios/parafinanciera">ParaFinanciera</b-nav-item>
              <b-nav-item to="/servicios/fondo-aseguramiento">Fondo de Aseguramiento</b-nav-item>
              <b-nav-item to="/servicios/servicio-espuela">Servicio de espuela</b-nav-item>
              <b-nav-item to="/servicios/servicio-cribado">Servicio de cribado</b-nav-item>
              <b-nav-item to="/servicios/almacenaje-y-conservacion">Almacenaje y conservación</b-nav-item>
              <b-nav-item to="/servicios/secado-de-grano">Secado de grano</b-nav-item>
              <b-nav-item to="/servicios/transporte-de-mercancia">Transporte de mercancía</b-nav-item>
              <b-nav-item to="/servicios/importacion-de-granos">Importación de granos</b-nav-item>
              <b-nav-item to="/servicios/pignoracion-de-granos">Pignoración de granos</b-nav-item>
              <b-nav-item to="/servicios/despepitadora-de-algodon">Despepitadora de algodón</b-nav-item>
            </b-nav>
        </div>
        <div class="col-sm-7 col-md-9">
           <router-view name="services"></router-view>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
#services-financial {
  min-height: 70vh;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #77a23d;
  color: #fff;
}
.nav-pills > li.active > a:focus {
  background-color: #77a23d;
}
.nav-pills > li.active > a:hover {
  background-color: #77a23d;
}
a {
  color: #77a23d;
}
</style>
