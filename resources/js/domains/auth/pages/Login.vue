<script setup lang="ts">
import { ref } from 'vue';
import { login, isLoggedIn } from '..';
import { goToDashboard } from '@/services/helpers/redirect';
import ErrorMessage from '@/services/error/ErrorMessage.vue';

if (isLoggedIn.value) {
  goToDashboard();
}

const credentials = ref({
  email: '',
  password: '',
});
</script>

<template>
<form @submit.prevent="login(credentials)">
  <div class="error"><ErrorMessage /></div>

  <label for="email">Email:</label>
  <input id="email" type="email" v-model="credentials.email" required />

  <label for="password">Password:</label>
  <input id="password" type="password" v-model="credentials.password" required />

  <button type="submit">Log In</button>
  <RouterLink :to="{ name: 'forgot-password' }">forgot password?</RouterLink>
  <RouterLink :to="{ name: 'register' }">register</RouterLink>
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