import React from 'react';
import PropTypes from 'prop-types';

import tcStyles from './two-columns.module.css';

const TwoColumns = ({ children }) => (
  <main className={tcStyles.main}>
    {children}
  </main>
);

TwoColumns.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TwoColumns;
