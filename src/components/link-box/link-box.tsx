import React, { FC } from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';
import lbStyles from './link-box.module.css';
import { TLinkBoxProps } from '../../types/components.props.types';

const LinkBox : FC<TLinkBoxProps> = ({
  caption, linkName, linkTo, extraClasses,
}) => (
  <div className={`${lbStyles.linkbox} ${extraClasses}`}>
    <p className='text_type_main-default'>{caption}</p>
    <Link className={`${lbStyles.linkbox__link} ml-2`} to={linkTo}>{linkName}</Link>
  </div>
);

export default LinkBox;
