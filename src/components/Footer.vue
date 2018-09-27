<template>
    <div class="background">
        <footer class="container align-class-center  text-center">
            <div class="row align-items-center">
                <div class="col-2"></div>
                <div class="col-8">
                    <address class="text-center">
                        <strong>Alinsumos, S.A. de C.V.</strong><br> Carretera internacional México-Nogales. Km 1841 S/N. Parque industrial. Cd. Obregón, Sonora, México.<br/>
                    </address>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row align-items-center">
                <div class="col-2"></div>
                <div class="col-8">
                    <i class="fa fa-phone mr-3"></i><a href="tel:+52 (644) 413 99 29"> +52 (644) 413 99 29 </a> | <a href="tel:+52 (644) 445 01 17"> +52 (644) 445 01 17</a> | <a href="tel:+52 (644) 445 02 51"> +52 (644) 445 02 51</a> | <a href="tel:+52 (644) 445 01 16"> +52 (644) 445 01 16</a>
                </div>
                <div class="col-2 aling-items-right">
                    <a href="https://www.facebook.com/alinsumos/"><i class="fab fa-facebook-square"></i></a>
                </div>
            </div>
            <div class="row  align-class-center align-items-center">
                <div class="col-6 "></div>
                <div class="col-12">
                    <div class="animation">
                      <a href="#" title="Inicio" v-scroll-to="'#top'">
                        <i class="fas fa-chevron-up icon-style"></i>
                      </a>
                    </div>
                </div>
                <div class="col-6"></div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      base_url: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.background {
  padding-top: 2%;
  background-image: url('../assets/footer.png');
  background-size: auto 100%;
  background-position: left;
  background-repeat: no-repeat;
}
@media screen and (max-width: 600px) {
  .background {
    padding-top: 2%;
    background-image: url('../assets/footer.png');
    background-size: 30% 30%;
    background-position: left bottom;
    background-repeat: no-repeat;
    }
}
li {
  list-style: none;
}
* {
  font-size: small;
}
address {
    margin-bottom: 0px;
}
svg.svg-inline--fa.fa-chevron-up.fa-w-14 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #884f20;
}

svg.svg-inline--fa.fa-facebook-square.fa-w-14 {
    margin-right: 5%;
    font-size: 35px;
    vertical-align: middle;
}
.ajust-size {
    padding-right: 20%;
    padding-left: 20%;
}
/* ----------animation----------- */
.animation{
  animation: shake 5s ease-out infinite;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
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
/* ----------end animation----------- */
</style>
