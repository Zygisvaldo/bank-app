<template>
  <header class="header container">
    <div class="header__title">
      <h1>
        When
        <!-- Green highlight effect -->
        <span class="highlight">Banking</span>
        meets<br />
        <span class="highlight">minimalist</span>
      </h1>
      <h4>A simpler banking experience for a simpler life.</h4>
      <button class="btn--text btn--scroll-to">Learn more &DownArrow;</button>
      <img :src="heroImage" class="header__img" alt="Minimalist bank items" />
    </div>
  </header>
</template>
<script>
import heroImage from "@/assets/img/hero.png";
export default {
  setup() {
    return { heroImage };
  },
};
</script>

<style scoped>
.header__title {
  flex: 1;
  max-width: 115rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  row-gap: 3rem;
  align-content: center;
  justify-content: center;
  align-items: start;
  justify-items: start;
  margin-bottom: -20rem;
}
.header__img {
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / span 4;
  transform: translateY(-6rem);
}

.highlight {
  position: relative;
}

.highlight::after {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.7;
  transform: scale(1.07, 1.05) skewX(-15deg);
  background-image: var(--gradient-primary);
}
</style>
