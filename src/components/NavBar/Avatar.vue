<template>
  <img class="avatar"  src="../../assets/image-avatar.png" alt="" />
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">

.avatar {
  border: 2px solid $Orange;
  border-radius: 5rem;
  width: 3rem;
  @media only screen and (max-width: 900px) {
  width: 2rem;
  margin-top: .5rem;
    
  }
}
</style>
