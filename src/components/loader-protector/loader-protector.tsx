import React, { FC, ReactNode } from 'react';
import Preloader from '../preloader/preloader';
import lpStyles from '../two-columns/two-columns.module.css';
import { TLoaderProtectorProps } from '../../types/components.props.types';

const LoaderProtector : FC<TLoaderProtectorProps> = ({ isLoaded, children }) => (
  isLoaded ? (
    <div>
      {children}
    </div>
  )
    : (<div className={lpStyles.loading}><Preloader /></div>)
);

export default LoaderProtector;
