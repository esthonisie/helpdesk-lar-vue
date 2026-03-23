<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { resetPassword, getAuthMessage, goToLogin } from '../state';
import FormError from '@/services/error/FormError.vue';

const { token } = useRoute().params;

const form = ref({
  email: '',
  password: '',
  password_confirmation: '',
  token: token,
})
</script>

<template>
<div v-if="getAuthMessage.success" class="overlay">
  <div class="modal">
    <p class="message success">{{ getAuthMessage.success }}</p>
    <button @click="goToLogin">to login</button>
  </div>
</div>

<form @submit.prevent="resetPassword(form)">
  <div class="message error">
    <template v-if="getAuthMessage.error">{{ getAuthMessage.error }}</template>
  </div>

  <label for="email">Email:</label>
  <input type="email" id="email" v-model="form.email" required />

  <label for="password">Password:</label>
  <input type="password" id="password" v-model="form.password" required />

  <label for="confirmmation">Confirm Password:</label>
  <input type="password" id="confirmation" v-model="form.password_confirmation" required />

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

label, button, a, .message {
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
  margin-bottom: 12px;
}

.overlay {
  position: absolute;
  background-color: hsla(0, 0%, 0%, 0.3);
  z-index: 10;
  width: 100%;
  height: 100%;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 425px;
  height: 180px;
  background-color: hsla(0, 0%, 100%);
  border-radius: 4px;
  padding: 15px;
  margin: 40px auto;
}
</style>