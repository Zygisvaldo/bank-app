<template>
  <section class="my-0 py-0">
    <div class="section__title">
      <h3 class="section__header">
        The best day to join Bankist was one year ago. The second best is today!
      </h3>
    </div>
    <button class="btn btn--show-modal container" @click="signUp">
      Open your free account today!
    </button>
  </section>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function signUp() {
      router.push("/signup");
    }
    return { signUp };
  },
};
</script>
