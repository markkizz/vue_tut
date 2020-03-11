<template>
  <div>
    <button @click="increaseNumber">Click</button>
    <p>{{counter}}</p>
    <p @mousemove="updateCoordinate">
      Coordinate: {{x}} / {{y}} -
      <span >DEAD SPOT</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0
    };
  },
  methods: {
    increaseNumber: function () {
      this.counter++
    },
    updateCoordinate: function (e) {
      this.x = e.clientX
      this.y = e.clientY
    }
  }
};
</script>

<style scoped>
</style>
