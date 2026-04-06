<script setup lang="ts">
import type { Ticket } from '../types';

const props = defineProps<{ 
  tickets: Readonly<Ticket>[] | void, 
  categoryName: (id: number) => string, 
  userName: (id: number) => string | undefined 
}>();
</script>

<template>
<div class="main-container">
  
  <div class="head">ID</div>
  <div class="head">Category</div>
  <div class="head">Subject</div>
  <div class="head">Requester</div>
  <div class="head">Date</div>
  <div class="head">Priority</div>
  <div class="head">Status</div>
  <div class="head">Assignee</div>
  <div class="head">Modified</div>

  <hr class="span-all head-shadow">
  
  <template v-for="ticket in tickets" :key="ticket.id">
  <div class="data">#{{ ticket.id }}</div>
  <div class="data">{{ categoryName(ticket.category_id) }}</div>
  <div class="data">{{ ticket.title }}</div>
  <div class="data">{{ userName(ticket.user_id) }}</div>
  <div class="data">{{ ticket.created_at }}</div>
  <div class="data">{{ ticket.priority }}</div>
  <div class="data">{{ ticket.status }}</div>
  <div class="data">{{ userName(ticket.admin_id) }}</div>
  <div class="data">{{ ticket.updated_at }}</div>
  
  <!-- <div class="span-all quick-view">
    <p>{{ ticket.body }}</p>
  </div> -->

  <hr class="span-all divider">
  </template>
</div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 
    minmax(4.4rem, 1fr) /* id */
    minmax(7rem, 4fr) /* category */
    minmax(10rem, 7fr) /* subject */
    minmax(7rem, 4fr) /* requester */
    minmax(6rem, 3fr) /* date */
    minmax(5.5rem, 2fr) /* priority */
    minmax(5.5rem, 2fr) /* status */
    minmax(7rem, 4fr) /* assignee */
    minmax(6rem, 3fr); /* modified */
}

.head {
  position: sticky;
  top: 0;
  background-color: hsl(177, 41%, 91%);
  padding: 6px 12px;
  z-index: 10;
}

hr[class~=head-shadow] {
  position: sticky;
  top: 36px;
  border: none;
  box-shadow: 0 0 16px 12px #fff;
  margin-bottom: 8px;
}

.data {
  padding: 6px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.span-all {
  grid-column: span 9 / span 9;
}

hr[class~="divider"]{
  opacity: 0.2;
}

.quick-view {
  padding: 6px 12px;
}
</style>