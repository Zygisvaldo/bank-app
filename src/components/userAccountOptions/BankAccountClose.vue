<template>
  <v-card class="mx-auto" height="200" width="300">
    <v-card-title class="headline">Close account</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="closeAccount">
        <v-text-field
          label="Confirm email"
          v-model="user"
          outlined
          placeholder="Confirm email"
        ></v-text-field>
        <v-btn color="primary" type="submit">Submit</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const user = ref("");
    const pin = ref("");
    const currentUser = computed(function () {
      return store.getters.currentUser;
    });
    function closeAccount() {
      if (user.value === currentUser.value.email) {
        console.log(currentUser.value.email);
        store.dispatch("deleteAccount");
        store.dispatch("logOut");
      } else {
        alert("Enter your user email!");
        user.value = "";
      }
    }
    return { closeAccount, user, pin };
  },
};
</script>
