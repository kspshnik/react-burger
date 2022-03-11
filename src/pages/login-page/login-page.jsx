import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import FormWrapper from '../../components/form-wrapper/form-wrapper';
import LinkBox from '../../components/link-box/link-box';

import { setUser } from '../../services/actionCreators';
import { jwt, loginUser, token } from '../../services/api';
import stripBearer from '../../helpers/strip-bearer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setEmailValidity] = useState(false);
  const [isPasswordValid, setPasswordValidity] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {
        success, user, accessToken, refreshToken,
      } = await loginUser(email, password);
      if (success) {
        console.log('Log In!');
        console.dir(user);
        jwt.set(stripBearer(accessToken));
        token.set(refreshToken);
        dispatch(setUser(user));
        history.push('/');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
    setEmailValidity(evt.target.validity.valid);
  };
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
    setPasswordValidity(evt.target.validity.valid && password.length > 5);
  };

  return (
    <>
      <FormWrapper
        headingText='Вход'
        buttonText='Войти'
        extraClasses='pt-30 mt-15'
        isValid={isEmailValid && isPasswordValid}
        onSubmit={onSubmit}>
        <EmailInput className='pb-6' name='email' value={email} onChange={onEmailChange} />
        <PasswordInput value={password} name='password' onChange={onPasswordChange} className='pb-6' />
      </FormWrapper>
      <LinkBox linkName='Зарегистрироваться' linkTo='/register' extraClasses='pt-20' caption='Вы - новый пользователь?' />
      <LinkBox linkName='Забыли пароль?' linkTo='/forgot-password' extraClasses='pt-4' caption='Восстановить пароль' />
    </>
  );
};

export default LoginPage;
