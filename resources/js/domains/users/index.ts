import { storeModuleFactory } from '@/services/store';
import type { New } from '@/services/store/types';
import { postRequest } from '@/services/http';
import { goToLogin } from '@/services/helpers/redirect';
import type { User } from './types';

export const userStore = storeModuleFactory<User>('users');

export const register = async (newUser: New<User>) => {
  try {
    const { data } = await postRequest('register', newUser);
    if (!data) return;
    userStore.setters.setById(data.user);
    goToLogin();
  } catch (error: any) {
  }
};