<script setup lang="ts">
import { ref } from 'vue';
import { requestNewPassword } from '..';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import { getSuccessMessage } from '@/services/helpers/success';

const email = ref('');
</script>

<template>
<form @submit.prevent="requestNewPassword({ email })">
  <div class="message">
    <p class="error"><ErrorMessage /></p>
    <p class="success">{{ getSuccessMessage }}</p>
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
  color: rgb(17, 117, 130);
}
</style>