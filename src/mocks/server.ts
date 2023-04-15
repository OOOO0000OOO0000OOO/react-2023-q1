import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { baseURL } from '../constants';
import { characters, characterNotFound, character1 } from 'mocks/data';

export const server = setupServer(
  rest.get(baseURL, (req, res, ctx) => {
    return res(ctx.json(characters));
  }),

  rest.get(`${baseURL}/-1`, (req, res, ctx) => {
    return res(ctx.status(404), ctx.json(characterNotFound));
  }),

  rest.get(`${baseURL}/2`, (req, res, ctx) => {
    return res(ctx.status(500, 'Error Message on 2'));
  }),

  rest.get(`${baseURL}/1`, (req, res, ctx) => {
    return res(ctx.json(character1));
  })
);
