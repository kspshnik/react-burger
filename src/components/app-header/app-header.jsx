/* eslint-disable ternary/no-unreachable */
import React from 'react';

import {
  BurgerIcon, ListIcon, Logo, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { Link, useLocation } from 'react-router-dom';
import headerStyles from './app-header.module.css';

const AppHeader = () => {
  const { pathname } = useLocation();
  const isMain = () => pathname === '/' || pathname.startsWith('/ingredients');
  const isProfile = () => pathname.startsWith('/profile');
  const isFeed = () => pathname.startsWith('/feed');
  return (
    <header className={headerStyles.header}>
      <ul className={headerStyles.content}>
        <li className={headerStyles.menu__item}>
          <nav className={headerStyles.menu__wrapper}>
            <ul className={headerStyles.menu}>
              <li className={`${headerStyles.menu__item}  pl-5 pr-5`}>
                <Link
                  to='/'
                  className={headerStyles.menu__link}>
                  <BurgerIcon
                    type={isMain() ? 'primary' : 'secondary'} />
                  <p className={`text text_type_main-default ${isMain() ? '' : 'text_color_inactive'}  ml-2`}>Конструктор</p>
                </Link>
              </li>
              <li className={`${headerStyles.menu__item} pl-5 pr-5`}>
                <Link to='/feed' className={headerStyles.menu__link}>
                  <ListIcon type={`${isFeed() ? 'primary' : 'secondary'}`} />
                  <p className={`text text_type_main-default ${isFeed() ? '' : 'text_color_inactive'} ml-2`}>Лента заказов</p>
                </Link>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <Logo />
        </li>
        <li className={headerStyles.menu__profile}>
          <Link
            to='/profile'
            className={`${headerStyles.menu__link}`}>
            <ProfileIcon type={pathname.startsWith('/profile') ? 'primary' : 'secondary'} />
            <p className={`text text_type_main-default ${isProfile() ? '' : 'text_color_inactive'}  ml-2`}>Личный кабинет</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default AppHeader;
