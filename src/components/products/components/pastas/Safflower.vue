<template>
<div class="container-fluid">
  <h3>Cártamo</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        Es el producto obtenido de la molienda de la semilla de cártamo después de extraer la mayor parte del aceite,
          es un producto sin olor y ligeramente tostado empleado como ingrediente en alimento balanceado.
        </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Cártamo" src="/images/products/pastas/cartamo.jpg" />
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: "SafflowerPasta"
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
