import React from 'react';
import { Character } from 'models';
import styles from './Card.module.css';

const Card: React.FC<Character> = ({ name, image, species }) => {
  return (
    <div data-testid="card" className={styles.card}>
      <img src={image} alt={name} className={styles.image}></img>
      <h3>{name}</h3>
      <p>{species}</p>
    </div>
  );
};

export default Card;
