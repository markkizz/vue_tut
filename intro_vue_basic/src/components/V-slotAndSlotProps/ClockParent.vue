<template>
  <!-- 
    v-slot for recieve data from Child component slot props will send All with object you should destructering it
  -->
  <ClockChild v-slot="{time}">Parent clock: {{time}}</ClockChild>
</template>

<script>
import ClockChild from "./ClockChild";

export default {
  name: "Clock",
  components: {
    ClockChild
  }
};
</script>

<style>
</style>