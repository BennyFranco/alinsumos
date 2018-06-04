<template>
<div class="container-fluid">
  <h3>Salvado de Trigo</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Salvado de Trigo" src="/images/products/pastas/salvado.jpg" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        Subproducto de la molienda de trigo para la harina. Muy apetecible, bajo en calcio, tiende a ser más alto en fósforo
          que otros subproductos. Tiene 96% de la energía de la cebada y 91% del nivel de energía del maíz.
        </p>
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: "WheatBran"
};
</script>

<style scoped>
.textContent{
  margin-top: 2%;
  margin-bottom: 2%;
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
.imageContent{
margin-top: 2%;
margin-bottom: 2%;
align-self: center;
}
img{
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
hr{
  margin-bottom: 2%;
}
</style>
