<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("auth/tryLogin");
    });
  },
};
</script>
