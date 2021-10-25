import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import ProtectedRoute from './utility/ProtectedRoute';

const Login = React.lazy(() => import("./pages/Login"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"))

import AppLoader from './components/AppLoader';

const Routes = () => {

  const authenticated = true;
  // const authenticated = useSelector((state) => state.authLogin.authenticated)

  const routes = [
    { component: Login, security: 'public', path: '/login' },
    { component: Dashboard, security: 'private', path: '/' }
  ];

  // Fallback route
  routes.push({ component: PageNotFound, security: 'public', path: '*' })

  return (
    <React.Suspense fallback={<AppLoader />}>
        <Switch location={location} key={location.pathname} >
          {routes.map((route, key) => {
            return (
              route.security === "public" ?
                <Route exact key={key} path={route.path} component={route.component} /> :
                <ProtectedRoute exact key={key} path={route.path} component={route.component} authenticated={authenticated} />
            )
          })}
        </Switch>
    </React.Suspense>
  );
};

export default Routes;