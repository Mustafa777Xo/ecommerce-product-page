<template>
  <div class="d-flex">
    <v-col class="pa-0">
      <p class="logo">sneakers</p>
    </v-col>
    <v-col v-for="navLink in navLinks">
      <NavLink :title="navLink" :is-selected="false" />
    </v-col>
    <div class="d-flex">
      <v-col>
        <Cart />
      </v-col>
      <v-col class="pa-0">
        <Avatar />
      </v-col>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { navLinks } from "@/TypesAndData/Data";
import NavLink from "./NavLink.vue";
import Cart from "./Cart.vue";
import Avatar from "./Avatar.vue";
</script>
<style lang="scss" scoped>

</style>
