<template>
  <img @click="showingCart" :src="CartSVG" class="cart-img" />
  <v-card v-if="showCart" title="Cart" class="cart-card">
    <v-divider :thickness="2" class="my-2"></v-divider>
    <!-- <p class="main-body">Your cart is empty</p> -->
    <CartItem/>
  </v-card>
</template>
<script setup lang="ts">
import CartSVG from "@/assets/icon-cart.svg";
import { ref } from "vue";
import CartItem from "./CartItem.vue";
let showCart = ref<boolean>(false);

function showingCart() {
  showCart.value = !showCart.value;
  console.log(showCart);
}
</script>
<style scoped lang="scss">
.cart-img {
  cursor: pointer;
}
.cart-card {
  position: absolute;
  left: 68%;
  top: 13%;
  width: 400px;
  height: 300px;
  background-color: $White;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  @media only screen and (max-width: 768px) {
    left: 55%;
    top: 8%;
    width: 300px;
    height: 200px;
  }
  @media only screen and (max-width: 390px) {
    left: 8%;
    top: 10%;
    width: 330px;
    height: 200px;
  }
}
.main-body {
  color: $Dark-grayish-blue;
  font-weight: bold;
  margin: 25% 30%;
  @media only screen and (max-width: 768px) {
    margin: 15% 23%;
  }
}
</style>
