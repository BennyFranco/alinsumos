<template>
<div class="card custom appear">
  <figure>
    <img class="card-img-top" :src="base_url+'static/images/services/alfin.jpg'" alt="Card image">
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
  name: 'ForFinancial',
  data () {
    return {
      base_url: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.custom {
  padding-bottom: 5%;
  margin-bottom: 5%;
  margin-right: 5%;
  margin-left: 5%;
}
.cardBodyCustom {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
}
.cut {
  height: 350px;
}
figure {
  height: 300px;
  overflow: hidden;
  margin: 0;
}
figure img {
  display: block;
  width: 100%;
}
.appear {
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 0.25s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 0.25s;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  0% {
    filter: blur(50px);
  }
  25% {
    filter: blur(25px);
  }
  50% {
    filter: blur(12.5px);
  }
  100% {
    filter: blur(0px);
  }
}

/* Standard syntax */
@keyframes example {
  0% {
    filter: blur(50px);
  }
  25% {
    filter: blur(25px);
  }
  50% {
    filter: blur(12.5px);
  }
  100% {
    filter: blur(0px);
  }
}
</style>
