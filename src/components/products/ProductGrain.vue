<template>
<div id="productos-granos" class="container-fluid">
    <div class="page-header">
        <h1>Granos</h1>
    </div>
    <div class="row">
        <div class="col-sm-4 col-md-2">
            <!-- <b-nav vertical class="w-25"> -->
            <b-nav vertical pills>
              <b-nav-item to="/productos/granos/maiz-forrajero">Maíz forrajero</b-nav-item>
              <b-nav-item to="/productos/granos/maiz-tortillero">Maíz tortillero</b-nav-item>
              <b-nav-item>Trigo</b-nav-item>
              <b-nav-item>Sorgo</b-nav-item>
              <b-nav-item>Semilla de Algodón</b-nav-item>
              <b-nav-item>Cártamo</b-nav-item>
            </b-nav>
        </div>
        <div class="col-sm-8 col-md-10">
           <router-view name="grains"></router-view>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'ProductGrain'
}
</script>

<style scoped>

#productos-granos {
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
