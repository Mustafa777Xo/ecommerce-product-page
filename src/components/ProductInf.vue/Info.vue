<template>
  <div class="d-flex flex-column main-col">
    <p class="small-title">SNEAKER COMPANY</p>
    <p class="big-title">Fall Limited Edition Sneakers</p>
    <p class="main-body my-4">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything the
      weather can offer.
    </p>
    <div class="d-flex">
      <p class="big-title">$125.00</p>
      <div class="badge my-2 mx-5">
        <p class="small-title">50%</p>
      </div>
    </div>
    <p class="main-body discount">250$</p>
    <div class="d-flex btn-col">
      <IncrementButton />
      <Button @click="setItem" text="Add to cart" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "../Ui/Button.vue";
import { itemInfo } from "@/TypesAndData/Data";
import IncrementButton from "../Ui/IncrementButton.vue";
import { computed, inject, ref } from "vue";
import img from "@/assets/product/image-product-1-thumbnail.jpg";
import { useAppStore } from "@/store/app";

const store = useAppStore();

let quantity = computed(() => store.getQuatity);

const cartInfo = computed(
  () =>
    <itemInfo>{
      itemName: " Fall Limited Edition Sneakers $125.00",
      itemQuantity: quantity.value,
      itemPrice: 125 * quantity.value,
      img: img,
    }
);

const setItem = () => {
  store.setCartItem(cartInfo.value);
  console.log(quantity);
  store.setQuatity(0);
};
</script>
<style scoped lang="scss">
.main-col {
  margin: 10% 5%;
}
.small-title {
  color: $Orange;
  font-weight: 600;
}
.main-body {
  color: $Dark-grayish-blue;
}
.btn-col {
  gap: 2rem;
  @media only screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
}
.badge {
  background-color: hsla(26, 100%, 55%, 0.315);
  padding: 0.4rem;
  border-radius: 0.5rem;
  height: 2.2rem;
}
.discount {
  text-decoration: line-through;
}
</style>
