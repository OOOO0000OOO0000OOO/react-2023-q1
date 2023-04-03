import React from 'react';
import styles from '../CardsForm.module.css';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { UserCardData } from '../../../models/UserCardData';
import { FormFields } from '../../../models/FormData';

interface UserSelectProps {
  name: FormFields;
  options: readonly string[];
  register: UseFormRegister<UserCardData>;
  regOptions: RegisterOptions<UserCardData, FormFields>;
  error?: { message?: string };
}

const UserSelect: React.FC<UserSelectProps> = ({
  name,
  register,
  options,
  regOptions,
  error,
}: UserSelectProps) => {
  return (
    <label className={styles.label}>
      {name}:
      <select {...register(name, regOptions)} defaultValue="">
        {
          <option value="" disabled>
            choose {name}...
          </option>
        }
        {options.map((attack) => (
          <option key={attack} value={attack}>
            {attack}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error?.message}</span>}
    </label>
  );
};

export default UserSelect;
