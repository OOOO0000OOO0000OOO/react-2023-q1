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
import AttackInput from './AttackInput';
import ConsentInput from './ConsentInput';
import DateInput from './DateInput';
import EmailInput from './EmailInput';
import ImageInput from './ImageInput';
import NameInput from './NameInput';
import TypeInput from './TypeInput';

interface CardFormProps {
  onSubmit: (value: UserCardData) => void;
  onSuccess?: (value: unknown) => void;
}

interface CardFormState {
  userCardData: UserCardData;
  errors: { [K in FormFields]?: string };
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

    const { onSubmit, onSuccess } = this.props;
    const { userCardData, errors } = this.state;

    if (!Object.values(errors).find(Boolean)) {
      onSubmit(userCardData);

      this.form.current?.reset();
      this.resetState();

      if (this.image.current) this.image.current.value = '';
    }

    if (onSuccess) onSuccess(userCardData);
  };

  render() {
    const { errors } = this.state;

    return (
      <form
        data-testid="card-form"
        ref={this.form}
        onSubmit={this.handleSubmit}
      >
        <NameInput errors={errors} name={this.name} />
        <EmailInput errors={errors} email={this.email} />
        <DateInput errors={errors} date={this.date} />
        <AttackInput attacksList={attacks} attacks={this.attack} />
        <TypeInput type={this.type} />
        <ImageInput errors={errors} image={this.image} />
        <ConsentInput errors={errors} consent={this.consent} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CardForm;
