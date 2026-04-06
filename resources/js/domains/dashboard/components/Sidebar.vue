<script setup lang="ts">
import { getLoggedInUser, logout, isAdmin } from '@/domains/auth';
import { selectTickets } from '@/services/helpers/tickets';
</script>

<template>
<nav>
  <div class="avatar">
    <span class="tooltiptext">TEST: {{ getLoggedInUser?.name }} is 
      <span v-if="!isAdmin">not</span> an admin.
    </span>
    <p class="initial">{{ getLoggedInUser?.first_name.charAt(0) }}</p>
  </div>
  <button @click="logout">Log Out</button>
  <template v-if="isAdmin">
    <button @click="selectTickets = 'all'">All Tickets</button>
    <button @click="selectTickets = 'admin'">Assigned Tickets</button>
    <button @click="selectTickets = 'user'">My Tickets</button>
  </template>
  <template v-else>
    <button @click="selectTickets = 'all'">My Tickets</button>
  </template>
</nav>
</template>

<style scoped>
nav {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #cacaca;
  width: var(--width-sidebar);
  height: 100vh;
  padding: 10px;
  z-index: 100;
} 

button {
  background-color: #fff;
  text-transform: uppercase;
  font-size: var(--font-size-12);
  width: 5rem; /* 80px */
  border: 2px solid #9b9b9b;
  border-radius: 6px;
  padding: 2px;
  text-align: center;
  margin-bottom: 12px;
}

.avatar {
  position: relative;
  background-color: rgb(35, 178, 178);
  text-align: center;
  vertical-align: middle;
  width: 3.125rem;
  height: 3.125rem;
  line-height: 3.125rem;
  border-radius: 50%;
  margin-bottom: 12px;
  cursor: pointer;
}

.initial {
  color: #fff;
  font-size: x-large;
  font-weight: 900;
  z-index: 200;
}

.tooltiptext {
  visibility: hidden;
  position: absolute;
  left: 115%;
  background-color: #fff;
  color: #000;
  width: max-content;
  padding: 0 10px;
  border: 1px solid hsl(0, 0%, 87%);
  border-radius: 6px;
  z-index: 200;
  opacity: 0;
  transition: opacity 0.6s;
}

.avatar:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>