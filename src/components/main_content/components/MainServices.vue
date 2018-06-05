<template>
<div id="services" class="container-fluid text-center">
  <h2>Servicios</h2>
  <h4>Ofrecemos</h4>
  <br>
  <div class="row">
    <div class="col-sm-6 col-md-4" v-for="(service,key) in Services" v-bind:item="service" v-bind:index="key"  v-bind:key="key">
      <div class="thumbnail">
        <img class="rounded" :src="service.image" alt="">
        <div class="caption">
          <h3>{{service.title}}</h3>
          <p >{{service.description | truncate(300)}} <p>
              <b-button size="sm" variant="outline-success" :to="service.link">Ver más</b-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServicesJson from '../../../assets/data/services/services_menu.json'
import Vue from 'vue'

export default {
  name: 'MainServices',
  data () {
    return {
      Services: ServicesJson.services
    }
  }
}

Vue.filter('truncate', function (text, stop, clamp) {
  return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
})
</script>

<style scoped>
.thumbnail {
  padding: 0 0 15px 0;
  border: none;
  border-radius: 0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
</style>
