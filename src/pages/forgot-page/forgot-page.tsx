import React, {ChangeEventHandler, FC, FormEventHandler} from 'react';
import { useHistory } from 'react-router-dom';

import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from '../../services/store/hooks';
import LinkBox                      from '../../components/link-box/link-box';

import forgotStyles                        from './forgot-page.module.css';
import { resetForgotForm, setForgotEmail } from '../../services/store';
import { requestCodeThunk }                from '../../services/thunks';

const ForgotPage : FC = () => {
  const { email } = useSelector((state) => state.forms.forgot);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit : FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(requestCodeThunk());
    history.replace({ pathname: '/reset-password', state: { from: '/forgot-password' } });
  };

  const onEmailChange : ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(setForgotEmail(evt.target.value));
  };

  React.useEffect(() => {
    dispatch(resetForgotForm());
  }, [dispatch]);

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
