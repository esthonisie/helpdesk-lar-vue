<script setup lang="ts">
import type { Ticket } from '../types';

const props = defineProps<{ 
  tickets: Readonly<Ticket>[] | void, 
  categoryName: (id: number) => string, 
}>();
</script>

<template>
<div class="main-container">
	<div 
		class="ticket-container" 
		v-for="ticket in tickets" 
		:key="ticket.id"
	>
    <p class="category"><span class="info">Category: </span>{{ categoryName(ticket.category_id) }}</p>
    <p class="subject"><span class="info">Subject: </span>{{ ticket.title }}</p>
    <p class="date"><span class="info">Date: </span>{{ ticket.created_at }}</p>
    <p class="priority"><span class="info">Priority: </span>{{ ticket.priority }}</p>
    <p class="status"><span class="info">Status: </span>{{ ticket.status }}</p>
    <p class="assigned"><span class="info">Assigned: </span>yes/not yet (TODO)</p>
	</div>
</div>
</template>

<style scoped>
.main-container {
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	gap: 18px;
  padding: 15px 20px 30px;
  width: calc(100vw - var(--width-sidebar));
	height: fit-content;
}

.ticket-container {
	display: flex;
  flex-direction: column;
  background-color: #fff;
	border: 1px solid hsl(0, 0%, 75%);
  border-radius: 8px;
  box-shadow: 2px 2px 6px #e5e5e5;
	padding: 15px 20px 20px;
}

.info {
  color: rgb(77, 77, 77);
  text-transform: uppercase;
  font-size: var(--font-size-14);
}

p {
  border-bottom: 1px solid hsl(0, 0%, 70%);
}

p:last-of-type {
  border: none;
}
</style>