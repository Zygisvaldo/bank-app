<template>
  <v-snackbar
    @userLoggedIn="showSnackBar"
    top
    v-model="snackbar"
    :timeout="timeout"
  >
    {{ text }}

    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const snackbar = ref(false);
    const timeout = 3000;
    const text = ref("");
    const store = useStore();
    const userLoggedIn = computed(function () {
      return store.getters["auth/isLoggedIn"];
    });
    console.log(userLoggedIn.value);

    watch(userLoggedIn, function (oldValue, newValue) {
      console.log(newValue);
      console.log(oldValue);
      if (userLoggedIn.value) {
        text.value = "Logged In Successfully";
        showSnackBar();
      } else {
        text.value = "Logged Out Successfully";
        showSnackBar();
      }
    });
    function showSnackBar() {
      snackbar.value = true;
      setTimeout(function () {
        snackbar.value = false;
      }, timeout);
    }

    return { snackbar, timeout, showSnackBar, userLoggedIn, text };
  },
};
</script>
