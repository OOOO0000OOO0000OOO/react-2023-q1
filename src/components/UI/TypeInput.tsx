import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Type, UserCardData, FormFields } from 'models';
import styles from './Input.module.css';

interface Props {
  name: FormFields;
  types: readonly Type[];
  register: UseFormRegister<UserCardData>;
  options?: RegisterOptions<UserCardData, FormFields>;
  error?: { message?: string };
}

const TypeInput: React.FC<Props> = ({
  name,
  register,
  options,
  types,
  error,
}) => {
  return (
    <div className={styles.label}>
      {name}:
      {types.map((value) => {
        return (
          <label className={styles.typeLabel} key={value}>
            {value}
            <input type="radio" value={value} {...register(name, options)} />
          </label>
        );
      })}
      {error && (
        <span className={styles.error}>
          {error?.message || `invalid format`}
        </span>
      )}
    </div>
  );
};

export default TypeInput;
