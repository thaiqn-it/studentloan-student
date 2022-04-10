import React, { useState, useEffect } from 'react'

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
import Success from 'pages/PaymentNotification/Success'
import Cancel from 'pages/PaymentNotification/Cancel'
import { getFirebaseToken, onMessageListener } from './firebase'

function App() {
    const [token, setToken] = useState()
    useEffect(() => {
        getFirebaseToken(setToken)
    }, [])

    onMessageListener()
        .then((payload) => {
            console.log("have payload" , payload)
        })
        .catch((err) => {
            console.log(err)
        })

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/About" component={''} />
                        <Route path="/Landing" component={StudentLanding} />
                        <Route
                            path="/Services"
                            exact
                            component={ResetPassword}
                        />
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
                        <Route
                            path="/payment/success"
                            exact
                            component={Success}
                        />
                        <Route
                            path="/payment/cancel"
                            exact
                            component={Cancel}
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App
