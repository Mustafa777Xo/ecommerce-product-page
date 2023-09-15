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
        <div @click="deleteItem" class="delete-img">
          <img src="../../assets/icon-delete.svg" alt="" />
        </div>
      </div>
      <button>Checkout</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
const deleteItem = () => {
  store.resetCartItem();
};
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
.delete-img {
  cursor: pointer;
}
</style>
