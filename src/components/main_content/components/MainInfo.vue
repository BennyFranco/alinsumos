<template>
<div class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-4">
      <img src="static/images/tolva_llenado.jpg" class="img-fluid rounded" />
    </div>
    <div class="col-sm-8 aling-content-custom">
      <h2>Nuestros Valores</h2>
      <h4><strong>MISIÓN</strong></h4> <p ALIGN="justify">Ser la mejor opción de los productores agropecuarios en financiamiento, comercialización y
        darles valor agregado a sus productos. Obtener un crecimiento profesional y humano de todos los integrantes de Alinsumos.</p>
      <h4><strong>VISIÓN</strong></h4> <p ALIGN="justify"> Ser una empresa lider en el noroeste y occidente de México en la actividad Agroindustial.
      </p>
      <h4><strong>OBJETIVOS</strong></h4>
      <div>
        <ul>
          <li>Apoyar al sector agropecuario con alternativas financieras más apropiadas.</li>
          <li> Asegurar el abastecimiento de la materia prima.</li>
          <li> Contar con una mejora continua en los procesos de la empresa.</li>
        </ul>
      </div>
      <h4><strong>VALORES</strong></h4>
      <div>
        <ul>
          <li><strong>Compromiso:</strong> Obligación contraída por medio de acuerdo, promesa o contrato."</li>
          <li><strong>Honestidad:</strong> Compostura, decencia y moderación en la persona, acciones y palabras."</li>
          <li><strong>Lealtad:</strong> Cumplimiento de las leyes y el honor."</li>
          <li><strong>Participación:</strong> La toma o recepción de parte de alguna situación, compartir ideas, opiniones, entre
            otras."
          </li>
          <li><strong>Espiritu de servicio:</strong> Estar orientados a resolver las actividades propias y de los compañeros
            para cumplir con las metas establecidas."
          </li>
          <li><strong>Trabajo en equipo:</strong> La serie de estrategias, procedimientos y metodologías que utiliza un grupo
            humano para lograr las metas propuestas."
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MainInfo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.charmain-video {
  width: 320px;
  height: 250px;
}
h4 {
  margin-bottom: 0px;
}
img {
  margin-left: 15%;
}
.aling-content-custom {
  padding-left: 10%;
  padding-right: 10%;
}
@media screen and (max-width: 768px) {
  img {
    margin-left: 0px;
  }
  .aling-content-custom {
  padding-left: 0px;
  padding-right: 0px;
  }
}
</style>
