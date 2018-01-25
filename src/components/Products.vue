<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-6-tablet is-4-desktop" v-for="product in products" :key="product.id">
        <Product :product="product"></Product>
      </div>
    </div>
  </section>
</template>

<script>
import Product from '@/components/Product'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'products',
  components: {
    Product
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped>
</style>
