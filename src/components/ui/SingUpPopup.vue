<template>
  <div class="text-center">
    <v-btn color="success" @click="dialog = true" width="auto">Sign Up</v-btn>
    <v-dialog width="550" v-model="dialog">
      <v-card>
        <v-card-text>
          <SignupView @submit="dialog = false" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SignupView from "@/views/SignupView.vue";
import { ref } from "vue";
export default {
  components: {
    SignupView,
  },
  setup() {
    const dialog = ref(false);
    return { dialog };
  },
};
</script>
