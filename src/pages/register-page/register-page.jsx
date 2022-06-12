import React, { useRef, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  Button, EmailInput, Input, PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import LinkBox from '../../components/link-box/link-box';

import {
  resetRegisterForm, setRegisterEmail, setRegisterName, setRegisterPass,
} from '../../services/actionCreators';

import { nameValidity, emailValidity, passwordValidity } from '../../services/helpers';
import loginStyles       from './register-page.module.css';
import registerUserThunk from '../../services/thunks/register-user-thunk';

const RegisterPage = () => {
  const { name, email, password } = useSelector((store) => store.forms.register);
  const [isNameValid, setNameValidity] = useState(false);
  const [isEmailValid, setEmailValidity] = useState(false);
  const [isPasswordValid, setPasswordValidity] = useState(false);

  //  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(registerUserThunk());
  };

  const onNameChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    setRegisterName(value);
    setNameValidity(valid && nameValidity(value));
  };

  const onEmailChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    setRegisterEmail(value);
    setEmailValidity(valid && emailValidity(value));
  };
  const onPasswordChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    setRegisterPass(value);
    setPasswordValidity(valid && passwordValidity(value));
  };
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  React.useEffect(() => {
    dispatch(resetRegisterForm());
    return () => resetRegisterForm();
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
          <EmailInput className='pb-6' name='email' value={email} onChange={onEmailChange} />
          <PasswordInput value={password} name='password' onChange={onPasswordChange} className='pb-6' />
        </fieldset>
        <Button
          type='primary'
          htmlType='submit'
          size='medium'
          disabled={isNameValid && isEmailValid && isPasswordValid}>
          Зарегистрироваться
        </Button>
      </form>
      <LinkBox linkName='Войти!' linkTo='/login' extraClasses='pt-20' caption='Уже зарегистрированы?' />
    </main>
  );
};

export default RegisterPage;
