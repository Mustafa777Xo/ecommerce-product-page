<template>
  <div class="container">
    <div class="icon" @click="decrement">
      <img :src="MinusIcon" />
    </div>

    <div class="counter">
      <p>
        {{ quantity }}
      </p>
    </div>
    <div class="icon" @click="increment">
      <img :src="PlusIcon" alt="" srcset="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import PlusIcon from "@/assets/icon-plus.svg";
import MinusIcon from "@/assets/icon-minus.svg";
import { provide, ref } from "vue";
import { useAppStore } from "@/store/app";
const store = useAppStore();

let quantity = ref<number>(0);

function increment() {
  quantity.value++;
  store.setQuatity(quantity.value);
}
function decrement() {
  if (quantity.value > 0) {
    quantity.value--;
    store.setQuatity(quantity.value);
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: $Light-grayish-blue;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 1.2rem 0.7rem;
  width: 50%;
  @media only screen and (max-width: 768px) {
    gap: 8rem;
    padding: 1.2rem 1rem;
  }
  @media only screen and (max-width: 390px) {
    gap: 8rem;
    width: 100%;
  }
}
.icon {
  cursor: pointer;
}
</style>
