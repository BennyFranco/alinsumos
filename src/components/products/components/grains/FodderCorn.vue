<template>
<div class="container-fluid appear">
  <h3>Maíz Forrajero</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Maíz Forrajero" :src="base_url+'static/images/products/grains/maiz-forrajero.jpg'" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent" ALIGN="justify">
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
  name: 'FodderCorn',
  data () {
    return {
      base_url: process.env.BASE_URL
    }
  }
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
.appear {
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 0.25s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 0.25s;
  box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.171);
    -moz-box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.171);
    -webkit-box-shadow: -5px -5px 50px rgba(0, 0, 0, 0.171);
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
</style>
