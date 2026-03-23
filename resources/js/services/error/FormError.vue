<script setup lang="ts">
import { getErrorByProperty } from './index';

defineProps<{ name: string }>();
</script>

<template>
  <template v-if="getErrorByProperty(name).value">
  <ul>
    <li v-for="error in getErrorByProperty(name).value" :key="error">
      {{ error }}
    </li>
  </ul>
  </template>
</template>

<style scoped>
ul {
  color: hsl(0, 60%, 50%);
  border: 1px solid;
  border-radius: 2px;
  padding: 10px 15px 15px 30px;
  margin-top: 12px;
}
</style>