<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { resetPassword } from '..';
import FormError from '@/services/error/FormError.vue';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import { getSuccessMessage } from '@/services/helpers/success';

const { token } = useRoute().params;

const form = ref({
  email: '',
  password: '',
  password_confirmation: '',
  token: token,
})
</script>

<template>
<form @submit.prevent="resetPassword(form)">
  <div class="message">
    <p class="error"><ErrorMessage /></p>
    <p class="success">{{ getSuccessMessage }}</p>
  </div>

  <label for="email">Email:</label>
  <input type="email" id="email" v-model="form.email" required />

  <label for="password">Password:</label>
  <input type="password" id="password" v-model="form.password" required />

  <label for="confirmmation">Confirm Password:</label>
  <input type="password" id="confirmation" v-model="form.password_confirmation" required />
  <p class="info">the password must be at least 8 characters long and must contain at least one lowercase letter, one uppercase letter, one number and one symbol.</p>

  <button type="submit">Reset Password</button>
  
  <FormError name="password" />
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

.info {
  text-transform: uppercase;
  font-size: var(--font-size-12);
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