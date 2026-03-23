<script setup>
</script>

<template>
<div class="main-content">
  <RouterView />
</div>
</template>

<style>
.main-content {
  display: flex;
  justify-content: center;
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}
</style>