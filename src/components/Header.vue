<template>
    <div class="parallax" id="top">
    <!-- Parallax Content -->
      <div class="parallax-overlay">
        <div class="jumbotron text-center">
            <div class="title-elements">
            <div class="title-text">
                <img src="static/images/Logo.png" alt="Alinsumos"/>
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
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* For IE10 and avove */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .title-text {
    margin: 0 26% !important;
  }
}
.jumbotron {
  color: #fff;
  padding: 100px 25px;
  height: 100vh;
  background: none;
  font-family: 'UbuntuBold';
}
.title-text {
  margin: 1% auto;
  text-shadow: 2px 3px 4px #000;
  font-size: 3.0em;

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
p.typing{
  text-shadow: 6px 6px 18px rgb(0, 0, 0);
}
/* ----------animation----------- */
.animation{
  animation: shake 5s ease-out infinite;
  transform: translate3d(0, 0, 0);
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
    height: 100vh;
    font-family: 'UbuntuBold';
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
    height: 95% !important;
    width: 95% !important;
  }
}
@media screen and (max-height: 600px) {
  .jumbotron {
    color: #fff;
    padding: 0px 0px;
    padding-top: 0;
    height: 100vh;
    font-family: 'UbuntuBold';
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
    height: 95% !important;
    width: 95% !important;
  }
}
</style>
