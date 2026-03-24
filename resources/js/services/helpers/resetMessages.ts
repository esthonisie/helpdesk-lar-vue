import { destroyMessage, destroyErrors } from '../error';
import { destroySuccessMessage } from './success';

export const resetMessages = () => {
  destroyMessage();
  destroyErrors();
  destroySuccessMessage();
}