<script setup lang="ts">
import { ref } from 'vue';
import { requestNewPassword, getAuthMessage } from '../state';

const email = ref('');
</script>

<template>
<form @submit.prevent="requestNewPassword({ email })">
  <div class="message">
    <p v-if="getAuthMessage.error" class="error">{{ getAuthMessage.error }}</p>
    <p v-if="getAuthMessage.success" class="success">{{ getAuthMessage.success }}</p>
  </div>

  <label for="email">Email:</label>
  <input type="email" v-model="email" required />
  <button type="submit">Request New Password</button>
</form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 425px;
}

label, button, .message {
  margin-top: 12px;
}

button {
  width: fit-content;
}

.message {
  height: 1rem;
}

.error {
  color: hsl(0, 60%, 50%);
}

.success {
  color: rgb(30, 140, 144);
}
</style>