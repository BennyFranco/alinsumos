<template>
<div class="container-fluid">
  <h3>DDGs (Grano seco destilado de maíz)</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="DDGs (Grano seco destilado de maíz)" src="/images/products/pastas/DDGs.jpg" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        Sub-producto del grano (de maíz), El ddg es una materia prima ampliamente utilizada por su valor energético,
          obtenido mediante el secado de los residuos del proceso de obtención de etanol como biocombustible, contiene levaduras,
          nutrientes solubles y las partículas del grano más finas, es un producto que presenta ventajas para alimento de ganado
          destinado a la producción de carne y leche.
        </p>
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: "DDGS"
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
