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
import NotFound from './pages/NotFound'

import StudentDashboard from 'pages/StudentDashboard'
import { AuthProvider } from 'context/authContext'
import Success from 'pages/PaymentNotification/Success'
import Cancel from 'pages/PaymentNotification/Cancel'
import Helmet from 'react-helmet'

import { getFirebaseToken, onMessageListener } from './firebase'

function App() {
    // const [token, setToken] = useState()
    // useEffect(() => {
    //     getFirebaseToken(setToken)
    // }, [])

    
    // onMessageListener().then(payload => {
    //     console.log(payload);
    //   }).catch(err => console.log('failed: ', err));

    return (
        <>
            <Helmet>
                <title>Student Loan Platform</title>
            </Helmet>
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
                                path="/xac-thuc/dang-ky"
                                exact
                                component={SignUp}
                            />
                            <Route
                                path="/trang-chu"
                                component={StudentDashboard}
                            />
                            <Route
                                path="/xac-thuc/dang-nhap"
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
                            <Route path="/404" exact component={NotFound} />
                            <Route path="*" exact component={NotFound} />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </AuthProvider>
        </>
    )
}

export default App
