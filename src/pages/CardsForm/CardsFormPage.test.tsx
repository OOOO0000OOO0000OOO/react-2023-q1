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
    image: new File(['image'], 'image.png', { type: 'image/png' }),
  } as const;

  it('should render a UserCardsList component', () => {
    render(<CardsFormPage />);

    expect(screen.getByTestId('user-cards-list')).toBeInTheDocument();
  });

  it('should draw an user card on form submit', async () => {
    render(<CardsFormPage />);

    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    const emailInput = screen.getByLabelText<HTMLInputElement>(/email/i);
    const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i);
    const consentInput = screen.getByLabelText<HTMLInputElement>(/consent/i);
    const imageInput = screen.getByLabelText<HTMLInputElement>(/image/i);
    const submitButton = screen.getByRole('button');

    nameInput.value = mockCardData.name;
    emailInput.value = mockCardData.email;
    dateInput.value = mockCardData.date;
    consentInput.checked = true;

    await userEvent.upload(imageInput, mockCardData.image);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/successfully submitted/i)).toBeInTheDocument();
      expect(screen.getByTestId('user-cards-list').children.length).toBe(1);
    });
  });
});
