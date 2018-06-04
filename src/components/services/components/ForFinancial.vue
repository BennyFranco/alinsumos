<template>
<div class="card custom">
  <figure>
    <img class="card-img-top" src="/images/services/alfin.jpg" alt="Card image">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title aling">Objetivo</h5>
    <p class="card-text">La ParaFinanciera ALIFIN tiene como Principal Objetivo el gestionar, obtener y otorgar financiamiento agrícola, estamos operando desde hace varios años con este esquema apoyando a nuestros productores del valle del Yaqui y Mayo, habilitando más de 7000 hectáreas de Trigo, Maíz, Cártamo, Sorgo, Algodón, etc.</p>
    <h5 class="card-title">Misión</h5>
    <p class="card-text">Contribuir al desarrollo de los productores del campo participando con oportunidades en el otorgamiento del crédito y tecnificándolos para aumentar el aprovechamiento de los recursos.</p>
    <h5 class="card-title center">Servicios</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item list-group-item-secondary">- Gestión de crédito (Avío)</li>
        <li class="list-group-item">- Asesoría y consultoría técnica.</li>
        <li class="list-group-item list-group-item-secondary">- Elaboración, ejecución y seguimiento de proyectos.</li>
        <li class="list-group-item">- Cursos de capacitación y parcelas demostrativas.</li>
    </ul>
    <br/>
    <p class="card-text">ALIFIN cuenta con un esquema parafinanciero (documentado y garantizado), con reglas de operaciones claras y sencillas, que apoyan a los productores y organizaciones con las que trabajamos para poder tener beneficios mutuos mediante un esquema de crédito que asegure la recuperación de la inversión del productor y por ende la recuperación del crédito.</p>
  </div>
</div>
</template>

<script>
export default {
    name: "ForFinancial"
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
.cut{
  height: 350px;
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
