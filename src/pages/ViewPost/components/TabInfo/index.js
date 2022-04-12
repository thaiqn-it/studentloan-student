import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import {
    Container,
    ThemeProvider,
    Typography,
    Avatar,
    Divider,
} from '@mui/material'
import theme from '../../../../theme'

import Essay from '..//..//..//..//assets/essay.png'
import Plan2 from '..//..//..//..//assets/plan2.png'
import Writing from '..//..//..//..//assets/writing.png'
import Flag from '..//..//..//..//assets/flag.png'
import Group from '..//..//..//..//assets/group-chat.png'
import { useState, useEffect } from 'react'

export default function TabInfo(props) {
    const { currentTab, onChangeTab } = props

    const [isModbile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener('resize', handleResize)
    }, [])

    const handleChange = (event, newValue) => {
        onChangeTab(newValue)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%'}}>
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    centered={!isModbile}
                    variant={isModbile ? 'scrollable' : 'standard'}
                    scrollButtons={isModbile}
                    allowScrollButtonsMobile={isModbile}
                    aria-label="loan application tab"
                    TabIndicatorProps={{ style: { background: '#344767' } }}
                >
                    <Tab
                        value="1"
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Writing}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography
                                sx={{ color: '#344767' }}
                                fontWeight="regular"
                            >
                                Thông tin hồ sơ vay
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    {/* <Tab
                        value="two"
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Essay}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography
                                sx={{ color: '#344767' }}
                                fontWeight="regular"
                            >
                                Hợp đồng
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    /> */}
                    <Tab
                        value="2"
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Group}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography
                                sx={{ color: '#344767' }}
                                fontWeight="regular"
                            >
                                Nhà đầu tư
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    <Tab
                        value="3"
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Flag}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography
                                sx={{ color: '#344767' }}
                                fontWeight="regular"
                            >
                                Báo cáo
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                    <Tab
                        value="4"
                        icon={
                            <Avatar
                                alt="test avatar"
                                src={Plan2}
                                variant="rounded"
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        label={
                            <Typography
                                sx={{ color: '#344767' }}
                                fontWeight="regular"
                            >
                                Kế hoạch trả
                            </Typography>
                        }
                        sx={{ textTransform: 'none' }}
                    />
                </Tabs>
                <Divider />
            </Box>
        </ThemeProvider>
    )
}
