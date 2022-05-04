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

import { useState, useEffect } from 'react'

// react-router components
import { useLocation, Link, useHistory } from 'react-router-dom'

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types'

// @material-ui core components
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Icon from '@mui/material/Icon'
import { Badge } from '@mui/material'

// Soft UI Dashboard PRO React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

// Soft UI Dashboard PRO React example components
import Breadcrumbs from 'examples/Breadcrumbs'
import NotificationItem from 'examples/Items/NotificationItem'
import { fTimeDiff } from 'utils/formatTime'
// Custom styles for DashboardNavbar
import {
    navbar,
    navbarContainer,
    navbarRow,
    navbarIconButton,
    navbarMobileMenu,
} from 'examples/Navbars/DashboardNavbar/styles'

// Soft UI Dashboard PRO React context
import {
    useSoftUIController,
    setTransparentNavbar,
    setMiniSidenav,
    setOpenConfigurator,
} from 'context'

// Images
import newLogo from 'assets/newLogo.png'

import { useAuthState } from 'context/authContext'
import { notificationApi } from 'apis/notificationApi'
import { logOut } from 'context/userAction'
import { useAuthDispatch } from 'context/authContext'
import { onMessageListener } from '..//..//..//firebase'
import { fToNow } from '..//..//..//utils/formatTime'

function DashboardNavbar({ absolute, light, isMini }) {
    const [navbarType, setNavbarType] = useState()
    const [controller, dispatch] = useSoftUIController()
    const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } =
        controller
    const [openMenu, setOpenMenu] = useState(false)
    const route = useLocation().pathname.split('/').slice(1)
    const context = useAuthState()
    const [data, setData] = useState()
    const [notifications, setNotifications] = useState([])

    const loadNotification = async () => {
        try {
            const notiRes = await notificationApi.getNotification()

            if (notiRes) setData(notiRes.data)
        } catch (e) {}
    }

    useEffect(() => {
        // Setting the navbar type
        if (fixedNavbar) {
            setNavbarType('sticky')
        } else {
            setNavbarType('static')
        }
        loadNotification()

        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {
            setTransparentNavbar(
                dispatch,
                (fixedNavbar && window.scrollY === 0) || !fixedNavbar
            )
        }

        /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
        window.addEventListener('scroll', handleTransparentNavbar)

        // Call the handleTransparentNavbar function to set the state with the initial value.
        handleTransparentNavbar()

        // Remove event listener on cleanup
        return () =>
            window.removeEventListener('scroll', handleTransparentNavbar)
    }, [dispatch, fixedNavbar])

    const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav)
    const handleConfiguratorOpen = () =>
        setOpenConfigurator(dispatch, !openConfigurator)
    const handleOpenMenu = (event) => {
        setNotifications([])
        setOpenMenu(event.currentTarget)
    }
    const handleCloseMenu = () => setOpenMenu(false)
    const history = useHistory()
    const handleNoti = async (item) => {
        setOpenMenu(false)
        await notificationApi.updateNotification(item.id, { isRead: true })
        if (item.redirectUrl) return (window.location.href = item.redirectUrl)
    }

    const formatTime = (date) => {
        const currDate = new Date()
        return fTimeDiff(date, currDate, 'days')
    }
    const authDispatch = useAuthDispatch()
    const handleLogout = async () => {
        await logOut(authDispatch)
        history.push('/xac-thuc/dang-nhap')
    }

    onMessageListener()
        .then((payload) => {
            var noti = notifications.concat(payload)
            setNotifications(noti)
            console.log(payload)
        })
        .catch((err) => console.log('failed: ', err))

    // Render the notifications menu
    const renderMenu = () => (
        <Menu
            anchorEl={openMenu}
            anchorReference={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}
            sx={{ mt: 2 }}
        >
            {/* <NotificationItem
                image={<img src={newLogo} alt="noti" />}
                title={['New message', 'from Laur']}
                date="13 minutes ago"
                onClick={handleCloseMenu}
            /> */}
            {data?.notifications?.map((notification) => {
                return (
                    <NotificationItem
                        color="secondary"
                        image={<img src={newLogo} alt="noti" />}
                        title={['', notification.description]}
                        date={fToNow(notification.createdAt)}
                        isRead={notification.isRead}
                        onClick={() => handleNoti(notification)}
                    />
                )
            })}
        </Menu>
    )

    return (
        <AppBar
            position={absolute ? 'absolute' : navbarType}
            color="inherit"
            sx={(theme) =>
                navbar(theme, { transparentNavbar, absolute, light })
            }
        >
            <Toolbar sx={(theme) => navbarContainer(theme)}>
                <SuiBox
                    color="inherit"
                    mb={{ xs: 1, md: 0 }}
                    sx={(theme) => navbarRow(theme, { isMini })}
                ></SuiBox>
                {isMini ? null : (
                    <SuiBox sx={(theme) => navbarRow(theme, { isMini })}>
                        <SuiBox color={light ? 'white' : 'inherit'}>
                            <IconButton
                                sx={navbarIconButton}
                                size="small"
                                onClick={handleLogout}
                            >
                                <Icon
                                    sx={({ palette: { dark, white } }) => ({
                                        color: light ? white.main : dark.main,
                                    })}
                                >
                                    account_circle
                                </Icon>
                                <SuiTypography
                                    variant="button"
                                    fontWeight="medium"
                                    color={light ? 'white' : 'dark'}
                                >
                                    Đăng xuất
                                </SuiTypography>
                            </IconButton>

                            <IconButton
                                size="small"
                                color="inherit"
                                sx={navbarMobileMenu}
                                onClick={handleMiniSidenav}
                            >
                                <Icon
                                    className={
                                        light ? 'text-white' : 'text-dark'
                                    }
                                >
                                    {miniSidenav ? 'menu_open' : 'menu'}
                                </Icon>
                            </IconButton>
                            {/* <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton> */}
                            <IconButton
                                size="small"
                                color="inherit"
                                sx={navbarIconButton}
                                aria-controls="notification-menu"
                                aria-haspopup="true"
                                variant="contained"
                                onClick={handleOpenMenu}
                            >
                                <Badge
                                    badgeContent={notifications.length}
                                    color="primary"
                                >
                                    <Icon
                                        className={
                                            light ? 'text-white' : 'text-dark'
                                        }
                                    >
                                        notifications
                                    </Icon>
                                </Badge>
                            </IconButton>
                            {renderMenu()}
                        </SuiBox>
                    </SuiBox>
                )}
            </Toolbar>
        </AppBar>
    )
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
    absolute: false,
    light: false,
    isMini: false,
}

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
    absolute: PropTypes.bool,
    light: PropTypes.bool,
    isMini: PropTypes.bool,
}

export default DashboardNavbar
