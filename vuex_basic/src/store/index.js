import Vue from 'vue'
import Vuex from 'vuex'
import registrations from './modules/registrations'
import restaurants from './modules/restaurants'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    registrations,
    restaurants
  }
})

export default store