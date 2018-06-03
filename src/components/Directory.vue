<template>
<div id="directory" class="container-fluid">
  <div class="page-header">
    <h1>Directorio</h1>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-4" v-for="(contact,key) in Directory" v-bind:item="contact" v-bind:index="key"  v-bind:key="key">
      <div class="card">
        <div class="card-body">
          <address>
            <h4>{{contact.mainName}}</h4>
            <hr>
            <strong><i class="far fa-envelope"></i> Correo electrónico:</strong><br>
            <a :href="'mailto:'+contact.email">{{contact.email}}</a>
            <p  v-if="contact.phone"><b><i class="fas fa-phone"></i> Extensión: </b>{{contact.phone}}</p>
            <strong  v-if="contact.secondEmail"><i class="far fa-envelope"></i> Correo electrónico:</strong><br>
            <a v-if="contact.secondEmail" :href="'mailto:'+contact.secondEmail">{{contact.secondEmail}}</a>
            <p v-if="contact.secondPhone"><b><i class="fas fa-phone"></i> Extensión: </b>{{contact.secondPhone}}</p>
          </address>
          <br/>
          <hr>
          <p>
            <a v-if="contact.phone" :href="'tel:(644)4139929;'+contact.phone" class="btn btn-success" role="button">Marcar Ext. {{contact.phone}}</a>
            <a v-else-if="contact.email" :href="'mailto:'+contact.email" class="btn btn-success" role="button">Enviar e-mail</a>
            <a v-if="contact.secondPhone" :href="'tel:(644)4139929;'+contact.secondPhone" class="btn btn-default" role="button">Marcar Ext. {{contact.secondPhone}}</a>
          </p>
        </div>
      </div>
      <br/>
    </div>
  </div>
</div>

</template>

<script>
import DirectoryJson from '../assets/data/directory.json'

export default {
    name : 'Directory',
    data()
    {
      return{
          Directory: DirectoryJson.directory
      }
    }
}
</script>

<style scoped>
address {
  height: 200px;
}
.btn-success {
  background-color: #77a23d;
  border-color: #77a23d;
}
.btn-success:active {
  background-color: #5a7b2e;
}
</style>
