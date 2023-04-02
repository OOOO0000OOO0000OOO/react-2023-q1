import React, { Component } from 'react';
import { UserCardList, CardsForm } from '../../components';
import { UserCardData } from '../../models/UserCardData';
import styles from './CardsFormPage.module.css';

interface State {
  cards: UserCardData[];
}
export default class CardsFormPage extends Component {
  state: State = {
    cards: [],
  };

  private addCard = (card: UserCardData) => {
    this.setState(({ cards }: State) => ({
      cards: [...cards, card],
    }));
  };

  render() {
    const { cards } = this.state;

    return (
      <div className={styles.formContainer}>
        <h3 className={styles.heading}>Create Your Own Poke Cards</h3>
        <CardsForm onSubmit={this.addCard} />
        <UserCardList cards={cards} />
      </div>
    );
  }
}
