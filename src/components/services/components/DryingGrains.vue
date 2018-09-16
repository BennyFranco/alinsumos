<template>
<div class="card custom appear">
  <figure>
    <img class="card-img-top" :src="base_url+'static/images/services/secadora.jpg'" alt="Card image cap">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Secado de granos</h5>
    <p class="card-text" ALIGN="justify">Con el fin de cumplir con las condiciones para el correcto almacenaje de granos y semillas, contamos con secadora de flujo continuo.
    <p class="card-text paragraph"></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'DryingGrains',
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
.paragraph {
  padding-left: 5%;
  font-size: 13px;
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
@media screen and (max-width: 768px) {
  figure {
  height: auto;
  }
}
@media screen and (max-height: 600px) {
  figure {
  height: auto;
  }
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
