<template>
  <v-card class="mx-auto" width="1000">
    <v-row no-gutters align="center" justify="center" style="width;: 100%">
      <v-col cols="12" lg="4" xl="4">
        <v-row no-gutters>
          <div class="component-container">
            <BankLoan />
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4" xl="4">
        <v-row no-gutters>
          <div class="component-container">
            <BankTransfer />
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" lg="4" xl="4">
        <v-row no-gutters>
          <div class="component-container">
            <BankAccountClose />
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
  <br />
  <v-card>
    <v-btn
      color="primary"
      @click="
        loadData();
        toggleMovements();
      "
      >{{ buttonName }} account movements</v-btn
    >
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Date of transfer</th>
          <th class="text-left">Amount</th>
        </tr>
      </thead>
      <tbody v-if="show">
        <tr v-for="item in userMovements" :key="item.name">
          <td>{{ item.date }}</td>
          <td>{{ item.amount }} €</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import BankLoan from "../components/userAccountOptions/BankLoan.vue";
import BankTransfer from "../components/userAccountOptions/BankTransfer.vue";
import BankAccountClose from "../components/userAccountOptions/BankAccountClose.vue";
export default {
  components: {
    BankLoan,
    BankTransfer,
    BankAccountClose,
  },
  setup() {
    const show = ref(false);
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

    const itemsPerPage = ref(10);
    const headers = [
      { title: "Date of transfer", key: "date" },
      { title: "Amount", key: "amount" },
    ];
    const store = useStore();

    function loadData() {
      return store.dispatch("user/loadUserMovements");
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
    };
  },
};
</script>
<style scoped>
.component-container {
  margin: 10px;
}
</style>
