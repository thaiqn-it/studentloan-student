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
    Stack,
    Collapse,
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
import AccordionGuide from 'components/AccordionGuide'

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
                                    margin="50px 0 0 0"
                                    color="black"
                                >
                                    Xin chào,
                                </SuiTypography>
                                <SuiTypography
                                    variant="h2"
                                    fontWeight="regular"
                                    marginBottom="40px"
                                    color="black"
                                >
                                    Student Loan sẽ giúp bạn kêu gọi một khoản
                                    vay
                                </SuiTypography>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    marginBottom="20px"
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
            <Box
                id="contact"
                p={3}
                sx={{
                   background: '#ffffff',
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
                        marginTop="100px"
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
            <Box p={3}>
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
                        variant="h6"
                        fontWeight="regular"
                        color="black"
                        align="center"
                        sx={{ mt: 1 }}
                    >
                        Cho dù bạn là sinh viên năm nhất đại học hay đang học
                        đại học, chúng tôi có thể hỗ trợ tài chính cho quá trình
                        học tập của bạn.
                    </SuiTypography>

                    <Card sx={{ mt: 5, boxShadow: 5 }}>
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
                                        Kế hoạch chi trả học phí của Student
                                        Loan cung cấp cho sinh viên một cách
                                        thay thế để thanh toán học phí với thời
                                        hạn thanh toán dài hơn, lãi suất cạnh
                                        tranh và quy trình trực tuyến không rắc
                                        rối.
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
                                        Khoản phải trả trong quá trình học
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        200.000 VND
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
                                        Thời hạn thanh toán
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        Thanh toán hàng tháng
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
                                        Thời hạn trả
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        10 tháng - 6 năm
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
                                        Lãi suất
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        1 % một tháng
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                    <Box
                        mt={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <SuiTypography variant="button" fontWeight="regular">
                            *Khi hồ sơ đã kêu gọi thành công, sinh viên có thể
                            chuyển trực tiếp số tiền kêu gọi được sang tài khoản
                            của trường đại học
                        </SuiTypography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ background: '#f7f5f2', p: 3, pb: 10 }}>
                <Container maxWidth="xl">
                    <SuiTypography variant="h3" sx={{ mb: 1 }}>
                        Bukas Quick Guide
                    </SuiTypography>
                    <Box sx={{ mb: 3 }}>
                        <SuiTypography variant="caption">
                            Here are the frequently asked questions about Bukas.
                            Need more help?
                        </SuiTypography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1.5}>
                                <AccordionGuide
                                    title="What are the requirements?"
                                    message="You need to be a Filipino citizen, at least 18 years old, and enrolled as an undergraduate or graduate student at one of our partner schools."
                                />
                                <AccordionGuide
                                    title="How can I pay for my monthly dues?"
                                    message="You can pay via GCASH, Paymaya, Unionbank over the counter, Unionbank online, official Bayad Center branches and through over 3,000 DragonPay online or over-the-counter partner channels (BPI, BDO, Metrobank, RCBC, 7-Eleven, SM Dept. Store, Cebuana Lhuillier, M. Lhuillier, etc.). "
                                />

                                <AccordionGuide
                                    title="How long does it take to get my application approved?"
                                    message="It usually takes 3 to 5 working days to get your application approved. Make sure you provide all necessary information to avoid any delays."
                                />
                                <AccordionGuide
                                    title="Can I get funding for the whole school year?"
                                    message="Yes, you can! You can apply for a new installment plan every term to get additional coverage. Make sure you pay for your monthly dues on time to qualify for multiple installment plans."
                                />

                                <AccordionGuide
                                    title="Why hasn’t my payment reflected on my dashboard?"
                                    message="Payments made will reflect on your payment dashboard after 1-3 working days. Contact our Payments Team at payments@bukas.ph if there are any delays."
                                />

                                <AccordionGuide
                                    title="How can I edit my (or my guarantor’s) profile information?"
                                    message="Send us an email at info@bukas.ph to request for edits on your profile information."
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                display="flex"
                                height="100%"
                                sx={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <SuiTypography variant="h3" sx={{ mb: 1 }}>
                                    Our team is ready to help you with your
                                    questions
                                </SuiTypography>
                                <Box>
                                    <SuiTypography variant="caption">
                                        We’ve got your back. Our customer
                                        support team is dedicated to helping you
                                        with your concerns.
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}
