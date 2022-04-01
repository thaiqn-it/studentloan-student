import React from 'react'

import {
    Autocomplete,
    Box,
    Grid,
    TextField,
    Paper,
} from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'
import { fDisplayDate } from 'utils/formatTime'

export default function DetailAccountCard(props) {
    const {studentInfo} = props
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
                                value={studentInfo?.User?.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Tên
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Họ"
                                value={studentInfo?.User?.lastName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Email
                            </SuiTypography>
                            <SuiInput
                                type="email"
                                placeholder="Email"
                                value={studentInfo?.User?.email}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Mật khẩu
                            </SuiTypography>
                            <SuiInput
                                type="password"
                                // placeholder="Email"
                                value="password"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Ngày sinh
                            </SuiTypography>
                            <SuiInput
                                type="date"
                                value={fDisplayDate(studentInfo?.birthDate)}
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
                                value={studentInfo?.User?.phoneNumber}
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
                                disabled={true}
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
                                disabled={true}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Địa chỉ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                // placeholder="Email"
                                value={studentInfo?.address}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}
