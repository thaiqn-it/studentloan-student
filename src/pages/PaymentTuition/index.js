import { Grid } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import React from 'react'
import PaymentTuitionItem from './PaymentTuitionItem'

export default function PaymentTuition() {
    return (
        <>
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Khoản vay
            </SuiTypography>
            <Grid container>
                <Grid item xs={12} md={12} lg={6}>
                    <PaymentTuitionItem />
                </Grid>
            </Grid>
        </>
    )
}
