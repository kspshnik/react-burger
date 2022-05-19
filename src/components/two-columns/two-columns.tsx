import React, { FC, PropsWithChildren } from 'react';

import { TTwoColumnsProps } from '../components.props.types';
import tcStyles from './two-columns.module.css';

const TwoColumns : FC<PropsWithChildren<TTwoColumnsProps>> = ({ children, profile = false }) => (
  <main className={`${tcStyles.main} ${profile ? `${tcStyles.main_place_profile} pt-30` : ''}`}>
    {children}
  </main>
);

TwoColumns.defaultProps = {
  profile: false,
};

export default TwoColumns;
