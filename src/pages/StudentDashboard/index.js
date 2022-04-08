import routes from 'routes'
import {extraRoutes} from "routes"
import Sidenav from 'examples/Sidenav/v2'
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

import ReleaseLogo from '../../assets/newLogo3.png'

var currentRoute = [...routes]
var extraRoute = [...extraRoutes]

var mergeRoute = currentRoute.concat(extraRoute)

function getRoutes(allRoutes) {
    const routes = allRoutes.map((route) => {
        if (route.collapse) return getRoutes(route.collapse)
        if (route.route)
            return (
                <Route
                    path={route.route}
                    component={route.component}
                    key={route.key}
                />
            )

        return null
    })

    
    return routes
}

const Routes = () => {
    return <Switch>{getRoutes(mergeRoute)}</Switch>
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
                brandName="StudentLoan"
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
