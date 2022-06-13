/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from '../../services/store/hooks';
import { TRouteProps } from '../../types/components.props.types';

const ProtectedRoute : FC<TRouteProps> = ({ children, ...rest }) => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) => (loggedIn ? (
        children
      ) : (<Redirect to={{ pathname: '/login', state: { from: location } }} />))} />
  );
};

export default ProtectedRoute;
