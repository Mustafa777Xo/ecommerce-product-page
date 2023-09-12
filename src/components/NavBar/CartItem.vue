<template>
  <div class="container">
    <div class="main-col">
      <div class="item-row">
        <div class="producta-img">
          <img
            src="../../assets/product/image-product-1-thumbnail.jpg"
            width="70px"
            style="border-radius: 0.5rem"
            alt=""
          />
        </div>
        <div>
          <p class="main-body">
            Fall Limited Edition Sneakers $125.00 x3 <span>$375.00</span>
          </p>
        </div>
        <div>
          <img src="../../assets/icon-delete.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.container {
  padding: 1rem;
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
</style>
