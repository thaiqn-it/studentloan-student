import React from 'react'

import { Box, Grid, Paper } from '@mui/material'
import SuiTypography from 'components/SuiTypography'

import DragFileZone from '../../../../components/DropFileZone'
import SuiInput from 'components/SuiInput'

export default function AchievementCard() {
    return (
        <>
                <SuiTypography variant="h4" fontWeight="regular" color="black" my={2}>
                    Thành tựu đã đạt được
                </SuiTypography>
                <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                    <Box p={2}>
                        <SuiTypography variant="h6" fontWeight="regular" mb={2}>
                            Chú thích
                        </SuiTypography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <SuiInput
                                    type="text"
                                    // placeholder="Email"
                                    value="Đây là giải thưởng học sinh giỏi toán thành phố 2017"
                                    sx={{marginBottom:"10px"}}
                                />
                                <DragFileZone />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SuiInput
                                    type="text"
                                    // placeholder="Email"
                                    value="Đây là giải thưởng học sinh giỏi toán thành phố 2017"
                                    sx={{marginBottom:"10px"}}
                                />
                                <DragFileZone />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
        </>
    )
}
