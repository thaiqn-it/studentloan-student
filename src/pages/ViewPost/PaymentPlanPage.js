import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Box, Container, Divider } from '@mui/material'
import TimelineList from 'examples/Timeline/TimelineList'
import TimelineItem from 'examples/Timeline/TimelineItem'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import Loading from 'components/Loading'

import moment from 'moment'

import { loanScheduleApi } from '../../apis/loanScheduleApi'
import { fCurrency } from 'utils/formatNumber'
import { fCurrencyNoVND } from 'utils/formatNumber'

export default function PaymentPlanPage() {
    const { id } = useParams()
    const history = useHistory()

    const [loanSchedules, setLoanSchedules] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchData()
    }, [])

    const fetchData = () => {
        loanScheduleApi
            .getLoanScheduleByLoanId(id)
            .then((res) => {
                setLoanSchedules(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    const onHandleAction = (item) => {
        var path = `/trang-chu/thanh-toan/${item.id}`
        history.push(path)
    }

    const handlePayAll = () =>{
        var path = `/trang-chu/thanh-toan/tat-ca`
        history.push(path)
    }

    const buttonPayment = (item) => {
        return (
            <>
                <Box>
                    <SuiButton
                        color="warning"
                        variant="gradient"
                        size="small"
                        onClick={() => onHandleAction(item)}
                        sx={{ mt: '50%' }}
                    >
                        Thanh toán
                    </SuiButton>
                </Box>
            </>
        )
    }

    const sumTotal = (money, penaltyMoney) => {
        var tempMoney = new Number(money)
        var tempPenaltyMoney = new Number(penaltyMoney)
        return fCurrency(tempMoney + tempPenaltyMoney)
    }

    const itemLoanSchedule = (item) => {
        var statusObject = {
            color: 'warning',
            action: false,
        }

        var now = moment(new Date()).format('DD/MM/YYYY')
        var startDate = moment(item.startAt).format('DD/MM/YYYY')
        var endDate = moment(item.endAt).format('DD/MM/YYYY')

        var check = moment(now).isBetween(startDate, endDate)
        switch (item.status) {
            case 'ONGOING':
                statusObject.color = 'warning'
                statusObject.action = true && buttonPayment(item)
                break
            case 'COMPLETED':
                statusObject.color = 'success'
                break
            case 'INCOMPLETED':
                statusObject.color = 'error'
                break
        }

        return (
            <TimelineItem
                key={item.id}
                color={statusObject.color}
                icon="paid"
                title="Thanh toán kỳ hạn"
                dateTime={moment(item.startAt).format('DD/MM/YYYY').toString()}
                information={
                    <>
                        <SuiTypography
                            variant="caption"
                            fontWeight="regular"
                            color="text"
                        >
                            Số tiền: {fCurrency(item?.money)}
                        </SuiTypography>
                        <Box>
                            <SuiTypography
                                variant="caption"
                                fontWeight="regular"
                                color="text"
                            >
                                Tiền phạt:{fCurrency(item?.penaltyMoney)}
                            </SuiTypography>
                        </Box>
                        <Box mt={3}>
                            <SuiTypography
                                variant="button"
                                fontWeight="medium"
                                color="text"
                            >
                                Tổng:
                                {sumTotal(item?.money, item?.penaltyMoney)}
                            </SuiTypography>
                        </Box>
                    </>
                }
                badges={[item.status]}
                action={statusObject.action}
            />
        )
    }

    return (
        <>
            {isLoading ? <Loading /> : null}
            {/* <Repayment open={openPayment} handleClose={handleClose} selectedValue={selectedValue}/> */}
            <Box mb={3} bgcolor="#f8f9fa">
                <Box display="flex" justifyContent="flex-end">
                    <SuiButton color="primary" sx={{ borderRadius: 0 }} onClick={handlePayAll}>
                        Thanh toán tất cả
                    </SuiButton>
                </Box>
                <Container maxWidth="sm">
                    <TimelineList title="">
                        {loanSchedules?.map((item) => itemLoanSchedule(item))}
                    </TimelineList>
                </Container>
            </Box>
        </>
    )
}
