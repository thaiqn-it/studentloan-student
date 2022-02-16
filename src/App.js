import React from 'react'

import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import theme from './assets/theme'

import StudentLanding from './pages/StudentLanding'
import ForgotPassword from './pages/ForgotPassword/'

import Login from './layouts/authentication/sign-in'
import SignUp from './layouts/authentication/sign-up'


import ResetPassword from './pages/ResetPassword'

import LandingPage from './pages/LandingPage2'

import StudentDashboard from 'pages/StudentDashboard'
import { AuthProvider } from 'context/authContext'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/About" component={''} />
                    <Route path="/Landing" component={StudentLanding} />
                    <Route path="/Services" exact component={ResetPassword} />
                    <Route
                        path="/authentication/sign-up"
                        exact
                        component={SignUp}
                    />
                    <Route path="/Dashboard" component={StudentDashboard} />
                    <Route
                        path="/authentication/sign-in"
                        exact
                        component={Login}
                    />
                    <Route
                        path="/ForgotPassword"
                        exact
                        component={ForgotPassword}
                    />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
