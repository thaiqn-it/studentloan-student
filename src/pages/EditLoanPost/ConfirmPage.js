import React, { useEffect, useState } from 'react'

import {
    Autocomplete,
    Box,
    Grid,
    TextField,
    Paper,
    Divider,
    Container,
} from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'
import { fDate } from 'utils/formatTime'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function ConfirmPage(props) {
    const { studentInfo } = props

    return (
        <>
            <Box id="personal-information">
                <Box component="div" sx={{ padding: '3rem 0rem' }}>
                    <SuiTypography
                        variant="h4"
                        align="center"
                        color="black"
                        fontWeight="regular"
                    >
                        Kiểm tra lại thông tin tài khoản của bạn
                    </SuiTypography>
                    <SuiTypography
                        variant="h6"
                        align="center"
                        fontWeight="regular"
                        color="text"
                    >
                        Chắc chắn rằng thông tin cá nhân của bạn đúng
                    </SuiTypography>
                </Box>
                <Divider />
                <Container sx={{ padding: '3rem 3rem' }} maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs="12" md="5">
                            <SuiTypography
                                variant="h6"
                                fontWeight="regular"
                                textTransform="capitalize"
                                color="black"
                            >
                                Thông tin cá nhân (*)
                            </SuiTypography>
                            <SuiTypography
                                variant="button"
                                fontWeight="regular"
                                color="text"
                            >
                                Khi bạn sửa những thông tin này thì thông tin
                                trong trang hồ sơ (profile) của bạn cũng được
                                thay đổi
                            </SuiTypography>
                        </Grid>
                        <Grid item xs="12" md="7">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Họ
                                    </SuiTypography>
                                    <SuiInput
                                        type="text"
                                        placeholder="Họ"
                                        value={studentInfo?.User?.firstName}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Tên
                                    </SuiTypography>
                                    <SuiInput
                                        type="text"
                                        placeholder="Tên"
                                        value={studentInfo?.User?.lastName}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Email
                                    </SuiTypography>
                                    <SuiInput
                                        type="email"
                                        placeholder="Email"
                                        value={studentInfo?.User?.email}
                                        disabled
                                    />
                                </Grid>
                                {/* <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Mật khẩu
                                    </SuiTypography>
                                    <SuiInput
                                        type="password"
                                        // placeholder="Email"
                                        value="longtran4949@gmail.com"
                                    />
                                </Grid> */}
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Ngày sinh
                                    </SuiTypography>
                                    <SuiInput
                                        type="text"
                                        value={fDate(
                                            studentInfo?.User?.birthDate
                                        )}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Số điện thoại
                                    </SuiTypography>
                                    <SuiInput
                                        type="text"
                                        placeholder="Số điện thoại"
                                        disabled
                                        value={studentInfo?.User?.phoneNumber}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Trường
                                    </SuiTypography>
                                    <SuiInput
                                        type="text"
                                        placeholder="Trường đại học"
                                        disabled
                                        value={
                                            studentInfo?.Information?.SchoolMajor?.School
                                                ?.name
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Chuyên ngành
                                    </SuiTypography>
                                    <SuiInput
                                        type="text"
                                        placeholder="Chuyên ngành"
                                        disabled
                                        value={
                                            studentInfo?.Information?.SchoolMajor?.Major
                                                ?.name
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Địa chỉ
                                    </SuiTypography>
                                    <SuiInput
                                        type="text"
                                        placeholder="Địa chỉ"
                                        value={studentInfo?.User?.address}
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                            <SuiButton
                                color="dark"
                                sx={{ float: 'right', mt: 3 }}
                                href={`/dashboard/profile2`}
                                endIcon={<ArrowForwardIosIcon />}
                                variant='text'
                            >
                                Cập nhật thông tin
                            </SuiButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Box p={2}>
                    
                </Box>
            </Paper> */}
        </>
    )
}
