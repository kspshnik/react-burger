import React, { FC, ReactNode } from 'react';
import Preloader from '../preloader/preloader';
import lpStyles from '../two-columns/two-columns.module.css';

type TLoaderProtectorProps = {
  isLoaded: boolean,
  children: ReactNode | Array<ReactNode>,
};

const LoaderProtector : FC<TLoaderProtectorProps> = ({ isLoaded, children }) => (
  isLoaded ? (
    <div>
      {children}
    </div>
  )
    : (<div className={lpStyles.loading}><Preloader /></div>)
);

export default LoaderProtector;
