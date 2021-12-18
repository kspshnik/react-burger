import React from 'react';

import {
  BurgerIcon, ListIcon, Logo, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import headerStyles from './app-header.module.css';

const AppHeader = () => (
  <header className={headerStyles.header}>
    <ul className={headerStyles.content}>
      <li className={headerStyles.menu__item}>
        <nav className={headerStyles.menu__wrapper}>
          <ul className={headerStyles.menu}>
            <li className={`${headerStyles.menu__item}  pl-5 pr-5`}>
              <BurgerIcon type='primary' />
              <p className='text text_type_main-default ml-2'>Конструктор</p>
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
        <ProfileIcon type='secondary' />
        <p className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
      </li>
    </ul>
  </header>
);

export default AppHeader;
