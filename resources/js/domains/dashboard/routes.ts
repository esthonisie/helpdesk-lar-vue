import Dashboard from './pages/Dashboard.vue';
import Tickets from '../tickets/pages/Tickets.vue';

export const dashboardRoutes = [
  { 
    path: '/dashboard', 
    component: Dashboard, 
    name: 'dashboard',
    children: [
      {
        path: 'tickets',
        component: Tickets,
        name: 'tickets',
      },
    ],
    meta: { requiresAuth: true }
    // meta: { requiresAuth: true, roles: ['admin'] }
  },
]