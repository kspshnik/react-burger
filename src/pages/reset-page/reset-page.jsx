import React, { useState } from 'react';
import {
  Redirect, useLocation,
} from 'react-router-dom';

import {
  Button, Input, PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';
import LinkBox from '../../components/link-box/link-box';

import resetStyles                                    from './reset-page.module.css';
import { resetResetForm, setResetCode, setResetPass } from '../../services/actionCreators';
import { passwordValidity }                           from '../../services/helpers';
import resetPasswordThunk                             from '../../services/thunks/reset-password-thunk';

const ResetPage = () => {
  const dispatch = useDispatch();
  const { code, password } = useSelector((store) => store.forms.reset);
  const [isPasswordValid, setPasswordValidity] = useState(false);
  const location = useLocation();
  const onSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(resetPasswordThunk());
  };

  const onCodeChange = (evt) => {
    const { value } = evt.target;
    dispatch(setResetCode(value));
  };
  const onPasswordChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setResetPass(value));
    setPasswordValidity(valid && passwordValidity(value));
  };
  React.useEffect(() => {
    dispatch(resetResetForm());
    return () => resetResetForm();
  }, [dispatch]);

  if (!location?.state?.from || location?.state?.from !== '/forgot-password') {
    return (
      <Redirect
        to={{
          pathname: '/forgot-password',
        }} />
    );
  }

  return (
    <main className={resetStyles.wrapper}>
      <form className={`${resetStyles.form}`} onSubmit={onSubmit}>
        <h2 className={`${resetStyles.form__heading} text_type_main - medium`}>Восстановление пароля</h2>
        <fieldset className={`${resetStyles.form__fieldset} pt-3 pb-3`}>
          <PasswordInput value={password} name='password' onChange={onPasswordChange} />
          <Input type='text' name='code' value={code} placeholder='Введите код из письма' onChange={onCodeChange} />
        </fieldset>
        <Button type='primary' htmlType='submit' size='medium' disabled={!isPasswordValid}>Сохранить</Button>
      </form>
      <LinkBox linkName='Войти!' linkTo='/login' extraClasses='pt-20' caption='Вспомнили пароль?' />
    </main>
  );
};

export default ResetPage;
