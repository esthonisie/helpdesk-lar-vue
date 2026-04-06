import axios from 'axios';
import { ref, computed } from 'vue';
import { ticketStore } from '../tickets';
import { getRequest, postRequest } from '@/services/http';
import { goToLogin, goToDashboard } from '@/services/helpers/redirect';
import { setSuccessMessage, destroySuccessMessage } from '@/services/helpers/success';
import type { Credentials, Email, Reset } from './types';
import { User } from '../users/types';

const loggedInUser = ref<User | null>(null);

export const isLoggedIn = computed(() => loggedInUser.value !== null);
export const getLoggedInUser = computed(() => loggedInUser.value as User);
export const isAdmin = computed(() => loggedInUser.value?.is_admin);
export const roles = computed(() => loggedInUser.value?.is_admin ? 'admin' : 'user');

export const login = async (credentials: Credentials) => {
  try {
    await axios.get('/sanctum/csrf-cookie');
    const { data } = await postRequest('login', credentials);
    loggedInUser.value = data.user;
    goToDashboard();
  } catch (error: any) {
  }
};

export const logout = async () => {
  await axios.post('/api/logout');
  ticketStore.setters.clearAll();
  loggedInUser.value = null;
  goToLogin();
};

export const requestNewPassword = async (email: Email) => {
  try {
    destroySuccessMessage();
    const { data } = await postRequest('forgot-password', email);
    setSuccessMessage(data.message);
  } catch (error: any) {
  }
};

export const resetPassword = async (form: Reset) => {
  try {
    destroySuccessMessage();
    const { data } = await postRequest('reset-password', form);
    setSuccessMessage(data.message);
    setTimeout(goToLogin, 3000);
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