import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { attacks, types, UserCardData } from '../../models/UserCardData';
import { TypeInput, UserInput, UserSelect } from './inputs';
import styles from './CardsForm.module.css';
import { useForm } from 'react-hook-form';

interface CardFormProps {
  onSubmit: (value: UserCardData) => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit }) => {
  const [isSubmission, setIsSubmission] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserCardData>({ mode: 'onBlur' });

  const onFormSubmit = (value: UserCardData) => {
    setIsSubmission(true);
    setTimeout(setIsSubmission, 3000, false);

    onSubmit({ ...value, image: Object.assign({}, value.image), id: uuidv4() });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className={styles.formContainer}
      data-testid="card-form"
    >
      <UserInput
        register={register}
        name="name"
        options={{
          required: 'name required',
          minLength: {
            value: 3,
            message: 'name must contain at least 3 characters',
          },
        }}
        error={errors?.name}
      ></UserInput>
      <UserInput
        register={register}
        name="email"
        options={{
          required: 'email required',
          pattern: /\S+@\S+\.\S+/i,
        }}
        error={errors?.email}
      ></UserInput>
      <UserInput
        register={register}
        name="date"
        type="date"
        options={{
          required: 'date required',
        }}
        error={errors?.date}
      ></UserInput>
      <UserSelect
        name="attack"
        register={register}
        options={attacks}
        regOptions={{
          required: 'attack required',
          validate: (value) =>
            (value && attacks.includes(value as (typeof attacks)[number])) ||
            'choose the attack from the list',
        }}
        error={errors?.attack}
      />
      <TypeInput
        name="type"
        register={register}
        types={types}
        options={{
          required: 'type required',
          validate: (value) =>
            (value && types.includes(value as (typeof types)[number])) ||
            'select one of the given types',
        }}
        error={errors?.type}
      />
      <UserInput
        register={register}
        name="image"
        type="file"
        accept="image/*"
        options={{
          required: 'image required',
          validate: (fileList) =>
            (fileList instanceof FileList &&
              fileList[0] &&
              /image/.test(fileList[0].type)) ||
            'invalid image format',
        }}
        error={errors?.image}
      />
      <UserInput
        label="I consent to my personal data"
        register={register}
        name="consent"
        type="checkbox"
        options={{
          required: 'consent required',
        }}
        error={errors?.consent}
      />
      <button type="submit">Submit</button>
      {isSubmission && (
        <span className={styles.message}>successfully submitted!</span>
      )}
    </form>
  );
};

export default CardForm;
