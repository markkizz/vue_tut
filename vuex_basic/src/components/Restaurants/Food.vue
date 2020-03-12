<template>
  <div>
    <h3>Favorite food</h3>
    {{debug(food)}}
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  methods: {
    debug(e) {
      console.log(e)
    }
  },
  computed: {
    ...mapState(['food']),
    // log() {
    //   return console.log({...mapState(['food'])})
    // }
  }, 
}
</script>

<style>

</style>