<template>
<div class="card custom appear">
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
