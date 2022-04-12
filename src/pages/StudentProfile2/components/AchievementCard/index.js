import React, { useState } from 'react'

import { Box, Grid, Paper } from '@mui/material'
import SuiTypography from 'components/SuiTypography'

import EditIcon from '@mui/icons-material/Edit'

import SuiInput from 'components/SuiInput'
import PlaceholderCard from 'examples/Cards/PlaceholderCard'
import UpdateAchievement from 'pages/EditLoanPost/components/UpdateAchievement'
import ImageCard from 'components/ImageCard'

import { achievementApi } from 'apis/achievementApi'

export default function AchievementCard(props) {
    const { achievements, onChangeAchievement } = props

    const [openAchievement, setOpenAchievement] = useState(false)
    const [choseValue, setChoseValue] = useState(null)

    const onClickItem = () => {
        setChoseValue(null)
        setOpenAchievement(true)
    }

    const handleCloseAchieve = () => {
        setOpenAchievement(false)
    }

    const handleUpdateAchieve = (newItem) => {
        var temp = null
        if (newItem.status === 'create') {
            achievementApi
                .createByStudentId(newItem)
                .then((res) => onChangeAchievement())
                .catch((err) => {})
        } else {
            if (newItem.status === 'update') {
                temp = { ...newItem, status: 'ACTIVE' }
            } else {
                temp = { ...newItem, status: 'INACTIVE' }
            }
            achievementApi
                .updateById(temp)
                .then((res) => onChangeAchievement())
                .catch((err) => {})
        }
    }

    const handleClickOpen = (item) => {
        setChoseValue(item)
        setOpenAchievement(true)
    }

    return (
        <>
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Thành tựu đã đạt được (không bắt buộc)
            </SuiTypography>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Box p={2}>
                    <SuiTypography variant="h6" fontWeight="regular" mb={2}>
                        Chú thích
                    </SuiTypography>
                    <Grid container spacing={4}>
                        {achievements?.map((item) => (
                            <Grid item xs={12} md={6} key={item.id}>
                                <SuiInput
                                    disabled
                                    key={item.id}
                                    type="text"
                                    placeholder="Mô tả thành thích"
                                    value={item.description || ""}
                                    sx={{ mb: 1 }}
                                    icon={{
                                        component: (
                                            <EditIcon
                                                size="small"
                                                sx={{ cursor: 'pointer' }}
                                                onClick={(e) =>
                                                    handleClickOpen(item)
                                                }
                                            />
                                        ),
                                        direction: 'right',
                                    }}
                                />

                                <ImageCard image={item.imageUrl} />
                            </Grid>
                        ))}
                        <UpdateAchievement
                            open={openAchievement}
                            onClose={handleCloseAchieve}
                            choseValue={choseValue}
                            handleUpdateAchieve={handleUpdateAchieve}
                        />
                        <Grid item xs={12} md={6}>
                            <PlaceholderCard
                                onClick={onClickItem}
                                title={{
                                    variant: 'h5',
                                    text: 'Thêm thành tựu',
                                }}
                                outlined
                                hasBorder
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}
