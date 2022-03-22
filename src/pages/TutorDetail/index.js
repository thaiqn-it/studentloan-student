import React from 'react'
import SuiTypography from 'components/SuiTypography'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Divider, Grid, Paper } from '@mui/material'

import DetailInformation from './components/DetailInformation'
import PaperInformation from './components/PaperInformation'

export default function TutorDetail() {
    return (
        <>
            <SuiTypography variant="h4" fontWeight="regular" my={2}>
                Thông tin người giám hộ
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
                                    // onClick={onclickAvatar}
                                    size="xxl"
                                />
                                <SuiTypography
                                    variant="h4"
                                    fontWeight="regular"
                                >
                                    Trần Long
                                </SuiTypography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <DetailInformation />
                </Grid>
            </Grid>
            <PaperInformation />
            <Box my={3} sx={{ float: 'right' }}>
                <SuiButton color="primary">Cập nhật</SuiButton>
            </Box>
        </>
    )
}
