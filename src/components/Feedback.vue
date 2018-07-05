<template>
    <div class="container-fluid text-center">
      <img class="card-img-top" :src="base_url+'static/images/logo-header.png'" alt="Logo alinsumos">
       <h1>¡Gracias por contactarnos!</h1>
       <i class="fa fa-check icon-style"></i>
       <p>Tu mensaje ha sido enviado, nos comunicaremos contigo lo mas pronto posible.</p>
       <hr>
       <h4>Te invitamos a conocer nuestros productos y servicios.</h4>
       <div class="row">
        <div class="col-content col-6">
         <img :src="base_url+'static/images/tolva_llenado.jpg'" alt="Avatar" class="productos">
         <div class="overlay">
            <p><a class="text" href="/#products">Productos</a></p>
         </div>
        </div>
        <div class="col-content col-6">
         <img :src="base_url+'static/images/servicios-f.jpg'" alt="Avatar" class="servicios">
         <div class="overlay">
            <p><a class="text" href="/#services">Services</a></p>
         </div>
        </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Feedback',
  data () {
    return {
      base_url: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
img{
    background-color: bisque;
}
hr{
    margin-top: 5%;
    margin-bottom: 5%;
}
h1{
    margin-top: 10%;
}
.icon-style{
    font-size:150px;
    color:#23B226;
}
.row{
    margin-right: 10%;
    margin-left: 10%;
}
.effect {
  position: relative;
  width: 50%;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(255, 255, 255, 0.5);
}
.col-content:hover .overlay {
  opacity: 1;
}

.text {
  color: blue;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
</style>
