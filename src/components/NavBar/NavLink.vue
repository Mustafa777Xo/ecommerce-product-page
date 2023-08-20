<template>
  <div>
    <a href="#" class="main-body">
      {{ props.title }}
    </a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  isSelected: boolean;
}>();
</script>

<style scoped lang="scss">
.main-body {
  text-decoration: none;
  color: $Dark-grayish-blue;
  padding-bottom: 1.8rem;
  margin-top: 50%;
}
.main-body:hover {
  border-bottom: 4px solid $Orange;
  color: $Black;
}
</style>
