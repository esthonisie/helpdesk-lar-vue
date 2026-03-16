<script setup lang="ts">
import { ref } from 'vue';
import { login, getMessage401, isLoggedIn, goToDashboard } from '../state';

if (isLoggedIn.value) {
  goToDashboard.value;
}

const credentials = ref({
  email: "",
  password: "",
});
</script>

<template>
<div class="main-container">
  <form @submit.prevent="login(credentials)">
    <div class="error">
      <template v-if="getMessage401">{{ getMessage401 }}</template>
    </div>

    <label for="email">Email:</label>
    <input id="email" type="email" v-model="credentials.email" required />

    <label for="password">Password:</label>
    <input id="password" type="password" v-model="credentials.password" required />

    <button type="submit">Log In</button>
  </form>
</div>
</template>

<style scoped>
.main-container, form {
  display: flex;
  flex-direction: column;
  width: 425px;
}

label, button {
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