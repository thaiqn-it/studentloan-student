import React from 'react'
import InvestorTable from './components/InvestmentsTable'
import MiniStatisticsCard from 'examples/Cards/StatisticsCards/MiniStatisticsCard'
import { Box, Grid } from '@mui/material'
import { fCurrency } from 'utils/formatNumber'
import SuiButton from 'components/SuiButton'

import DownloadIcon from '@mui/icons-material/Download'

export default function InvestorPage(props) {
    const { investments, currentMoney, investors } = props

    const downloadAllContract = () => {
        var urls = [
            'https://res.cloudinary.com/larrytran/image/upload/v1648997077/pdf/hmq3b48dybfpn1mvfqsa.pdf',
            'https://res.cloudinary.com/larrytran/image/upload/v1648997077/pdf/hmq3b48dybfpn1mvfqsa.pdf',
            'https://res.cloudinary.com/larrytran/image/upload/v1648997077/pdf/hmq3b48dybfpn1mvfqsa.pdf',
        ]

    }

    return (
        <>
            <Box pb={3} pl={3} sx={{ background: '#f7f5f2' }}>
                <Box display="flex" justifyContent="flex-end">
                    <SuiButton
                        startIcon={<DownloadIcon />}
                        onClick={downloadAllContract}
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 0 }}
                    >
                        Tải tất cả hợp đồng
                    </SuiButton>
                </Box>
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
                            count={investors + ' thành viên'}
                            // percentage={{ color: 'success', text: '+55%' }}
                            icon={{ color: 'success', component: 'people' }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box mb={3}>
                <InvestorTable
                    data={investments}
                    currecurrentMoney={currentMoney}
                />
            </Box>
        </>
    )
}
