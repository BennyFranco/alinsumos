<template>
<div class="container-fluid appear">
  <h3>Nuez</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Nuez" src="/images/products/pastas/nuez.jpg" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        La Harina de nuez ha empezado a tener uso en la alimentación animal por su alto contenido graso,
          lo que aporta energía a la dieta proporcionando una cantidad elevada de calorías.
        </p>
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: 'Nut'
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
