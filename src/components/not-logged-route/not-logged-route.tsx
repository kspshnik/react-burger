/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';

import { Redirect, Route } from 'react-router-dom';
import { useSelector } from '../../services/store/hooks';
import { TRouteProps } from '../../types/components.props.types';
import { MyLocation } from '../../types/types';

const NotLoggedRoute : FC<TRouteProps> = ({ children, ...rest }) => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const { state } = location as MyLocation;
        return (loggedIn ? (
          <Redirect to={state.from || '/'} />
        ) : (children));
      }} />
  );
};

export default NotLoggedRoute;
