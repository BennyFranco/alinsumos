<template>
<div id="contact" class="container-fluid bg-grey">
  <h2 class="text-center">CONTACTO</h2>
  <div class="row">
    <div class="col-sm-8">
      <p>Estámos para atenderte en:</p>
      <address>
          <strong>Alinsumos, S.A. de C.V.</strong><br>
          Carretera internacional México-Nogales. Km 1841 S/N. Parque industrial.
          Cd. Obregón, Sonora, México.<br/>
          <i class="fa fa-phone mr-3"></i> <a href="tel:+52 (644) 413 99 29"> +52 (644) 413 99 29</a>
        </address>
      <p>O consulta nuestro directorio:</p>
      <b-button size="sm" variant="outline-success" href="directorio">Ver directorio</b-button>
    </div>
    <div class="col-sm-4">
      <form action="https://formspree.io/recursoshumanos@alinsumos.com" method="POST">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="Nombre" placeholder="Nombre" type="text" required>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="E-mail" placeholder="Correo electrónico" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="Comentarios" placeholder="Comentario" rows="5"></textarea><br>
      <input type="hidden" name="_next" value="https://bennyfranco.github.io/alinsumos/gracias" />
      <input type="text" name="_gotcha" style="display:none" />
      <input type="hidden" name="_subject" value="[Alinsumos.com] Nuevo mensaje desde el sitio web" />
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right" type="submit">Enviar</button>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
</style>
