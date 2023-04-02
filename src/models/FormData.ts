export const formFields = [
  'name',
  'date',
  'attack',
  'image',
  'consent',
  'email',
] as const;

export type FormFields = (typeof formFields)[number];
