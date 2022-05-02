import {
    CardMedia,
    Container,
    Grid,
    Box,
    Divider,
    Slider,
    Radio,
    Paper,
    Card,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useState } from 'react'
import classes from './LandingPage.module.css'
import Navbar from './components/Navbar'
// import Navbar from "..//..//examples/Navbars/DefaultNavbar";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import landing from '../../assets/undraw_collaborating_re_l43g.svg'
import Footer from './components/Footer'

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
            {/* <Box className={classes.welcome}> */}
            <Box
                sx={{
                    background: '#f7f5f2',
                    position: 'relative',
                    height: '100vh',
                    minHeight: '700px',
                }}
            >
                <Navbar title="StudentLoanPlatform" />

                <Container maxWidth="xl">
                    <Box padding="10% 20px 0 20px">
                        <Grid container spacing={2}>
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
                                    variant="h2"
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
                                <SuiButton color="dark">
                                    Tìm hiểu thêm
                                </SuiButton>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <CardMedia
                                    src="https://www.usnewsglobaleducation.com/wp-content/uploads/2019/10/GettyImages-914314318-1024x683.jpg"
                                    component="img"
                                    sx={{
                                        height: 'auto',
                                        maxWidth: '100%',
                                        margin: '0px',
                                        borderRadius: 0,
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
            {/* <Box
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
                        marginTop: '200px',
                    },
                }}
            >
                <Container textAlign="center" maxWidth="xl">
                    <SuiTypography
                        variant="h2"
                        fontWeight="medium"
                        color="black"
                    >
                        Kế hoạch trả góp học phí cho các sinh viên
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
            </Box> */}
            <Box height="100vh" p={3}>
                <Container maxWidth="lg">
                    <SuiTypography
                        variant="h3"
                        fontWeight="bold"
                        color="black"
                        align="center"
                    >
                        Kế hoạch trả góp học phí cho sinh viên
                    </SuiTypography>
                    <SuiTypography
                        variant="h5"
                        fontWeight="light"
                        color="black"
                        align="center"
                        sx={{mt:1}}
                    >
                        Cho dù bạn là sinh viên năm nhất đại học hay đang học
                        đại học, chúng tôi có thể hỗ trợ tài chính cho quá trình
                        học tập của bạn.
                    </SuiTypography>

                    <Card sx={{ mt: 5 }}>
                        <Box sx={{ p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        Kế hoạch trả góp học phí cho sinh viên
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        The Bukas Tuition Installment Plan
                                        offers students an alternative way to
                                        pay for their tuition with longer
                                        payment terms, competitive interest
                                        rates, and a hassle-free online process.
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ background: '#f7f5f2', p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        Payment frequency
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        Pay monthly
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        Installment duration*
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        12 months
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                        <Box sx={{ background: '#f7f5f2', p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        Interest rate*
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        1.5 % per month
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                    <Box mt={5} display="flex" alignItems="center">
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            align="center"
                        >
                            *A one-time origination fee of 3% is also added to
                            the principal amount on our standard tuition
                            installment plans. Interest rates may vary depending
                            on the underwriting and the amount you ask for.
                        </SuiTypography>
                    </Box>
                </Container>
            </Box>
            <Box height="100vh" sx={{ background: '#f7f5f2', p: 3 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <SuiTypography>Accordion 1</SuiTypography>
                                </AccordionSummary>
                                {/* <Divider /> */}
                                <AccordionDetails>
                                    <SuiTypography>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse malesuada
                                        lacus ex, sit amet blandit leo lobortis
                                        eget.
                                    </SuiTypography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <SuiTypography>Accordion 2</SuiTypography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <SuiTypography>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse malesuada
                                        lacus ex, sit amet blandit leo lobortis
                                        eget.
                                    </SuiTypography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}
