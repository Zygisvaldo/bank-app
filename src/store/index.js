import { createStore } from "vuex";

import authModule from "./modules/authentication/index.js";
import userAccountModule from "./modules/userAccount/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    user: userAccountModule,
  },
});

export default store;
