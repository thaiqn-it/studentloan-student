import routes from 'routes'
import {extraRoutes} from 'routes'
import Sidenav from 'examples/Sidenav'
import Dashboard from 'layouts/dashboard'
import React, { useEffect, useState, useMemo } from 'react'
import {
    useSoftUIController,
    setMiniSidenav,
    setOpenConfigurator,
} from 'context'

import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Wallet from 'pages/Wallet'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import StudentProfile from 'pages/StudentProfile'

import ReleaseLogo from '../../assets/release-logo.png'

var currentRoute = [...routes]
var extraRoute = [...extraRoutes]

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={StudentProfile} exact />
            {currentRoute.map((route, index) => {
                return (
                    <Route
                        path={route.route}
                        component={route.component}
                        key={route.key}
                    />
                )
            })}
            {extraRoute.map((route, index) => {
                return (
                    <Route
                        path={route.route}
                        component={route.component}
                        key={route.key}
                    />
                )
            })}
        </Switch>
    )
}

const StudentDashboard = () => {
    const [controller, dispatch] = useSoftUIController()
    const [onMouseEnter, setOnMouseEnter] = useState(false)
    const { miniSidenav, direction, layout, openConfigurator, sidenavColor } =
        controller

    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            setMiniSidenav(dispatch, false)
            setOnMouseEnter(true)
        }
    }

    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSidenav(dispatch, true)
            setOnMouseEnter(false)
        }
    }

    return (
        <>
            <Sidenav
                color={sidenavColor}
                brandName="Student Loan Platform"
                brand={ReleaseLogo}
                routes={currentRoute}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            />
            <DashboardLayout>
                <DashboardNavbar/>
                <Routes />
            </DashboardLayout>
        </>
    )
}

export default StudentDashboard
