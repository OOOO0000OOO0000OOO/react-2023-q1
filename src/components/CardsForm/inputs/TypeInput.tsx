import React, { Component } from 'react';
import styles from '../CardsForm.module.css';

export default class TypeInput extends Component<{
  label: string;
  types: {
    [value in string]: React.RefObject<HTMLInputElement>;
  };
  defaultChecked: string;
}> {
  render() {
    const { label, types, defaultChecked } = this.props;
    return (
      <div className={styles.label}>
        {label}
        {Object.keys(types).map((value) => {
          const radioRef = types[value];

          return (
            <label key={value}>
              {value}
              <input
                type="radio"
                name="radio"
                value={value}
                ref={radioRef}
                defaultChecked={value === defaultChecked}
              />
            </label>
          );
        })}
      </div>
    );
  }
}
