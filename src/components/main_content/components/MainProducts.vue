<template>
  <div id="products" class="container-fluid text-center">
    <h2>Productos</h2><br>
    <h4>Familia de productos</h4>
      <div class="row">
        <div class="col-6 col-md-3" v-for="(product,key) in Products" v-bind:item="product" v-bind:index="key"  v-bind:key="key">
            <router-link :to="product.link"><img :src="product.image" :alt="product.title" class="img-thumbnail"></router-link>
            <div class="align-text-bottom">
              <h3>{{product.title}}</h3>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import ProductsJson from '../../../assets/data/products/products_menu.json'

export default {
  name: 'MainProducts',
  data()
  {
    return{
        Products: ProductsJson.products
    }
  }
}
</script>

<style scoped>

a.thumbnail:hover, a.thumbnail:active, a.thumbnail:focus {
  border-color: #77a23d;
}

</style>
