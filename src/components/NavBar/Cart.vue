<template>
    <img :src="CartSVG" class="cart-img">
</template>
<script setup lang="ts">
import CartSVG from "@/assets/icon-cart.svg"
</script>
<style scoped lang="scss">
.cart-img {
  cursor: pointer;
}
</style>
