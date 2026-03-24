import { router } from '@/router';
import { getLoggedInUser } from '@/domains/auth';
import { computed } from 'vue';

export const goToLogin = () => router.push({ name: 'login' });

export const goToDashboard = computed(() => 
  router.push(getLoggedInUser.value?.isAdmin ? { name: 'admin' } : { name: 'dashboard' }
));