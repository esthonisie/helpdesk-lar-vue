import Login from './pages/Login.vue';
import RequestNewPassword from './pages/RequestNewPassword.vue';
import ResetPassword from './pages/ResetPassword.vue';

export const authRoutes = [
  { 
    path: '/', 
    redirect: '/login' 
  },
  { 
    path: '/login', 
    component: Login, 
    name: 'login',
    meta: { requiresAuth: false }
  },
  { 
    path: '/forgot-password', 
    component: RequestNewPassword, 
    name: 'forgot-password',
    meta: { requiresAuth: false } 
  },
  { 
    path: '/reset-password/:token',
    component: ResetPassword, 
    name: 'reset-password',
    meta: { requiresAuth: false } 
  },
]