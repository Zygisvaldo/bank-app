<template>
  <v-card class="mx-auto" height="200" width="300">
    <v-card-title class="headline">Request loan</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="requestLoan">
        <v-text-field
          label="Amount"
          v-model.number="amount"
          outlined
          placeholder="Amount"
          type="number"
        ></v-text-field>
        <v-btn color="primary" type="submit">Submit</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const amount = ref("");
    function requestLoan() {
      if (amount.value === "") {
        return;
      }
      store.dispatch("user/getLoan", { amount: amount.value });
      amount.value = "";
    }

    return { amount, requestLoan };
  },
};
</script>
