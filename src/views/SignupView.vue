<template>
  <v-container>
    <h4>SignUp</h4>
    <v-alert
      v-if="success"
      color="success"
      icon="$success"
      title="Success"
      text="You account has been registered! You are being forwarded to LogIn page."
    ></v-alert>
    <v-alert
      v-if="warning"
      color="warning"
      icon="$warning"
      title="warning"
      text="Please fill the form correctly!"
    ></v-alert>
    <v-alert
      v-if="singUpError"
      color="error"
      icon="$warning"
      title="Error"
      :text="`${state.email} - Such email already exists!`"
    ></v-alert>
    <br />
    <form>
      <v-text-field
        v-model="state.firstName"
        :error-messages="v$.firstName.$errors.map((e) => e.$message)"
        :counter="10"
        label="First Name"
        required
        @input="v$.firstName.$touch"
        @blur="v$.firstName.$touch"
      ></v-text-field>
      <v-text-field
        v-model="state.lastName"
        :error-messages="v$.lastName.$errors.map((e) => e.$message)"
        :counter="10"
        label="Last Name"
        required
        @input="v$.lastName.$touch"
        @blur="v$.lastName.$touch"
      ></v-text-field>

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
      <v-text-field
        v-model="state.password2"
        :error-messages="v$.password2.$errors.map((e) => e.$message)"
        label="Repeat password"
        type="password"
        required
        @input="v$.password2.$touch"
        @blur="v$.password2.$touch"
      ></v-text-field>

      <v-checkbox
        v-model="state.checkbox"
        :error-messages="v$.checkbox.$errors.map((e) => e.$message)"
        label="Do you agree with terms and conditions?"
        required
        @change="v$.checkbox.$touch"
        @blur="v$.checkbox.$touch"
      ></v-checkbox>

      <v-btn
        class="me-4"
        @click="
          v$.$validate();
          submitForm();
        "
        >Sign Up</v-btn
      >

      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>
<script>
import { reactive, ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const success = ref(false);
    const warning = ref(false);
    const singUpError = ref(false);

    const initialState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      checkbox: null,
    };

    const state = reactive({
      ...initialState,
    });

    watch(state, function () {
      warning.value = false;
      singUpError.value = false;
      v$.value.$reset();
    });

    const rules = {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: {
        required,
        validate: (value) => value.length >= 6 || null,
      },
      password2: {
        required,
        $message: "Passwords do not match",
        passwordsMatch: () => state.password === state.password2,
      },
      checkbox: { required },
    };

    const v$ = useVuelidate(rules, state);

    function clear() {
      v$.value.$reset();
      warning.value = false;
      singUpError.value = false;
      for (const [key, value] of Object.entries(initialState)) {
        state[key] = value;
      }
    }

    async function submitForm() {
      if (v$.value.$error) {
        warning.value = true;
        return;
      } else {
        warning.value = false;
        singUpError.value = false;
        try {
          await store.dispatch("auth/signup", state);
          router.replace("/");
        } catch (error) {
          singUpError.value = true;
        }
      }
    }

    function getErrorMessages(field) {
      const errors = v$[field].$errors;
      return errors.map((error) => error.$message);
    }
    return {
      getErrorMessages,
      state,
      clear,
      v$,
      submitForm,
      success,
      warning,
      singUpError,
    };
  },
};
</script>
