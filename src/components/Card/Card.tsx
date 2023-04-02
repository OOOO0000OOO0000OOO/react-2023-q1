import React, { Component } from 'react';
import { CardData } from '../../models/CardData';

export default class Card extends Component<CardData> {
  render() {
    const { imageUrl, name, types, supertype }: CardData = this.props;

    return (
      <div data-testid="card">
        <img src={imageUrl} alt={name}></img>
        <h3>{name}</h3>
        <p>{supertype}</p>
        {types && <div data-testid="types">{types.join(' · ')}</div>}
      </div>
    );
  }
}
