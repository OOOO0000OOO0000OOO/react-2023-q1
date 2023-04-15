import { RegisterOptions } from 'react-hook-form';
import { FormFields, UserCardData, attacks, types } from 'models';

export const registerOptions: Record<
  FormFields,
  RegisterOptions<UserCardData, FormFields>
> = {
  name: {
    required: 'name required',
    minLength: {
      value: 3,
      message: 'name must contain at least 3 characters',
    },
  },
  email: {
    required: 'email required',
    pattern: /\S+@\S+\.\S+/i,
  },
  date: {
    required: 'date required',
  },
  attack: {
    required: 'attack required',
    validate: (value) =>
      (value && attacks.includes(value as (typeof attacks)[number])) ||
      'choose the attack from the list',
  },
  type: {
    required: 'type required',
    validate: (value) =>
      (value && types.includes(value as (typeof types)[number])) ||
      'select one of the given types',
  },
  image: {
    required: 'image required',
    validate: (fileList) =>
      (fileList instanceof FileList &&
        fileList[0] &&
        /image/.test(fileList[0].type)) ||
      'invalid image format',
  },
  consent: {
    required: 'consent required',
  },
};
