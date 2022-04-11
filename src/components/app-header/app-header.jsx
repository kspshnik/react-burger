import React from 'react';

import {
  BurgerIcon, ListIcon, Logo, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { Link, useLocation } from 'react-router-dom';
import headerStyles from './app-header.module.css';

const AppHeader = () => {
  const { pathname } = useLocation();
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
                    type={pathname.endsWith('/') ? 'primary' : 'secondary'} />
                  {/* eslint-disable-next-line ternary/no-unreachable */}
                  <p className={`text text_type_main-default ${pathname === '/' ? '' : 'text_color_inactive'}  ml-2`}>Конструктор</p>
                </Link>
              </li>
              <li className={`${headerStyles.menu__item} pl-5 pr-5`}>
                <ListIcon type='secondary' />
                <p className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
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
            {/* eslint-disable-next-line ternary/no-unreachable */}
            <ProfileIcon type={pathname.startsWith('/profile') ? 'primary' : 'secondary'} />
            {/* eslint-disable-next-line ternary/no-unreachable */}
            <p className={`text text_type_main-default ${pathname.startsWith('/profile') ? '' : 'text_color_inactive'}  ml-2`}>Личный кабинет</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default AppHeader;
