<template>
  <div class="d-flex container">
    <div class="mr-10">
      <img :src="MinusIcon" />
    </div>

    <div class="counter mr-10">
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
  padding: 1rem 0.5rem;
  background-color: $Light-grayish-blue;
  border-radius: 0.5rem;
}
</style>
