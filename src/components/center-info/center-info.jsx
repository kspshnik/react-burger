import React from 'react';
import PropTypes from 'prop-types';
import ciStyles from './center-info.module.css';

const CenterInfo = ({ children }) => (
  <main className={ciStyles.main}>
    {children}
  </main>
);

CenterInfo.defaultProps = {
  children: null,
};

CenterInfo.propTypes = {
  children: PropTypes.element,
};

export default CenterInfo;
