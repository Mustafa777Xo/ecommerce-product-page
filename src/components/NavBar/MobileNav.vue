<template>
  <img  @click="showingSideMenu" style="cursor: pointer" :src="IconMenu" />
  <v-overlay v-model="showSideMenu">
    <v-container class="nav-container">
      <v-col>
        <img
          @click="showingSideMenu"
          style="cursor: pointer"
          class="mx-2"
          :src="CloseIcon"
          alt=""
        />
        <v-col>
          <p class="main-body my-4" v-for="navLink in navLinks">
            {{ navLink }}
          </p>
        </v-col>
      </v-col>
    </v-container>
  </v-overlay>
</template>
<script setup lang="ts">
import { navLinks } from "@/TypesAndData/Data";
import CloseIcon from "@/assets/icon-close.svg";
import IconMenu from "@/assets/icon-menu.svg";
import { ref } from "vue";

let showSideMenu = ref<boolean>(false);

function showingSideMenu() {
  showSideMenu.value = !showSideMenu.value;
}
</script>
<style scoped lang="scss">
.nav-container {
  background-color: $White;
  position: absolute;
  width: 15rem;
  height: 100vh;
  top: 0;
  left: 0;
}
.main-body {
  font-weight: bold;
}
</style>
