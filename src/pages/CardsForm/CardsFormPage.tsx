import React, { Component } from 'react';
import CardsForm from '../../components/CardsForm/CardsForm';
import { UserData } from '../../models/FormData';

interface State {
  cards: UserData[];
}
export default class CardsFormPage extends Component {
  state: State = {
    cards: [],
  };

  addCard = (card: UserData) => {
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
