import React, { Component, FormEvent } from 'react';
import { attacks, UserData } from '../../models/FormData';

interface CardFormProps {
  onSubmit: (value: UserData) => void;
}

interface CardFormState {
  formData: UserData;
}

class CardForm extends Component<CardFormProps, CardFormState> {
  form: React.RefObject<HTMLFormElement>;
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  attack: React.RefObject<HTMLSelectElement>;
  hide: React.RefObject<HTMLInputElement>;
  type: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;

  constructor(props: CardFormProps) {
    super(props);

    this.form = React.createRef();
    this.name = React.createRef();
    this.date = React.createRef();
    this.attack = React.createRef();
    this.hide = React.createRef();
    this.type = React.createRef();
    this.image = React.createRef();
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { formData } = this.state;

    onSubmit(formData);
  };

  render() {
    return (
      <form ref={this.form} onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type="text" name="name" ref={this.name} />
        </label>

        <label>
          birth date:
          <input type="date" name="date" ref={this.date} />
        </label>

        <label>
          attack:
          <select name="select" ref={this.attack}>
            {attacks.map((attack) => (
              <option key={attack} value={attack}>
                {attack}
              </option>
            ))}
          </select>
        </label>

        <label>
          type:
          <input type="radio" name="radio" value="pokemon" ref={this.type} />
          pokemon
          <input type="radio" name="radio" value="trainer" ref={this.type} />
          trainer
          <input type="radio" name="radio" value="energy" ref={this.type} />
          energy
        </label>

        <label>
          image:
          <input type="file" accept="image/*" name="image" ref={this.image} />
        </label>

        <label>
          I consent to my personal data:
          <input type="checkbox" name="checkbox" ref={this.hide} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CardForm;
