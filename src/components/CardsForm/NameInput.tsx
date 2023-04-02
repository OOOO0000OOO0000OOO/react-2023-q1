import React, { Component } from 'react';
import styles from './CardsForm.module.css';

export default class NameInput extends Component<{
  errors: { name?: string };
  name: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, name } = this.props;
    return (
      <label className={styles.label}>
        name:
        <input type="text" name="name" ref={name} />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </label>
    );
  }
}
