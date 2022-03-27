import { Box, Container, Divider, Grid } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import AchievementItem from './components/AchievementItem'
import AddAchievement from './components/AddAchievement'

export default function ArchievementPage(props) {
    const { achievements, handleChange } = props

    const handleOnChange = (e) => {
        handleChange(e)
    }
    return (
        <>
            <Box
                component="div"
                sx={{ padding: '3rem 0rem' }}
                id="achievements"
            >
                <SuiTypography
                    variant="h4"
                    align="center"
                    color="black"
                    fontWeight="regular"
                >
                    Hãy thêm thành tích của bạn
                </SuiTypography>
                <SuiTypography
                    variant="h6"
                    align="center"
                    fontWeight="regular"
                    color="text"
                >
                    Thành tích sẽ thu hút nhà đầu tư và tạo uy tín của bài vay
                    của bạn
                </SuiTypography>
            </Box>
            <Divider />

            <Container sx={{ padding: '3rem 3rem' }} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color="black"
                        >
                            Những thành tích (không bắt buộc)
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Đó có thể là những bằng khen về học thuật, tài năng,
                            ... Hoặc những dự án mà bạn đã làm trong lúc học
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={4}>
                            <Grid item xs="12" md="12">
                                {achievements.map((item) => {
                                    return AchievementItem(item)
                                })}
                                
                           
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    )
}
