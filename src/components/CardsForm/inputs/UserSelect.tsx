import React from 'react';
import styles from '../CardsForm.module.css';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { UserCardData } from '../../../models/UserCardData';
import { FormFields } from '../../../models/FormData';

interface UserSelectProps {
  name: FormFields;
  options: readonly string[];
  register: UseFormRegister<UserCardData>;
  regOptions?: RegisterOptions<UserCardData, FormFields>;
  error?: { message?: string };
  defaultValue?: string;
}

const UserSelect: React.FC<UserSelectProps> = ({
  name,
  register,
  options,
  defaultValue,
}: UserSelectProps) => {
  return (
    <label className={styles.label}>
      {name}:
      <select {...register(name)} defaultValue={defaultValue}>
        {options.map((attack) => (
          <option key={attack} value={attack}>
            {attack}
          </option>
        ))}
      </select>
    </label>
  );
};

export default UserSelect;
