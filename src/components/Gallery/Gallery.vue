<template>
  <v-container class="pa-0">

  <v-col v-if="mdAndUp">
    <img
      :src="productImages[selectedId].img"
      alt=""
      class="product-img"
      @click="showingOverlay"
    />
    <div class="d-flex pa-0">
      <div v-for="productImg in productImages" :key="productImg.id" class="thumb-container">
        <img
          :src="productImg.thumbnail"
          :class="{
            'selected-thumb': isSelectedThumb && selectedId === productImg.id,
          }"
          class="product-thumbnail my-5 mr-4"
          @click="selectedImgId(productImg.id)"
        />
      </div>
    </div>
  </v-col>

  <div
    class="overlay"
    :class="{ 'hide-overlay': hideOverlay }"
    v-if="showOverlay && mdAndUp"
  >
    <v-col>
      <img class="close-icon" @click="hidingOverlay" :src="CloseIcon" alt="" />
      <v-container class="overlay-container">
        <Carousel
          id="gallery"
          :items-to-show="1"
          :wrap-around="false"
          v-model="selectedId"
        >
          <Slide v-for="productImage in productImages" :key="productImage.id">
            <img
              class="carousel__item_gallery"
              :src="productImage.img"
              alt=""
            />
          </Slide>
        </Carousel>

        <Carousel
          id="thumbnails"
          :items-to-show="4"
          :wrap-around="true"
          v-model="selectedId"
          ref="carousel"
        >
          <Slide v-for="productImage in productImages" :key="productImage.id">
            <img
              class="carousel__item"
              @click="selectedImgId(productImage.id - 1)"
              :src="productImage.thumbnail"
              alt=""
            />
          </Slide>
        </Carousel>
      </v-container>
    </v-col>
  </div>

  <div class="mobile-carousel">
    <v-carousel v-if="mdAndDown" height="20rem" hide-delimiters>
      <v-carousel-item
        v-for="productImage in productImages"
        :src="productImage.img"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</v-container>

</template>
<script lang="ts" setup>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import { productImages } from "@/TypesAndData/Data";
import { ref } from "vue";
import CloseIcon from "@/assets/icon-close.svg";
import { useDisplay } from "vuetify";
const { mdAndDown, mdAndUp } = useDisplay();

let selectedId = ref<number>(0);
let showOverlay = ref<boolean>(false);
let hideOverlay = ref<boolean>(false);

let isSelectedThumb = ref<boolean>(false);

const showingOverlay = () => {
  showOverlay.value = true;
  hideOverlay.value = false;
};
const hidingOverlay = () => {
  hideOverlay.value = true;
};
const selectedImgId = (id: number) => {
  selectedId.value = id;

  isSelectedThumb.value = true;
};
</script>
<style scoped lang="scss">
* {
  border: 1px solid red;
}
.product-img {
  width: 450px;
  border-radius: 1rem;
  cursor: pointer;
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
.overlay {
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
.hide-overlay {
  display: none; /* Hidden by default */
}
.close-icon {
  margin-left: 73%;
  width: 1rem;
}
.overlay-container {
  position: absolute;
  padding: 0;
  top: 5%;
  width: 52%;
  left: 25%;
}
.carousel__item_gallery {
  height: 40rem;
}
.carousel__item {
  margin-top: 1rem;
}
.overlay-thumb {
  position: absolute;
  top: 75%;
  left: 40%;
}
</style>
