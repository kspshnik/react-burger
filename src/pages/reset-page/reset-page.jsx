import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button, Input, PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { resetPassword } from '../../services/api';

import LinkBox from '../../components/link-box/link-box';

import resetStyles from './reset-page.module.css';

const ResetPage = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setPasswordValidity] = useState(false);
  const history = useHistory();

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {
        success,
      } = await resetPassword(code, password);
      if (success) {
        history.push('/');
        setCode('');
        setPassword('');
        setPasswordValidity(false);
      }
    } catch (err) {
      console.dir(err);
      // TODO: Сделать нормальную обработку ошибок здесь, с тултипом и баллалайками
    }
  };

  const onCodeChange = (evt) => {
    setCode(evt.target.value);
  };
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
    setPasswordValidity(evt.target.validity.valid && password.length > 5);
  };

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
