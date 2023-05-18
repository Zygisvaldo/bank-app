<template>
  <NavigationBar />
  
</template>

<script>
import { ref } from "vue";
import NavigationBar from "../ui/NavigationBar.vue";
export default {
  components: {
    NavigationBar,
  },
  setup() {
    const navIsOpen = ref(false);
    function toogleNavigation() {
      return (navIsOpen.value = !navIsOpen.value);
    }
    return { toogleNavigation, navIsOpen };
  },
};
</script>
