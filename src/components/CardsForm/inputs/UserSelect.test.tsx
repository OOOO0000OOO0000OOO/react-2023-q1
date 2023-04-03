import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserSelect from './UserSelect';

const mockAttacks = ['Thunderbolt', 'Earthquake', 'Flamethrower'];

describe('UserSelect component', () => {
  it('renders correctly with given props', () => {
    const mockRegister = vi.fn();

    render(
      <UserSelect
        name="attack"
        register={mockRegister}
        options={mockAttacks}
        regOptions={{}}
      />
    );

    expect(screen.getByLabelText(/attack/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveDisplayValue(/choose attack/i);
    expect(screen.getAllByRole('option')).toHaveLength(mockAttacks.length + 1);

    mockAttacks.forEach((attack) => {
      expect(screen.getByText(attack)).toBeInTheDocument();
    });
  });

  it('updates the ref when an option is selected', async () => {
    const mockRegister = vi.fn();

    render(
      <UserSelect
        name="attack"
        register={mockRegister}
        options={mockAttacks}
        regOptions={{}}
      />
    );

    await userEvent.selectOptions(screen.getByRole('combobox'), 'Thunderbolt');
    await waitFor(() => {
      expect(screen.getByRole<HTMLSelectElement>('combobox')?.value).toBe(
        'Thunderbolt'
      );
    });
  });
});
