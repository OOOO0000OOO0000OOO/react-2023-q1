import React, { Component } from 'react';
import CardsForm from '../../components/CardsForm/CardsForm';
import { UserCardData } from '../../models/UserCardData';

interface State {
  cards: UserCardData[];
}
export default class CardsFormPage extends Component {
  state: State = {
    cards: [],
  };

  addCard = (card: UserCardData) => {
    this.setState(({ cards }: State) => ({
      cards: [...cards, card],
    }));
  };

  render() {
    return (
      <div>
        <CardsForm onSubmit={this.addCard} />
      </div>
    );
  }
}
