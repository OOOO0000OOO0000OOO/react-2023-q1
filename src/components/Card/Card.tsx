import React from 'react';
import { Character } from 'models';
import styles from './Card.module.css';

const Card: React.FC<Character & { onClick: () => void }> = ({
  name,
  image,
  onClick,
}) => {
  return (
    <div data-testid="card" className={styles.card} onClick={onClick}>
      <img src={image} alt={name} className={styles.image}></img>
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
