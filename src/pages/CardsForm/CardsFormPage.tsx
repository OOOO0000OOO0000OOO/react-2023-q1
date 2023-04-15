import React, { useState } from 'react';
import { UserCardData } from 'models';
import { UserCardList, CardForm } from 'components';
import styles from './CardsFormPage.module.css';

const CardsFormPage = () => {
  const [cards, setCards] = useState<UserCardData[]>([]);

  const addCard = (card: UserCardData) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.heading}>Create Your Own Poke Cards</h3>
      <CardForm onSubmit={addCard} />
      <UserCardList cards={cards} />
    </div>
  );
};

export default CardsFormPage;
