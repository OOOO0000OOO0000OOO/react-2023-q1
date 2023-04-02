import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import CardsFormPage from './CardsFormPage';

describe('CardsFormPage', () => {
  const mockCardData = {
    name: 'John Doe',
    email: 'johndoe@test.com',
    date: '2022-01-01',
    type: 'trainer',
    image: new File(['image'], 'image.png'),
  } as const;

  it('should render a UserCardsList component', () => {
    render(<CardsFormPage />);

    expect(screen.getByTestId('user-cards-list')).toBeInTheDocument();
  });

  it('should draw an user card on form submit', () => {
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

    userEvent.upload(imageInput, mockCardData.image).then(() => {
      fireEvent.click(submitButton);
      expect(screen.getByTestId('user-cards-list').children.length).toBe(1);
    });
  });
});
