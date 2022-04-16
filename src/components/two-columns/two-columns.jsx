import React from 'react';
import PropTypes from 'prop-types';

import tcStyles from './two-columns.module.css';
import Preloader from '../preloader/preloader';

const TwoColumns = ({ isLoaded, children }) => (
  (isLoaded) ? (
    <main className={tcStyles.main}>
      {children}
    </main>
  )
    : (<div className={tcStyles.loading}><Preloader /></div>)
);

TwoColumns.defaultProps = {
  isLoaded: true,
};

TwoColumns.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLoaded: PropTypes.bool,
};

export default TwoColumns;
