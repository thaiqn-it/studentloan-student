import { Box, Grid, Paper } from '@mui/material'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React from 'react'

import { fDisplayDate } from 'utils/formatTime'

import DropFileZone from '../../../../components/DropFileZone'

export default function PaperInformation(props) {
    const { tutor } = props
    return (
        <>
            <Box>
                <SuiTypography
                    variant="h4"
                    fontWeight="regular"
                    my={2}
                    color="black"
                >
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
                                                placeholder="Số CMND"
                                                value={tutor?.citizenId}
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
                                                placeholder="Ngày cấp"
                                                value={fDisplayDate(
                                                    tutor?.citizenCardCreatedDate
                                                )}
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
                                                placeholder="Nơi cấp"
                                                value={
                                                    tutor?.citizenCardCreatedPlace
                                                }
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
                                    <DropFileZone
                                        image={
                                            tutor?.frontCitizenCardImageUrl
                                                ? tutor.frontCitizenCardImageUrl
                                                : ''
                                        }
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        mb={1}
                                    >
                                        Mặt sau CMND/CCCD
                                    </SuiTypography>
                                    <DropFileZone
                                        image={
                                            tutor?.backCitizenCardImageUrl
                                                ? tutor.backCitizenCardImageUrl
                                                : ''
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}
