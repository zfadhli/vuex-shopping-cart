<template>
  <section class="section">
    <nav class="panel" v-if="cart.length">
      <a class="panel-block" v-for="(item, index) in cart" :key="index">
        <span>{{item.quantity}} x {{item.product.title}} @ ${{item.product.price}} </span>
        <button class="button is-danger is-small is-rounded" @click.prevent="clearItem(item.product)">Remove</button>
      </a>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth" @click.prevent="clearCart">Clear cart</button>
      </div>
    </nav>
    <p v-else>No items in cart</p>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions([
      'getCart',
      'removeProductFromCart',
      'removeAllProductsFromCart'
    ]),
    clearItem(product) {
      this.removeProductFromCart(product.id)
      this.$toast.open({
        queue: false,
        type: 'is-info',
        message: `Remove ${product.title} from cart`
      })
    },
    clearCart() {
      this.$dialog.confirm({
        queue: false,
        type: 'is-danger',
        message: 'Remove all products on cart?',
        confirmText: 'Yes, remove all',
        onConfirm: () => {
          this.removeAllProductsFromCart()
          return this.$toast.open({
            type: 'is-danger',
            message: 'Removed all products on cart'
          })
        }
      })
    }
  },
  mounted() {
    this.getCart()
  }
}
</script>

<style scoped>
.panel-block {
  display: flex;
  justify-content: space-between;
}
.button.is-rounded {
  border-radius: 290486px;
  padding-left: 1em;
  padding-right: 1em;
}
</style>
