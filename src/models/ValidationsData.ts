import { FormFields } from './FormData';

export interface Validations {
  required: {
    isValid: (
      value: HTMLInputElement | HTMLSelectElement | null
    ) => boolean | null;
    message: string;
  };
  custom?: {
    isValid: (
      value: HTMLInputElement | HTMLSelectElement | null
    ) => boolean | null;
    message: string;
  };
}

export const validations: {
  [K in FormFields]: Validations;
} = {
  name: {
    required: {
      isValid: (input) => Boolean(input && input.value.trim().length),
      message: 'name required',
    },
    custom: {
      isValid: (input) => Boolean(input && input.value.trim().length >= 3),
      message: 'name must contain at least 3 characters',
    },
  },
  date: {
    required: {
      isValid: (input) => Boolean(input && input.value.trim().length),
      message: 'date required',
    },
  },
  attack: {
    required: {
      isValid: (input) => Boolean(input && input.value),
      message: 'attack required',
    },
  },
  image: {
    required: {
      isValid: (input) => Boolean(input && input.value),
      message: 'image required',
    },
  },
  consent: {
    required: {
      isValid: (input) => input instanceof HTMLInputElement && input.checked,
      message: 'consent required',
    },
  },
} as const;
