import React, { Component } from 'react';

export default class NameInput extends Component<{
  errors: { name?: string };
  name: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, name } = this.props;
    return (
      <label>
        name:
        <input type="text" name="name" ref={name} />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </label>
    );
  }
}
