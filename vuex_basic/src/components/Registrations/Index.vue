<template>
  <div>
    <Registration @userRegistered="userRegistered" :users="unregisteredUsers"></Registration>
    <Registrations @userUnregistered="userUnregistered" :registrations="registrations"></Registrations>
  </div>
</template>

<script>
import Registration from "./Registration";
import Registrations from "./Registrations";

export default {
  computed: {
    unregisteredUsers() {
      return this.users.filter(user => {
        return !user.registered;
      });
    }
  },
  methods: {
    userRegistered(user) {
      const date = new Date();
      this.registrations.push({
        userId: user.id,
        name: user.name,
        date: date.getMonth() + "/" + date.getDay()
      });
    },
    userUnregistered(registration) {
      const user = this.users.find(user => {
        return user.id == registration.userId;
      });
      user.registered = false;
      this.registrations.splice(this.registrations.indexOf(registration), 1);
    }
  },
  components: {
    Registration,
    Registrations
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
