<template>
<div class="card custom">
  <figure>
    <img class="card-img-top" src="/images/services/cotton_gins.jpg" alt="Card image cap">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Despepitadora de algodón</h5>
    <p class="card-text">En Alinsumos estamos siempre al pendiente de las necesidades de nuestros productores, razón por la cual ponemos en marcha la planta despepitadora de algodón, ubicada en calle 600 y 3 del valle del yaqui cuenta con dos plantas una Murray 1080 y una Murray 690 con capacidad de 350 pacas diarias, con la cual se dará servicio a más de 4000 has.</p>
  </div>
</div>
</template>

<script>
export default {
    name: "CottonGins"
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
