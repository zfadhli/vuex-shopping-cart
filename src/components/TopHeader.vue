<template>
  <section>
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="#" class="navbar-item">VuexCart</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <p class="navbar-item">{{cartItemCount}} items in cart (${{cartTotal}})</p>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItemCount', 'cartTotal'])
  }
}
</script>

<style scoped>
  .navbar {
    background-color: #2C405A;
  }
  a.navbar-item:hover {
    background-color: #2C405A;
    color: #E6E8EB;
  }
  a, p {
    color: #E6E8EB;
  }

</style>
