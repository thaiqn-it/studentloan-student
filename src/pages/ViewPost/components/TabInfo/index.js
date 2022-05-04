import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { ThemeProvider, Divider } from '@mui/material'
import theme from '../../../../theme'

import TodayIcon from '@mui/icons-material/Today'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'

import { useState, useEffect } from 'react'
import { LOAN_STATUS } from 'utils/enum'

export default function TabInfo(props) {
    const { currentTab, onChangeTab, status } = props

    const [isModbile, setIsMobile] = useState(false)
    const [currentStatus, setCurrentStatus] = useState(null)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
        // setCurrentStatus(status)
    }, [status])

    const handleChange = (event, newValue) => {
        onChangeTab(newValue)
    }

    const renderInvestorTab = () => {
        if (status !== null) {
            var current = status[status.length - 1].type
            if (
                current === LOAN_STATUS.FUNDING ||
                current === LOAN_STATUS.FAIL ||
                current === LOAN_STATUS.ONGOING ||
                current === LOAN_STATUS.FINISH ||
                current === LOAN_STATUS.INCOMPLETE
            ) {
                return (
                    <Tab
                        value="2"
                        icon={<PeopleAltIcon />}
                        label="Nhà đầu tư"
                        sx={{ textTransform: 'none' }}
                    />
                )
            } else {
                return null
            }
        } else {
            return null
        }
    }

    const renderRepaymentTab = () => {
        if (status !== null) {
            var current = status[status.length - 1].type
            if (
                current === LOAN_STATUS.FAIL ||
                current === LOAN_STATUS.ONGOING ||
                current === LOAN_STATUS.FINISH ||
                current === LOAN_STATUS.INCOMPLETE
            ) {
                return (
                    <Tab
                        value="4"
                        icon={<TodayIcon />}
                        label="Kế hoạch trả"
                        sx={{ textTransform: 'none' }}
                    />
                )
            } else {
                return null
            }
        } else {
            return null
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    centered={!isModbile}
                    variant={isModbile ? 'scrollable' : 'standard'}
                    scrollButtons={isModbile}
                    allowScrollButtonsMobile={isModbile}
                    aria-label="loan application tab"
                    // textColor="palette.success.main"
                >
                    <Tab
                        value="1"
                        // icon={
                        //     <Avatar
                        //         alt="test avatar"
                        //         src={Writing}
                        //         variant="rounded"
                        //         sx={{ width: 30, height: 30 }}
                        //     />
                        // }
                        icon={<ImportContactsIcon />}
                        label="Thông tin hồ sơ vay"
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
                    {/* {status === null &&
                    status[status.length - 1]?.type ===
                        USER_STATUS.FUNDING ? null : (
                        <Tab
                            value="2"
                            // icon={
                            //     <Avatar
                            //         alt="test avatar"
                            //         src={Group}
                            //         variant="rounded"
                            //         sx={{ width: 30, height: 30 }}
                            //     />
                            // }
                            icon={<PeopleAltIcon />}
                            label="Nhà đầu tư"
                            sx={{ textTransform: 'none' }}
                        />
                    )} */}
                    {renderInvestorTab()}

                    {/* <Tab
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
                    /> */}
                    {/* {status !== null && status[0]?.type === 'ONGOING' ? (
                        <Tab
                            value="4"
                            // icon={
                            //     <Avatar
                            //         alt="test avatar"
                            //         src={Plan2}
                            //         variant="rounded"
                            //         sx={{ width: 30, height: 30 }}
                            //     />
                            // }
                            icon={<TodayIcon />}
                            label="Kế hoạch trả"
                            sx={{ textTransform: 'none' }}
                        />
                    ) : null} */}
                    {renderRepaymentTab()}
                </Tabs>
                <Divider />
            </Box>
        </ThemeProvider>
    )
}
