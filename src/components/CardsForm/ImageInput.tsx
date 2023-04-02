import React, { Component } from 'react';
import styles from './CardsForm.module.css';

export default class ImageInput extends Component<{
  errors: { image?: string };
  image: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, image } = this.props;
    return (
      <label className={styles.label}>
        image:
        <input type="file" accept="image/*" name="image" ref={image} />
        {errors.image && <span className={styles.error}>{errors.image}</span>}
      </label>
    );
  }
}
