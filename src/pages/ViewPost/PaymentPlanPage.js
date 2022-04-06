import React from 'react'
import { Box } from '@mui/material'
import TimelineList from 'examples/Timeline/TimelineList'
import TimelineItem from 'examples/Timeline/TimelineItem'

export default function PaymentPlanPage() {
    return (
        <>
            <Box mb={3} p={3}>
                <TimelineList title="">
                    <TimelineItem
                        color="dark"
                        icon="drafts"
                        title="Hồ sơ đang ở dạng nháp"
                        dateTime="22 DEC 7:20 PM"
                        description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                        badges={['DRAFT']}
                    />
                    <TimelineItem
                        color="error"
                        icon="delete"
                        title="New order #1832412"
                        dateTime="21 DEC 11 PM"
                        description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                        badges={['DELETED']}
                    />
                    <TimelineItem
                        color="warning"
                        icon="access_time"
                        title="Server payments for April"
                        dateTime="21 DEC 9:34 PM"
                        description={null}
                        badges={['WAITING']}
                    />
                    <TimelineItem
                        color="secondary"
                        icon="do_disturb_on"
                        title="$2400 Design changes"
                        dateTime="22 DEC 7:20 PM"
                        description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                        badges={['REJECTED']}
                    />
                    <TimelineItem
                        color="primary"
                        icon="monetization_on"
                        title="$2400 Design changes"
                        dateTime="22 DEC 7:20 PM"
                        description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                        badges={['FUNDING']}
                    />
                    <TimelineItem
                        color="error"
                        icon="cancel"
                        title="$2400 Design changes"
                        dateTime="22 DEC 7:20 PM"
                        description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                        badges={['FAIL']}
                    />
                    <TimelineItem
                        color="info"
                        icon="play_circle_filled"
                        title="$2400 Design changes"
                        dateTime="22 DEC 7:20 PM"
                        description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                        badges={['ONGOING']}
                    />
                    <TimelineItem
                        color="success"
                        icon="check_circle"
                        title="$2400 Design changes"
                        dateTime="22 DEC 7:20 PM"
                        description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                        badges={['FINISH']}
                        lastItem
                    />
                </TimelineList>
            </Box>
        </>
    )
}
