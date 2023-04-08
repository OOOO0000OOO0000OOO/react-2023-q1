import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardForm } from 'components';

describe('CardForm component', () => {
  vi.mock('uuid', () => ({ v4: () => 'fhdtsdt56tsd6s7' }));

  const mockCardData = {
    id: 'fhdtsdt56tsd6s7',
    name: 'John Doe',
    email: 'johndoe@test.com',
    date: '2022-01-01',
    attack: 'Draining Kiss',
    consent: true,
    type: 'trainer',
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

    await userEvent.selectOptions(attackInput, mockCardData.attack);
    await userEvent.upload(imageInput, new File([], '', { type: 'image/png' }));

    fireEvent.submit(screen.getByTestId('card-form'));
  });

  it('should render the form', () => {
    expect(screen.getByTestId('card-form')).toBeInTheDocument();
  });

  it('should submit user card data on submit', async () => {
    const input = screen.getByLabelText<HTMLInputElement>(/image/i);

    await userEvent.upload(input, new File([], '', { type: 'image/png' }));

    const mockFileList = Object.assign({}, input.files);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        ...mockCardData,
        image: mockFileList,
      });
    });
  });

  it('should reset the form on submit', async () => {
    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i);
    const emailInput = screen.getByLabelText<HTMLSelectElement>(/email/i);
    const consentInput = screen.getByLabelText<HTMLInputElement>(/consent/i);

    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(dateInput.value).toBe('');
      expect(consentInput.checked).toBe(false);
    });
  });
});
