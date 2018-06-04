<template>
<div class="container-fluid">
  <h3>Maíz Forrajero</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Maíz Forrajero" src="/images/products/grains/maiz-forrajero.jpg" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        El maíz como parte de las mezclas para alimento destaca por su riqueza en hidratos de carbono proporcionados por su abundante almidón.
          Como consecuencia es un alimento muy saciable y muy completo, posee una proporción
          muy elevada de proteínas y aunque no todas son asimilables posee también porcentajes muy elevados de potasio hierro y fosforo.
        </p>
    </div>
  </div>
  <hr/>
</div>

</template>

<script>
export default {
  name: "FodderCorn"
};
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
