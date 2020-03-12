<template>
  <div>
    <h1>Restaurant</h1>
    <Food />
    <Restaurant />
    <Display />
  </div>
</template>

<script>
import Food from './Food'
import Display from './Display'
import Restaurant from './Restaurant'

export default {
  components: {
    Food,
    Display,
    Restaurant
  }
}
</script>

<style>

</style>