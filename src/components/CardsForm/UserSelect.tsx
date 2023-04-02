import React, { Component } from 'react';
import styles from './CardsForm.module.css';

interface UserSelectProps {
  label: string;
  options: readonly string[];
  selectRef: React.RefObject<HTMLSelectElement>;
  defaultValue?: string;
}

export default class UserSelect extends Component<UserSelectProps> {
  render() {
    const { label, options, selectRef, defaultValue } = this.props;
    return (
      <label className={styles.label}>
        {label}
        <select name="select" ref={selectRef} defaultValue={defaultValue}>
          {options.map((attack) => (
            <option key={attack} value={attack}>
              {attack}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
