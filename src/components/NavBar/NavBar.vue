<template>
  <div class="d-flex flex-column">
    <div class="d-flex">
      <v-col cols="2" class="pa-0">
        <p class="logo">sneakers</p>
      </v-col>
      <div class="d-flex py-1">
        <v-col v-for="navLink in navLinks">
          <NavLink :title="navLink" :is-selected="false" />
        </v-col>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex py-1">
        <v-col>
          <Cart />
        </v-col>
        <v-col class="pa-0">
          <Avatar />
        </v-col>
      </div>
    </div>
    <v-divider :thickness="2" class="my-2"></v-divider>
  </div>
</template>

<script lang="ts" setup>
import { navLinks } from "@/TypesAndData/Data";
import NavLink from "./NavLink.vue";
import Cart from "./Cart.vue";
import Avatar from "./Avatar.vue";
</script>
<style lang="scss" scoped></style>
