<template>
<div class="container-fluid">
  <h3>Cártamo</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">Originariamente, el cártamo fue cultivado por sus flores, las cuales fueron utilizadas para hacer pigmentos rojos y amarillos para la coloración de prendas de vestir y alimentos. Actualmente, este cultivo provee de aceite, jabón, y harina de extracción rica en proteínas y fibra. Su aceite se usa también para la prevención de enfermedades cardiovasculares por lo que es muy apreciado en los restaurantes de alta cocina gracias a estas propiedades.
      </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Cártamo" src="/images/products/grains/cartamo.jpg" />
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
    name : 'Safflower'
}
</script>

<style scoped>
.textContent {
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
.imageContent {
  align-self: center;
}
img {
   height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
hr {
  margin-bottom: 2%;
}
</style>
