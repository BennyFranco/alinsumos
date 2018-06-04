<template>
<div class="container-fluid">
  <h3>Maíz Tortillero</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        El Maíz utilizado para alimentación humana es fundamental,
          capaz de saciar el hambre durante un tiempo prolongado sin
          tener que recurrir a otros alimentos menos saludables para el organismo,
          se ha comprobado que las dietas que incluyen maíz permiten disminuir de
          peso de manera adecuada.
      </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Maíz Tortillero" src="/images/products/grains/maiz-tortillero.jpg" />
    </div>
  </div>
  <hr/>
</div>

</template>

<script>
export default {
  name: "TortillaCorn"
};
</script>

<style scoped>
.textContent {
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
.imageContent {
  align-self: center;
}
img {
   height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
hr {
  margin-bottom: 2%;
}
</style>
