import { Box, Card, Container, Divider, Grid, Paper } from '@mui/material'
import { loanScheduleApi } from 'apis/loanScheduleApi'
import OTPBox from 'components/OTPBox'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fCurrency } from 'utils/formatNumber'
import { fDateTimeSuffix } from 'utils/formatTime'

export default function Repayment() {
    const { id } = useParams()
    const [loanschedule, setLoanSchedule] = useState(null)
    useEffect(() => {
        loanScheduleApi
            .getLoanScheduleById(id)
            .then((res) => {
                var loanScheduleItem = res.data.loanSchedule
                var temp = loanScheduleItem
                if (temp.penaltyMoney === null) {
                    temp = {
                        ...loanScheduleItem,
                        penaltyMoney: 0,
                        money: Number(loanScheduleItem.money),
                    }
                } else {
                    temp = {
                        ...loanScheduleItem,
                        penaltyMoney: Number(loanScheduleItem.loanScheduleItem),
                        money: Number(loanScheduleItem.money),
                    }
                }
                console.log(temp)
                setLoanSchedule(temp)
            })
            .catch((err) => {})
    }, [])

    return (
        <>
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Thanh toán khoản vay
            </SuiTypography>
            <Container maxWidth="lg">
                <Card>
                    <Box p={3}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <SuiTypography variant="h6" fontWeight="medium">
                                    Từ ví
                                </SuiTypography>
                                <Box
                                    component="li"
                                    display="flex"
                                    alignItems="center"
                                    mb={3}
                                >
                                    <Box mr={2}>
                                        <SuiAvatar
                                            alt="avatar"
                                            variant="rounded"
                                            shadow="md"
                                            src="https://res.cloudinary.com/larrytran/image/upload/v1649698286/file/1649698287372-newLogo1.png"
                                        />
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="flex-start"
                                        justifyContent="center"
                                    >
                                        <SuiTypography
                                            variant="button"
                                            fontWeight="medium"
                                        >
                                            Trần Long
                                        </SuiTypography>
                                        <SuiTypography
                                            variant="caption"
                                            color="text"
                                        >
                                            Số dư: 200.000.000
                                        </SuiTypography>
                                    </Box>
                                </Box>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="medium"
                                    color="secondary"
                                >
                                    Số tiền
                                </SuiTypography>
                                <Box mb={3}>
                                    <SuiTypography
                                        variant="h2"
                                        fontWeight="light"
                                    >
                                        {fCurrency(
                                            loanschedule?.money +
                                                loanschedule?.penaltyMoney
                                        )}
                                    </SuiTypography>
                                </Box>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        Loại:
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        {loanschedule?.type}
                                    </SuiTypography>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        Tháng:
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        {fDateTimeSuffix(loanschedule?.startAt)}
                                    </SuiTypography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        Số tiền khoản vay:
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        {fCurrency(loanschedule?.money)}
                                    </SuiTypography>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        Tiền phạt:
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        {fCurrency(loanschedule?.penaltyMoney)}
                                    </SuiTypography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={5}
                >
                    <SuiButton color="secondary" sx={{ mr: 3 }}>
                        Hủy bỏ
                    </SuiButton>
                    <SuiButton color="primary">Xác nhận</SuiButton>
                </Box>
            </Container>
            {/* <OTPBox /> */}
        </>
    )
}
