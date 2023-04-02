import React, { Component } from 'react';
import { UserCardData } from '../../models/UserCardData';

export default class UserCard extends Component<UserCardData> {
  render() {
    const { name, date, attack, type, image } = this.props;

    return (
      <div data-testid="user-card">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{date}</p>
        <p>{attack}</p>
        <img src={image && URL.createObjectURL(image)} alt={name}></img>
      </div>
    );
  }
}
