import React from 'react'
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      authenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }, flash: 'Please Login First' }} />
    )} />
  )
};

export default ProtectedRoute;