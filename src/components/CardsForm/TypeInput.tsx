import React, { Component } from 'react';

export default class TypeInput extends Component<{
  type: {
    pokemon: React.RefObject<HTMLInputElement>;
    trainer: React.RefObject<HTMLInputElement>;
    energy: React.RefObject<HTMLInputElement>;
  };
}> {
  render() {
    const { type } = this.props;
    return (
      <div>
        type:
        <label>
          <input
            type="radio"
            name="radio"
            value="pokemon"
            ref={type.pokemon}
            defaultChecked
          />
          pokemon
        </label>
        <label>
          <input type="radio" name="radio" value="trainer" ref={type.energy} />
          trainer
        </label>
        <label>
          <input type="radio" name="radio" value="energy" ref={type.trainer} />
          energy
        </label>
      </div>
    );
  }
}
