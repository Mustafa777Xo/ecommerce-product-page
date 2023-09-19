<template>
  <div :class="{ 'd-flex': mdAndUp }">
    <Gallery />
    <Info />
  </div>
</template>
<script lang="ts" setup>
import Gallery from "./Gallery/Gallery.vue";
import Info from "@/components/info/Info.vue";
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
</script>
<style lang="scss" scoped></style>
