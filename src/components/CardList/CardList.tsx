import React from 'react';
import { Character } from 'models';
import { useGetCharactersQuery } from 'store/api';
import { Card, CardLoader } from 'components';
import { NotFoundPage } from 'pages';
import styles from './CardList.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  name: string;
}

const CardList: React.FC<Props> = ({ name }) => {
  const {
    data: { results: cards = [] } = {
      cards: [],
    },
    isLoading,
  } = useGetCharactersQuery({ name });

  if (isLoading)
    return (
      <div data-testid="loader" className={styles.cardListLoading}>
        <span className={styles.message}>progressing...</span>
        <CardLoader count={20} />
      </div>
    );

  if (cards.length)
    return (
      <div className={styles.cardList}>
        {cards.map((card: Character) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );

  return <NotFoundPage />;
};

export default CardList;
