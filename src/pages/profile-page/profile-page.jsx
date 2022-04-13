import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ppStyles from './profile-page.module.css';

import { nameValidity, emailValidity, passwordValidity } from '../../helpers';
import { logoutUserThunk, patchUserThunk, setProfileForm } from '../../services/thunks';
import { setProfileEmail, setProfileName, setProfilePass } from '../../services/actionCreators';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const { name, email, password } = useSelector((store) => store.forms.profile);
  const user = useSelector((store) => store.user);

  const [isNameValid, setNameValidity] = useState(false);
  const [isEmailValid, setEmailValidity] = useState(false);
  const [isPasswordValid, setPasswordValidity] = useState(false);

  const isFormValid = () => (isNameValid || name === user?.name)
                           && (isPasswordValid || password === '')
                           && (isEmailValid || email === user?.email);
  const isFormChanged = () => (user?.name !== name && name !== '')
    || (user?.email !== email && email !== '')
    || password !== '';
  const isProfileReady = () => isFormValid() && isFormChanged;
  const nameToGo = () => ((!!name && name !== user.name && isNameValid) ? name : null);
  const emailToGo = () => ((!!email && email !== user.email && isEmailValid) ? email : null);
  const passwordToGo = () => ((!!password && isPasswordValid) ? password : null);
  const isProfile = () => pathname === '/profile';
  const isOrders = () => pathname.length > 15 && pathname.startsWith('/profile/orders');

  const onNameChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfileName(value));
    setNameValidity(valid && nameValidity(value));
  };
  const onEmailChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfileEmail(value));
    setEmailValidity(valid && emailValidity(value));
  };

  const onPasswordChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfilePass(value));
    setPasswordValidity(valid && passwordValidity(value));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(patchUserThunk(nameToGo(), emailToGo(), passwordToGo()));
  };

  const onReset = (evt) => {
    evt.preventDefault();
    dispatch(setProfileForm());
  };

  const onLogout = () => {
    dispatch(logoutUserThunk());
    history.replace({ pathname: '/login' });
  };
  React.useEffect(() => {
    dispatch(setProfileForm());
    return () => dispatch(setProfileForm());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(setProfileForm());
  }, [dispatch, user.name, user.email]);

  return (
    <main className={`${ppStyles.main} pt-30`}>
      <aside className={ppStyles.sidebar}>
        <nav className={ppStyles.menu}>
          <Link
            to={{ pathname: '/profile' }}
            className={`${ppStyles.menu__item} text text_type_main-medium ${!isProfile() ? 'text_color_inactive' : ''}`}>
            Профиль
          </Link>
          <Link
            to={{ pathname: '/profile/orders' }}
            className={`${ppStyles.menu__item} text text_type_main-medium ${!isOrders() ? 'text_color_inactive' : ''}`}>
            Лента заказов
          </Link>
          <button
            type='button'
            className={`${ppStyles.menu__item} ${ppStyles.menu__item_type_button} text text_type_main-medium text_color_inactive`}
            onClick={onLogout}>
            Выход
          </button>
        </nav>
        <p className={`${ppStyles.sidebar__info} text text_type_main-default text_color_inactive pt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </aside>

      <form className={`${ppStyles.form} `} onSubmit={onSubmit} onReset={onReset}>
        <h2 className={`${ppStyles.form__heading} text_type_main - medium`}>  </h2>
        <fieldset className={`${ppStyles.form__fieldset} pt-3 pb-3`}>
          <Input type='text' name='name' value={name} placeholder='Имя' onChange={onNameChange} icon='EditIcon' />
          <Input type='email' value={email} name='email' onChange={onEmailChange} placeholder='Логин' icon='EditIcon' />
          <PasswordInput value={password} name='password' onChange={onPasswordChange} />
        </fieldset>
        {isFormChanged
          && (
          <div className={ppStyles.profile__buttons}>
            <Button type='primary' htmlType='submit' size='medium' disabled={!isProfileReady()}>Сохранить</Button>
            <Button type='primary' htmlType='reset' size='medium' disabled={false}>Отмена</Button>
          </div>
          )}
      </form>
    </main>
  );
};

export default ProfilePage;
