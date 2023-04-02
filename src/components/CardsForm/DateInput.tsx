import React, { Component } from 'react';

export default class DateInput extends Component<{
  errors: { date?: string };
  date: React.RefObject<HTMLInputElement>;
}> {
  render() {
    const { errors, date } = this.props;
    return (
      <label>
        birth date:
        <input type="date" name="date" ref={date} />
        {errors.date && <span className="error-message">{errors.date}</span>}
      </label>
    );
  }
}
