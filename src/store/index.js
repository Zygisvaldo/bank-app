import { createStore } from "vuex";

import authModule from "./modules/authentication/index.js";

const store = createStore({
  modules: {
    auth: authModule,
  },
});

export default store;
