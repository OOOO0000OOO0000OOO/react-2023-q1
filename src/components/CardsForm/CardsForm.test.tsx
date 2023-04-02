import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardForm from './CardsForm';

describe('CardForm component', () => {
  const mockCardData = {
    id: 0,
    name: 'John Doe',
    email: 'johndoe@test.com',
    date: '2022-01-01',
    attack: 'Draining Kiss',
    consent: true,
    type: 'trainer',
    image: new File(['image'], 'image.png', { type: 'image/png' }),
  };

  const onSubmit = vi.fn();

  beforeEach(async () => {
    render(<CardForm onSubmit={onSubmit} />);

    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    const emailInput = screen.getByLabelText<HTMLInputElement>(/email/i);
    const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i);
    const attackInput = screen.getByLabelText<HTMLSelectElement>(/attack/i);
    const consentInput = screen.getByLabelText<HTMLInputElement>(/consent/i);
    const typeTrainerInput =
      screen.getByLabelText<HTMLInputElement>(/trainer/i);
    const imageInput = screen.getByLabelText<HTMLInputElement>(/image/i);

    fireEvent.input(nameInput, { target: { value: mockCardData.name } });
    fireEvent.input(emailInput, {
      target: { value: mockCardData.email },
    });
    fireEvent.input(dateInput, { target: { value: mockCardData.date } });

    fireEvent.click(consentInput);
    fireEvent.click(typeTrainerInput);
    userEvent.selectOptions(attackInput, mockCardData.attack);
    await userEvent.upload(imageInput, mockCardData.image).then(() => {
      fireEvent.submit(screen.getByTestId('card-form'));
    });
  });

  it('should render the form', () => {
    expect(screen.getByTestId('card-form')).toBeInTheDocument();
  });

  it('should submit user card data on submit', () => {
    waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(mockCardData);
    });
  });

  it('should reset the form on submit', () => {
    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i);
    const emailInput = screen.getByLabelText<HTMLSelectElement>(/email/i);
    const consentInput = screen.getByLabelText<HTMLInputElement>(/consent/i);
    const imageInput = screen.getByLabelText<HTMLInputElement>(/image/i);

    waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(dateInput.value).toBe('');
      expect(consentInput.checked).toBe(false);
      expect(imageInput.files?.length).toBe(0);
    });
  });
});
