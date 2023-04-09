import React from 'react';
import { Card, CardLoader } from 'components';
import { Character } from 'models';
import styles from './CardList.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { NotFoundPage } from 'pages';

interface Props {
  cards: Character[];
  error?: Error | null;
  loading?: boolean;
  notFound?: string;
}

const CardList: React.FC<Props> = ({ cards, error, loading, notFound }) => {
  if (loading)
    return (
      <div data-testid="loader" className={styles.cardListLoading}>
        <span className={styles.message}>progressing...</span>
        <CardLoader count={20} />
      </div>
    );

  if (error)
    return (
      <div className={styles.cardListLoading}>
        <div data-testid="error" className={styles.message}>
          Error: {error.message}
        </div>
        <CardLoader count={20} />
      </div>
    );

  if (notFound) return <NotFoundPage />;

  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;
