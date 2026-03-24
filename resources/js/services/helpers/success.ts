import { ref, computed } from "vue";

const successMessage = ref('');

export const setSuccessMessage = (message: string) => successMessage.value = message;
export const getSuccessMessage = computed(() => successMessage.value);
export const destroySuccessMessage = () => successMessage.value = '';