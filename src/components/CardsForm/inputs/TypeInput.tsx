import React from 'react';
import styles from '../CardsForm.module.css';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Type, UserCardData } from '../../../models/UserCardData';
import { FormFields } from '../../../models/FormData';

interface Props {
  name: FormFields;
  types: readonly Type[];
  defaultChecked: string;
  register: UseFormRegister<UserCardData>;
  options?: RegisterOptions<UserCardData, FormFields>;
  error?: { message?: string };
}

const TypeInput: React.FC<Props> = ({
  name,
  register,
  options,
  types,
  defaultChecked,
}) => {
  return (
    <div className={styles.label}>
      {name}:
      {types.map((value) => {
        return (
          <label key={value}>
            {value}
            <input
              type="radio"
              value={value}
              {...register(name, options)}
              defaultChecked={value === defaultChecked}
            />
          </label>
        );
      })}
    </div>
  );
};

export default TypeInput;
