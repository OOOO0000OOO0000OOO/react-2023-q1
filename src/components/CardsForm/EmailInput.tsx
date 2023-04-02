import React, { Component } from 'react';

export default class EmailInput extends Component<{
  errors: { email?: string };
  email: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, email } = this.props;
    return (
      <label>
        email:
        <input type="text" name="name" ref={email} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </label>
    );
  }
}
