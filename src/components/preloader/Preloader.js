import React from 'react';
import plStyles from './preloader.module.css';

const Preloader = () => (
  <div className={plStyles.preloader}>
    <div className={plStyles.preloader__container}>
      <span className={plStyles.preloader__round} />
    </div>
  </div>
);

export default Preloader;
