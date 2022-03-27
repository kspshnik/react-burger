import { React, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  Button, EmailInput, Input, PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import LinkBox from '../../components/link-box/link-box';

import { setUser } from '../../services/actionCreators';
import { jwt, token, registerUser } from '../../services/api';
import { stripBearer, nameValidity } from '../../helpers';
import loginStyles from './register-page.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [isNameValid, setNameValidity] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {
        success, user, accessToken, refreshToken,
      } = await registerUser(name, email, password);
      if (success) {
        jwt.set(stripBearer(accessToken));
        token.set(refreshToken);
        dispatch(setUser(user));
        history.push('/');
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      console.dir(err);
      // TODO: Сделать нормальную обработку ошибок здесь, с тултипом и баллалайками
    }
  };

  const onNameChange = (evt) => {
    const { value } = evt.target;
    setName(value);
    setNameValidity(nameValidity(value));
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };
  return (
    <main className={loginStyles.wrapper}>
      <form className={`${loginStyles.form}`} onSubmit={onSubmit}>
        <h2 className={`${loginStyles.form__heading} text_type_main - medium`}>Вход</h2>
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
          disabled={(name.length < 3 || password.length < 6 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}>
          Войти
        </Button>
      </form>
      <LinkBox linkName='Зарегистрироваться' linkTo='/register' extraClasses='pt-20' caption='Вы - новый пользователь?' />
      <LinkBox linkName='Забыли пароль?' linkTo='/forgot-password' extraClasses='pt-4' caption='Восстановить пароль' />
    </main>
  );
};

export default RegisterPage;
