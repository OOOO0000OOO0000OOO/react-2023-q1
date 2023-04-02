import React, { Component } from 'react';
import { UserCardData } from '../../models/UserCardData';

export default class UserCard extends Component<UserCardData> {
  render() {
    const { name, level, attack, type, image } = this.props;

    return (
      <div data-test="user-card">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{level}</p>
        <p>{attack}</p>
      </div>
    );
  }
}
