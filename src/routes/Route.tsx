import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  isPrivate,
  path,
  ...rest
}) => {
  const { signed } = useAuth();

  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (signed && path === '/signin') {
    return <Redirect to="/" />;
  }

  return <Route path={path} {...rest} />;
};

export default RouteWrapper;
