/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const NotLoggedRoute = ({ children, ...rest }) => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) => (loggedIn ? (
        <Redirect to={location.state?.from || '/'} />
      ) : (children))} />
  );
};

NotLoggedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotLoggedRoute;
