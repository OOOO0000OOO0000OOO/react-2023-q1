import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { UserCardData, FormFields } from '../../models';
import styles from './Input.module.css';

interface Props {
  label?: string;
  type?: 'text' | 'date' | 'file' | 'checkbox';
  register: UseFormRegister<UserCardData>;
  options: RegisterOptions<UserCardData, FormFields>;
  name: FormFields;
  error?: { message?: string };
  accept?: string;
}

const UserInput: React.FC<Props> = ({
  type = 'text',
  name,
  error,
  register,
  options,
  label,
  ...rest
}) => {
  return (
    <label className={styles.label}>
      {label || name}:
      <input
        {...register(name, options)}
        type={type}
        {...rest}
        className={styles.input}
      />
      {error && (
        <span className={styles.error}>
          {error?.message || `invalid format`}
        </span>
      )}
    </label>
  );
};

export default UserInput;
