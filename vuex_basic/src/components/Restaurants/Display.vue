<template>
  <div>
    <h3>Display store</h3>
    <p>couter in store: {{counter}}</p>
    <button @click="increase">click</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("restaurants");

export default {
  methods: {
    ...mapActions(['increment']),
    increase(amount){
    this.increment(amount)
  }
  },
  computed: {
    ...mapState({
      food: state => state.foodLists,
      restaurant: state => state.restaurant,
      counter: state => state.counter
    })
  }
};
</script>

<style>
</style>
