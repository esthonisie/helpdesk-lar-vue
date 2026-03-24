<script setup lang="ts">
import { ref } from 'vue';
import { register } from '..'
import FormError from '@/services/error/FormError.vue';
import ErrorMessage from '@/services/error/ErrorMessage.vue';

const user = ref({
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  password: '',
  password_confirmation: '',
})
</script>

<template>
<form @submit.prevent="register(user)">
  <div class="error"><ErrorMessage /></div>

  <label for="first_name">First Name:</label>
  <input id="first_name" v-model="user.first_name" required />

  <label for="last_name">Last Name:</label>
  <input id="last_name" v-model="user.last_name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" v-model="user.email" required />
  
  <label for="phone_number">
    Phone Number:
    <span>
      <input type="tel" id="phone_number" v-model="user.phone_number" required />
    </span>
  </label>
  <p class="info">fill in your 10 digits number</p>

  <label for="password">Password:</label>
  <input type="password" id="password" v-model="user.password" required />

  <label for="confirmmation">Confirm Password:</label>
  <input type="password" id="confirmation" v-model="user.password_confirmation" required />
  <p class="info">the password must be at least 8 characters long and must contain at least one lowercase letter, one uppercase letter, one number and one symbol.</p>

  <button type="submit">Register</button>
  
  <FormError name="first_name" />
  <FormError name="last_name" />
  <FormError name="email" />
  <FormError name="phone_number" />
  <FormError name="password" />
</form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 425px;
}

input {
  padding: 4px 8px 5px;
}

label, button, a, .error {
  margin-top: 12px;
}

button {
  width: fit-content;
}

label[for=phone_number] span {
  position: relative;
  display: block;
}

label[for=phone_number] input {
  width: 100%;
  padding-left: 48px;
  font-size: large;
}

label[for=phone_number] span::before {
  content: "(+1)";
	position: absolute;
  font-size: 17px;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
}

.error {
  height: 1rem;
  color: hsl(0, 60%, 50%);
}

.info {
  text-transform: uppercase;
  font-size: 12px;
}
</style>