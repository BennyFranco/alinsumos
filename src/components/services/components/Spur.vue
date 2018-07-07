<template>
<div class="card custom appear">
  <figure>
    <img class="card-img-top" :src="base_url+'static/images/services/equipos_transporte.jpg'" alt="Card image cardBodyCustom">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Servicio de espuela</h5>
    <p class="card-text" ALIGN="justify">
      Se cuenta con una espuela de ferrocarril  con capacidad de 25 tolvas para comercialización y prestación de servicios de granos y pastas.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Spur',
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
  height: 300px; /*container-width*/
  overflow: hidden; /*hide bounds of image */
  margin: 0; /*reset margin of figure tag*/
}
figure img {
  display: block; /*remove inline-block spaces*/
  width: 100%; /*make image streatch*/
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
