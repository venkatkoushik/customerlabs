import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Routes } from "./routes";
import { Access } from "./access";
import { LocalStorageKeys } from "../utils";

const PrivateRoute = ({ children, ...rest }) => {

  const isAuthenticated = (router) => {
    if (localStorage.getItem(LocalStorageKeys.authToken)) {
      const _ = Access("role", router?.match?.path);
      if (_ >= 0) {
        return true;
      };
      return false;
    } else {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(_) =>
        isAuthenticated(_) ? children : (
          <Redirect
            to={{
              pathname: Routes.login,
              state: { from: _?.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
