import React, { FC } from 'react';

import { TTwoColumnsProps } from '../../types/components.props.types';
import tcStyles from './two-columns.module.css';

const TwoColumns : FC<TTwoColumnsProps> = ({ children, profile = false }) => (
  <main className={`${tcStyles.main} ${profile ? `${tcStyles.main_place_profile} pt-30` : ''}`}>
    {children}
  </main>
);

export default TwoColumns;
