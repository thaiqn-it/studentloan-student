import React, { useState } from 'react'

import { Box, Grid, Paper } from '@mui/material'
import SuiTypography from 'components/SuiTypography'

import DropFileZone from '../../../../components/DropFileZone'
import SuiInput from 'components/SuiInput'

export default function AchievementCard(props) {
    const { studentInfo } = props
    const [achievement, setAchievement] = useState({
        description: null, imageUrl: null
    });

    return (
        <>
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Thành tựu đã đạt được
            </SuiTypography>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Box p={2}>
                    <SuiTypography variant="h6" fontWeight="regular" mb={2}>
                        Chú thích
                    </SuiTypography>
                    <Grid container spacing={4}>
                        {studentInfo?.Archievements.map((item) => (
                            <Grid item xs={12} md={6}>
                                <SuiInput
                                    type="text"
                                    placeholder="Mô tả thành thích"
                                    value={item.description}
                                    sx={{ mb: 1 }}
                                />
                                <DropFileZone
                                    image={item.imageUrl ? item.imageUrl : ''}
                                />
                            </Grid>
                        ))}

                        <Grid item xs={12} md={6}>
                            <SuiInput
                                type="text"
                                placeholder="Mô tả thành thích"
                                value={achievement.description}
                                sx={{ marginBottom: '10px' }}
                            />
                            <DropFileZone image={achievement.imageUrl ? achievement.imageUrl : ""} />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}
