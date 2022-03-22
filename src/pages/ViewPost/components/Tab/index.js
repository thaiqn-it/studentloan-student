import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Container, ThemeProvider, Typography } from '@mui/material'
import theme from '../../../../theme'


export default function TabInfo(props) {
    const { currentTab, onChangeTab } = props

    const handleChange = (event, newValue) => {
        onChangeTab(newValue)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    // textColor="#028858"
                    // variant="fullWidth"
                    // indicatorColor="primary"
                    centered
                    aria-label="loan application atb"
                    TabIndicatorProps={{ style: { background: '#344767' } }}
                >
                    <Tab
                        value="one"
                        label={
                            <Typography sx={{ color: '#344767' }}>
                                Thông tin hồ sơ vay
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    <Tab
                        value="two"
                        label={
                            <Typography sx={{ color: '#344767' }}>
                                Hợp đồng
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    <Tab
                        value="three"
                        label={
                            <Typography sx={{ color: '#344767' }}>
                                Kế hoạch trả
                            </Typography>
                        }
                        disabled
                        sx={{ textTransform: 'none' }}
                    />
                    <Tab
                        value="four"
                        label={
                            <Typography sx={{ color: '#344767' }}>
                                Báo cáo
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                </Tabs>
            </Box>
        </ThemeProvider>
    )
}
