<template>
<div class="container-fluid appear">
  <h3>Canola</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
          La pasta de canola es un ingrediente alimenticio usado comúnmente y con buenos resultados
          económicos para nuestros clientes en las dietas para gallinas ponedoras y reproductoras,
          así como en pollos de engorda. En la creación por nutriólogos de dietas debidamente balanceadas
          en cuanto a energía y niveles de aminoácidos digestibles, la pasta de canola puede ser usada en
          forma efectiva como la mejor fuente de proteína suplementaria para aves así como también en dietas
          de cerdos en crecimiento, en fase terminal, y en reproducción.
        </p>
        <p class="rounded textContent">
          En ganado vacuno para engorda y lechero la pasta de canola tiene amplia aceptación como un suplemento
          vitamínico, así de igual forma es utilizada como una competitiva fuente de proteína manteniendo y en
          ocasiones mejorando, niveles de producción de leche y rendimientos de carne.
        </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Canola" src="/images/products/pastas/canola.jpg" />
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
  name: 'Canola'
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
