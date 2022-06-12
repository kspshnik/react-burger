/* eslint-disable react/jsx-props-no-spreading */
import React, {FC, ReactNode} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from '../../services/store/hooks';

type TProtectedRouteProps = {
  children: ReactNode | Array<ReactNode>,
  [key:string]: any;
};

const ProtectedRoute : FC<TProtectedRouteProps> = ({ children, ...rest }) => {
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
