<template>
  <nav>
    <v-toolbar flat app>
      <v-btn icon="mdi-menu" @Click="toogleNavigation"></v-btn>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Bankist</span>
        <Span class="font-weight-light">app</Span>
      </v-toolbar-title>
      <v-img src="../../assets/logo.png" alt="Logo" class="logo" height="50" />
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer app v-model="navIsOpen">
      <v-list v-if="!userIsLoogedIn">
        <v-list-subheader>Main menu</v-list-subheader>
        <v-list-item
          v-for="selection in navigationOptionsGeneral"
          :key="selection.text"
          router
          :to="selection.route"
        >
          <v-list-item-tile-action>
            <v-icon>{{ selection.icon }}</v-icon>
          </v-list-item-tile-action>
          <v-list-tile-content>
            <v-list-item-tile-title>{{
              selection.text
            }}</v-list-item-tile-title>
          </v-list-tile-content>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-subheader>Main menu</v-list-subheader>
        <v-list-item
          v-for="selection in navigationOptionsLoggedIn"
          :key="selection.text"
          router
          :to="selection.route"
        >
          <v-list-item-tile-action>
            <v-icon>{{ selection.icon }}</v-icon>
          </v-list-item-tile-action>
          <v-list-tile-content>
            <v-list-item-tile-title>{{
              selection.text
            }}</v-list-item-tile-title>
          </v-list-tile-content>
        </v-list-item>
        <v-btn @click="logOut">logout</v-btn>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const userIsLoogedIn = computed(function () {
      return store.getters["auth/isLoggedIn"];
    });
    const navigationOptionsGeneral = reactive([
      {
        icon: "mdi-home",
        text: "Home",
        route: "/",
      },
      {
        icon: "mdi-import",
        text: "Log In",
        route: "/login",
      },
      {
        icon: "mdi-import",
        text: "Sign Up",
        route: "/signup",
      },
    ]);
    const navigationOptionsLoggedIn = reactive([
      {
        icon: "mdi-home",
        text: "Home",
        route: "/",
      },
      {
        icon: "mdi-account",
        text: "My Account",
        route: "/account",
      },
    ]);
    const navIsOpen = ref(false);
    function toogleNavigation() {
      return (navIsOpen.value = !navIsOpen.value);
    }
    function logOut() {
      store.dispatch("auth/logout");
    }

    return {
      toogleNavigation,
      navIsOpen,
      navigationOptionsGeneral,
      navigationOptionsLoggedIn,
      userIsLoogedIn,
      logOut,
    };
  },
};
</script>
