import Login from './pages/Login.vue';

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
]