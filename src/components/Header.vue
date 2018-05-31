<template>
    <div class="parallax" id="top">
    <!-- Parallax Content -->    
        <div class="jumbotron text-center">
            <div class="title-elements">
            <div class="title-text">
                <img src="images/logo_white.svg" alt="Alinsumos"/>
            </div>
                <div id="slogan-text" class="title-text">
                    <vue-typed-js :strings="['¡Apoyando productores ^1000 <br/> cosechando éxitos!']" :showCursor="false">
                        <p class="typing"></p>
                    </vue-typed-js>
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
</style>