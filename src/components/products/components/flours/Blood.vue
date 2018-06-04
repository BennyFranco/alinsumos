<template>
<div class="container-fluid">
  <h3>Harina de sangre</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        Esta es un subproducto de la industria de carnes, obtenida por la desecación de la sangre,
          esta harina se caracteriza por el alto contenido de proteína, la cual es de baja degradación ruminal.
        </p>
        <p class="rounded textContent">
        La harina de sangre es un alimento proteico valioso, cuando se obtiene con bajas temperaturas contiene
          alto tenor de proteína no degradable en el rumen y buena degradación intestinal. De acuerdo con sus
          características nutricionales tiene mayor utilización en monogástricos y en rumiantes su mayor importancia
          está representada como un controlador de consumo en casos de suplementos ofrecidos a voluntad de los cuales
          se desea un consumo determinado.
        </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Harina de sangre" src="/images/products/flours/sangre.jpg" />
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
    name : 'Blood'
}
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
