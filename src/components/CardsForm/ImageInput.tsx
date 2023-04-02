import React, { Component } from 'react';

export default class ImageInput extends Component<{
  errors: { image?: string };
  image: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, image } = this.props;
    return (
      <label>
        image:
        <input type="file" accept="image/*" name="image" ref={image} />
        {errors.image && <span className="error-message">{errors.image}</span>}
      </label>
    );
  }
}
