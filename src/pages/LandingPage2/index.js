import {
    CardMedia,
    Container,
    Grid,
    Box,
    Slider,
    Radio,
    Paper,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useState } from 'react'
import classes from './LandingPage.module.css'
import Navbar from './Navbar'
// import Navbar from "..//..//examples/Navbars/DefaultNavbar";

import landing from '../../assets/undraw_collaborating_re_l43g.svg'

function valuetext(value) {
    return `${value}..000`
}

export default function LandingPage() {
    const [moneyText, setMoneyText] = useState('50.000.000')
    const [moneyResult, setMoneyResult] = useState('60.500.000 VND')

    const handleSliderChange = (event, newValue) => {
        var temp = newValue.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
        })
        setMoneyText(temp)
        var result =
            (newValue * 3) / 100 + ((newValue * 1.5) / 100) * 12 + newValue
        result = result.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
        })
        setMoneyResult(result)
    }

    return (
        <>
            <Box className={classes.welcome}>
                <Navbar title="StudentLoanPlatform" />

                <Container maxWidth="xl">
                    <Box padding="10% 20px 0 20px">
                        <Grid container>
                            <Grid item xs="12" md="12" lg="6">
                                <SuiTypography
                                    variant="h1"
                                    fontWeight="bold"
                                    margin="50px 0 20px 0"
                                    color="black"
                                >
                                    Xin chào,
                                </SuiTypography>
                                <SuiTypography
                                    variant="h1"
                                    fontWeight="regular"
                                    marginBottom="20px"
                                    color="black"
                                >
                                    Student Loan sẽ giúp bạn kêu gọi một khoản
                                    vay
                                </SuiTypography>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    marginBottom="40px"
                                    color="text"
                                >
                                    Đây là nền tảng cho vay tín chấp dựa trên
                                    hình thức gọi vốn cộng đồng giúp sinh viên
                                    có khả năng chi trả học phí. Bên cạnh đó
                                    việc trả nợ rất ưu đãi cho sinh viên
                                </SuiTypography>
                                <SuiButton color="primary">
                                    Tìm hiểu thêm
                                </SuiButton>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <CardMedia
                                    src={landing}
                                    component="img"
                                    sx={{
                                        height: 'auto',
                                        maxWidth: '90%',
                                        margin: '0px',
                                        mt: 5,
                                        float: 'right',
                                        '@media (max-width: 786px)': {
                                            float: 'none',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box
                id="contact"
                height="100vh"
                position="relative"
                padding="0 20px 0 20px"
                marginTop="0"
                sx={{
                    '@media (max-width: 1024px)': {
                        marginTop: '150px',
                    },
                    '@media (max-width: 786px)': {
                        marginTop: '50px',
                    },
                }}
            >
                <Container textAlign="center" maxWidth="xl">
                    <SuiTypography
                        variant="h2"
                        fontWeight="medium"
                        color="black"
                    >
                        Get started with your first installment plan
                    </SuiTypography>
                    <SuiTypography
                        variant="h6"
                        color="text"
                        marginTop="30px"
                        maxWidth="60%"
                        sx={{
                            '@media (max-width: 780px)': {
                                maxWidth: '100%',
                            },
                        }}
                    >
                        Enter your details to get an estimate of your monthly
                        dues and fees. Adjust the amount and duration to see
                        what works best for you.
                    </SuiTypography>

                    <Grid
                        container
                        marginTop="180px"
                        spacing={3}
                        sx={{
                            '@media (max-width: 1024px)': {
                                marginTop: '20px',
                            },
                        }}
                    >
                        <Grid item xs="12" md="12" lg="6">
                            <Box alignItems="center" justifyContent="center">
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    marginBottom="10px"
                                >
                                    Amount
                                </SuiTypography>
                                <SuiTypography
                                    variant="h5"
                                    fontWeight="bold"
                                    marginBottom="20px"
                                >
                                    {moneyText}
                                </SuiTypography>

                                <Slider
                                    defaultValue={50000000}
                                    aria-label="Default"
                                    size="medium"
                                    color="secondary"
                                    onChange={handleSliderChange}
                                    min={2000000}
                                    max={50000000}
                                    step={500000}
                                />
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    marginBottom="40px"
                                >
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="text"
                                    >
                                        2.000.000 VND
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="text"
                                    >
                                        50.000.000 VND
                                    </SuiTypography>
                                </Box>
                                <SuiTypography variant="h6" fontWeight="bold">
                                    Installment duration
                                </SuiTypography>
                                <Box display="flex" alignItems="center">
                                    <Radio
                                        checked={true}
                                        value="a"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="light"
                                        color="text"
                                    >
                                        12 months
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs="12" md="12" lg="6">
                            <Box alignItems="center" justifyContent="center">
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: '40px',
                                        borderRadius: '15px',
                                    }}
                                >
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="text"
                                    >
                                        Your sample monthly payment
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="h3"
                                        fontWeight="bold"
                                        color="dark"
                                        marginBottom="30px"
                                    >
                                        {moneyResult}
                                    </SuiTypography>
                                    <Grid container marginBottom="30px">
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                Interest rates
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                1.5% / month
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                One-time service fee
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                3%
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                Installment duration
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                12 month
                                            </SuiTypography>
                                        </Grid>
                                    </Grid>
                                    <SuiButton
                                        href="/authentication/sign-up"
                                        variant="contained"
                                        color="dark"
                                        size="small"
                                    >
                                        Apply for tuition installment
                                    </SuiButton>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box
                height="100vh"
                position="relative"
                padding="0 20px 0 20px"
            ></Box>
        </>
    )
}
