import Dashboard from './pages/Dashboard.vue';
import Tickets from '../tickets/pages/Tickets.vue';
import CreateTicket from '../tickets/pages/CreateTicket.vue';

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
        children: [
          {
            path: 'create',
            component: CreateTicket,
            name: 'tickets.create',
          }
        ]
      },
    ],
    meta: { requiresAuth: true }
    // meta: { requiresAuth: true, roles: ['admin'] }
  },
]