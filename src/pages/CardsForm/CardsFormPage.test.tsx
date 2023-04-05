import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import CardsFormPage from './CardsFormPage';

describe('CardsFormPage', () => {
  const { createObjectURL } = global.URL;

  beforeAll(() => {
    global.URL.createObjectURL = vi.fn(() => 'image.png');
  });

  afterAll(() => {
    global.URL.createObjectURL = createObjectURL;
  });

  const mockCardData = {
    name: 'John Doe',
    email: 'johndoe@test.com',
    date: '2022-01-01',
    type: 'trainer',
    attack: 'Draining Kiss',
    image: new File(['image'], 'image.png', { type: 'image/png' }),
  } as const;

  it('should render a UserCardList component', () => {
    render(<CardsFormPage />);

    expect(screen.getByTestId('user-cards-list')).toBeInTheDocument();
  });

  it('should draw an user card on form submit', async () => {
    render(<CardsFormPage />);

    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    const emailInput = screen.getByLabelText<HTMLInputElement>(/email/i);
    const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i);
    const attackInput = screen.getByLabelText<HTMLSelectElement>(/attack/i);
    const consentInput = screen.getByLabelText<HTMLInputElement>(/consent/i);
    const imageInput = screen.getByLabelText<HTMLInputElement>(/image/i);
    const trainerInput = screen.getByLabelText<HTMLInputElement>(/trainer/i);
    const submitButton = screen.getByRole('button');

    fireEvent.input(nameInput, { target: { value: mockCardData.name } });
    fireEvent.input(emailInput, {
      target: { value: mockCardData.email },
    });
    fireEvent.input(dateInput, { target: { value: mockCardData.date } });
    fireEvent.click(trainerInput);
    fireEvent.click(consentInput);

    await userEvent.selectOptions(attackInput, mockCardData.attack);
    await userEvent.upload(imageInput, new File([], '', { type: 'image/png' }));

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/successfully submitted/i)).toBeInTheDocument();
      expect(screen.getByTestId('user-cards-list').children.length).toBe(1);
    });
  });
});
