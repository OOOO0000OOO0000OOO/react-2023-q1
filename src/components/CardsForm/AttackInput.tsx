import React, { Component } from 'react';
import { Attack } from '../../models/UserCardData';

interface AttackInputProps {
  attacksList: readonly Attack[];
  attacks: React.RefObject<HTMLSelectElement>;
}

export default class AttackInput extends Component<AttackInputProps> {
  render() {
    const { attacksList, attacks } = this.props;
    return (
      <label>
        attack:
        <select name="select" ref={attacks} defaultValue="Draining Kiss">
          {attacksList.map((attack) => (
            <option key={attack} value={attack}>
              {attack}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
