import React from 'react';
import Card from '../Card/Card';
import { CardData } from '../../models/CardData';
import styles from './CardList.module.css';

interface Props {
  cards: CardData[];
  searchQuery: string;
  error: Error | null;
}

const CardList: React.FC<Props> = ({ cards, searchQuery, error }) => {
  return (
    <div className={styles.cardList}>
      {error ? (
        <div data-testid="error">Error: {error.message}</div>
      ) : (
        cards
          .filter((card) =>
            card.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((card) => <Card key={card.id} {...card} />)
      )}
    </div>
  );
};

export default CardList;
