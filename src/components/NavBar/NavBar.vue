<template>
  <section>
    <div class="d-flex">
      <v-col cols="1" v-if="mdAndDown" class="py-5 mx-2">
        <MobileNav/>
      </v-col>
      <v-col cols="2" class="pa-0">
        <p class="logo">sneakers</p>
      </v-col>
      <div v-if="mdAndUp" class="d-flex py-1">
        <v-col v-for="navLink in navLinks">
          <NavLink :title="navLink" :is-selected="false" />
        </v-col>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex py-1">
        <v-col >
          <Cart />
        </v-col>
        <v-col class="pa-0">
          <Avatar/>
        </v-col>
      </div>
    </div>
    <v-divider v-if="mdAndUp" class="my-2"></v-divider>
  </section>
</template>

<script lang="ts" setup>
import { navLinks } from "@/TypesAndData/Data";
import NavLink from "./NavLink.vue";
import Cart from "./Cart.vue";
import Avatar from "./Avatar.vue";
import MobileNav from "./MobileNav.vue";
import { useDisplay } from "vuetify";
const { mdAndDown, mdAndUp } = useDisplay();
</script>
<style lang="scss" scoped>
</style>
