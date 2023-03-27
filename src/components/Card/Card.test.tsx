import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockCard = {
  id: 'xy7-10',
  name: 'Vespiquen',
  nationalPokedexNumber: 416,
  imageUrl: 'https://images.pokemontcg.io/xy7/10.png',
  imageUrlHiRes: 'https://images.pokemontcg.io/xy7/10_hires.png',
  types: ['Grass'],
  supertype: 'Pokémon',
  subtype: 'Stage 1',
  evolvesFrom: 'Combee',
  hp: '90',
  number: '10',
  artist: 'kawayoo',
  rarity: 'Uncommon',
  series: 'XY',
  set: 'Ancient Origins',
  setCode: 'xy7',
  attacks: [
    {
      cost: ['Colorless'],
      name: 'Intelligence Gathering',
      text: 'You may draw cards until you have 6 cards in your hand.',
      damage: '10',
      convertedEnergyCost: 1,
    },
    {
      cost: ['Colorless', 'Colorless'],
      name: 'Bee Revenge',
      text: 'This attack does 10 more damage for each Pokémon in your discard pile.',
      damage: '20+',
      convertedEnergyCost: 2,
    },
  ],
  weaknesses: [{ type: 'Fire', value: '×2' }],
};

describe('Card', () => {
  it('should be render', () => {
    render(<Card {...mockCard} />);

    expect(screen.getByTestId('card')).toBeDefined();
  });
});
