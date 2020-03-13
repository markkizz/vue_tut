<template>
  <div>
    <h3>Favorite food</h3>
    
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('restaurants')

export default {
  methods: {
    debug(e) {
      console.log(e)
    }
  },
  computed: {
    ...mapState({
      food: state => state.foodLists
    })
    // ...mapState('restaurants', ['foodLists'])
  }
  ,
    // log() {
    //   return console.log({...mapState(['food'])})
    // }
  
}
</script>

<style>

</style>