import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={routeProps =>
      isAuthenticated ? (
        renderMergedProps(Component, routeProps, rest)
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: routeProps.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
