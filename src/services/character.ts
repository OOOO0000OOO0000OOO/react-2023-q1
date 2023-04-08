import axios, { AxiosInstance } from 'axios';
import { Character, CharacterFilter, Info } from 'models';
import { baseURL } from '../constants';

class CharacterService {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
    });
  }

  getCharacter = (id: number) => {
    return this.api<Character>(`${id}`);
  };

  getCharacters = (filters?: CharacterFilter) => {
    return this.api<Info<Character[]>>({
      params: filters,
    });
  };

  getCharactersByName = (name: string) => {
    return this.getCharacters({ name });
  };
}

export const characterService = new CharacterService(baseURL);
