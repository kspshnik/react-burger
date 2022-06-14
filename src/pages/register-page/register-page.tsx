import React, {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  MouseEventHandler, ReactNode, SyntheticEvent,
  useRef,
  useState,
} from 'react';

import {
  Button, EmailInput, Input, PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../services/store/hooks';

import LinkBox from '../../components/link-box/link-box';

import {
  resetRegisterForm, setRegisterEmail, setRegisterName, setRegisterPass,
} from '../../services/store';

import { nameValidity, emailValidity, passwordValidity } from '../../services/helpers';
import loginStyles       from './register-page.module.css';
import registerUserThunk from '../../services/thunks/register-user-thunk';

type TButtonProps = {
  children: ReactNode,
  type?: 'secondary' | 'primary',
  size?: 'small' | 'medium' | 'large';
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  disabled?: boolean;
  name?: string;
  htmlType?: 'button' | 'submit' | 'reset';
};


const RegisterPage : FC = () => {
  const { name, email, password } = useSelector((store) => store.forms.register);
  const [isNameValid, setNameValidity] = useState<boolean>(false);
  const [isEmailValid, setEmailValidity] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValidity] = useState<boolean>(false);

  //  const history = useHistory<TLocationState>();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit : FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(registerUserThunk());
  };

  const onNameChange : ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, validity: { valid } } = evt.target;
    setRegisterName(value);
    setNameValidity(valid && nameValidity(value));
  };

  const onEmailChange : ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, validity: { valid } } = evt.target;
    setRegisterEmail(value);
    setEmailValidity(valid && emailValidity(value));
  };
  const onPasswordChange : ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, validity: { valid } } = evt.target;
    setRegisterPass(value);
    setPasswordValidity(valid && passwordValidity(value));
  };
  const onIconClick : MouseEventHandler = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  React.useEffect(() => {
    dispatch(resetRegisterForm());
  }, [dispatch]);

  return (
    <main className={loginStyles.wrapper}>
      <form className={`${loginStyles.form}`} onSubmit={onSubmit}>
        <h2 className={`${loginStyles.form__heading} text_type_main - medium`}>Регистрация</h2>
        <fieldset className={`${loginStyles.form__fieldset} pt-3 pb-3 mb-6`}>
          <Input
            type='text'
            placeholder='Имя'
            onChange={onNameChange}
            icon='EditIcon'
            value={name}
            name='name'
            error={!isNameValid}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText='Имя должно быть длиннее двух букв!'
            size='default' />
          <EmailInput name='email' value={email} onChange={onEmailChange} />
          <PasswordInput value={password} name='password' onChange={onPasswordChange} />
        </fieldset>
        <Button
          type='primary'
          htmlType='submit'
          size='medium'
          disabled={isNameValid && isEmailValid && isPasswordValid}
          children='Зарегистрироваться' />
      </form>
      <LinkBox linkName='Войти!' linkTo='/login' extraClasses='pt-20' caption='Уже зарегистрированы?' />
    </main>
  );
};

export default RegisterPage;
