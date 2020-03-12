<template>
  <span>
    <slot :user="user">
      {{user.lastname}}
    </slot>
  </span>
</template>

<script>
export default {
  data() {
    return {
      user:{
        firstname: 'John',
        lastname: 'Doe'
      }
    }
  },
}
</script>

<style>

</style>