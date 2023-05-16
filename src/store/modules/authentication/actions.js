import axios from "axios";
let timer;

export default {
  async login(context, payload) {
    console.log(payload);
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    const API_KEY = "AIzaSyAdSQlSdeBG1p3ZQN9_XCNsx159YFRlZ1E";
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    if (mode === "signup") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }
    try {
      const response = await axios.post(url, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });

      const responseData = response.data;
      console.log(responseData);

      const expiresIn = +responseData.expiresIn * 1000;
      //const expiresIn = 2500;
      const expirationDate = new Date().getTime() + expiresIn;

      // storing in localstorage for keeping loggedIn when reloaded
      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("tokenExpiration", expirationDate);

      timer = setTimeout(function () {
        console.log('logging out');
        context.dispatch("autoLogout");
      }, expiresIn);

      //console.log(responseData);
      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        loggedIn: true,
      });
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response.data.error.message || "Failed to authenticate.";
      throw new Error(errorMessage);
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function (context) {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        loggedIn: true,
      });
      console.log("lol");
    }
  },

  logout(context) {
    clearTimeout(timer);
    context.commit("setUser", {
      token: null,
      userId: null,
      loggedIn: false,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
