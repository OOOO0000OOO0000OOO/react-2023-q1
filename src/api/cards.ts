import { useFetch } from '../hooks/useFetch';
import { CardData } from '../models/CardData';

export const useCards = (url = 'https://api.pokemontcg.io/v1/') => {
  return useFetch<{ cards: CardData[] }>(`${url}/cards`, { cards: [] });
};
