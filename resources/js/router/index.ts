import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes } from '@/domains/auth/routes';
import { userRoutes } from '@/domains/users/routes';
import { dashboardRoutes } from '@/domains/dashboard/routes';
import { isLoggedIn, reFetch, roles } from '@/domains/auth';
import { resetMessages } from '@/services/helpers/resetMessages';

export const router = createRouter({
  history: createWebHistory(),
  routes: [...authRoutes, ...userRoutes, ...dashboardRoutes],
});

router.beforeEach(async (to, from): Promise<void | object> => {
  resetMessages();

  // const requiredRoles = to.meta.roles;
  const requiresAuth = to.meta.requiresAuth;
  
  // in case user is logged in but data got cleared because of page reload
  if (!isLoggedIn.value) {
    await reFetch();
  }
  // deny access for unauthenticated visitors
  if (!isLoggedIn.value && requiresAuth) {
    alert('Access denied, you need to be logged in.');
    return { name: 'login' };
  }
  // access for admin only
  // if (requiredRoles && roles.value !== 'admin') {
  //   alert('Access denied, you need to be an admin.');
  //   return { name: 'dashboard' };
  // }
});