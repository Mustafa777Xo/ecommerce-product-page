<template>
  <div class="container">
    <div class="minus-icon">
      <img :src="MinusIcon" />
    </div>

    <div class="counter">
      <p>
        {{ conuter }}
      </p>
    </div>
    <div>
      <img :src="PlusIcon" alt="" srcset="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import PlusIcon from "@/assets/icon-plus.svg";
import MinusIcon from "@/assets/icon-minus.svg";
import { ref } from "vue";

let conuter = ref<number>(0);
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
  height: 80%;
  @media only screen and (max-width: 768px) {
    gap: 8rem;
    padding: 1.2rem 1rem;
  }
  @media only screen and (max-width: 390px) {
    gap: 8rem;
    width: 100%;
  }
}
</style>
