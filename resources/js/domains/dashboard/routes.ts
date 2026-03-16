import UserDashboard from './pages/UserDashboard..vue';
import AdminDashboard from './pages/AdminDashboard.vue';

export const dashboardRoutes = [
  { 
    path: '/dashboard', 
    component: UserDashboard, 
    name: 'dashboard',
    meta: { requiresAuth: true }
  },
  { 
    path: '/admin', 
    component: AdminDashboard, 
    name: 'admin',
    meta: { requiresAuth: true, roles: ['admin'] }
  },
]