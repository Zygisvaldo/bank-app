<template>
  <SnakBar color="success" />
  <section>
    <TopPage />
  </section>
  <section id="section--1">
    <FirstSection />
  </section>
  <section id="section--2">
    <SecondSection />
  </section>
  <section class="slider " id="section--3">
    <ThirdSection />
  </section>
  <section class="section--sign-up ma-0 pa-4">
    <SignUpSection />
  </section>
  <footer class="footer ma-0 pa-1">
    <FooterSection />
  </footer>
</template>

<script>
import SnakBar from "@/components/ui/SnakBar.vue";
import TopPage from "../components/homePages/TopPage.vue";
import FirstSection from "../components/homePages/FirstSection.vue";
import SecondSection from "../components/homePages/SecondSection.vue";
import ThirdSection from "../components/homePages/ThirdSection.vue";
import FooterSection from "../components/homePages/FooterSection.vue";
import SignUpSection from "../components/homePages/SignUpSection.vue";

export default {
  components: {
    TopPage,
    SnakBar,
    FirstSection,
    SecondSection,
    ThirdSection,
    FooterSection,
    SignUpSection,
  },
  setup() {
    return {};
  },
};
</script>
