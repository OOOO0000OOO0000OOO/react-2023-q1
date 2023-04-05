export const formFields = [
  'name',
  'date',
  'attack',
  'image',
  'consent',
  'email',
  'type',
] as const;

export type FormFields = (typeof formFields)[number];
