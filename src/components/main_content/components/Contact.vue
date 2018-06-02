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
          <abbr title="Teléfono">T:</abbr> +52 (644) 413 99 29
        </address>
      <p>O consulta nuestro directorio:</p>
      <p>
        <a routerLink="/directory" routerLinkActive="active"  class="btn btn-default" role="button">Ver directorio</a>
      </p>
    </div>
    <div class="col-sm-4">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Nombre" type="text" required>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Correo electrónico" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comentario" rows="5"></textarea><br>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right" type="submit">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name : 'Contact'
}
</script>

<style scope>

</style>
