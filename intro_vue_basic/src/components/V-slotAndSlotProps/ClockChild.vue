<template>
  <div>
    <!-- <h3>Clock: {{timeNow}}</h3> -->
    <!-- 
      open data for parent accessing to Chlid data
      v-bind:PropsName="ComponentData" 
    -->
    <slot :time="timeNow"></slot>
  </div>
</template>

<script>
function getCurrentTime() {
  return new Date().toLocaleTimeString('TH')
}

export default {
  data() {
    return {
      timeNow: getCurrentTime()
    }
  },
  mounted() {
    this.ref = setInterval(() => {
      this.timeNow = getCurrentTime()
    }, 1000);
  },
  destroyed() {
    this.timeNow = clearInterval(this.ref)
  },
}
</script>

<style>

</style>