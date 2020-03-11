<template>
  <div>
    <div class="nav-bar"></div>
    <Product :premium="true" @add-to-cart="updateCart" :cart="cart.length" @review-form="addReview" />
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
      reviewLists: []
    };
  },
  methods: {
    updateCart(product) {
      this.cart.push(product);
    },
    addReview(reviewData) {
      this.reviewLists.push(reviewData)
    }
  }
};
</script>

<style scoped>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}

</style>
