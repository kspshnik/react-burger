import React, { FC, ReactNode } from 'react';
import ciStyles from './center-info.module.css';

type TCenterInfoProps = {
  children: ReactNode,
};

const CenterInfo : FC<TCenterInfoProps> = ({ children = null }) => (
  <main className={ciStyles.main}>
    {children}
  </main>
);

export default CenterInfo;
