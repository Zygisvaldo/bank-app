<template>
  <div class="section pt-15 pb-10">
    <div flat class="section__title section__title--testimonials">
      <h2 class="section__description">Not sure yet?</h2>
      <h3 class="section__header">
        Millions of Bankists are already making their lifes simpler.
      </h3>
    </div>
    <br />

    <v-card flat rounded="0">
      <v-window v-model="onboarding">
        <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
          <v-card flat class="d-flex justify-center align-center flex-column">
            <div class="slider">
              <div class="slide slide--1">
                <section
                  class="container d-flex justify-center align-center flex-column"
                >
                  <div class="testimonial">
                    <h5 class="testimonial__header">
                      {{ slides1[n - 1].title }}
                    </h5>
                    <blockquote class="testimonial__text">
                      {{ slides1[n - 1].text }}
                    </blockquote>
                    <address class="testimonial__author">
                      <v-img
                        src="../../assets/img/user-2.jpg"
                        class="testimonial__photo"
                      />
                      <h6 class="testimonial__name">
                        {{ slides1[n - 1].name }}
                      </h6>
                      <p class="testimonial__location">
                        {{ slides1[n - 1].location }}
                      </p>
                    </address>
                  </div>
                </section>
              </div>
            </div>
          </v-card>
        </v-window-item>
      </v-window>
      <v-card-actions class="justify-space-between">
        <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n"
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'text'"
              icon="mdi-record"
              @click="toggle"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const length = ref(3);
    const onboarding = ref(0);
    const slides1 = ref([
      {
        title: "Best financial decision ever!",
        name: "Aarav Lynn",
        location: "San Francisco, USA",
        picture: "../../assets/img/user-1.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusantium quas quisquam non? Quas voluptate nulla minimadeleniti optio ullam nesciunt, numquam corporis et asperioreslaboriosam sunt, praesentium suscipit blanditiis. Necessitatibuid alias reiciendis, perferendis facere pariatur dolore veniamautem esse non voluptatem saepe provident nihil molestiae.",
      },
      {
        title: "Finally free from old-school banks",
        name: "Francisco Gomes",
        location: "Lisbon, Portugal",
        picture: "../../assets/img/user-2.jpg",
        text: "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.",
      },
      {
        title: "The last step to becoming a complete minimalist",
        name: "Miyah Miles",
        location: "London, UK",
        picture: "../../assets/img/user-3.jpg",
        text: "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere",
      },
    ]);

    function next() {
      onboarding.value =
        onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
    }
    function prev() {
      onboarding.value =
        onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
    }

    return { length, onboarding, next, prev, slides1 };
  },
};
</script>
