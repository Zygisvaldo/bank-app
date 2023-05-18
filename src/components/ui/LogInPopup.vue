<template>
  <div class="text-center">
    <v-btn color="success" @click="dialog = true" width="auto">Log In</v-btn>
    <v-dialog width="550" v-model="dialog">
      <v-card>
        <v-card-text>
          <LoginView @submit="dialog = false" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LoginView from "@/views/LoginView.vue";
import { ref } from "vue";
export default {
  components: {
    LoginView,
  },
  setup() {
    const dialog = ref(false);
    return { dialog };
  },
};
</script>
