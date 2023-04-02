import React, { Component } from 'react';
import styles from './CardsForm.module.css';

export default class DateInput extends Component<{
  errors: { date?: string };
  date: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, date } = this.props;
    return (
      <label className={styles.label}>
        birth date:
        <input type="date" name="date" ref={date} />
        {errors.date && <span className={styles.error}>{errors.date}</span>}
      </label>
    );
  }
}
