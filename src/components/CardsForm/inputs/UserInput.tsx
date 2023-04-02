import React, { Component } from 'react';
import styles from '../CardsForm.module.css';

export default class UserInput extends Component<{
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  type?: 'text' | 'date' | 'file' | 'checkbox';
  name: 'name' | 'email' | 'date' | 'image' | 'consent';
  errors: { [key in string]?: string };
  accept?: string;
}> {
  render() {
    const {
      errors,
      label,
      name,
      inputRef,
      type = 'text',
      ...options
    } = this.props;
    return (
      <label className={styles.label}>
        {label}
        <input {...options} name={name} type={type} ref={inputRef} />
        {errors[name] && <span className={styles.error}>{errors[name]}</span>}
      </label>
    );
  }
}
