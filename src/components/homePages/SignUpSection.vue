<template>
  <section class="my-4 pb-4">
    <div class="section__title" style="width: 800px">
      <h3 class="section__header" style="font-size: 42px">
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

<style scoped>
section {
  transform: scale(0.8);
}
</style>
