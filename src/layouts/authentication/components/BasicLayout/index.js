import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'

import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'

import PageLayout from 'examples/LayoutContainers/PageLayout'

import brand from 'assets/brand1.png'
import { useHistory } from 'react-router-dom'

function BasicLayout({ title, description, image, children }) {
    const history = useHistory()
    return (
        <PageLayout>
            {/* <DefaultNavbar
        // action={{
        //   type: "external",
        //   route: "https://creative-tim.com/product/soft-ui-dashboard-react",
        //   label: "free download",
        // }}
        transparent
        light
      /> */}
            <SuiBox
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
            <SuiBox
                width="calc(100% - 2rem)"
                minHeight="100vh"
                borderRadius="lg"
                mx={2}
                my={2}
                pt={6}
                pb={28}
                sx={{
                    backgroundImage: ({
                        functions: { linearGradient, rgba },
                        palette: { gradients },
                    }) =>
                        image &&
                        `${linearGradient(
                            rgba(gradients.dark.main, 0),
                            rgba(gradients.dark.state, 0)
                        )}, url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ textAlign: 'center' }}
                >
                    <Grid item xs={10} lg={4}>
                        <SuiBox mt={6} mb={1}>
                            <SuiTypography
                                variant="h1"
                                color="white"
                                fontWeight="bold"
                            >
                                {title}
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox mb={2}>
                            <SuiTypography
                                variant="body2"
                                color="white"
                                fontWeight="regular"
                            >
                                {description}
                            </SuiTypography>
                        </SuiBox>
                    </Grid>
                </Grid>
            </SuiBox>
            <SuiBox
                mt={{ xs: -26, lg: -70 }}
                px={1}
                width="calc(100% - 2rem)"
                mx="auto"
            >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
                        {children}
                    </Grid>
                </Grid>
            </SuiBox>
            {/* <Footer /> */}
        </PageLayout>
    )
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
    title: '',
    description: '',
}

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default BasicLayout
