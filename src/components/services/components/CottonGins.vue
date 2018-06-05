<template>
<div class="card custom appear">
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
  name: 'CottonGins'
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
