import { storeModuleFactory } from '@/services/store';
import type { Ticket } from './types';
import { getRequest } from '@/services/http';

export const ticketStore = storeModuleFactory<Ticket>('tickets');

export const fetchTicketsUser = async () => {
	const { data } = await getRequest('tickets/user');
	if (!data) return;
  ticketStore.setters.setAll(data);
};