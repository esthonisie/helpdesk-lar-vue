<script setup lang="ts">
import { getLoggedInUser, logout } from '@/domains/auth/state';
import type { User } from '@/domains/users/types';

const user = getLoggedInUser.value as User;
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
.main-container {
  margin-top: 12px;
}

button {
  width: fit-content;
}
</style>