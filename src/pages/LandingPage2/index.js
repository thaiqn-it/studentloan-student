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
    Stack,
    IconButton,
    CardHeader,
    Avatar,
    CardContent,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import classes from './LandingPage.module.css'
import Navbar from './components/Navbar'
// import Navbar from "..//..//examples/Navbars/DefaultNavbar";
import LockIcon from '@mui/icons-material/Lock'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import PaidIcon from '@mui/icons-material/Paid'
import TodayIcon from '@mui/icons-material/Today'

import newLogo from 'assets/newLogo.png'

import Footer from './components/Footer'
import AccordionGuide from 'components/AccordionGuide'
import { systemConfigApi } from 'apis/systemConfigApi'
import { fCurrency } from 'utils/formatNumber'

function valuetext(value) {
    return `${value}..000`
}

export default function LandingPage() {
    const [moneyText, setMoneyText] = useState(50000000)

    const [config, setConfig] = useState(null)

    useEffect(() => {
        systemConfigApi.getFee().then((res) => {
            setConfig(res.data)
        })
    }, [])

    const handleSliderChange = (event, newValue) => {
        setMoneyText(newValue)
    }

    const handleResult = (money) => {
        var result =
            money * config?.transactionFee +
            (money * config?.interest) * config?.minDuration +
            money
        return fCurrency(result)
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
                sx={{
                    background: '#ffffff',
                    p: 3,
                    '@media (max-width: 1024px)': {
                        marginTop: '150px',
                    },
                    '@media (max-width: 786px)': {
                        marginTop: '50px',
                    },
                }}
            >
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
                                        thanh toán học phí với thời hạn thanh
                                        toán dài hơn, lãi suất cạnh tranh và quy
                                        trình trực tuyến không rắc rối.Sinh viên
                                        chỉ cần thanh toán một khoản tiền cố
                                        định trong lúc học và thanh toán phần
                                        còn lại sau khi tốt nghiệp.
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
                                        {fCurrency(config?.fixedMoney)}
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
                                        {config?.minDuration} tháng -{' '}
                                        {config?.maxDuration} tháng
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
                                        {config?.interest * 100} % một tháng
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
                            rút tiền và thanh toán học phí cho trường
                        </SuiTypography>
                    </Box>
                </Container>
            </Box>
            <Divider />

            <Box p={3} pb={20}>
                <Container textAlign="center" maxWidth="xl">
                    <SuiTypography variant="h3">
                        Hãy bắt đầu với gói vay đầu tiên của bạn
                    </SuiTypography>
                    <SuiTypography
                        variant="button"
                        fontWeight="regular"
                        sx={{
                            '@media (max-width: 780px)': {
                                maxWidth: '100%',
                            },
                        }}
                    >
                        Chọn thông tin gói vay của bạn để có được ước tính về
                        phí và lệ phí hàng tháng của bạn. Điều chỉnh số lượng và
                        thời gian để xem điều gì phù hợp nhất với bạn.
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
                                    Số tiền
                                </SuiTypography>
                                <SuiTypography
                                    variant="h3"
                                    fontWeight="regular"
                                    marginBottom="20px"
                                >
                                    {fCurrency(moneyText)}
                                </SuiTypography>

                                <Slider
                                    defaultValue={50000000}
                                    onChange={handleSliderChange}
                                    min={config?.minRaiseMoney}
                                    max={config?.maxRaiseMoney - 300000000}
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
                                        {fCurrency(config?.minRaiseMoney)}
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="text"
                                    >
                                        {fCurrency(
                                            config?.maxRaiseMoney - 300000000
                                        )}
                                    </SuiTypography>
                                </Box>
                                <SuiTypography variant="h6" fontWeight="bold">
                                    Thời hạn cho vay
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
                                        {config?.minDuration} tháng
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
                                        Khoản phải thanh toán của bạn
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="h3"
                                        fontWeight="bold"
                                        color="dark"
                                        marginBottom="30px"
                                    >
                                        {handleResult(moneyText)}
                                    </SuiTypography>
                                    <Grid container marginBottom="30px">
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                Lãi suất
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                {config?.interest * 100}% /
                                                tháng
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                Phí nền tảng
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                {config?.transactionFee * 100}%
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                Thời hạn cho vay
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                {config?.minDuration} tháng
                                            </SuiTypography>
                                        </Grid>
                                    </Grid>
                                    <SuiButton
                                        href="/xac-thuc/dang-nhap"
                                        variant="contained"
                                        color="dark"
                                        size="small"
                                    >
                                        Kêu gọi một khoản đầu tư
                                    </SuiButton>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />
            <Box sx={{ background: '#f7f5f2', p: 3, pb: 10 }}>
                <Container maxWidth="xl">
                    <SuiTypography variant="h3" sx={{ mb: 1 }}>
                        Student Loan hướng dẫn nhanh
                    </SuiTypography>
                    <Box sx={{ mb: 3 }}>
                        <SuiTypography variant="button" fontWeight="regular">
                            Đây là những câu hỏi thường gặp về Student Loan
                        </SuiTypography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1.5}>
                                <AccordionGuide
                                    title="Các yêu cầu khi gọi vốn là gì?"
                                    message="Bạn cần phải là công dân Việt Nam, ít nhất 18 tuổi và đã là sinh viên đại học hoặc sau đại học tại một trường đại học tại Việt Nam."
                                />
                                <AccordionGuide
                                    title="Làm thế nào tôi có thể thanh toán phí hàng tháng của mình?"
                                    message="Bạn có thể thanh toán qua Paypal - một dịch vụ trung gian dùng để thanh toán và chuyển tiền quốc tế qua mạng Internet."
                                />

                                <AccordionGuide
                                    title="Mất bao lâu để hồ sơ vay của tôi được chấp thuận?"
                                    message="Thường mất từ 3 đến 5 ngày làm việc để hồ sơ của bạn được chấp thuận. Đảm bảo rằng bạn cung cấp tất cả các thông tin cần thiết để tránh bất kỳ sự chậm trễ nào và quá trình thẩm định sẽ diễn ra nhanh hơn."
                                />
                                <AccordionGuide
                                    title="Tôi có thể nhận được tài trợ cho cả năm học không?"
                                    message="Tất nhiên, bạn có thể! Bạn có thể kêu gọi nhiều hồ sơ vay để chi trả học phí. Đảm bảo rằng bạn thanh toán các khoản phí hàng tháng của mình đúng hạn để đủ điều kiện cho nhiều gói trả góp."
                                />

                                <AccordionGuide
                                    title="Làm cách nào để chỉnh sửa thông tin hồ sơ của tôi (hoặc người bảo lãnh của tôi)?"
                                    message="Gửi email cho chúng tôi tại studentloanfpt@gmail.com để yêu cầu chỉnh sửa thông tin hồ sơ của bạn."
                                />
                                <AccordionGuide
                                    title="Tại sao khoản kêu gọi không hiện thị trên trang chủ của tôi"
                                    message="Mọi tương tác với hồ sơ vay hay khoản đầu tư đầu được hiện thị trong chuông thông báo ở trang chủ.Liên hệ với bộ phận chăm sóc khách hàng của chúng tôi tại studentloanfpt@gmail.com nếu có bất kỳ thắc mắc nào."
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
                                    Nền tảng của chúng tôi sẵn sàng giải đáp
                                    thắc mắc của bạn
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        Đã có chúng tôi hỗ trợ cho bạn. Bộ phận
                                        chăm sóc khách hàng của chúng tôi luôn
                                        tận tâm giúp đỡ về những mối quan tâm
                                        của bạn.
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />

            <Box
                p={3}
                sx={{
                    background: '#ffffff',
                }}
            >
                <Container textAlign="center" maxWidth="xl">
                    <SuiTypography variant="h3">
                        Xem cách hoạt động của Student Loan
                    </SuiTypography>
                    <SuiTypography
                        variant="button"
                        color="text"
                        fontWeight="regular"
                    >
                        Tìm hiểu thêm về những gì chúng tôi có thể cung cấp và
                        tìm hiểu cách bạn có thể nhận được toàn bộ học phí của
                        mình.
                    </SuiTypography>
                    <Grid container spacing={3} sx={{ my: 15 }}>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <LockIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    Đăng ký và xác thực trực tuyến
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        Đăng ký Student Loan bất cứ khi nào bạn
                                        cần. Tạo một tài khoản, thêm thông tin
                                        nhận diện của bạn và gửi yều cầu xác
                                        thực.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <SettingsApplicationsIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    Tạo hồ sơ vay
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        Tạo hồ sơ để kêu gọi các khoản đầu tư.
                                        Quá trình thẩm định sẽ được thực hiện
                                        trong 3 - 5 ngày làm việc.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <PaidIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    Rút tiền đã kêu gọi từ ví
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        Khi hồ sơ kêu gọi thành công tiền sẽ
                                        chuyển trực tiếp vào ví Student Loan của
                                        bạn. Sau đó bạn có thể thực hiện chi trả
                                        học phí.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <TodayIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    Thanh toán hàng tháng
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        Khoản thanh toán hàng tháng đầu tiên của
                                        bạn sẽ đến hạn sau 30 ngày kể từ ngày
                                        giải ngân. Bạn có thể thanh toán phí
                                        hàng tháng của mình trực tuyến qua hệ
                                        thống Student Loan.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />

            <Box
                px={3}
                py={15}
                sx={{
                    background: '#ffffff',
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Box
                                display="flex"
                                height="100%"
                                sx={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <SuiTypography variant="h3">
                                    Giúp sinh viên Việt Nam tiến gần hơn đến
                                    việc đạt được ước mơ của họ
                                </SuiTypography>
                                <Box mt={2} sx={{ lineHeight: 1 }}>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                        sx={{ fontStyle: 'italic' }}
                                    >
                                        Student Loan cam kết xây dựng một ngày
                                        mai tốt đẹp hơn cho người dân Việt Nam
                                        bằng cách cung cấp một nền tảng chi trả
                                        học phí hợp lý. Hãy tham gia cùng hàng
                                        nghìn sinh viên vay tiền bằng Student
                                        Loan và tập trung vào việc đạt được ước
                                        mơ của bạn.
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="Trần Long"
                                            subheader="Trường Đại học FPT"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                Tôi thích cách Student Loan cho
                                                phép sinh viên trả một khoản cố
                                                định rất nhỏ trong lúc học, điều
                                                này giúp ích rất nhiều cho những
                                                ai đang gặp khó khăn về tài
                                                chính.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="Nguyễn Trường Phi"
                                            subheader="Trường Đại học Công nghệ Thông tin"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                Student Loan cung cấp các kế
                                                hoạch học phí để giúp đỡ những
                                                sinh viên có nhu cầu như tôi.
                                                Tôi thích Student Loan vì họ
                                                cung cấp cho phép tôi thanh toán
                                                hàng tháng với số tiền rất nhỏ.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="Nguyễn Quốc Thái"
                                            subheader="Trường Đại học Ngoại thương"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                Nền tảng cho vay dựa trên hình
                                                thức gọi vốn cộng đồng giúp
                                                nhiều người biết đến hoàn cảnh
                                                của tôi hơn. Bên cạnh đó, việc
                                                thuyết phục một ai đó đầu tư cho
                                                con đường học tập của bạn là một
                                                trải nghiệm đáng nhớ.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="Đinh Phú Cường"
                                            subheader="Bachkhoa-Aptech"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                Tôi là cựu sinh viên Bách khoa
                                                đã tốt nghiệp và đang làm công
                                                việc lập trình tôi mong muốn,
                                                tất cả là nhờ có Student Loan đã
                                                giúp đỡ học phí trong lúc gia
                                                đình tôi gặp khó khăn.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Footer />
        </>
    )
}
