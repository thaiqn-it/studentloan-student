import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Box, Container } from '@mui/material'
import TimelineList from 'examples/Timeline/TimelineList'
import TimelineItem from 'examples/Timeline/TimelineItem'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import Repayment from '../Repayment/OTP'
import Loading from 'components/Loading'

import moment from 'moment'

import { loanScheduleApi } from 'apis/loanScheduleApi'

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

    const buttonPayment = (
        <Box
            display="flex"
            justifyContent="flex-end"
            onClick={() => onHandleAction(item)}
        >
            <SuiButton color="warning" variant="gradient" size="small">
                Thanh toán
            </SuiButton>
        </Box>
    )

    const itemLoanSchedule = (item) => {
        console.log('true')
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
                statusObject.action = check && buttonPayment
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
                            Số tiền: {item?.money}
                        </SuiTypography>
                        <Box>
                            <SuiTypography
                                variant="caption"
                                fontWeight="regular"
                                color="text"
                            >
                                Tiền phạt: 10.000
                            </SuiTypography>
                        </Box>
                        <Box mt={3}>
                            <SuiTypography
                                variant="button"
                                fontWeight="medium"
                                color="text"
                            >
                                Tổng: 210.000
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
            <Box mb={3} p={3}>
                <Container maxWidth="sm">
                    <TimelineList title="">
                        {loanSchedules?.map((item) => itemLoanSchedule(item))}
                    </TimelineList>
                </Container>
            </Box>
        </>
    )
}
