<template>
  <v-container class="ma-3">
    <v-btn
      class="ma-3"
      @click="
        toggleMovements();
        loadData();
      "
      :loading="loading"
      >{{ buttonName }} account information</v-btn
    >
    <v-card v-if="show" class="ma-3 pa-5"><UserBalance /></v-card>

    <v-card v-if="show" class="ma-3 pa-2">
      <v-row no-gutters>
        <v-col class="ma-4" cols="12" lg="8" xl="8">
          <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="userMovements"
            item-value="name"
            class="elevation-1"
            hide-actions
            hide-default-footer
          >
          </v-data-table>
        </v-col>
        <v-col class="ma-2" cols="8" lg="3" xl="3">
          <v-row class="ma-3" no-gutters>
            <div class="component-container">
              <BankLoan class="bg-green-lighten-3 text-black" />
            </div>
          </v-row>
          <v-row class="ma-3 gray" no-gutters>
            <div class="component-container">
              <BankTransfer class="bg-yellow-lighten-3 text-black" />
            </div>
          </v-row>
          <v-row class="ma-3 gray" no-gutters>
            <div class="component-container">
              <BankAccountClose class="bg-red-lighten-2 text-black" />
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import UserBalance from "../components/userAccountOptions/UserBalance.vue";
import BankLoan from "../components/userAccountOptions/BankLoan.vue";
import BankTransfer from "../components/userAccountOptions/BankTransfer.vue";
import BankAccountClose from "../components/userAccountOptions/BankAccountClose.vue";
export default {
  components: {
    BankLoan,
    BankTransfer,
    BankAccountClose,
    UserBalance,
  },
  setup() {
    const show = ref(false);
    const loading = ref(false);
    const buttonName = computed(function () {
      if (show.value) {
        return "Hide";
      } else {
        return "Show";
      }
    });
    function toggleMovements() {
      show.value = !show.value;
    }
    function tranactionColor(item) {
      if (item < 0) return "red";
      else return "green";
    }
    const itemsPerPage = 12;
    const headers = [
      { title: "Date of transfer", key: "date" },
      { title: "Transaction amount in $", key: "amount" },
    ];
    const store = useStore();

    async function loadData() {
      loading.value = true;
      await store.dispatch("user/loadUserMovements");
      loading.value = false;
      return;
    }
    const userMovements = computed(function () {
      if (store.getters["auth/isLoggedIn"]) {
        const movementsObj = store.getters["user/getUserMovements"];

        return Object.values(movementsObj);
      } else {
        return [];
      }
    });
    console.log(userMovements.value);

    return {
      loadData,
      userMovements,
      headers,
      itemsPerPage,
      show,
      toggleMovements,
      buttonName,
      tranactionColor,
      loading,
    };
  },
};
</script>
