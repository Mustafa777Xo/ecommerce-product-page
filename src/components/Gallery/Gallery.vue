<template>
  <v-col>
    <img :src="productImages[selectedId].img" alt="" class="product-img" />
    <div class="d-flex">
      <div v-for="productImg in productImages" class="thumb-container">
        <img
          :src="productImg.thumbnail"
          alt=""
          :class="{
            'selected-thumb': isSelectedThumb && selectedId === productImg.id,
          }"
          class="product-thumbnail my-5 mr-4"
          @click="selectedImgId(productImg.id)"
        />
      </div>
    </div>
  </v-col>
</template>
<script lang="ts" setup>
import { productImages } from "@/TypesAndData/Data";
import { ref } from "vue";

let selectedId = ref<number>(0);
let isSelectedThumb = ref<boolean>(false);
const selectedImgId = (id: number) => {
  selectedId.value = id;
  isSelectedThumb.value = true;
};
</script>
<style scoped lang="scss">
.product-img {
  width: 450px;
  border-radius: 1rem;
}
.product-thumbnail {
  width: 100px;
  border-radius: 1rem;
}
.product-thumbnail:hover {
  opacity: 0.8;
}
.selected-thumb {
  border: 3px $Orange solid;
  opacity: 0.8;
}
</style>
