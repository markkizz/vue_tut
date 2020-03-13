<template>
  <div>
    <h3>Favorite food</h3>
    {{debug(restaurant)}}
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('restaurants')

export default {
  methods: {
    debug(e) {
      console.log(e)
    }
  },
  computed: {
    ...mapGetters(['food', 'restaurant']),
    ...mapState(['counter', 'foodLists'])
  }
  ,
    // log() {
    //   return console.log({...mapState(['food'])})
    // }
  mounted() {
  },
}
</script>

<style>

</style>
