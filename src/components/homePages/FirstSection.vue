<template>
  <div class="section__title content">
    <h2 class="section__description">Features</h2>
    <h3 class="section__header">
      Everything you need in a modern bank and more.
    </h3>
    <br />
    <div class="features">
      <v-img
        :lazy-src="digitalLazy"
        :src="digital"
        alt="Computer"
        :class="{ features__img: true, 'lazy-img': false }"
      />
      <div class="features__feature">
        <div class="features__icon"></div>
        <h5 class="features__header">100% digital bank</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
          debitis ducimus.
        </p>
      </div>

      <div class="features__feature">
        <div class="features__icon"></div>
        <h5 class="features__header">Watch your money grow</h5>
        <p>
          Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
          inventore ab? Nulla incidunt eius numquam sequi iste pariatur
          quibusdam!
        </p>
      </div>
      <v-img
        :lazy-src="growLazy"
        :src="grow"
        alt="Plant"
        :class="{ features__img: true, 'lazy-img': false }"
      />

      <v-img
        class="mx-auto"
        :lazy-src="CreditCardLazyImg"
        :src="CreditCardImg"
        alt="Credit card"
        :class="{ features__img: true, 'lazy-img': false }"
      />
      <div class="features__feature">
        <div class="features__icon"></div>
        <h5 class="features__header">Free debit card included</h5>
        <p>
          Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
          eveniet consequatur odit quam quos possimus assumenda dicta fuga
          inventore ab.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CreditCardImg from "@/assets/img/card.jpg";
import CreditCardLazyImg from "@/assets/img/card-lazy.jpg";
import grow from "@/assets/img/grow.jpg";
import growLazy from "@/assets/img/grow-lazy.jpg";
import digital from "@/assets/img/digital.jpg";
import digitalLazy from "@/assets/img/digital-lazy.jpg";
export default {
  setup() {
    return {
      CreditCardImg,
      CreditCardLazyImg,
      grow,
      growLazy,
      digital,
      digitalLazy,
    };
  },
};
</script>

