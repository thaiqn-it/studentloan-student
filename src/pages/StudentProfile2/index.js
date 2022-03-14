import { Box, Card, Divider, Grid, Paper } from '@mui/material'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React from 'react'

import DetailAccountCard from './components/DetailAccountCard'
import PaperCard from './components/PaperCard'
import AchievementCard from './components/AchievementCard'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import SuiBox from 'components/SuiBox'
import Table from 'examples/Tables/Table'
import authorsTableData from './TableData'

export default function StudentProfile2() {
    const { columns, rows } = authorsTableData;

    const onclickAvatar = () => {
        console.log('hih')
    }
    return (
        <>
            <SuiTypography variant="h4" fontWeight="regular" my={2}>
                Thông tin tài khoản
            </SuiTypography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                        <Box p={2}>
                            <Box
                                elevation={2}
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <SuiAvatar
                                    sx={{ cursor: 'pointer' }}
                                    alt="Student"
                                    bgColor="light"
                                    src="https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg"
                                    onClick={onclickAvatar}
                                    size="xxl"
                                />
                                <SuiTypography
                                    variant="h4"
                                    fontWeight="regular"
                                >
                                    Trần Long
                                </SuiTypography>
                                <SuiButton color="error" size="small">
                                    Chưa xác thực
                                </SuiButton>
                            </Box>
                            <Divider />
                            <Box>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                >
                                    Thông báo
                                </SuiTypography>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    alignItems="center"
                                    display="flex"
                                >
                                    <CloseIcon color="error" /> Xác thực email
                                </SuiTypography>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    alignItems="center"
                                    display="flex"
                                >
                                    <CloseIcon color="error" /> Xác thực
                                    CMND/CCCD
                                </SuiTypography>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    alignItems="center"
                                    display="flex"
                                >
                                    <CheckIcon color="success" /> Xác thực số
                                    điện thoại
                                </SuiTypography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <DetailAccountCard />
                </Grid>
            </Grid>
            <Box>
                <SuiTypography variant="h4" fontWeight="regular" my={2}>
                    Thông tin người giám hộ
                </SuiTypography>
                <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                    <Card>
                        <SuiBox
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={3}
                        >
                            <SuiTypography variant="h6">
                                Authors table
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox
                            sx={{
                                '& .MuiTableRow-root:not(:last-child)': {
                                    '& td': {
                                        borderBottom: ({
                                            borders: {
                                                borderWidth,
                                                borderColor,
                                            },
                                        }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <Table columns={columns} rows={rows} />
                        </SuiBox>
                    </Card>
                </Paper>
            </Box>
            <PaperCard />
            <AchievementCard />
        </>
    )
}
