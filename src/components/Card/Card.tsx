import React from 'react';
import { Character } from 'models';
import styles from './Card.module.css';

interface CardProps extends Character {
  showCard: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ name, image, id, showCard }) => {
  return (
    <React.Fragment>
      <div
        data-testid="card"
        className={styles.card}
        onClick={() => showCard(id)}
      >
        <img src={image} alt={name} className={styles.image}></img>
        <h3>{name}</h3>
      </div>
    </React.Fragment>
  );
};

export default Card;
