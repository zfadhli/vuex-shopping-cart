<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{product.title}} <strong>${{product.price}}</strong></p>
      <p class="content is-medium">{{product.description}}</p>
    </div>
    <div class="card-footer">
      <a href="#" class="card-footer-item" @click.prevent="addToCart()">Add product</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['product'],
  methods: {
    ...mapActions(['addProductToCart']),
    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: 1
      })
      this.$toast.open({
        queue: false,
        type: 'is-success',
        message: `Add ${this.product.title} to cart`
      })
    }
  }
}
</script>

<style>

</style>
