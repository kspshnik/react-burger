import React from 'react';
import {
  Link, useHistory, useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUserThunk } from '../../services/thunks';

import psStyles from './profile-sidebar.module.css';

const ProfileSidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const isProfile = () => pathname === '/profile';
  const isOrders = () => pathname.length > 9 && pathname.startsWith('/profile/orders');

  const onLogout = () => {
    dispatch(logoutUserThunk());
    history.replace({ pathname: '/login' });
  };
  return (
    <aside className={psStyles.sidebar}>
      <nav className={psStyles.menu}>
        <Link
          to={{ pathname: '/profile' }}
          className={`${psStyles.menu__item} text text_type_main-medium ${isProfile() ? psStyles.menu__item_active : ''}`}>
          Профиль
        </Link>
        <Link
          to={{ pathname: '/profile/orders' }}
          className={`${psStyles.menu__item} text text_type_main-medium ${isOrders() ? psStyles.menu__item_active : ''}`}>
          Лента заказов
        </Link>
        <button
          type='button'
          className={`${psStyles.menu__item} ${psStyles.menu__item_type_button} text text_type_main-medium text_color_inactive`}
          onClick={onLogout}>
          Выход
        </button>
      </nav>
      <p className={`${psStyles.sidebar__info} text text_type_main-default text_color_inactive`}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </aside>
  );
};

export default ProfileSidebar;
