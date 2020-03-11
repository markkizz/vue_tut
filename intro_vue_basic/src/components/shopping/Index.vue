<template>
  <div>
    <div class="nav-bar"></div>
    <Product :premium="true" @add-to-cart="updateCart" :cart="cart.length"/>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  components: {
    Product
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(product) {
      this.cart.push(product);
    }
  }
};
</script>

<style scoped>
</style>
