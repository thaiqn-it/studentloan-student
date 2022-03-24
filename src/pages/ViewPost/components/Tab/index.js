import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Container, ThemeProvider, Typography, Avatar, Divider } from '@mui/material'
import theme from '../../../../theme'

import Contract from '..//..//..//..//assets/contract.png'
import Plan2 from "..//..//..//..//assets/plan2.png"
import Writing from "..//..//..//..//assets/writing.png"


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
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Writing}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography sx={{ color: '#344767' }} fontWeight="regular">
                                Thông tin hồ sơ vay
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    <Tab
                        value="two"
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Contract}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography sx={{ color: '#344767' }} fontWeight="regular">
                                Hợp đồng
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    <Tab
                        value="three"
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Plan2}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography sx={{ color: '#344767' }} fontWeight="regular">
                                Kế hoạch trả
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    {/* <Tab
                        value="four"
                        label={
                            <Typography sx={{ color: '#344767' }} fontWeight="regular">
                                Báo cáo
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    /> */}
                </Tabs>
                   <Divider/>
            </Box>
        </ThemeProvider>
    )
}
