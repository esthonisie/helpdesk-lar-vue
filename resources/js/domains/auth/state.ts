import axios from 'axios';
import { ref, computed } from 'vue';
import { router } from '@/router';
import { getRequest, postRequest } from '@/services/http';
import type { User } from '../users/types';
import type { Credentials, Email, Reset } from './types'; 

const loggedInUser = ref<User | null>(null);

const authMessage = ref({
  error: '',
  success: ''
});

export const isLoggedIn = computed(() => loggedInUser.value !== null);
export const getLoggedInUser = computed(() => loggedInUser.value);
export const roles = computed(() => loggedInUser.value?.isAdmin ? 'admin' : 'user');
export const goToDashboard = computed(() => router.push(loggedInUser.value?.isAdmin 
  ? { name: 'admin' } 
  : { name: 'dashboard' }
));

export const goToLogin = () => router.push({ name: 'login' });

export const getAuthMessage = computed(() => authMessage.value);

export const destroyAuthMessage = () => {
  authMessage.value.error = '';
  authMessage.value.success = '';
};

export const login = async (credentials: Credentials) => {
  try {
    await axios.get('/sanctum/csrf-cookie');
    const { data } = await postRequest('login', credentials);
    loggedInUser.value = data.user;
    goToDashboard.value;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      authMessage.value.error = error.response.data.message;
    } 
  }
};

export const logout = async () => {
  await axios.post('/api/logout');
  loggedInUser.value = null;
  goToLogin();
};

export const requestNewPassword = async (email: Email) => {
  const { data } = await postRequest('forgot-password', email);
  authMessage.value.error = data.error;
  authMessage.value.success = data.success;
};

export const resetPassword = async (form: Reset) => {
  try {
    const {data} = await postRequest('reset-password', form);
    authMessage.value.error = data.error;
    authMessage.value.success = data.success;
  } catch (error: any) {
  }
};

// fetch logged in user data after reload
export const reFetch = async () => {
  try {
    const { data } = await getRequest('me');
    loggedInUser.value = data;
  } catch(error: any) {
    console.log(error.response.data.message);
  }
};