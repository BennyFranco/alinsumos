<template>
    <div class="parallax" id="top">
    <!-- Parallax Content -->
        <div class="jumbotron text-center">
            <div class="title-elements">
            <div class="title-text">
                <img src="static/images/logo_white.svg" alt="Alinsumos"/>
            </div>
                <div id="slogan-text" class="title-text">
                    <vue-typed-js :strings="['¡Apoyando productores ^1000 <br/> cosechando éxitos!']" :showCursor="false">
                        <p class="typing"></p>
                    </vue-typed-js>
                </div>
            </div>
            <div class="row style-f align-class-center align-items-center">
                <div class="col-6 "></div>
                <div class="col-12 animation">
                    <a href="#" title="Inicio" v-scroll-to="'#about'">
                        <i class="fas fa-chevron-down icon-style"></i>
                    </a>
                </div>
                <div class="col-6"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  color: #fff;
  padding: 100px 25px;
  font-family: Montserrat, sans-serif;
  height: 100vh;
  background: none;
}
.title-text {
  margin: 1% auto;
  text-shadow: 2px 3px 4px #000;
  font-size: 3.5em;
}
.title-elements {
  display: flex;
  flex-direction: column;
}
.icon-style{
  padding-top: 3%;
  font-size:75px;
  color:#fff;
}
.animation {

    -webkit-animation-name: mover;/* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;

    animation-name: mover;/* Chrome, Safari, Opera */
    animation-duration: 9s;
    animation-iteration-count: infinite;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes mover {
  0% {
    bottom:20px; top:0px;
  }
  25% {
    bottom:0px; top:0px;
  }
  50% {
    bottom:0px; top:0px;
  }
  75% {
    bottom:0px; top:0px;
  }
  100% {
    bottom:0px; top:20px;
  }
}

/* Standard syntax */
@keyframes mover {
  0% {
    bottom:20px; top:0px;
  }
  25% {
    bottom:0px; top:0px;
  }
  50% {
    bottom:0px; top:0px;
  }
  75% {
    bottom:0px; top:0px;
  }
  100% {
    bottom:0px; top:20px;
  }
}
@media screen and (max-width: 768px) {
  .jumbotron {
    color: #fff;
    padding: 0px 0px;
    padding-top: 20%;
    font-family: Montserrat, sans-serif;
    height: 100vh;
    background: none;
    }
  .title-text {
    margin: 1% auto;
    text-shadow: 2px 3px 4px #000;
    font-size: 2.5em;
    }
  .title-elements {
    display: flex;
    flex-direction: column;
    }
  img{
    height: 95%;
  }
}

</style>
