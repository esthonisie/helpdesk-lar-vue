<script setup lang="ts">
import { ref } from 'vue';
import { login, getAuthMessage, isLoggedIn, goToDashboard } from '../state';

if (isLoggedIn.value) {
  goToDashboard.value;
}

const credentials = ref({
  email: '',
  password: '',
});
</script>

<template>
<form @submit.prevent="login(credentials)">
  <div class="error">
    <template v-if="getAuthMessage.error">{{ getAuthMessage.error }}</template>
  </div>

  <label for="email">Email:</label>
  <input id="email" type="email" v-model="credentials.email" required />

  <label for="password">Password:</label>
  <input id="password" type="password" v-model="credentials.password" required />

  <button type="submit">Log In</button>
  <RouterLink :to="{ name: 'forgot-password' }">forgot password?</RouterLink>
</form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 425px;
}

label, button, a, .error {
  margin-top: 12px;
}

button {
  width: fit-content;
}

.error {
  color: hsl(0, 60%, 50%);
  height: 1rem;
}
</style>