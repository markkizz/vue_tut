/**
 * mutation is like a reducer or setter in OOP
 */

const mutations = {
  addFood(state, food) {
    // assign state
    state.foodLists = [...state.foodLists, food]
  },
  addRestaurant(state, restaurant) {
    state.restaurantLists = [...state.restaurantLists, restaurant]
  },
  increasing(state, amount) {
    state.couter += amount
  }
}

export default mutations
