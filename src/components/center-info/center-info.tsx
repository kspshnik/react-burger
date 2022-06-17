import React, { FC } from 'react';
import ciStyles from './center-info.module.css';
import { TCenterInfoProps } from '../../types/components.props.types';

const CenterInfo : FC<TCenterInfoProps> = ({ children = null }) => (
  <main className={ciStyles.main}>
    {children}
  </main>
);

export default CenterInfo;
