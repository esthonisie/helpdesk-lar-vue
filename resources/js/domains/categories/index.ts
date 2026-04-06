import { storeModuleFactory } from '@/services/store';
import type { Category } from './types';

export const categoryStore = storeModuleFactory<Category>('categories');