import React, { useEffect, useState } from "react";
import './App.css';
import { JWT_TOKEN } from "./constants/";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

import NavBar from "./components/NavBar/";
import Home from "./pages/Home";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword/";
import Login from "./pages/Login/";
import SignUp from "./pages/SignUp/";
import Breadcrumb from "./components/Breadcrumbs";

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
        <NavBar isLoggedIn={isLoggedIn} 
                changeIsLogged={(isLog) => setIsLoggedIn(isLog)}/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
            <Route path='/Services' exact component={ForgotPassword} />
            <Route path='/Login' exact component={Login} />
            <Route path='/SignUp' exact component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
