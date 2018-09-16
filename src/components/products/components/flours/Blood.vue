<template>
<div class="container-fluid appear">
  <h3>Harina de sangre</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent" ALIGN="justify">
        Esta es un subproducto de la industria de carnes, obtenida por la desecación de la sangre,
          esta harina se caracteriza por el alto contenido de proteína, la cual es de baja degradación ruminal.
        </p>
        <p class="rounded textContent" ALIGN="justify">
        La harina de sangre es un alimento proteico valioso, cuando se obtiene con bajas temperaturas contiene
          alto tenor de proteína no degradable en el rumen y buena degradación intestinal. De acuerdo con sus
          características nutricionales tiene mayor utilización en monogástricos y en rumiantes su mayor importancia
          está representada como un controlador de consumo en casos de suplementos ofrecidos a voluntad de los cuales
          se desea un consumo determinado.
        </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Harina de sangre" :src="base_url+'static/images/products/flours/sangre.jpg'" />
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: 'Blood',
  data () {
    return {
      base_url: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.textContent {
  margin-top: 2%;
  margin-bottom: 2%;
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
.imageContent {
  margin-top: 2%;
  margin-bottom: 2%;
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
.appear {
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 0.25s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 0.25s;
  box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.171);
  -moz-box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.171);
  -webkit-box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.171);
}
@media screen and (max-width: 768px) {
  .appear {
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 30px;
    box-shadow: 0px 0px 0px;
    -moz-box-shadow: 0px 0px 0px;
    -webkit-box-shadow: 0px 0px 0px;
  }
}
@media screen and (max-height: 600px) {
  .appear {
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 30px;
    box-shadow: 0px 0px 0px;
    -moz-box-shadow: 0px 0px 0px;
    -webkit-box-shadow: 0px 0px 0px;
  }
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  0% {
    filter: blur(50px);
  }
  25% {
    filter: blur(25px);
  }
  50% {
    filter: blur(12.5px);
  }
  100% {
    filter: blur(0px);
  }
}

/* Standard syntax */
@keyframes example {
  0% {
    filter: blur(50px);
  }
  25% {
    filter: blur(25px);
  }
  50% {
    filter: blur(12.5px);
  }
  100% {
    filter: blur(0px);
  }
}
</style>
