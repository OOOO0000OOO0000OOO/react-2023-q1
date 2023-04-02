export const attacks = [
  'Intelligence Gathering',
  'Energy Cyclone',
  'Magnetic Force',
  'Reckless Charge',
  'Draining Kiss',
  'Extra Comet Punch',
  'Poison Powder',
  'Darkness Magic',
  'Lightning Star',
  'Solar Suggestion',
  'Raging Hammer',
  'Volcano Stomp',
  'Psychic Removal',
  'Blessed Wings',
] as const;

export type Attack = (typeof attacks)[number];

export interface UserCardData {
  id: number;
  name?: string;
  level?: string;
  attack?: Attack;
  type?: 'pokemon' | 'trainer' | 'energy';
  image?: FileList | string;
  [key: string]: string | number | FileList | undefined;
}
