import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
import { ref } from "vue";

export default {
  namespaced: true,
  state() {
    const movements = ref([]);
    return {
      movements,
    };
  },
  mutations,
  actions,
  getters,
};
