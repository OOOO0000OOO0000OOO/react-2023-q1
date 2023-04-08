import React from 'react';
import { Card } from '../../components';
import { Character } from '../../models';
import styles from './CardList.module.css';

interface Props {
  cards: Character[];
  error: Error | null;
}

const CardList: React.FC<Props> = ({ cards, error }) => {
  return (
    <div className={styles.cardList}>
      {error ? (
        <div data-testid="error">Error: {error.message}</div>
      ) : (
        cards.map((card) => <Card key={card.id} {...card} />)
      )}
    </div>
  );
};

export default CardList;
