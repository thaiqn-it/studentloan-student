import routes from "routes";
import Sidenav from "examples/Sidenav";
import Dashboard from "layouts/dashboard";
import React, { useEffect, useState, useMemo } from "react";

import { useSoftUIController } from "context";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Wallet from "pages/Wallet";

var currentRoute = [...routes];

const StudentDashboard = () => {
  const [controller, dispatch] = useSoftUIController();
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } =
    controller;

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (!onMouseEnter) {
      //   setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      //   setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  useEffect(() => {
    currentRoute.map((route) => {
      route.route = "/Dashboard" + route.route;
    });
  }, []);
  return (
    <>
      <Sidenav
        color={sidenavColor}
        brandName="Soft UI Dashboard"
        routes={currentRoute}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />

      <Switch>
        {currentRoute.map((route, index) => {
          return (
            <Route
              exact={index === 0}
              path={route.route}
              component={route.component}
              key={route.key}
            />
          );
        })}
      </Switch>
    </>
  );
};

export default StudentDashboard;
