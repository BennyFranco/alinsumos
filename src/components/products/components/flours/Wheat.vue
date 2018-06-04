<template>
<div class="container-fluid">
  <h3>Harina de trigo</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        El principal producto obtenido del trigo es la harina, la harina que se obtiene de trigos blandos se
         utiliza a la producción de pan, mientras que la que se obtiene de trigos duros se utiliza para la
         producción de pastelería.
        </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Harina de trigo" src="/images/products/flours/trigo.jpg" />
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
    name : 'WheatFlour'
}
</script>

<style scoped>
.textContent{
  margin-top: 2%;
  margin-bottom: 2%;
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
.imageContent{
margin-top: 2%;
margin-bottom: 2%;
align-self: center;
}
img{
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
hr{
  margin-bottom: 2%;
}
</style>
