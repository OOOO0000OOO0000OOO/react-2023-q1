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
      <label>
        type:
        <input
          type="radio"
          name="radio"
          value="pokemon"
          ref={type.pokemon}
          defaultChecked
        />
        pokemon
        <input type="radio" name="radio" value="trainer" ref={type.energy} />
        trainer
        <input type="radio" name="radio" value="energy" ref={type.trainer} />
        energy
      </label>
    );
  }
}
