<template>
<div id="services-financial" class="container-fluid">
    <div class="page-header">
        <h1>Servicios</h1>
    </div>
    <div class="row">
        <div class="col-sm-4 col-md-2">
            <!-- <b-nav vertical class="w-25"> -->
            <b-nav vertical pills>
              <b-nav-item to="/servicios/parafinanciera">ParaFinanciera</b-nav-item>
              <b-nav-item to="/servicios/despepitadora-algodon">Despepitadora de algodón</b-nav-item>
              <b-nav-item to="/servicios/pignoracion-granos">Secado de granos</b-nav-item>
              <b-nav-item to="/servicios/secado-grano">Servicios</b-nav-item>
              <b-nav-item to="/servicios/transporte-mercancia">Transporte de mercancía</b-nav-item>
              <b-nav-item to="/servicios/importacion-granos">Importación de granos</b-nav-item>
              <b-nav-item to="/servicios/almacenaje-conservacion">Almacenaje y conservación</b-nav-item>
            </b-nav>
        </div>
        <div class="col-sm-8 col-md-10">
           <router-view name="services"></router-view>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Services"
}
</script>

<style scoped>
#services-financial {
  min-height: 70vh;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
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
