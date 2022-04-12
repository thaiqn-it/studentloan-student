import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Box, Container } from '@mui/material'
import TimelineList from 'examples/Timeline/TimelineList'
import TimelineItem from 'examples/Timeline/TimelineItem'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import Repayment from '../Repayment/OTP'
import Loading from 'components/Loading'

import { loanScheduleApi } from 'apis/loanScheduleApi'

export default function PaymentPlanPage() {
    const { id } = useParams()
    const history = useHistory()

    const [loanSchedules, setLoanSchedules] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        loanScheduleApi
            .getLoanScheduleByLoanId(id)
            .then((res) => {
                setLoanSchedules(res.data)
                setIsLoading(false)
                console.log(res.data)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }, [])

    const onHandleAction = (item) => {
        var path = `/trang-chu/thanh-toan/${item.id}`
        history.push(path)
    }

    const handleClose = () => {
        setOpenPayment(false)
    }

    const actionButton = (item) => {
        return (
            <>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    onClick={() => onHandleAction(item)}
                >
                    <SuiButton color="warning" variant="gradient" size="small">
                        Thanh toán
                    </SuiButton>
                </Box>
            </>
        )
    }

    const itemStatue = (item) => {
        var statusObject = {
            color: 'warning',
            action: false,
        }
        switch (item.status) {
            case 'ONGOING':
                statusObject.color = 'warning'
                statusObject.action = actionButton(item)
                break
            case 'COMPLETE':
                statusObject.color = 'success'
                break
            case 'INCOMPLETE':
                statusObject.color = 'error'
                break
        }

        return (
            <TimelineItem
                key={item.id}
                color="warning"
                icon="paid"
                title="12/2022"
                dateTime="12/12/2022"
                information={
                    <>
                        <SuiTypography
                            variant="caption"
                            fontWeight="regular"
                            color="text"
                        >
                            Số tiền: 200.000
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
                        {loanSchedules?.map((item) => itemStatue(item))}
                    </TimelineList>
                </Container>
            </Box>
        </>
    )
}
