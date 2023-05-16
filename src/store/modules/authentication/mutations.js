export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
    state.loggedIn = payload.loggedIn;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
    state.loggedIn = false;
  },
};
