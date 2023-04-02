import React, { Component } from 'react';

export default class ConsentInput extends Component<{
  errors: { consent?: string };
  consent: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, consent } = this.props;
    return (
      <label>
        I consent to my personal data:
        <input type="checkbox" name="checkbox" ref={consent} />
        {errors.consent && (
          <span className="error-message">{errors.consent}</span>
        )}
      </label>
    );
  }
}
