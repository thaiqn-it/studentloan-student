import { Box, Container, Divider, Grid } from '@mui/material'
import DropFileInput from 'components/DropFileZone'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import AchievementItem from './components/AchievementItem'
import UpdateAchievement from './components/UpdateAchievement'
import PlaceholderCard from 'examples/Cards/PlaceholderCard'


export default function ArchievementPage(props) {
    const { achievements, studentId, handleChange } = props
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')

    const [choseValue, setChoseValue] = useState({})
    const [open, setOpen] = useState(false)

    // const onDelete = (id) => {
    //     setUrl('')
    // }

    // const onFileChangeURL = (url, event) => {
    //     setUrl(url)
    // }

    // const handleChangeTitle = (e) => {
    //     setTitle(e.target.value)
    // }

    // const handleCreateAchieve = () => {
    //     if (url !== '' && title !== '') {
    //         var achieveItem = {
    //             studentId: studentId,
    //             imageUrl: url,
    //             status: 'active',
    //             description: title,
    //         }
    //         setUrl('')
    //         setTitle('')
    //         handleChange(achieveItem)
    //     }
    // }

    const onClickItem = (item) => {
        setChoseValue(item)
        setOpen(true)
    }

    const onClickNewItem = () =>{
        setChoseValue(null)
        setOpen(true)
    }

    const handleCloseAchieve = () => {
        setOpen(false)
    }

    const handleUpdateAchieve = (newItem) => {
        handleChange(newItem)
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
                                {achievements?.map((item) => {
                                    return (
                                        <AchievementItem
                                            item={item}
                                            onClickItem={onClickItem}
                                        />
                                    )
                                })}

                                <UpdateAchievement
                                    open={open}
                                    onClose={handleCloseAchieve}
                                    choseValue={choseValue}
                                    handleUpdateAchieve={handleUpdateAchieve}
                                />

                                <Box>
                                    <PlaceholderCard
                                        onClick={onClickNewItem}
                                        title={{
                                            variant: 'h5',
                                            text: 'Thêm thành tựu',
                                        }}
                                        outlined
                                        hasBorder
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    )
}
