import React, { Component } from 'react';
import styles from './CardsForm.module.css';

export default class EmailInput extends Component<{
  errors: { email?: string };
  email: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, email } = this.props;
    return (
      <label className={styles.label}>
        email:
        <input type="text" name="name" ref={email} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </label>
    );
  }
}
