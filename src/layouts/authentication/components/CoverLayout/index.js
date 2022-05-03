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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// @mui material components
import Grid from '@mui/material/Grid'

// Soft UI Dashboard PRO React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'

// Soft UI Dashboard PRO React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultNavbar from '../../../../pages/LandingPage2/components/Navbar'
import PageLayout from 'examples/LayoutContainers/PageLayout'

// Authentication layout components
import Footer from 'layouts/authentication/components/Footer'

import brand from 'assets/brand.png'
import { useHistory } from 'react-router-dom'

function CoverLayout({
    color,
    header,
    title,
    description,
    image,
    top,
    children,
}) {
    const history = useHistory()
    return (
        <PageLayout background="white">
            {/* <DefaultNavbar
        // action={{
        //   type: "external",
        //   route: "https://creative-tim.com/product/soft-ui-dashboard-react",
        //   label: "free download",
        //   color: "dark",
        // }}
      /> */}
            <SuiBox
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    position: 'fixed',
                }}
            >
                <SuiBox
                    component="img"
                    src={brand}
                    width="30%"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => history.push('/')}
                />
            </SuiBox>
            <Grid
                container
                justifyContent="center"
                sx={{
                    minHeight: '70vh',
                    margin: 0,
                }}
            >
                <Grid item xs={11} sm={8} md={5} xl={3}>
                    <SuiBox mt={top}>
                        <SuiBox pt={3} px={3}>
                            {!header ? (
                                <>
                                    <SuiBox mb={1}>
                                        <SuiTypography
                                            variant="h3"
                                            fontWeight="bold"
                                            color={color}
                                            textGradient
                                        >
                                            {title}
                                        </SuiTypography>
                                    </SuiBox>
                                    <SuiTypography
                                        variant="body2"
                                        fontWeight="regular"
                                        color="text"
                                    >
                                        {description}
                                    </SuiTypography>
                                </>
                            ) : (
                                header
                            )}
                        </SuiBox>
                        <SuiBox p={3}>{children}</SuiBox>
                    </SuiBox>
                </Grid>
                <Grid item xs={12} md={5}>
                    <SuiBox
                        mt={8}
                        height="100%"
                        display={{ xs: 'none', md: 'flex' }}
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        // position="relative"
                    >
                        <SuiBox component="img" width="90%" src={image} />
                    </SuiBox>
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </PageLayout>
    )
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
    header: '',
    title: '',
    description: '',
    color: 'info',
    top: 20,
}

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
        'light',
    ]),
    header: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    top: PropTypes.number,
    children: PropTypes.node.isRequired,
}

export default CoverLayout
