import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL as baseUrl, Endpoints } from 'config';
import { Character, CharacterFilter, Info } from 'models';

export const APISlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Info<Character[]>, CharacterFilter>({
      query: (filters) => ({ url: Endpoints.CHARACTER, params: filters }),
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `${Endpoints.CHARACTER}/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = APISlice;
