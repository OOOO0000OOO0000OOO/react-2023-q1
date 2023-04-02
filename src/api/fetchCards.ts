import { CardData } from '../models/CardData';

export const fetchCards = (url = 'https://api.pokemontcg.io/v1/') => {
  return fetch(`${url}/cards`).then(
    (response): Promise<{ cards: CardData[] }> => response.json()
  );
};
