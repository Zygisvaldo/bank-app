<template>
  <v-card class="mx-auto" height="300" width="300">
    <v-card-title class="headline">Transfer money</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="makeTransfer">
        <v-text-field
          label="Transfer to"
          v-model="transferTo"
          outlined
          placeholder="Transfer to"
        ></v-text-field>
        <v-text-field
          label="Amount"
          v-model="amount"
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
    const transferTo = ref("");
    const amount = ref("");
    async function makeTransfer() {
      if (amount.value === "" || transferTo.value === "") {
        return;
      }
      const payload = { amount: -amount.value, transferTo: transferTo.value };
      await store.dispatch("user/transferMonay", payload);
      amount.value = "";
      transferTo.value = "";
    }

    return { store, transferTo, amount, makeTransfer };
  },
};
</script>
