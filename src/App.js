import React, { useEffect, useState } from "react";
import './App.css';
import { JWT_TOKEN } from "./constants/";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/";
import Home from "./pages/Home";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword/";
import Breadcrumb from "./components/Breadcrumbs";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(JWT_TOKEN)) {
        setIsLoggedIn(true);
    }
  }, [isLoggedIn, localStorage.getItem(JWT_TOKEN)]);

  return (  
    <Router>
      <NavBar isLoggedIn={isLoggedIn} 
              changeIsLogged={(isLog) => setIsLoggedIn(isLog)}/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Services' exact component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
