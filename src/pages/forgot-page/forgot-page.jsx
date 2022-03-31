import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import LinkBox from '../../components/link-box/link-box';

import { sendPasswordCode } from '../../services/api';
import forgotStyles from './forgot-page.module.css';

const ForgotPage = () => {
  const [email, setEmail] = useState('');

  const history = useHistory();

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { success } = await sendPasswordCode(email);
      if (success) {
        history.push('/reset-password');
        setEmail('');
      }
    } catch (err) {
      console.dir(err);
      // TODO: Сделать нормальную обработку ошибок здесь, с тултипом и баллалайками
    }
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  return (
    <main className={forgotStyles.wrapper}>
      <form className={`${forgotStyles.form}`} onSubmit={onSubmit}>
        <h2 className={`${forgotStyles.form__heading} text_type_main - medium`}>Восстановление пароля</h2>
        <fieldset className={`${forgotStyles.form__fieldset}  pt-3 pb-3`}>
          <EmailInput name='email' value={email} onChange={onEmailChange} />
        </fieldset>
        <Button type='primary' htmlType='submit' size='medium' disabled={!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}>Восстановить</Button>
      </form>
      <LinkBox linkName='Войти!' linkTo='/login' extraClasses='pt-20' caption='Вспомнили пароль?' />
    </main>
  );
};

export default ForgotPage;
