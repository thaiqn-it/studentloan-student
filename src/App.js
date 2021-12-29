import React, { useEffect, useState } from "react";
import "./App.css";
import { JWT_TOKEN } from "./constants/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./assets/theme";

import StudentLanding from "./pages/StudentLanding";

import ForgotPassword from "./pages/ForgotPassword/";
import Login from "./pages/Login/";
import SignUp from "./pages/SignUp/";

import ResetPassword from "./pages/ResetPassword";

import LandingPage from "./pages/LandingPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(JWT_TOKEN)) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, localStorage.getItem(JWT_TOKEN)]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/About" component={""} />
          <Route path="/Landing" component={StudentLanding} />
          <Route path="/Services" exact component={ResetPassword} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact component={Login} />
          <Route path="/ForgotPassword" exact component={ForgotPassword} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
