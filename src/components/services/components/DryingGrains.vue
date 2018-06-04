<template>
<div class="card custom appear">
  <figure>
    <img class="card-img-top" src="/images/services/secadora.jpg" alt="Card image cap">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Secado de granos</h5>
    <p class="card-text">Los granos, como es bien conocido, no pueden conservarse almacenados si no están secos. La cuestión es determinar cuándo un grano se considera "seco". Como término general, para los granos como Maíz y Sorgo, una humedad del 14% se considera el límite para estimarlo como "seco". En el caso del Trigo Cristalino y Harinero 12 % se considera su límite. Para cuamplir con las condiciones antes mencionadas en
      <strong>
        ALINSUMOS SA DE CV
        </strong> contamos con secadora de flujo continuo <strong>
          (1)
          </strong>
          marca MEGA con una capacidad de secado 80 toneladas por hora.
    </p>
<p class="card-text paragraph">
  <strong>
    1*
    </strong> Las secadoras de Flujo continuo son aquellas en las que el grano se introduce y descarga en forma continua o intermitente, permaneciendo constantemente llenas las secciones de secado y enfriamiento. Las operaciones de secado y enfriamiento se efectúan en forma simultánea e ininterrumpida.
  </p>
  </div>
</div>
</template>

<script>
export default {
    name: "DryingGrains"
}
</script>

<style scoped>
.custom{
    padding-bottom: 5%;
    margin-bottom: 5%;
    margin-right: 5%;
    margin-left: 5%;
}
.cardBodyCustom{
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
}
.paragraph{
  padding-left: 5%;
  font-size: 13px;
}
figure{
   height: 300px;
   overflow:hidden;
   margin:0;
}
figure img{
   display:block;
   width:100%;
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
