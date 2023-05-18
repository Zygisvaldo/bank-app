<template>
  <nav>
    <v-toolbar flat app>
      <v-btn icon="mdi-menu" @Click="toogleNavigation"></v-btn>
      <v-toolbar-title @Click="goHome" class="text-uppercase grey--text">
        <span>Bankist</span>
        <Span class="font-weight-light">app</Span>
      </v-toolbar-title>
      <v-img
        
        src="../../assets/logo.png"
        alt="Logo"
        class="logo"
        height="50"
      />
      <v-spacer></v-spacer>
      <div class="container-width">
        <SignUpPopup v-if="!userIsLoogedIn" />
        <LogInPopup class="button-width" v-if="!userIsLoogedIn" />
        <v-btn v-else @click="logOut" color="success" class="button-width"
          >Log Out</v-btn
        >
      </div>
    </v-toolbar>
    <v-navigation-drawer app v-model="navIsOpen">
      <v-list>
        <v-list-subheader>Main menu</v-list-subheader>
        <v-conaitner>
          <v-list-item
            v-for="selection in filteredNavigationOptions"
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
        </v-conaitner>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LogInPopup from "./LogInPopup.vue";
import SignUpPopup from "./SingUpPopup.vue";
export default {
  components: {
    LogInPopup,
    SignUpPopup,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const userIsLoogedIn = computed(function () {
      return store.getters["auth/isLoggedIn"];
    });
    function goHome() {
      router.push("/");
    }
    const navigationOptionsGeneral = reactive([
      {
        icon: "mdi-home",
        text: "Home",
        route: "/",
        showWhenUserLoggedIn: true,
      },
      {
        icon: "mdi-import",
        text: "Log In",
        route: "/login",
        showWhenUserLoggedIn: false,
      },
      {
        icon: "mdi-import",
        text: "Sign Up",
        route: "/signup",
        showWhenUserLoggedIn: false,
      },
      {
        icon: "mdi-account",
        text: "My Account",
        route: "/account",
        showWhenUserLoggedIn: true,
      },
    ]);

    const filteredNavigationOptions = computed(() => {
      return userIsLoogedIn.value
        ? navigationOptionsGeneral.filter((item) => item.showWhenUserLoggedIn)
        : navigationOptionsGeneral.filter((item) => !item.showWhenUserLoggedIn);
    });

    const navIsOpen = ref(false);
    function toogleNavigation() {
      return (navIsOpen.value = !navIsOpen.value);
    }
    function logOut() {
      router.push("/");
      store.dispatch("auth/logout");
    }
    return {
      toogleNavigation,
      navIsOpen,
      navigationOptionsGeneral,
      filteredNavigationOptions,
      userIsLoogedIn,
      logOut,
      goHome,
    };
  },
};
</script>

<style scoped>
.container-width {
  width: 180px;
  display: flex;
  align-items: center;
}

.button-width {
  flex: 1;
}
</style>
