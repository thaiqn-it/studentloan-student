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

export default function DetailInformation() {
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
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Họ và tên
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Họ"
                                value="Trần Long"
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
                                Quan hệ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="relation"
                                value="Cha"
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
                </Box>
            </Paper>
        </>
    )
}
