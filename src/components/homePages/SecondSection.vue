<template>
  <div class="section my-0 py-15">
    <div class="section__title mb-0 py-0">
      <h2 class="section__description">Operations</h2>
      <h3 class="section__header ">
        Everything as simple as possible, but no simpler.
      </h3>
    </div>
    <section class="container mt-0 mb-4 pt-0 pb-4">
      <div class="operations">
        <div class="operations__tab-container">
          <button
            @click="setActiveClass(1)"
            :class="{
              'btn operations__tab': true,
              'operations__tab--1': true,
              'operations__tab--active': isActive1,
            }"
            :data-tab="1"
          >
            <span>01</span>Instant Transfers
          </button>
          <button
            @click="setActiveClass(2)"
            :class="{
              'btn operations__tab': true,
              'operations__tab--2': true,
              'operations__tab--active': isActive2,
            }"
            data-tab="2"
          >
            <span>02</span>Instant Loans
          </button>
          <button
            @click="setActiveClass(3)"
            :class="{
              'btn operations__tab': true,
              'operations__tab--3': true,
              'operations__tab--active': isActive3,
            }"
            data-tab="3"
          >
            <span>03</span>Instant Closing
          </button>
        </div>
        <div
          v-show="isActive1"
          :class="{
            operations__content: true,
            'operations__content--1': true,
            'operations__content--active': isActive1,
          }"
        >
          <div class="operations__icon operations__icon--1">
            <v-icon
              size="large"
              color="yellow-darken-2"
              icon="mdi-upload"
            ></v-icon>
          </div>
          <h5 class="operations__header">
            Tranfser money to anyone, instantly! No fees, no BS.
          </h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cildolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat nonproident, sunt in culpa qui officia deserunt mollit
            anim id estlaborum.
          </p>
        </div>

        <div
          v-show="isActive2"
          :class="{
            operations__content: true,
            'operations__content--2': true,
            'operations__content--active': isActive2,
          }"
        >
          <div class="operations__icon operations__icon--2">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-home"
            ></v-icon>
          </div>
          <h5 class="operations__header">
            Buy a home or make your dreams come true, with instant loans.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            adminim veniam, quis nostrud exercitation ullamco laboris nisi
            utaliquip ex ea commodo consequat.
          </p>
        </div>
        <div
          v-show="isActive3"
          :class="{
            operations__content: true,
            'operations__content--3': true,
            'operations__content--active': isActive3,
          }"
        >
          <div class="operations__icon operations__icon--3">
            <v-icon
              size="large"
              color="red-darken-2"
              icon="mdi-account"
            ></v-icon>
          </div>
          <h5 class="operations__header">
            No longer need your account? No problem! Close it instantly.
          </h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
            quiofficia deserunt mollit anim id est laborum. Ut enim ad minim
            veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            eacommodo consequat.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isActive1 = ref(true);
    const isActive2 = ref(false);
    const isActive3 = ref(false);

    function setActiveClass(divNumber) {
      if (divNumber === 1) {
        isActive1.value = !isActive1.value;
        isActive2.value = false;
        isActive3.value = false;
      } else if (divNumber === 2) {
        isActive2.value = !isActive2.value;
        isActive1.value = false;
        isActive3.value = false;
      } else if (divNumber === 3) {
        isActive3.value = !isActive3.value;
        isActive2.value = false;
        isActive1.value = false;
      }
    }
    return { setActiveClass, isActive1, isActive2, isActive3 };
  },
};
</script>
<style scoped>
.operations {
  transform: scale(0.8);
  max-width: 100rem;
  margin: 8rem auto 0 auto;
  background-color: #fff;
}
.operations__tab-container {
  display: flex;
  justify-content: center;
}

.operations__tab {
  margin-right: 2.5rem;
  transform: translateY(-50%);
}

.operations__tab span {
  margin-right: 1rem;
  font-weight: 600;
  display: inline-block;
}

.operations__tab--1 {
  background-color: var(--color-secondary);
}

.operations__tab--1:hover {
  background-color: var(--color-secondary-darker);
}

.operations__tab--3 {
  background-color: var(--color-tertiary);
  margin: 0;
}

.operations__tab--3:hover {
  background-color: var(--color-tertiary-darker);
}

.operations__tab--active {
  transform: translateY(-66%);
}

.operations__content {
  display: none;

  /* JUST PRESENTATIONAL */
  font-size: 1.7rem;
  padding: 2.5rem 7rem 6.5rem 7rem;
}

.operations__content--active {
  display: grid;
  grid-template-columns: 7rem 1fr;
  column-gap: 3rem;
  row-gap: 0.5rem;
  height: 300px;
}

.operations__header {
  font-size: 2.25rem;
  font-weight: 500;
  align-self: center;
}

.operations__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
}

.operations__icon svg {
  height: 2.75rem;
  width: 2.75rem;
}

.operations__content p {
  grid-column: 2;
}

.operations__icon--1 {
  background-color: var(--color-secondary-opacity);
}
.operations__icon--2 {
  background-color: var(--color-primary-opacity);
}
.operations__icon--3 {
  background-color: var(--color-tertiary-opacity);
}
.operations__icon--1 svg {
  fill: var(--color-secondary-darker);
}
.operations__icon--2 svg {
  fill: var(--color-primary);
}
.operations__icon--3 svg {
  fill: var(--color-tertiary);
}
</style>
