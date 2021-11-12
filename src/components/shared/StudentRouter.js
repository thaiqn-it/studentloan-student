import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import StudentProfile from "../../pages/StudentProfile";
import RequestLoanPost from "../../pages/RequestLoanPost";

const StudentRoute = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path} component={RequestLoanPost} />

        <Route path={`${path}/Profile`} component={StudentProfile} />
      </Switch>
    </>
  );
};

export default StudentRoute;
