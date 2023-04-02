import React from 'react';
import { CardData } from '../../models/CardData';
import styles from './Card.module.css';

const Card: React.FC<CardData> = ({ imageUrl, name, types, supertype }) => {
  return (
    <div data-testid="card" className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image}></img>
      <h3>{name}</h3>
      <span>{supertype}</span>
      {types && <div data-testid="types">{types.join(' · ')}</div>}
    </div>
  );
};

export default Card;
