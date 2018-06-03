<template>
<div>
<footer class="container-fluid text-center">
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
            </div>
        </div>
        <a href="#" title="Inicio">
            <i class="fas fa-chevron-up"></i>
        </a>
    </footer>
</div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
    li {
      list-style: none;
    }
    * {
      font-size: small;
    }

    svg.svg-inline--fa.fa-chevron-up.fa-w-14 {
      font-size: 20px;
      margin-bottom: 20px;
      color: #884F20;
    }
</style>
