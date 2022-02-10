import React from "react";

import "./App.css";

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

import StudentDashboard from "pages/StudentDashboard";
import { AuthProvider } from "context/authContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/About" component={""} />
            <Route path="/Landing" component={StudentLanding} />
            <Route path="/Services" exact component={ResetPassword} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/Dashboard" component={StudentDashboard} />
            <Route path="/Login" exact component={Login} />
            <Route path="/ForgotPassword" exact component={ForgotPassword} />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
