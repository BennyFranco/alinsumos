<template>
<div class="container-fluid">
  <h3>Harina de carne y hueso</h3>
  <hr/>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-3 imageContent">
      <img class="img-responsive rounded" alt="Harina de carne y hueso" src="/images/products/flours/carne.jpg" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <p class="rounded textContent">
        Es un producto constituido de restos de frigoríficos y canales descartadas por los rastros.
          Esta harina ofrece un alto valor proteico siendo utilizada en raciones para aves, cerdos y bovinos.
          Por tratarse de un producto con altos tenores de proteína y baja degradabilidad ruminal, además de
          altos niveles de Ca y P se utiliza con regularidad en dietas para rumiantes, aunque su uso en ellos
          es muy controlado.
        </p>
    </div>
  </div>
  <hr/>
</div>
</template>

<script>
export default {
    name : 'MeatBone'
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
