import { Box, Container, Divider, Grid, Paper } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useState } from 'react'

import { loanApi } from '../../apis/loanApi'

export default function CreateLoanPost() {
    const data = {
        totalMoney: '',
        expectedGraduationTime: '',
        duration: '',
        status: 'DRAFT',
    }

    const [userData, setUserData] = useState(data)

    const createLoan = () => {
        console.log(userData)
        loanApi.createLoanPost(userData)
    }

    const handleOnchange = (e) => {
        e.preventDefault()
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })

        console.log(userData)
    }

    const verifyData = () => {
        var flag = false
        if (
            data.money != null &&
            data.duration != null &&
            data.graduateTime != null
        ) {
            flag = true
        }

        return flag
    }

    return (
        <>
            <Divider sx={{ borderBottomWidth: 1, my: 1 }} />
            <Paper>
                <Box height="85vh">
                    <SuiButton disable sx={{ borderRadius: 0 }} color="warning">
                        Draft
                    </SuiButton>
                    <Container maxWidth="sm">
                        <Box sx={{ paddingTop: '15%' }}>
                            <SuiTypography
                                variant="h4"
                                fontWeight="regular"
                                color="black"
                                align="center"
                                mb={5}
                            >
                                Hãy điền những thông tin bên dưới để tạo một hồ
                                sơ vay
                            </SuiTypography>
                            <SuiTypography
                                variant="h5"
                                fontWeight="regular"
                                color="text"
                                align="center"
                                mb={3}
                            >
                                Chọn số tiền bạn muốn vay và thời hạn vay
                            </SuiTypography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Số tiền
                                    </SuiTypography>
                                    <SuiInput
                                        name="totalMoney"
                                        type="number"
                                        icon={{
                                            component: 'đ',
                                            direction: 'right',
                                        }}
                                        onChange={handleOnchange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Thời hạn vay
                                    </SuiTypography>
                                    <SuiInput
                                        name="duration"
                                        type="month"
                                        onChange={handleOnchange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Thời gian ra trường dự kiến
                                    </SuiTypography>
                                    <SuiInput
                                        name="expectedGraduationTime"
                                        type="month"
                                        onChange={handleOnchange}
                                    />
                                </Grid>
                            </Grid>
                            <Divider sx={{ borderBottomWidth: 1, mt: 10 }} />
                            <SuiTypography variant="button">
                                Chào mừng bạn trở lại !
                            </SuiTypography>
                            <SuiButton
                                size="large"
                                color="black"
                                sx={{ marginTop: 1, float: 'right' }}
                                onClick={createLoan}
                            >
                                Tạo
                            </SuiButton>
                        </Box>
                    </Container>
                </Box>
            </Paper>
        </>
    )
}
