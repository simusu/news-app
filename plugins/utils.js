import { mainClassName, target } from '../utils/class_function';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      mainClassName,
      target,
    },
  };
});

