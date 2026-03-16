import axios from 'axios';
import { ref, computed } from 'vue';
import { router } from '@/router';
import { getRequest, postRequest } from '@/services/http';
import type { User } from '../users/types';
import type { Credentials } from './types'; 

const loggedInUser = ref<User | null>(null);
const message401 = ref('');

export const isLoggedIn = computed(() => loggedInUser.value !== null);
export const getLoggedInUser = computed(() => loggedInUser.value);
export const roles = computed(() => loggedInUser.value?.isAdmin ? 'admin' : 'user');
export const goToDashboard = computed(() => router.push(loggedInUser.value?.isAdmin 
  ? { name: 'admin' } 
  : { name: 'dashboard' }
));
export const getMessage401 = computed(() => message401.value);

export const login = async (credentials: Credentials) => {
  try {
    message401.value = '';
    await axios.get('/sanctum/csrf-cookie');
    const { data } = await postRequest('login', credentials);
    loggedInUser.value = data.user;
    goToDashboard.value;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      message401.value = error.response.data.message;
    } 
  }
}

export const logout = async () => {
  await axios.post('/api/logout');
  loggedInUser.value = null;
  router.push({ name: 'login' });
}

// fetch logged in user data after reload
export const reFetch = async () => {
  try {
    const { data } = await getRequest('me');
    loggedInUser.value = data;
  } catch(error: any) {
    console.log(error.response.data.message);
  }
};