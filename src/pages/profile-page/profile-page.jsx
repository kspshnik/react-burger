import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import ppStyles from './profile-page.module.css';

import { setUser } from '../../services/actionCreators';
import { nameValidity, emailValidity } from '../../helpers/validate';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState('');

  const [isNewNameValid, setNewNameValidity] = useState(false);
  const [isNewEmailValid, setNewEmailValidity] = useState(false);
  const [isNewPasswordValid, setNewPasswordValidity] = useState(false);

  const isFormValid = () => isNewNameValid
                           && isNewPasswordValid
                           && isNewEmailValid;
  const isFormChanged = () => newName !== name || newEmail !== email || newPassword !== '';
  const isProfileReady = () => isFormValid() && isFormChanged;

  const onNameChange = (evt) => {
    const value = evt.target;
    setNewName(value);
    setNewNameValidity(nameValidity(value));
  };
  const onEmailChange = (evt) => {
    const value = evt.target;
    setNewEmail(value);
    setNewEmailValidity(emailValidity(value));
  };

  const onPasswordChange = (evt) => {
    const value = evt.target;
    setNewPassword(value);
    setNewPasswordValidity(value.length > 5);
  };

  const onSubmit = (evt) => {

  };

  const onReset = (evt) => {

  };
  return (
    <main className={ppStyles.main}>
      <nav className={ppStyles.menu} />
      <form className={`${ppStyles.form}`} onSubmit={onSubmit} onReset={onReset}>
        <h2 className={`${ppStyles.form__heading} text_type_main - medium`}>Восстановление пароля</h2>
        <fieldset className={`${ppStyles.form__fieldset} pt-3 pb-3`}>
          <Input type='text' name='name' value={newName} placeholder='Имя' onChange={onNameChange} />
          <Input type='email' value={newEmail} name='email' onChange={onEmailChange} placeholder='Логин' />
          <PasswordInput value={newPassword} name='password' onChange={onPasswordChange} />
        </fieldset>
        isFormChanged &&
        <div className={ppStyles.profile__buttons}>
          <Button type='primary' htmlType='submit' size='medium' disabled={!isProfileReady()}>Сохранить</Button>
          <Button type='primary' htmlType='reset' size='medium' disabled={false}>Отмена</Button>
        </div>
      </form>
    </main>
  );
};

export default ProfilePage;
