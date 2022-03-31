import { Box, Grid, Paper } from '@mui/material'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React from 'react'

import DropFileZone from '../../../../components/DropFileZone'

export default function PaperInformation() {
    return (
        <>
            <Box>
                <SuiTypography variant="h4" fontWeight="regular" my={2} color="black">
                    Giấy tờ
                </SuiTypography>
                <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                    <Box p={2}>
                        <Box>
                            <SuiTypography
                                variant="h5"
                                fontWeight="regular"
                                my={2}
                            >
                                CMND/CCCD
                            </SuiTypography>

                            <Grid container spacing={4}>
                                <Grid item xs={12} md={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="regular"
                                            >
                                                Số CMND/CCCD
                                            </SuiTypography>
                                            <SuiInput
                                                type="text"
                                                // placeholder="Email"
                                                value="0791111475812"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="regular"
                                            >
                                                Ngày cấp CMND/CCCD
                                            </SuiTypography>
                                            <SuiInput
                                                type="date"
                                                // placeholder="Email"
                                                value="2002-07-22"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="regular"
                                            >
                                                Nơi cấp CMND/CCCD
                                            </SuiTypography>
                                            <SuiInput
                                                type="text"
                                                // placeholder="Email"
                                                value="TP Hồ Chí Minh"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        mb={1}
                                    >
                                        Mặt trước CMND/CCCD
                                    </SuiTypography>
                                    <DropFileZone image=""/>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        mb={1}
                                    >
                                        Mặt sau CMND/CCCD
                                    </SuiTypography>
                                    <DropFileZone image=""/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}
