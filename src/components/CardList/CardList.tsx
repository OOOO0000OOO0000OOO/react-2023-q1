import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import { CardData } from '../../models/interfaces';

interface Props {
  cards: CardData[];
  searchQuery: string;
  error: Error | null;
}

export default class CardsList extends Component<Props> {
  render() {
    const { cards, searchQuery, error } = this.props;

    return (
      <div>
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
