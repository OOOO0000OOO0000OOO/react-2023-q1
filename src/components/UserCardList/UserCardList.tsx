import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard';
import { UserCardData } from '../../models/UserCardData';
import styles from './UserCardList.module.css';

interface Props {
  cards: UserCardData[];
}

export default class UseCardsList extends Component<Props> {
  render() {
    const { cards } = this.props;

    return (
      <div data-testid="user-cards-list" className={styles.cardsList}>
        {cards.length ? (
          cards.map((card: UserCardData) => (
            <UserCard key={card.id} {...card} />
          ))
        ) : (
          <div className={styles.message}>start creating a new card</div>
        )}
      </div>
    );
  }
}
