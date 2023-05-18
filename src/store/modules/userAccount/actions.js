import axios from "axios";

export default {
  async loadUserMovements(context) {
    try {
      const userId = context.rootState.auth.userId;
      const token = context.rootState.auth.token;
      const url = `https://bankistvue-default-rtdb.firebaseio.com/bankists/${userId}.json?auth=${token}`;
      const response = await axios(url);
      console.log(response);
      let payload = response.data;
      if (payload === null) {
        return;
      }
      context.commit("setUserMovements", payload);
    } catch (error) {
      console.log(error);
    }
  },
  async transferMonay(context, payload) {
    try {
      const date = new Date();
      const transerData = {
        date: date,
        amount: payload.amount,
        transferTo: payload.transferTo,
      };
      const token = context.rootGetters["auth/token"];
      const userId = context.rootGetters["auth/userId"];
      const response = await axios.post(
        `https://bankistvue-default-rtdb.firebaseio.com/bankists/${userId}.json?auth=${token}`,
        { amount: transerData.amount, date: transerData.date }
      );
      console.log(response);
      await context.dispatch("loadUserMovements");
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  },
  async getLoan(context, payload) {
    const loanDetails = {
      amount: payload.amount,
      transferTo: context.rootGetters["auth/userId"],
    };
    await context.dispatch("transferMonay", loanDetails);
    await context.dispatch("loadUserMovements");
  },
};
