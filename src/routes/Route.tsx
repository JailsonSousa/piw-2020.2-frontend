import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  const signed = !!user;

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === signed ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/login' : '/',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
