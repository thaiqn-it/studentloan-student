import React from 'react'

import {
    Autocomplete,
    Box,
    Card,
    Divider,
    Grid,
    TextField,
    Paper,
} from '@mui/material'
import SuiAvatar from 'components/SuiAvatar'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import SuiButton from 'components/SuiButton'

export default function DetailAccountCard() {
    return (
        <>
            <Paper elevation={3} sx={{borderRadius:"10px"}}>
                <Box p={2}>
                    <Box py={2}>
                        <SuiTypography variant="h5">
                            Thông tin chi tiết
                        </SuiTypography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Họ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Họ"
                                value="Trần"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Tên
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Họ"
                                value="Long"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Email
                            </SuiTypography>
                            <SuiInput
                                type="email"
                                placeholder="Email"
                                value="longtran4949@gmail.com"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Mật khẩu
                            </SuiTypography>
                            <SuiInput
                                type="password"
                                // placeholder="Email"
                                value="longtran4949@gmail.com"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Ngày sinh
                            </SuiTypography>
                            <SuiInput
                                type="date"
                                value="12/12/2022"
                                // onChange={handleInputState}
                                // name={name}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Số điện thoại
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="phone number"
                                value="0794485000"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Trường
                            </SuiTypography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                // sx={{ width: 300 }}
                                // value="FPT"
                                fullWidth
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Chuyên ngành
                            </SuiTypography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                // sx={{ width: 300 }}
                                // value="FPT"
                                fullWidth
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Tổng số học kỳ
                            </SuiTypography>
                            <SuiInput
                                type="number"
                                // placeholder="Email"
                                value="9"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Học kỳ hiện tại
                            </SuiTypography>
                            <SuiInput
                                type="number"
                                // placeholder="Email"
                                // value="9"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Địa chỉ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                // placeholder="Email"
                                value="4/4 Song Hàng , Phường Trung Mỹ Tây"
                            />
                        </Grid>
                    </Grid>
                    <Box my={3}>
                        <SuiButton color="dark">Cập nhật</SuiButton>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}
