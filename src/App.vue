<template>
  <Loader class="loader" v-if="showLoader" />
  <div v-show="!showLoader">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
//
import NavBar from "@/components/NavBar/NavBar.vue";
import Loader from "./components/Ui/Loader.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
let showLoader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false;
  }, 5000); // Change this to the number of milliseconds you want the loader to be shown
});

onBeforeUnmount(() => {
  showLoader.value = true;
});
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>
