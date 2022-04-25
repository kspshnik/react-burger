import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../preloader/preloader';
import lpStyles from '../two-columns/two-columns.module.css';

const LoaderProtector = ({ isLoaded, children }) => (
  isLoaded ? (
    <div>
      {children}
    </div>
  )
    : (<div className={lpStyles.loading}><Preloader /></div>)
);

LoaderProtector.propTypes = {
  children: PropTypes.element.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default LoaderProtector;
