/**
 * Getter is like a selector in reselect of react redux
 * state => state.feild
 */

const getters = {
  food(state) {
    return state.foodLists
  },
  restaurant: state => state.restaurantLists
}

export default getters