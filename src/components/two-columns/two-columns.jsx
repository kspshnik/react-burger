import React from 'react';
import PropTypes from 'prop-types';

import tcStyles from './two-columns.module.css';

const TwoColumns = ({ children, profile }) => (
  <main className={`${tcStyles.main} ${profile ? `${tcStyles.main_place_profile} pt-30` : ''}`}>
    {children}
  </main>
);

TwoColumns.defaultProps = {
  profile: false,
};

TwoColumns.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  profile: PropTypes.bool,
};

export default TwoColumns;
