<template>
<div class="card custom appear">
  <figure>
    <img class="card-img-top" :src="base_url+'static/images/services/money.jpg'" alt="Card image cap">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Fondo de Aseguramiento</h5>
    <p class="card-text" ALIGN="justify">
      Se dedica al Aseguramiento de cultivos agrícolas en los ciclos otoño-invierno, primavera-verano, de los socios del Fondo de Aseguramiento, con procesos de la programación, contratación del reaseguro, suscripción y siniestros e indemnizaciones; así como la administración de las cuotas cubiertas por el fondo para la constitución de reservas, pago de siniestros, programación de los gastos de operación, administración personal de campo para atención de los socios, como la atención en las instalaciones físicas del fondo de aseguramiento.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'InsuranceFund',
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
