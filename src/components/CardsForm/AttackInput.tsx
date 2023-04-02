import React, { Component } from 'react';

interface AttackInputProps {
  attacksList: readonly string[];
  defaultValue?: string;
  attacks: React.RefObject<HTMLSelectElement>;
}

export default class AttackInput extends Component<AttackInputProps> {
  render() {
    const { attacksList, attacks, defaultValue } = this.props;
    return (
      <label>
        attack:
        <select name="select" ref={attacks} defaultValue={defaultValue}>
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
