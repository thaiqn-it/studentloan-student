import React from 'react'
import { Box } from '@mui/material'
import TimelineList from 'examples/Timeline/TimelineList'
import TimelineItem from 'examples/Timeline/TimelineItem'
import SuiTypography from 'components/SuiTypography'

export default function PaymentPlanPage() {

    

    const onHandleAction = () => {
        console.log('hihi')
    }

    const itemStatue = (status) => {
        var statusObject = {
            color: 'warning',
            action: false,
        }
        switch (status) {
            case 'ONGOING':
                statusObject.color = 'warning'
                statusObject.action = true
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
                color={statusObject.color}
                icon="paid"
                title="12/2022"
                // dateTime="12/12/2022"
                information={
                    <>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Số tiền: 200.000
                        </SuiTypography>
                        <Box>
                            <SuiTypography
                                variant="button"
                                fontWeight="regular"
                                color="text"
                            >
                                Tiền phạt: 10.000
                            </SuiTypography>
                        </Box>
                    </>
                }
                badges={[status]}
                action={statusObject.action}
            />
        )
    }

    return (
        <>
            <Box mb={3} p={3}>
                <TimelineList title="">{itemStatue('ONGOING')}</TimelineList>
            </Box>
        </>
    )
}
