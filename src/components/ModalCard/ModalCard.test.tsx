import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ModalCard } from 'components';
import { server } from 'mocks/server';
import { character1 } from 'mocks/data';

describe('ModalCard component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays loading skeleton when data is being fetched', async () => {
    render(<ModalCard id={1} />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });

  it('displays error message when an error occurs', async () => {
    render(<ModalCard id={2} />);

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent(
        `Error: Request failed with status code 500`
      );
    });
  });

  it('displays character information when data is successfully fetched', async () => {
    render(<ModalCard id={1} />);

    await waitFor(() => {
      expect(screen.getByText(character1.name)).toBeInTheDocument();
      expect(
        screen.getByText(`status: ${character1.status}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`species: ${character1.species}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`gender: ${character1.gender}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`origin location: ${character1.origin.name}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`last known location: ${character1.location.name}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          `first appeared in episode: ${character1?.episode
            ?.at(0)
            ?.match(/\d+$/)}`
        )
      ).toBeInTheDocument();
    });
  });

  it('displays not found page when character id is not valid', async () => {
    render(<ModalCard id={-1} />);

    await waitFor(() => {
      expect(screen.getByTestId('404')).toBeInTheDocument();
    });
  });
});
