export default {
  setUserMovements(state, payload) {
    state.movements = payload;
    console.log(state.movements);
  },
};
