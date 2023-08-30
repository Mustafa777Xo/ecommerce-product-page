<template>
  <v-col>
    <img
      :src="productImages[selectedId].img"
      alt=""
      class="product-img"
      @click="showingOverlay"
    />
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
  <div id="overlay" v-if="showOverlay">
    <v-container class="overlay-container">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="productImage in productImages"
          :src="productImages[selectedId].img"
          class="cur"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
    <div class="d-flex overlay-thumb">
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
  </div>
</template>
<script lang="ts" setup>
import { productImages } from "@/TypesAndData/Data";
import { ref } from "vue";

let selectedId = ref<number>(0);
let showOverlay = ref<boolean>(false);

let isSelectedThumb = ref<boolean>(false);

const showingOverlay = () => {
  showOverlay.value = true;
};
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
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.overlay-container {
  position: absolute;
  top: 15%;
  left: 35%;
  width: 33%;
}
.overlay-thumb {
  position: absolute;
  top: 75%;
  left: 40%;
}
</style>
