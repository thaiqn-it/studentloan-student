import { Box, Card, Container, Divider, Grid, Paper } from '@mui/material'
import { loanScheduleApi } from '..//..//apis/loanScheduleApi'
import { investmentApi } from 'apis/investmentApi'
import { walletApi } from 'apis/walletApi'
import OTPBox from 'components/OTPBox'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { fCurrency } from 'utils/formatNumber'
import { fDate } from 'utils/formatTime'
import Loading from 'components/Loading'
import ConfirmPayment from './ConfirmPayment'
import SnackbarMessage from 'components/SnackbarMessage'
import { setDocTitle } from 'utils/dynamicDocTitle'
import { LOAN_SCHEDULE_TYPE } from 'utils/enum'

export default function Repayment() {
    const { id } = useParams()
    const history = useHistory()
    const location = useLocation()
    const loanId = location.state?.loanId || null
    const [loanSchedule, setLoanSchedule] = useState(null)
    const [loanSchedules, setLoanSchedules] = useState(null)
    const [investments, setInvestments] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [wallet, setWallet] = useState(null)
    const [openConfirm, setOpenConfirm] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [snack, setSnack] = useState(null)
    const [totalMoney, setTotalMoney] = useState(null)
    const [penalty, setPenalty] = useState(null)

    useEffect(() => {
        setDocTitle('Thanh toán khoản vay - StudentLoan')
        setLoading(true)
        getBalance()
        if (id === 'tat-ca') {
            getAllLoanSchedule()
        } else {
            getLoanSchedule()
        }
    }, [])

    const getAllLoanSchedule = () => {
        loanScheduleApi
            .getLoanScheduleByLoanId(loanId, 'COMPLETED')
            .then((res) => {
                var schedules = res.data
                setLoanSchedules(schedules)
                var sum = 0
                var penalty = 0
                schedules.map((item) => {
                    sum += Number(item.money)
                    penalty += Number(item.penaltyMoney)
                })
                setTotalMoney(sum)
                setPenalty(penalty)
                getInvesment(loanId)
            })
    }

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
                        penaltyMoney: Number(loanScheduleItem.penaltyMoney),
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
        if (id === 'tat-ca') {
            history.goBack()
        }
        history.push(`/trang-chu/ho-so/xem/${loanSchedule.loanId}`)
    }

    const handleConfirm = (value) => {
        setOpenConfirm(false)
        
        if (value) {
            if (id === 'tat-ca') {
                walletApi
                    .repaymentAll({ loanSchedules, investments })
                    .then((res) => {
                        setLoading(false)
                        if (res.data !== null) {
                            history.push('/trang-chu/vi')
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        setLoading(false)
                    })
            } else {
                walletApi
                    .repayment({ loanSchedule, investments })
                    .then((res) => {
                        setLoading(false)
                        if (res.data !== null) {
                            history.push('/trang-chu/vi')
                        }
                    })
                    .catch((err) => {
                        setLoading(false)
                    })
            }
        } else {
            setSnack({
                color: 'error',
                message: 'Xin lỗi mật khẩu bạn nhập không đúng',
            })
            setOpenSnack(true)
        }
    }

    const payment = () => {
        var temp = 0
        if (id === 'tat-ca') {
            temp = totalMoney
        } else {
            temp = loanSchedule.money
        }
        if (wallet.money < temp) {
            setSnack({
                color: 'error',
                message:
                    'Xin lỗi số tiền trong ví của bạn không đủ để thanh toán',
            })
            setOpenSnack(true)
        } else {
            setOpenConfirm(true)
        }
    }
    const handleCloseComfirm = () => {
        setOpenConfirm(false)
    }

    const closeSnack = () => {
        setOpenSnack(false)
    }

    const getAmount = () => {
        var amount = 0
        if (id === 'tat-ca') {
            amount = fCurrency(totalMoney)
        } else {
            amount = fCurrency(loanSchedule?.money)
        }
        return amount
    }

    const getPenalty = () => {
        var amount = 0
        if (id === 'tat-ca') {
            amount = fCurrency(penalty)
        } else {
            amount = fCurrency(loanSchedule?.penaltyMoney)
        }
        return amount
    }

    const getTotalAmount = () => {
        var amount = 0
        if (id === 'tat-ca') {
            amount = fCurrency(totalMoney + penalty)
        } else {
            amount = fCurrency(loanSchedule?.money + loanSchedule?.penaltyMoney)
        }
        return amount
    }

    const getType = () => {
        var type = ''
        if (id === 'tat-ca') {
            if (loanSchedules) {
                type =
                    loanSchedules[0]?.type + ' - ' + loanSchedules.at(-1)?.type
            }
        } else {
            type = loanSchedule?.type
        }
        return type
    }

    const getPeriod = () => {
        var period = ''
        if (id === 'tat-ca') {
            if (loanSchedules) {
                period =
                    fDate(loanSchedules[0]?.startAt) +
                    ' - ' +
                    fDate(loanSchedules.at(-1)?.startAt)
            }
        } else {
            period = fDate(loanSchedule?.startAt)
        }
        return period
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
                                        {/* {fCurrency(
                                            loanSchedule?.money +
                                                loanSchedule?.penaltyMoney
                                        )} */}
                                        {getTotalAmount()}
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
                                        {/* {loanSchedule?.type} */}
                                        {getType()}
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
                                        Kỳ hạn:
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="medium"
                                    >
                                        {/* {fDate(loanSchedule?.startAt)} */}
                                        {getPeriod()}
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
                                        {/* {fCurrency(loanSchedule?.money)} */}
                                        {getAmount()}
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
                                        {/* {fCurrency(loanSchedule?.penaltyMoney)} */}
                                        {getPenalty()}
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
                snack={snack}
                onClickClose={closeSnack}
                open={openSnack}
            />
            {/* <OTPBox /> */}
        </>
    )
}
