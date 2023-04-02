import React, { Component } from 'react';
import Card from '../Card/Card';
import { CardData } from '../../models/CardData';
import styles from './CardList.module.css';

interface Props {
  cards: CardData[];
  searchQuery: string;
  error: Error | null;
}

export default class CardsList extends Component<Props> {
  render() {
    const { cards, searchQuery, error } = this.props;

    return (
      <div className={styles.cardList}>
        {error ? (
          <div data-testid="error">Error: {error.message}</div>
        ) : (
          cards
            .filter((card: CardData) =>
              card.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((card: CardData) => <Card key={card.id} {...card} />)
        )}
      </div>
    );
  }
}
