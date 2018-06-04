<template>
<div class="card custom">
  <figure>
    <img class="card-img-top" src="/images/services/pignoracion.jpg" alt="Card image cap">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Pignoración de granos</h5>
    <p class="card-text">Se refiere al término pignorar que significa ''dar o dejar en prenda''. Es cuando se deposita temporalmente la totalidad o una parte de la cosecha y se obtiene un documento expedido por un almacén general de depósito que certifica la existencia del grano, mediante el cual, el productor esta en posibilidad de obtener un crédito prendario con un agente financiero.</p>
  </div>
</div>
</template>

<script>
export default {
    name: "PledgeGrains"
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
