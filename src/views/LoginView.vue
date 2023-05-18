<template>
  <v-container>
    <h4>LogIn</h4>
    <v-alert
      v-if="warning"
      color="warning"
      icon="$warning"
      title="warning"
      text="Invalid input fields!"
    ></v-alert>
    <br />
    <form>
      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map((e) => e.$message)"
        label="E-mail"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>
      <v-text-field
        v-model="state.password"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        label="Password"
        type="password"
        required
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      ></v-text-field>
      <v-btn
        class="me-4"
        @click="
          v$.$validate();
          submitForm();
        "
        >submit</v-btn
      >
    </form>
  </v-container>
</template>

<script>
import { useStore } from "vuex";
import { reactive, ref, defineComponent } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginView",

  setup(_, context) {
    const emitSubmit = () => {
      context.emit("submit");
    };
    const store = useStore();
    const warning = ref(false);
    const isLoading = ref(false);
    const router = useRouter();
    const initialState = {
      email: "",
      password: "",
    };
    const state = reactive({
      ...initialState,
    });

    const rules = {
      email: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, state);

    async function submitForm() {
      if (v$.value.$error) {
        warning.value = true;
        return;
      } else {
        warning.value = false;
        isLoading.value = true;

        try {
          await store.dispatch("auth/login", state);
          router.push("/");
        } catch (error) {
          if (error) {
            warning.value = true;
          } else {
            warning.value = false;
          }
        } finally {
          isLoading.value = false;
          emitSubmit()
        }
      }
    }

    return { state, v$, submitForm, warning };
  },
});
</script>
