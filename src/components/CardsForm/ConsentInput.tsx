import React, { Component } from 'react';
import styles from './CardsForm.module.css';

export default class ConsentInput extends Component<{
  errors: { consent?: string };
  consent: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, consent } = this.props;
    return (
      <label className={styles.label}>
        I consent to my personal data:
        <input type="checkbox" name="checkbox" ref={consent} />
        {errors.consent && (
          <span className={styles.error}>{errors.consent}</span>
        )}
      </label>
    );
  }
}
