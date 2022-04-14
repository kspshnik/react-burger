import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import LinkBox from '../../components/link-box/link-box';

import loginStyles from './login-page.module.css';
import { loginUserThunk } from '../../services/thunks';
import { resetLoginForm, setLoginEmail, setLoginPass } from '../../services/actionCreators';
import { emailValidity, passwordValidity } from '../../helpers';

const LoginPage = () => {
  const { email, password } = useSelector((state) => state.forms.login);
  const [isEmailValid, setEmailValidity] = useState(false);
  const [isPasswordValid, setPasswordValidity] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(loginUserThunk());
  };

  const onEmailChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setLoginEmail(value));
    setEmailValidity(valid && emailValidity(value));
  };
  const onPasswordChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setLoginPass(value));
    setPasswordValidity(valid && passwordValidity(value));
  };

  React.useEffect(() => {
    dispatch(resetLoginForm());
    return () => dispatch(resetLoginForm());
  }, [dispatch]);

  return (
    <main className={loginStyles.wrapper}>
      <form className={`${loginStyles.form}`} onSubmit={onSubmit}>
        <h2 className={`${loginStyles.form__heading} text_type_main - medium`}>Вход</h2>
        <fieldset className={`${loginStyles.form__fieldset} pt-3 pb-3 mb-6`}>
          <EmailInput className='pb-6' name='email' value={email} onChange={onEmailChange} />
          <PasswordInput value={password} name='password' onChange={onPasswordChange} className='pb-6' />
        </fieldset>
        <Button type='primary' htmlType='submit' size='medium' disabled={!(isEmailValid && isPasswordValid)}>Войти</Button>
      </form>
      <LinkBox linkName='Зарегистрироваться' linkTo='/register' extraClasses='pt-20' caption='Вы - новый пользователь?' />
      <LinkBox linkName='Забыли пароль?' linkTo='/forgot-password' extraClasses='pt-4' caption='Восстановить пароль' />
    </main>
  );
};

export default LoginPage;
