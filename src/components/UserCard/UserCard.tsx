import React from 'react';
import { UserCardData } from '../../models';
import styles from './UserCard.module.css';

const UserCard = ({ name, date, attack, type, image }: UserCardData) => {
  return (
    <div data-testid="user-card" className={styles.userCard}>
      <h3>{name}</h3>
      <img
        src={image && image[0] ? URL.createObjectURL(image[0]) : ''}
        alt={name}
        className={styles.userImage}
      ></img>
      <p>{type}</p>
      <p>{date}</p>
      <p>{attack}</p>
    </div>
  );
};

export default UserCard;
