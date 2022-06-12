/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ReactNode } from 'react';

import { Redirect, Route } from 'react-router-dom';
import { useSelector } from '../../services/store/hooks';

type TNotLoggedRouteProps = {
  children: ReactNode | Array<ReactNode>,
  [key:string]: any;
};

const NotLoggedRoute : FC<TNotLoggedRouteProps> = ({ children, ...rest }) => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) => (loggedIn ? (
        <Redirect to={location.state?.from || '/'} />
      ) : (children))} />
  );
};

export default NotLoggedRoute;
