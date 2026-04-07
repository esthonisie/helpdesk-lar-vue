<script setup lang="ts">
import { categoryStore } from '@/domains/categories';
import { getLoggedInUser } from '@/domains/auth';
import { ticketStore } from '..';
import type { Ticket } from '../types';
import type { New } from '@/services/store/types';

categoryStore.actions.getAll();

const categories = () => categoryStore.getters.all.value;

const form = {
  user_id: getLoggedInUser.value.id,
  admin_id: 1,
  category_id: NaN,
  title: '',
  body: '',
  priority: 'urgent',
}

const submit = async (form: New<Ticket>) => {
	try {
		await ticketStore.actions.create(form);
	} catch(error) {
		console.log('Error: ' + error);
	}
};
</script>

<template>
<form @submit.prevent="submit(form)">
  <label for="title">Title:</label>
  <input id="title" v-model="form.title" required></input>

  <label for="body">Description:</label>
  <textarea id="body" v-model="form.body" required></textarea>

  <label for="category">Select the category:</label>
  <select id="category" v-model="form.category_id" required>
    <option :value="NaN" disabled hidden>your choice...</option>
    <option v-for="category in categories()" :key="category.id" :value="category.id">
      {{ category.name }}
    </option>
  </select>

  <fieldset>
    <legend>Priority:</legend>
    <div>
      <input type="radio" id="priorityChoice1" name="priority" v-model="form.priority" />
      <label for="priorityChoice1">Low</label>

      <input type="radio" id="priorityChoice2" name="priority" v-model="form.priority"/>
      <label for="priorityChoice2">Medium</label>

      <input type="radio" id="priorityChoice3" name="priority" v-model="form.priority" />
      <label for="priorityChoice3">High</label>

      <input type="radio" id="priorityChoice4" name="priority" v-model="form.priority" />
      <label for="priorityChoice4">Urgent</label>
    </div>
  </fieldset>
  <button type="submit">submit</button>
  <label for="title">Title:</label>
  <input id="title" v-model="form.title" required></input>

  <label for="body">Description:</label>
  <textarea id="body" v-model="form.body" required></textarea>

  <label for="category">Select the category:</label>
  <select id="category" v-model="form.category_id" required>
    <option :value="NaN" disabled hidden>your choice...</option>
    <option v-for="category in categories()" :key="category.id" :value="category.id">
      {{ category.name }}
    </option>
  </select>

  <fieldset>
    <legend>Priority:</legend>
    <div>
      <input type="radio" id="priorityChoice1" name="priority" v-model="form.priority" />
      <label for="priorityChoice1">Low</label>

      <input type="radio" id="priorityChoice2" name="priority" v-model="form.priority"/>
      <label for="priorityChoice2">Medium</label>

      <input type="radio" id="priorityChoice3" name="priority" v-model="form.priority" />
      <label for="priorityChoice3">High</label>

      <input type="radio" id="priorityChoice4" name="priority" v-model="form.priority" />
      <label for="priorityChoice4">Urgent</label>
    </div>
  </fieldset>
  <button type="submit">submit</button>
  <label for="title">Title:</label>
  <input id="title" v-model="form.title" required></input>

  <label for="body">Description:</label>
  <textarea id="body" v-model="form.body" required></textarea>

  <label for="category">Select the category:</label>
  <select id="category" v-model="form.category_id" required>
    <option :value="NaN" disabled hidden>your choice...</option>
    <option v-for="category in categories()" :key="category.id" :value="category.id">
      {{ category.name }}
    </option>
  </select>

  <fieldset>
    <legend>Priority:</legend>
    <div>
      <input type="radio" id="priorityChoice1" name="priority" v-model="form.priority" />
      <label for="priorityChoice1">Low</label>

      <input type="radio" id="priorityChoice2" name="priority" v-model="form.priority"/>
      <label for="priorityChoice2">Medium</label>

      <input type="radio" id="priorityChoice3" name="priority" v-model="form.priority" />
      <label for="priorityChoice3">High</label>

      <input type="radio" id="priorityChoice4" name="priority" v-model="form.priority" />
      <label for="priorityChoice4">Urgent</label>
    </div>
  </fieldset>
  <button type="submit">submit</button>
</form>
</template>

<style scoped>
form {
  position: sticky;
  top: 0;
  padding: 10px;
  overflow-y: auto;
}
</style>