import React, { Component, FormEvent, RefObject } from 'react';
import { Attack, attacks, UserCardData } from '../../models/UserCardData';

interface CardFormProps {
  onSubmit: (value: UserCardData) => void;
}

interface CardFormState {
  userCardData: UserCardData;
  errors: { [K in keyof UserCardData]?: string };
}
interface Validations {
  required: {
    isValid: (
      value: HTMLInputElement | HTMLSelectElement | null
    ) => boolean | null;
    message: string;
  };
  custom?: {
    isValid: (
      value: HTMLInputElement | HTMLSelectElement | null
    ) => boolean | null;
    message: string;
  };
}

class CardForm extends Component<CardFormProps, CardFormState> {
  private form: RefObject<HTMLFormElement> = React.createRef();
  private name: RefObject<HTMLInputElement> = React.createRef();
  private date: RefObject<HTMLInputElement> = React.createRef();
  private attack: RefObject<HTMLSelectElement> = React.createRef();
  private consent: RefObject<HTMLInputElement> = React.createRef();
  private type: RefObject<HTMLInputElement> = React.createRef();
  private image: RefObject<HTMLInputElement> = React.createRef();

  state: CardFormState = {
    userCardData: {
      id: 0,
      name: '',
      date: '',
      attack: 'Draining Kiss',
      type: 'pokemon',
      image: '',
      consent: false,
    },
    errors: {},
  };

  resetState = () => {
    const { id } = this.state.userCardData;

    this.setState({
      userCardData: {
        id: id + 1,
        name: '',
        date: '',
        attack: 'Draining Kiss',
        type: 'pokemon',
        image: '',
        consent: false,
      },
      errors: {},
    });
  };

  updateState = async () => {
    const { id } = this.state.userCardData;

    this.setState({
      userCardData: {
        id: id,
        name: this.name.current?.value,
        date: this.date.current?.value,
        attack: this.attack.current?.value as Attack,
        consent: this.consent.current?.checked,
        type: this.type.current?.value as 'pokemon' | 'trainer' | 'energy',
        image:
          (this.image.current?.files?.[0] &&
            URL.createObjectURL(this.image.current?.files[0])) ||
          '',
      },
    });

    await this.validate({
      name: {
        required: {
          isValid: (input) => Boolean(input && input.value.trim().length),
          message: 'name field is required',
        },
        custom: {
          isValid: (input) => Boolean(input && input.value.trim().length >= 3),
          message: 'name field must contain at least 3 characters',
        },
      },
      date: {
        required: {
          isValid: (input) => Boolean(input && input.value.trim().length),
          message: 'date field is required',
        },
      },
      attack: {
        required: {
          isValid: (input) => Boolean(input && input.value),
          message: 'attack field is required',
        },
      },
      type: {
        required: {
          isValid: (input) => Boolean(input && input.value),
          message: 'type field is required',
        },
      },
      image: {
        required: {
          isValid: (input) => Boolean(input && input.value),
          message: 'image field is required',
        },
      },
      consent: {
        required: {
          isValid: (input) =>
            input instanceof HTMLInputElement && input.checked,
          message: 'consent field is required',
        },
      },
    });
  };

  validate = async (validations: {
    [K in Exclude<keyof UserCardData, 'id'>]: Validations;
  }) => {
    for (const field of [
      'name',
      'date',
      'attack',
      'type',
      'image',
      'consent',
    ] as const) {
      const { required, custom } = validations[field];
      const { errors } = this.state;

      if (!required.isValid(this[field].current)) {
        await this.setState({
          errors: { ...errors, [field]: required.message },
        });
      } else if (custom && !custom.isValid(this[field].current)) {
        await this.setState({
          errors: { ...errors, [field]: custom.message },
        });
      } else {
        await this.setState({
          errors: { ...errors, [field]: undefined },
        });
      }
    }
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await this.updateState();

    const { onSubmit } = this.props;
    const { userCardData, errors } = this.state;

    if (!Object.values(errors).find(Boolean)) {
      onSubmit(userCardData);

      this.form.current?.reset();
      this.resetState();
    } else {
      // this.form.current?.reportValidity();
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <form ref={this.form} onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type="text" name="name" ref={this.name} />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>

        <label>
          birth date:
          <input type="date" name="date" ref={this.date} />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </label>

        <label>
          attack:
          <select name="select" ref={this.attack} defaultValue="Draining Kiss">
            {attacks.map((attack) => (
              <option key={attack} value={attack}>
                {attack}
              </option>
            ))}
          </select>
        </label>

        <label>
          type:
          <input
            type="radio"
            name="radio"
            value="pokemon"
            ref={this.type}
            defaultChecked
          />
          pokemon
          <input type="radio" name="radio" value="trainer" ref={this.type} />
          trainer
          <input type="radio" name="radio" value="energy" ref={this.type} />
          energy
        </label>

        <label>
          image:
          <input type="file" accept="image/*" name="image" ref={this.image} />
          {errors.image && (
            <span className="error-message">{errors.image}</span>
          )}
        </label>

        <label>
          I consent to my personal data:
          <input type="checkbox" name="checkbox" ref={this.consent} />
          {errors.consent && (
            <span className="error-message">{errors.consent}</span>
          )}
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CardForm;
