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

export const types = ['pokemon', 'trainer', 'energy'] as const;

export type Type = (typeof types)[number];

export interface UserCardData {
  id: number | string;
  name?: string;
  email?: string;
  date?: string;
  attack?: Attack;
  type?: Type;
  image?: FileList | string;
  consent?: boolean;
}

export const initialState: UserCardData = {
  id: 0,
  name: '',
  date: '',
  attack: 'Draining Kiss',
  type: 'pokemon',
  image: '',
  consent: false,
} as const;
