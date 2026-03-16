<script setup lang="ts">
import { getMessage } from './index';
</script>

<template>
  <div v-if="getMessage">
    {{ getMessage }}
  </div>
</template>