<template>
  <v-card class="bg-light-blue-accent-3">
    <v-card-title class="headline ma-2">Account balance</v-card-title>
    <v-card-text class="card-text ma-2">
      <v-row class="justify-end">
        <span>As of {{ today }}</span>
        <v-spacer></v-spacer>
        <span class="right text-h5">{{ balance }} $</span>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { useStore } from "vuex";
import { computed, watch } from "vue";

export default {
  setup() {
    const store = useStore();
    const today = new Date().toLocaleString();
    const balance = computed(function () {
      return store.getters["user/userBalance"];
    });
    watch(balance, function () {
      store.dispatch("user/loadUserMovements");
    });

    return { today, balance };
  },
};
</script>
