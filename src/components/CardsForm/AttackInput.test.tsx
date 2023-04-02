import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AttackInput from './AttackInput';

const mockAttacks = ['Thunderbolt', 'Earthquake', 'Flamethrower'];

describe('AttackInput', () => {
  it('renders correctly with given props', () => {
    const mockRef = React.createRef<HTMLSelectElement>();

    render(
      <AttackInput
        attacksList={mockAttacks}
        attacks={mockRef}
        defaultValue={mockAttacks[2]}
      />
    );

    expect(screen.getByLabelText(/attack/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveDisplayValue([mockAttacks[2]]);
    expect(screen.getAllByRole('option')).toHaveLength(mockAttacks.length);

    mockAttacks.forEach((attack) => {
      expect(screen.getByText(attack)).toBeInTheDocument();
    });
  });

  it('updates the ref when an option is selected', () => {
    const mockRef2 = React.createRef<HTMLSelectElement>();

    render(<AttackInput attacksList={mockAttacks} attacks={mockRef2} />);
    userEvent.selectOptions(screen.getByRole('combobox'), 'Thunderbolt');

    expect(mockRef2.current?.value).toBe('Thunderbolt');
  });
});
