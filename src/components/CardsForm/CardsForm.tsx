import React, { Component, FormEvent, RefObject } from 'react';
import {
  Attack,
  attacks,
  Type,
  types,
  UserCardData,
  initialState,
} from '../../models/UserCardData';
import { FormFields, formFields } from '../../models/FormData';
import { Validations, validations } from '../../models/ValidationsData';
import UserSelect from './UserSelect';
import TypeInput from './TypeInput';
import UserInput from './UserInput';
import styles from './CardsForm.module.css';

interface CardFormProps {
  onSubmit: (value: UserCardData) => void;
}

interface CardFormState {
  userCardData: UserCardData;
  errors: { [K in FormFields]?: string };
  submission: boolean;
}

class CardForm extends Component<CardFormProps, CardFormState> {
  private form = React.createRef<HTMLFormElement>();
  private name = React.createRef<HTMLInputElement>();
  private date = React.createRef<HTMLInputElement>();
  private attack = React.createRef<HTMLSelectElement>();
  private consent = React.createRef<HTMLInputElement>();
  private type = {
    pokemon: React.createRef<HTMLInputElement>(),
    trainer: React.createRef<HTMLInputElement>(),
    energy: React.createRef<HTMLInputElement>(),
  };
  private image: RefObject<HTMLInputElement> = React.createRef();
  private email: RefObject<HTMLInputElement> = React.createRef();

  readonly state: CardFormState = {
    userCardData: initialState,
    errors: {},
    submission: false,
  };

  resetState = () => {
    const { id } = this.state.userCardData;

    this.setState({
      userCardData: {
        ...initialState,
        id: id + 1,
      },
      errors: {},
    });
  };

  updateState = async () => {
    const { id } = this.state.userCardData;

    this.setState({
      userCardData: {
        id,
        email: this.email.current?.value || '',
        name: this.name.current?.value || '',
        date: this.date.current?.value || '',
        attack: this.attack.current?.value as Attack,
        consent: this.consent.current?.checked || false,
        type: this.type[
          types.find((type) => this.type[type]?.current?.checked) || 'pokemon'
        ]?.current?.value as Type,
        image: this.image.current?.files?.[0] || '',
      },
    });

    await this.validate(validations);
  };

  validate = async (validations: {
    [K in FormFields]: Validations;
  }) => {
    for (const field of formFields) {
      const { required, custom } = validations[field];
      const { errors } = this.state;

      await this.setState({
        errors: {
          ...errors,
          [field]: !required.isValid(this[field].current)
            ? required.message
            : custom && !custom.isValid(this[field].current)
            ? custom.message
            : undefined,
        },
      });
    }
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await this.updateState();

    const { onSubmit } = this.props;
    const { userCardData, errors } = this.state;

    const submission = !Object.values(errors).find(Boolean);

    if (submission) {
      onSubmit(userCardData);

      this.form.current?.reset();
      this.resetState();

      if (this.image.current) this.image.current.value = '';
    }

    this.setState({ submission });
  };

  render() {
    const { errors, submission } = this.state;

    return (
      <form
        data-testid="card-form"
        ref={this.form}
        onSubmit={this.handleSubmit}
        className={styles.formContainer}
      >
        <UserInput
          label="name:"
          errors={errors}
          name="name"
          inputRef={this.name}
        />
        <UserInput
          label="email:"
          errors={errors}
          name="email"
          inputRef={this.email}
        />
        <UserInput
          label="date:"
          type="date"
          errors={errors}
          name="date"
          inputRef={this.date}
        />
        <UserSelect label="attack:" options={attacks} selectRef={this.attack} />
        <TypeInput
          label="type:"
          types={{
            pokemon: this.type.pokemon,
            trainer: this.type.trainer,
            energy: this.type.energy,
          }}
          defaultChecked="pokemon"
        />
        <UserInput
          label="image:"
          type="file"
          accept="image/*"
          errors={errors}
          name="image"
          inputRef={this.image}
        />
        <UserInput
          label="I consent to my personal data:"
          type="checkbox"
          errors={errors}
          name="consent"
          inputRef={this.consent}
        />
        <button type="submit">Submit</button>
        {submission && (
          <span className={styles.message}>successfully submitted!</span>
        )}
      </form>
    );
  }
}

export default CardForm;
