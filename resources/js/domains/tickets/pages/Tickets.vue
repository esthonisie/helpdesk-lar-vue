<script setup lang="ts">
import { ticketStore, fetchTicketsUser } from '..';
import { userStore } from '@/domains/users';
import { categoryStore } from '@/domains/categories';
import { isAdmin, getLoggedInUser} from '@/domains/auth';
import { filterByProperty } from '@/services/helpers/stateObject';
import { selectTickets } from '@/services/helpers/tickets';
import type { Ticket } from '../types';
import TicketsAdmin from '../components/TicketsAdmin.vue';
import TicketsUser from '../components/TicketsUser.vue';

if (isAdmin.value) {
  ticketStore.actions.getAll();
  userStore.actions.getAll();
} else fetchTicketsUser();

categoryStore.actions.getAll();

const categoryName = (id: number) => {
  const category = categoryStore.getters.getById(id);
  return category.value?.name;
}

const userName = (id: number) => {
  const user = userStore.getters.getById(id);
  return user.value?.name;
}

const getTickets = () => ticketStore.getters.all.value;

const tickets = () : Readonly<Ticket>[] | void => {
  if (selectTickets.value === 'all') {
    return getTickets();
  }
  if (selectTickets.value === 'admin') {
    return filterByProperty(
      getTickets(), 
      'admin_id', 
      getLoggedInUser.value?.id
    ) as Readonly<Ticket>[];
  }
  if (selectTickets.value === 'user') {
    return filterByProperty(
      getTickets(), 
      'user_id', 
      getLoggedInUser.value?.id
    ) as Readonly<Ticket>[];
  }
}
</script>

<template>
<TicketsAdmin 
  v-if="isAdmin"
  :categoryName="(id: number) => categoryName(id)"
  :userName="(id: number) => userName(id)"
  :tickets="tickets()"
/>
<TicketsUser 
  v-if="!isAdmin"
  :categoryName="(id: number) => categoryName(id)"
  :tickets="tickets()"
/>
</template>