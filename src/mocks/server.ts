import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Endpoints, BASE_URL as baseURL } from 'config';
import {
  characters,
  characterNotFound,
  character1,
  invalidName,
} from 'mocks/data';

export const server = setupServer(
  rest.get(`${baseURL}${Endpoints.CHARACTER}`, (req, res, ctx) => {
    if (req.url.searchParams.get('name') === invalidName)
      return res(ctx.status(404), ctx.json(characterNotFound));

    if (req.url.searchParams.get('name') === character1.name)
      return res(ctx.json({ results: [character1] }));

    return res(ctx.json(characters));
  }),

  rest.get(`${baseURL}${Endpoints.CHARACTER}/-1`, (req, res, ctx) => {
    return res(ctx.status(404), ctx.json(characterNotFound));
  }),

  rest.get(`${baseURL}${Endpoints.CHARACTER}/2`, (req, res, ctx) => {
    return res(ctx.status(500, 'Error Message on 2'));
  }),

  rest.get(`${baseURL}${Endpoints.CHARACTER}/1`, (req, res, ctx) => {
    return res(ctx.json(character1));
  })
);
