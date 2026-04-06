import { router } from '@/router';

export const goToLogin = () => router.push({ name: 'login' });

export const goToDashboard = () => router.push({ name: 'tickets' });