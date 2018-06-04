<template>
<div class="card custom">
    <figure>
        <img class="card-img-top" src="/images/services/equipos_transporte.jpg" alt="Card image cap">
    </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Transporte de mercancía</h5>
    <p class="card-text">En Alinsumos sabemos la importancia de trasladar las mercancías en tiempo y forma a los destinos que nuestros clientes dispongan, por ello contamos con una flota de camiones moderna y funcional, contando con Cajas secas y refrigeradas, jaulas y camiones torton, garantizando un servicio de calidad y sin demoras.</p>
  </div>
</div>
</template>

<script>
export default {
    name: "Trucking"
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
</style>
