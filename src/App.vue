<template>
  <div id="app">
    <TopHeader></TopHeader>
    <div class="container">
      <div class="columns">
        <div class="column is-12-mobile is-4-tablet">
          <MiniCart></MiniCart>
        </div>
        <div class="column">
          <Products></Products>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import MiniCart from '@/components/MiniCart'
import Products from '@/components/Products'

export default {
  name: 'App',
  components: {
    TopHeader,
    MiniCart,
    Products
  }
}
</script>

<style>
/* html{
  font-size: 62.5%;
}
#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 6rem auto 0 auto;
  font-size: 1.8rem;
  width: 96rem;
  max-width: 96rem;
} */
</style>
