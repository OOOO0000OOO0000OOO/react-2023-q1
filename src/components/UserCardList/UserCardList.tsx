import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard';
import { UserCardData } from '../../models/UserCardData';

interface Props {
  cards: UserCardData[];
}

export default class UseCardsList extends Component<Props> {
  render() {
    const { cards } = this.props;

    return (
      <div data-testid="user-cards-list">
        {cards.length ? (
          cards.map((card: UserCardData) => (
            <UserCard key={card.id} {...card} />
          ))
        ) : (
          <div>start creating a new card</div>
        )}
      </div>
    );
  }
}
