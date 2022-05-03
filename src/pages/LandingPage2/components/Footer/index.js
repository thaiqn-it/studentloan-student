import {
    Box,
    ButtonGroup,
    Container,
    Grid,
    IconButton,
    Link,
    Stack,
} from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

import Qr from 'assets/qr.png'

export default function Footer() {
    return (
        <>
            <Box sx={{ background: '#f7f5f2' }} py={6}>
                <Container maxWidth="xl">
                    <SuiTypography variant="h3" fontWeight="bold">
                        StudentLoanPlatform
                    </SuiTypography>
                    <SuiTypography variant="caption" fontWeight="regular">
                        © StudentLoan 2022 . All Rights Reserved. Privacy Policy
                    </SuiTypography>
                    <Box mt={1}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={5}>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="bold"
                                    >
                                        Đơn vị quản lý vận hành:{' '}
                                        <SuiTypography
                                            variant="caption"
                                            fontWeight="regular"
                                        >
                                            Công ty TNHH StudentLoan
                                        </SuiTypography>
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="bold"
                                    >
                                        Mã số thuế:{' '}
                                        <SuiTypography
                                            variant="caption"
                                            fontWeight="regular"
                                        >
                                            0505202214
                                        </SuiTypography>
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="bold"
                                    >
                                        Địa chỉ ĐKKD:{' '}
                                        <SuiTypography
                                            variant="caption"
                                            fontWeight="regular"
                                        >
                                            Lô E2a-7, Đường D1 Khu Công nghệ
                                            cao, P. Long Thạnh Mỹ, TP. Thủ Đức,
                                            TP. Hồ Chí Minh
                                        </SuiTypography>
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="bold"
                                    >
                                        Email:{' '}
                                        <SuiTypography
                                            variant="caption"
                                            fontWeight="regular"
                                        >
                                            studentloanfpt@gmail.com
                                        </SuiTypography>
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="regular"
                                    >
                                        Giấy phép thiết lập MXH số 69/GP-BTTTT,
                                        Ký ngày 05/05/2022
                                    </SuiTypography>
                                </Box>
                                <Box mt={1}>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="bold"
                                    >
                                        Theo dõi chúng tôi
                                    </SuiTypography>
                                    <Box>
                                        <ButtonGroup>
                                            <IconButton>
                                                <FacebookIcon />
                                            </IconButton>
                                            <IconButton>
                                                <InstagramIcon />
                                            </IconButton>
                                            <IconButton>
                                                <LinkedInIcon />
                                            </IconButton>
                                            <IconButton>
                                                <YouTubeIcon />
                                            </IconButton>
                                        </ButtonGroup>
                                    </Box>
                                </Box>
                                <Box mt={1}>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="bold"
                                    >
                                        Ứng dụng StudentLoan cho nhà đầu tư
                                    </SuiTypography>
                                    <Box spacing={1}>
                                        <Box
                                            component="img"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png"
                                            height="60px"
                                        ></Box>
                                        <Box
                                            component="img"
                                            src={Qr}
                                            height="60px"
                                        ></Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} md={2}>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="bold"
                                    >
                                        Về chúng tôi
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Giới thiệu
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Tuyển dụng
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Truyền thông
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Blog
                                    </SuiTypography>
                                </Box>
                            </Grid>
                            <Grid item xs={4} md={2}>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="bold"
                                    >
                                        Hỗ trợ khách hàng
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Trung tâm trợ giúp
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        An toàn giao dịch
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Liên hệ hỗ trợ
                                    </SuiTypography>
                                </Box>
                            </Grid>
                            <Grid item xs={4} md={3}>
                                <Box>
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="bold"
                                    >
                                        Chính sách
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Chính sách bảo mật
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Chính sách vay vốn
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Điều khoản hợp đồng
                                    </SuiTypography>
                                </Box>
                                <Box>
                                    <SuiTypography
                                        component={Link}
                                        variant="caption"
                                        href="#"
                                    >
                                        Chính sách chi trả
                                    </SuiTypography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
