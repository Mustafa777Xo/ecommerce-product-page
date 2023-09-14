<template>
  <div class="container">
    <div class="main-col">
      <div class="item-row">
        <div>
          <img
            :src="store.cartItem?.img"
            width="80"
            style="border-radius: 0.5rem"
            alt="cant showup"
          />
        </div>
        <div>
          <p class="main-body">
            {{ store.getCartItem?.itemName }}
            {{ store.getCartItem?.itemQuantity }}X
            <span>${{ store.getCartItem?.itemPrice }}</span>
          </p>
        </div>
        <div>
          <img src="../../assets/icon-delete.svg" alt="" />
        </div>
      </div>
      <button>Checkout</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { itemInfo } from "@/TypesAndData/Data";
import { onMounted } from "vue";
import img from "@/assets/product/image-product-1-thumbnail.jpg";

const store = useAppStore();

const cartInfo = <itemInfo>{
  itemName: " Fall Limited Edition Sneakers $125.00",
  itemQuantity: 3,
  itemPrice: 375.0,
  img: img,
};
onMounted(() => {
  store.setCartItem(cartInfo);
});
</script>
<style scoped lang="scss">
.container {
  padding: 2rem 1rem;
}
.main-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.item-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.main-body {
  color: $Dark-grayish-blue;
}
span {
  color: black;
  font-weight: bold;
}
button {
  background-color: $Orange;
  color: $White;
  padding: 1rem 1.9rem;
  border-radius: 0.5rem;
}
</style>
