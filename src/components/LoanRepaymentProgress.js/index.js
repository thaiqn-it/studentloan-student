import { LinearProgress, ThemeProvider, Typography } from '@mui/material'
import SuiBox from 'components/SuiBox'
import React, { useState } from 'react'
import theme from 'theme'

export default function LoanRepaymentProgress() {
    const [percentage, setPercentage] = useState(10)

    return (
        <>
            <SuiBox sx={{ height: '100%' }}>
                <Typography>Quá trình trả nợ</Typography>
                <ThemeProvider theme={theme}>
                    <SuiBox sx={{ display: 'flex', flexDirection: 'row' }}>
                        <SuiBox sx={{ width: '5%' }}>
                            <Typography>Start</Typography>
                        </SuiBox>
                        <SuiBox sx={{ marginLeft: `${percentage - 7}%` }}>
                            {' '}
                            <Typography>Current</Typography>
                        </SuiBox>
                        <SuiBox sx={{ marginLeft: 'auto', marginRight: '0' }}>
                            {' '}
                            <Typography>End</Typography>
                        </SuiBox>
                    </SuiBox>
                    <LinearProgress
                        sx={{ height: 15 }}
                        variant="determinate"
                        value={percentage}
                    />
                    <SuiBox
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        {' '}
                        <Typography>Đã trả 1 000 000 trieu</Typography>
                        <Typography>Còn lại 1 000 000 trieu</Typography>
                    </SuiBox>
                </ThemeProvider>
                <SuiBox display="flex" sx={{ justifyContent: 'space-around' }}>
                    <SuiBox
                        display="flex"
                        sx={{ alignItems: 'center', flexDirection: 'column' }}
                    >
                        <Typography>Kì kế phải trả</Typography>
                        <Typography>10 Triêu</Typography>
                    </SuiBox>
                    <SuiBox
                        display="flex"
                        sx={{ alignItems: 'center', flexDirection: 'column' }}
                    >
                        <Typography>Số năm còn lại</Typography>
                        <Typography>2 năm</Typography>
                    </SuiBox>
                    <SuiBox
                        display="flex"
                        sx={{ alignItems: 'center', flexDirection: 'column' }}
                    >
                        <Typography>Tổng số tiền</Typography>
                        <Typography>100 triệu</Typography>
                    </SuiBox>
                </SuiBox>
            </SuiBox>
        </>
    )
}
