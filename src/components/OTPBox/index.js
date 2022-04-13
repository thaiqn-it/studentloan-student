import React, { useState } from 'react'
import { Box, Container, TextField } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from "components/SuiButton"

export default function OTPBox() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={3}>
                <SuiTypography>
                    Nhập OTP được gửi đến số điện thoại
                </SuiTypography>
                <Box width="50%" mt={1}>
                    <SuiInput type="password" inputProps={{ maxLength: 6 }}/>
                </Box>

                <SuiButton sx={{mt:3}} color="primary" size="large">Xác thực</SuiButton>
            </Box>
        </>
    )
}
