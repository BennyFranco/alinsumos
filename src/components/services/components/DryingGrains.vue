<template>
<div class="card custom">
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
   height: 300px; /*container-width*/
   overflow:hidden; /*hide bounds of image */
   margin:0;   /*reset margin of figure tag*/
}
figure img{
   display:block; /*remove inline-block spaces*/
   width:100%; /*make image streatch*/
}
</style>
