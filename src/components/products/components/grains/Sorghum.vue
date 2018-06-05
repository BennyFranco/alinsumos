<template>
<div class="container-fluid appear">
  <h3>Sorgo</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        El sorgo forrajero es un cultivo que se adapta bien a zonas en
          las cuales el maíz se ve limitado en su producción y calidad,
          debido a problemas climáticos (déficit de lluvias) y de suelos (baja fertilidad).
          Este presenta un valor nutritivo inferior al del maíz, el sorgo se usa para mas
          comúnmente la alimentación Animal como componente de la ración, en un 50% o más,
          previo su molido o quebrado de su grano, proceso que aumenta la digestibilidad de
          la materia seca de la ingesta total.
          </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Sorgo" src="/images/products/grains/sorgo.jpg" />
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: 'Sorghum'
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
