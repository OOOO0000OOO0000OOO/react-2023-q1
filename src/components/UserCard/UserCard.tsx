import React, { Component } from 'react';
import { UserCardData } from '../../models/UserCardData';
import styles from './UserCard.module.css';

export default class UserCard extends Component<UserCardData> {
  render() {
    const { name, date, attack, type, image } = this.props;

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
  }
}
