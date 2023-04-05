import { useFetch } from '../hooks';
import { CardData } from '../models';

export const useCards = (url = 'https://api.pokemontcg.io/v1/') => {
  return useFetch<{ cards: CardData[] }>(`${url}/cards`, { cards: [] });
};
