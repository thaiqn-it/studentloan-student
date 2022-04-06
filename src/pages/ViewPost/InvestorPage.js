import React from 'react'
import InvestorTable from './components/InvestmentsTable'
import MiniStatisticsCard from 'examples/Cards/StatisticsCards/MiniStatisticsCard'
import { Box, Grid } from '@mui/material'
import { fCurrency } from 'utils/formatNumber'

export default function InvestorPage(props) {
    const {investments, currentMoney, investors} = props
    return (
        <>
            <Box p={3} sx={{background: "#e6e6e6"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <MiniStatisticsCard
                            title={{ text: 'Số tiền đang kêu gọi' }}
                            count={fCurrency(currentMoney)}
                            // percentage={{ color: 'success', text: '+55%' }}
                            icon={{ color: 'info', component: 'paid' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <MiniStatisticsCard
                            title={{ text: 'Nhà đầu tư' }}
                            count={investors + " thành viên"}
                            // percentage={{ color: 'success', text: '+55%' }}
                            icon={{ color: 'success', component: 'people' }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box mb={3}>
                <InvestorTable data={investments} currecurrentMoney={currentMoney}/>
            </Box>
        </>
    )
}
