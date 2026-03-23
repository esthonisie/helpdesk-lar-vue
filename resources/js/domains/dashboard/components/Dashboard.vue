<script setup lang="ts">
import { getLoggedInUser, logout } from '@/domains/auth/state';

const user = getLoggedInUser.value;
</script>

<template>
<div class="main-container">
  <p>Welcome {{ user?.name }}</p>
  <p v-if="user?.isAdmin">TEST: this user is an admin</p>
  <p v-else>TEST: this user is not an admin</p>
  <button @click="logout">Log Out</button>
</div>
</template>

<style scoped>
.main-container, p, button {
  margin-top: 20px;
}

button {
  width: fit-content;
}
</style>