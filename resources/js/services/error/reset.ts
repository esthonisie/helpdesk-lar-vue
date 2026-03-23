import { destroyMessage, destroyErrors } from './index';
import { destroyAuthMessage } from '@/domains/auth/state';

export const resetErrorMessages = () => {
  destroyMessage();
  destroyErrors();
  destroyAuthMessage();
}