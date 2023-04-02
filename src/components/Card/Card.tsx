import React, { Component } from 'react';
import { CardData } from '../../models/CardData';
import styles from './Card.module.css';

export default class Card extends Component<CardData> {
  render() {
    const { imageUrl, name, types, supertype }: CardData = this.props;

    return (
      <div data-testid="card" className={styles.card}>
        <img src={imageUrl} alt={name} className={styles.image}></img>
        <h3>{name}</h3>
        <span>{supertype}</span>
        {types && <div data-testid="types">{types.join(' · ')}</div>}
      </div>
    );
  }
}
