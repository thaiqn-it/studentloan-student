import { Box, Card, Container, Divider, Grid, Paper } from '@mui/material'
import { loanScheduleApi } from '..//..//apis/loanScheduleApi'
import { investmentApi } from 'apis/investmentApi'
import { walletApi } from 'apis/walletApi'
import OTPBox from 'components/OTPBox'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { fCurrency } from 'utils/formatNumber'
import { fDateTimeSuffix } from 'utils/formatTime'
import Loading from 'components/Loading'
import ConfirmPayment from './ConfirmPayment'
import SnackbarMessage from 'components/SnackbarMessage'
import { setDocTitle } from 'utils/dynamicDocTitle'

export default function Repayment() {
    const { id } = useParams()
    const history = useHistory()
    const [loanSchedule, setLoanSchedule] = useState(null)
    const [investments, setInvestments] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [wallet, setWallet] = useState(null)
    const [openConfirm, setOpenConfirm] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)

    useEffect(() => {
        setDocTitle("Thanh toán khoản vay - StudentLoan")
        setLoading(true)
        getBalance()
        if (id === 'tat-ca') {
            loanScheduleApi
                .getLoanScheduleByLoanId(
                    '81276580-8b43-4f90-be63-f7106a2c63df',
                    'COMPLETED'
                )
                .then((res) => {
                    console.log(res)
                })
        } else {
            getLoanSchedule()
        }
    }, [])

    const getLoanSchedule = () => {
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
                setLoanSchedule(temp)
                getInvesment(temp.loanId)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
            })
    }

    const getBalance = () => {
        walletApi
            .getWallet()
            .then((res) => {
                setWallet(res.data)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
            })
    }

    const getInvesment = (loanId) => {
        investmentApi
            .getInvestmentByLoanId(loanId)
            .then((res) => {
                setInvestments(res.data)

                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
            })
    }

    const handleCancel = () => {
        history.push(`/trang-chu/ho-so/xem/${loanSchedule.loanId}`)
    }

    const handleConfirm = (value) => {
        setOpenConfirm(false)
        if (value) {
            console.log(loanSchedule)
            console.log(investments)
            walletApi
                .repayment({ loanSchedule, investments })
                .then((res) => {
                    setLoading(false)
                    if (res.data !== null) {
                        history.push('/trang-chu/profile2/wallet')
                    }
                })
                .catch((err) => {
                    setLoading(false)
                })
        } else {
            setOpenSnack(true)
        }
    }

    const payment = () => {
        setOpenConfirm(true)
    }
    const handleCloseComfirm = () => {
        setOpenConfirm(false)
    }

    const closeSnack = () => {
        setOpenSnack(false)
    }
    return (
        <>
            {isLoading ? <Loading /> : null}
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Thanh toán khoản vay
            </SuiTypography>
            <Container maxWidth="lg">
                <Card sx={{ boxShadow: 3 }}>
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
                                            Số dư: {fCurrency(wallet?.money)}
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
                                            loanSchedule?.money +
                                                loanSchedule?.penaltyMoney
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
                                        {loanSchedule?.type}
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
                                        {fDateTimeSuffix(loanSchedule?.startAt)}
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
                                        {fCurrency(loanSchedule?.money)}
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
                                        {fCurrency(loanSchedule?.penaltyMoney)}
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
                    <SuiButton
                        color="secondary"
                        sx={{ mr: 3 }}
                        onClick={handleCancel}
                    >
                        Hủy bỏ
                    </SuiButton>
                    <SuiButton color="primary" onClick={payment}>
                        Thanh toán
                    </SuiButton>
                </Box>
            </Container>
            <ConfirmPayment
                open={openConfirm}
                handleConfirm={handleConfirm}
                handleClose={handleCloseComfirm}
            />
            <SnackbarMessage
                snack={{ color: 'error', message: 'Xin lỗi mật khẩu bạn nhập không đúng' }}
                onClickClose={closeSnack}
                open={openSnack}
            />
            {/* <OTPBox /> */}
        </>
    )
}
