<template>
<div class="card custom appear">
  <figure>
    <img class="card-img-top" src="/images/services/importacion.jpg" alt="Card image cardBodyCustom">
  </figure>
  <div class="card-body cardBodyCustom">
    <h5 class="card-title">Importación de granos</h5>
    <p class="card-text">
      El Comercio Exterior es el intercambio de bienes, servicios y capitales entre diferentes países. Cuando un país necesita ingresar productos se produce la importación, la que es definida como "la introducción legal de mercancía extranjera para su uso o consumo del país".

    </p>
    <p class="card-text">
        A pesar de las ventajas del Tratado de Libre Comercio (TLC), es importante considerar algunos aspectos que limitan la entrada de insumos provenientes del extranjero, lo que se conoce como aranceles aduaneros de importación. Una buena decisión en la adquisición de algún insumo o ingrediente logrará hacer a su empresa más competitiva en el mercado local y nacional, para ello en Alinsumos SA de CV contamos con los permisos, los contactos y la logística necesaria para introducir los insumos o ingredientes necesarios a un mejor desempeño de su empresa, teniendo la confianza de que en cada momento usted sabrá la ubicación de su producto.
      </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'ImportGrains'
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
