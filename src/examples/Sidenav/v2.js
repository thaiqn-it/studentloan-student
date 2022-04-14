/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from 'react'

// react-router-dom components
import { useLocation, NavLink } from 'react-router-dom'

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types'

// @mui material components
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Icon from '@mui/material/Icon'

// Soft UI Dashboard PRO React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'

// Soft UI Dashboard PRO React example components
import SidenavCollapse from 'examples/Sidenav/SidenavCollapseV2'
import SidenavCard from 'examples/Sidenav/SidenavCard'

// Custom styles for the Sidenav
import SidenavRoot from 'examples/Sidenav/SidenavRoot'
import sidenavLogoLabel from 'examples/Sidenav/styles/sidenav'

// Soft UI Dashboard PRO React context
import { useSoftUIController, setMiniSidenav } from 'context'

import CreateLoanPost from 'pages/CreateLoanPost'
import { Box, Typography } from '@mui/material'
const checkActive = (arr, collapseName) => {
    const active = arr.find((route) => route.key === collapseName)

    if (active) return true
    return false
}

const checkMainActive = (collapseName, key) => {
    if (collapseName === '') return true
    if (collapseName === key) return true

    return false
}

const CollapseRoute = ({
    name,
    icon,
    color,
    collapseName,
    noCollapse,
    id,
    collapse,
}) => {
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        setOpen(!open)
    }
    const handleCollapseClick = (e) => {
        setOpen(true)
    }

    useEffect(() => {
        if (!checkActive(collapse, collapseName)) return setOpen(false)
        setOpen(true)
    }, [collapseName])

    return (
        <>
            <Box>
                <SidenavCollapse
                    color={color}
                    name={name}
                    icon={icon}
                    active={checkActive(collapse, collapseName)}
                    noCollapse={noCollapse}
                    open={open}
                    onClick={handleClick}
                >
                    {collapse.map((route) => {
                        return (
                            <>
                                <NavLink
                                    to={route.route}
                                    key={route.key}
                                    onClick={handleCollapseClick}
                                >
                                    <SidenavCollapse
                                        color={color}
                                        name={route.name}
                                        icon={route.icon}
                                        active={route.key === collapseName}
                                        noCollapse={route.noCollapse}
                                        isChild={true}
                                    />
                                </NavLink>
                            </>
                        )
                    })}
                </SidenavCollapse>
            </Box>
        </>
    )
}

function Sidenav({ color, brand, brandName, routes, ...rest }) {
    const [controller, dispatch] = useSoftUIController()
    const { miniSidenav, transparentSidenav } = controller
    const location = useLocation()
    const { pathname } = location
    const collapseName = pathname.split('/').slice(-1)[0]

    const [openCreate, setOpenCreate] = useState(false)

    const closeSidenav = () => setMiniSidenav(dispatch, true)

    useEffect(() => {
        // A function that sets the mini state of the sidenav.
        function handleMiniSidenav() {
            setMiniSidenav(dispatch, window.innerWidth < 1200)
        }

        /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
        window.addEventListener('resize', handleMiniSidenav)

        // Call the handleMiniSidenav function to set the state with the initial value.
        handleMiniSidenav()

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleMiniSidenav)
    }, [dispatch, location])

    // Render all the routes from the routes.js (All the visible items on the Sidenav)
    const renderRoutes = routes.map(
        (
            { type, name, icon, title, noCollapse, key, route, href, collapse },
            index
        ) => {
            let returnValue

            if (type === 'collapse') {
                if (collapse) {
                    returnValue = (
                        <CollapseRoute
                            name={name}
                            icon={icon}
                            color={color}
                            collapseName={collapseName}
                            noCollapse={noCollapse}
                            id={key}
                            collapse={collapse}
                        />
                    )
                } else {
                    returnValue = href ? (
                        <Link
                            href={href}
                            key={key}
                            target="_blank"
                            rel="noreferrer"
                            sx={{ textDecoration: 'none' }}
                        >
                            <SidenavCollapse
                                color={color}
                                name={name}
                                icon={icon}
                                active={key === collapseName}
                                noCollapse={noCollapse}
                            />
                        </Link>
                    ) : (
                        <NavLink to={route} key={key}>
                            <SidenavCollapse
                                color={color}
                                key={key}
                                name={name}
                                icon={icon}
                                active={
                                    index === 0
                                        ? checkMainActive(collapseName, key)
                                        : key === collapseName
                                }
                                noCollapse={noCollapse}
                            />
                        </NavLink>
                    )
                }
            } else if (type === 'title') {
                returnValue = (
                    <SuiTypography
                        key={key}
                        display="block"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="uppercase"
                        opacity={0.6}
                        pl={3}
                        mt={2}
                        mb={1}
                        ml={1}
                    >
                        {title}
                    </SuiTypography>
                )
            } else if (type === 'divider') {
                returnValue = <Divider key={key} />
            }

            return returnValue
        }
    )

    return (
        <SidenavRoot
            {...rest}
            variant="permanent"
            ownerState={{ transparentSidenav, miniSidenav }}
        >
            <SuiBox pt={3} pb={1} px={4} textAlign="center">
                <SuiBox
                    display={{ xs: 'block', xl: 'none' }}
                    position="absolute"
                    top={0}
                    right={0}
                    p={1.625}
                    onClick={closeSidenav}
                    sx={{ cursor: 'pointer' }}
                >
                    <SuiTypography variant="h6" color="secondary">
                        <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
                    </SuiTypography>
                </SuiBox>
                <SuiBox
                    component={NavLink}
                    to="/"
                    display="flex"
                    alignItems="center"
                >
                    {brand && (
                        <SuiBox
                            component="img"
                            src={brand}
                            alt="Soft UI Logo"
                            width="2rem"
                        />
                    )}
                    <SuiBox
                        width={!brandName && '100%'}
                        sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
                    >
                        <SuiTypography
                            component="h6"
                            variant="button"
                            fontWeight="bold"
                            color="dark"
                        >
                            {brandName}
                        </SuiTypography>
                    </SuiBox>
                </SuiBox>
            </SuiBox>
            <Divider />
            <CreateLoanPost onOpen={openCreate} miniSide={miniSidenav} />
            <List>{renderRoutes}</List>
            {/* <SuiBox pt={2} my={2} mx={2} mt="auto">
        <SidenavCard />
        <SuiBox mt={2}>
          <SuiButton
            component="a"
            href="https://creative-tim.com/product/soft-ui-dashboard-pro-react"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            color={color}
            fullWidth
          >
            upgrade to pro
          </SuiButton>
        </SuiBox>
      </SuiBox> */}
        </SidenavRoot>
    )
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
    color: 'info',
    brand: '',
}

// Typechecking props for the Sidenav
Sidenav.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
    ]),
    brand: PropTypes.string,
    brandName: PropTypes.string.isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Sidenav
