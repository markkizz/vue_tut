<template>
  <div>
    <h2>this is vslot</h2>
    <CurrentUser v-slot="{user}">
      {{user.firstname}}
    </CurrentUser>
  </div>
</template>

<script>
import CurrentUser from './UserChild'

export default {
  name: 'Vslot',
  components: {
    CurrentUser
  }
}
</script>

<style>

</style>