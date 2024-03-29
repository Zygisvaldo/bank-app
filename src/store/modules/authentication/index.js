import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
      loggedIn: false,
    };
  },
  getters,
  mutations,
  actions,
};
