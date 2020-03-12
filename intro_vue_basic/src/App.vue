<template>
  <div id="app">
    <!-- <BasicVue /> -->
    <!-- <Shopping /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BasicVue from './components/basicvue/Index'
// import Shopping from './components/shopping/Index'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // BasicVue
    // Shopping
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>