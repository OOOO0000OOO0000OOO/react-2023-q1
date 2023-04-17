import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'store/types';
import { addCard } from 'store/form';
import { UserCardData } from 'models';
import { UserCardList, CardForm } from 'components';
import styles from './CardsFormPage.module.css';

const CardsFormPage = () => {
  const cards = useSelector((state: StoreState) => state.form.cards);
  const dispatch = useDispatch();

  const onSubmit = (card: UserCardData) => {
    dispatch(
      addCard({
        ...card,
        image:
          card.image && card.image[0] && card.image[0] instanceof File
            ? URL.createObjectURL(card.image[0])
            : '',
      })
    );
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.heading}>Create Your Own Poke Cards</h3>
      <CardForm onSubmit={onSubmit} />
      <UserCardList cards={cards} />
    </div>
  );
};

export default CardsFormPage;
