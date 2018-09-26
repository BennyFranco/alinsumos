<template>
<div class="card custom appear">
    <figure>
        <img class="card-img-top" :src="base_url+'static/images/services/conservacion.jpg'" alt="Card image cap">
    </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Almacenaje y Conservación</h5>
    <p class="card-text" ALIGN="justify">
      El valor económico, alimenticio agrícola e industrial asociado a los granos y semillas requieren de cuidados especiales para garantizar su calidad y esta debe mantenerse durante el tiempo necesario hasta el momento de su uso. El almacenamiento se refiere a la concentración de algún producto o insumo en lugares especialmente diseñados para tal efecto. Para ello contamos con la infraestructura necesaria para cumplir con esta condición tal es el caso de silos y bodegas con controles y sistemas para monitorear temperatura y humedad, con capacidades hasta 100 TM y además bodegas planas mecanizadas, para producto envasado. Con estas instalaciones se garantiza que el producto no sufrirá daño que pueden ser causados por el medio ambiente, plagas etc.
    </p>
    <p class="card-text" ALIGN="justify">
      La conservación es parte fundamental y está ligado directamente con las áreas de almacenamiento la prevención de plagas, el control de las temperaturas, la ventilación apropiada son solo algunas de las tareas que deben estar en constante monitoreo para garantizar la buena calidad de los granos, semillas, etc.
      </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'StorageConservation',
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
