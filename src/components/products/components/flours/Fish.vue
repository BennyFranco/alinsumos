<template>
<div class="container-fluid appear">
  <h3>Harina de pescado</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Harina de pescado" :src="base_url+'static/images/products/flours/pescado.jpg'" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        Es la mejor fuente de energía concentrada para la alimentación de animales. Con un 70% a 80% del producto en
          forma de proteína y grasa digerible, su contenido de energía es notablemente mayor que muchas otras proteínas
          animales o vegetales ya que proporciona una fuente concentrada de proteína de alta calidad y una grasa rica en
          ácidos grasos omega-3 indispensable para el rápido crecimiento de los animales. Como alimento para aves, cerdos,
          rumiantes, vacas lecheras, ganado vacuno, ovino y el desarrollo de la piscicultura, disminuyendo notablemente
          los costos de producción industrial de estos animales por su rápido crecimiento, su mejor nutrición, la mejora
          de la fertilidad y la notoria disminución de posibilidades de enfermedades.
        </p>
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: 'Fish',
  data () {
    return {
      base_url: process.env.BASE_URL
    }
  }
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
.appear{
   -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.25s; /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 0.25s;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
    0%   {filter:blur(50px);}
    25%  {filter:blur(25px);}
    50%  {filter:blur(12.5px);}
    100% {filter:blur(0px);}

}

/* Standard syntax */
@keyframes example {
    0%   {filter:blur(50px);}
    25%  {filter:blur(25px);}
    50%  {filter:blur(12.5px);}
    100% {filter:blur(0px);}
}
</style>
