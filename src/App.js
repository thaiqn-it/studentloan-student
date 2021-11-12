import React, { useEffect, useState } from "react";
import "./App.css";
import { JWT_TOKEN } from "./constants/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/";
import Home from "./pages/Home";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword/";
import Login from "./pages/Login/";
import SignUp from "./pages/SignUp/";
import Breadcrumb from "./components/Breadcrumbs";
import ResetPassword from "./pages/ResetPassword";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import StudentProfile from "./pages/StudentProfile";
import SideBar from "./components/Sidebar";
import StudentLanding from "./pages/StudentLanding";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(JWT_TOKEN)) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, localStorage.getItem(JWT_TOKEN)]);

  return (
    <ThemeProvider theme={theme}>
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
