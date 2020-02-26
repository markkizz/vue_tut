<template>
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