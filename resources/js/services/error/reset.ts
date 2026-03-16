import { destroyMessage, destroyErrors } from './index';

export const resetErrorMessages = () => {
  destroyMessage();
  destroyErrors();
}