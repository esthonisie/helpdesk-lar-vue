import Register from './pages/Register.vue';

export const userRoutes = [
  { 
    path: '/register', 
    component: Register, 
    name: 'register',
    meta: { requiresAuth: false }
  },
]