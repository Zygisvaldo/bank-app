export default {
  getUserMovements(state) {
    return state.movements;
  },
  userBalance(state) {
    let balance = 0;
    for (const key in state.movements) {
      balance += state.movements[key].amount;
    }
    return balance;
  },
};
