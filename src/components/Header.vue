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
            <div class="animation">
              <a href="#" title="Inicio" v-scroll-to="'#about'">
                <i class="fas fa-chevron-down icon-style"></i>
              </a>
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
/* ----------animation----------- */
.animation{
  animation: shake 5s ease-out infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
a {
  animation:  apear 6s;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(0, -1px, 0);
  }

  20%, 80% {
    transform: translate3d(0, 2px, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(0, -4px, 0);
  }

  40%, 60% {
    transform: translate3d(0, 4px, 0);
  }
}
@keyframes apear {
    0%   {filter:  opacity(0);}
    25%  {filter:  opacity(0);}
    50%  {filter:  opacity(0);}
    100% {filter:  opacity(100%);}
}
/* ----------end animation----------- */
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
@media screen and (max-height: 600px) {
  .jumbotron {
    color: #fff;
    padding: 0px 0px;
    padding-top: 0;
    font-family: Montserrat, sans-serif;
    height: 100vh;
    background: none;
    }
  .title-text {
    margin: 1% auto 0px;
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
