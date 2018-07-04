<template>
<div>
<footer class="container align-class-center  text-center">
    <div class="row align-items-center">
        <div class="col-2">
        </div>
        <div class="col-8">
            <address class="text-center">
                <strong>Alinsumos, S.A. de C.V.</strong><br> Carretera internacional México-Nogales. Km 1841 S/N. Parque industrial. Cd. Obregón, Sonora, México.<br/>
            </address>
        </div>
        <div class="col-2">
        </div>
    </div>

    <div class="row align-items-center">
        <div class="col-2">
        </div>
        <div class="col-8">
            <i class="fa fa-phone mr-3"></i><a href="tel:+52 (644) 413 99 29"> +52 (644) 413 99 29 </a> | <a href="tel:+52 (644) 445 01 17"> +52 (644) 445 01 17</a> | <a href="tel:+52 (644) 445 02 51"> +52 (644) 445 02 51</a> | <a href="tel:+52 (644) 445 01 16"> +52 (644) 445 01 16</a>
        </div>
        <div class="col-2 aling-items-right">
            <a href="https://www.facebook.com/alinsumos/"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>
     <hr>
    <div class="row  align-class-center align-items-center">
        <div class="col-6 "></div>
        <div class="col-12 animation">
            <a href="#" title="Inicio" v-scroll-to="'#top'">
                <i class="fas fa-chevron-up"></i>
            </a>
        </div>
        <div class="col-6"></div>

    </div>
</footer>
<!--<footer class="container-fluid text-center">
        <div class="row">
            <div class="col-md-4">
            <address class="text-left">
                <strong>Alinsumos, S.A. de C.V.</strong><br> Carretera internacional México-Nogales. Km 1841 S/N. Parque industrial.
                Cd. Obregón, Sonora, México.<br/>
            </address>
            </div>
            <div class="col-md-4">
            <h6>Teléfonos</h6>
            <ul>
                <li><abbr title="Teléfono">T:</abbr><a href="tel:+52 (644) 413 99 29"> +52 (644) 413 99 29</a></li>
                <li><abbr title="Teléfono">T:</abbr><a href="tel:+52 (644) 445 01 17"> +52 (644) 445 01 17</a></li>
                <li><abbr title="Teléfono">T:</abbr><a href="tel:+52 (644) 445 02 51"> +52 (644) 445 02 51</a></li>
                <li><abbr title="Teléfono">T:</abbr><a href="tel:+52 (644) 445 01 16"> +52 (644) 445 01 16</a></li>
            </ul>
            </div>
            <div class="col-md-4">
                <h6>Enlaces</h6>
                 <ul>
                    <li class="text-custom">
                        <a href="https://www.facebook.com/alinsumos/"><i class="fab fa-facebook-square"></i>Facebook</a>
                        </li>

                    <li><a href="tel:+52 (644) 445 01 17"> </a></li>
                    <li><a href="tel:+52 (644) 445 02 51"> </a></li>
                    <li><a href="tel:+52 (644) 445 01 16"> </a></li>
                </ul>
            </div>
        </div>
        <a href="#" title="Inicio" v-scroll-to="'#top'">
            <i class="fas fa-chevron-up"></i>
        </a>
    </footer>
-->
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.container{
    padding-top: 2%;
}
li {
  list-style: none;
}
* {
  font-size: small;
}
address{
    margin-bottom: 0px;
}
hr{
    margin: 5px;
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
.align-class{
    padding-top:10px;
    padding-bottom: 5px;
}
.align-vertical-class{
    padding-left: 10%;
     padding-right: 10%;
}
.color{
    background-color: #F0D4B9;
}
.animation{

    -webkit-animation-name: example;/* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;

    animation-name: example;/* Chrome, Safari, Opera */
    animation-duration: 9s;
    animation-iteration-count: infinite;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  0% {
    bottom:0px; top:20px;
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
    bottom:20px; top:0px;
  }
}

/* Standard syntax */
@keyframes example {
  0% {
    bottom:0px; top:20px;
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
    bottom:20px; top:0px;
  }
}
</style>
