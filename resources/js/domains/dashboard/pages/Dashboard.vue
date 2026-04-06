<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
<div class="main-container">
  <Sidebar />
  <section class="main-content">
    <RouterView />
  </section>
</div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-areas: 
  "sidebar main main";
}

button {
  width: fit-content;
}

.main-content {
  grid-area: main;
  width: calc(100vw - var(--width-sidebar));
}
</style>