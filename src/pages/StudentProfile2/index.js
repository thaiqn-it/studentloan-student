import { Avatar, Box, Divider, Grid, Paper } from '@mui/material'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'

import DetailAccountCard from './components/DetailAccountCard'
import PaperCard from './components/PaperCard'
import AchievementCard from './components/AchievementCard'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import TutorTableCard from './components/TutorTableCard'
import { studentApi } from 'apis/studentApi'

export default function StudentProfile2() {
    const [loading, setLoading] = useState(true)
    const [studentInfo, setStudentInfo] = useState(null)
    const [tutorInfo, setTutorInfo] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        await studentApi
            .getStudentProfile()
            .then((res) => {
                console.log(res.data)
                setStudentInfo(res.data.student)
                setTutorInfo(res.data.tutor)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    const onclickAvatar = () => {
        console.log('hih')
    }
    return (
        <>
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
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
                                    sx={{ cursor: 'pointer', objectFit: "fill" }}
                                    alt="Student"
                                    bgColor="dark"
                                    variant="rounded"
                                    src={studentInfo?.User?.profileUrl}
                                    onClick={onclickAvatar}
                                    size="xxl"
                                />
                                <Avatar src={studentInfo?.User?.profileUrl} variant="rounded" size="large"/>
                                <SuiTypography
                                    variant="h4"
                                    fontWeight="regular"
                                >
                                    {studentInfo?.User?.firstName +
                                        ' ' +
                                        studentInfo?.User?.lastName}
                                </SuiTypography>
                                <SuiButton color="error" size="small">
                                    Chưa xác thực
                                </SuiButton>
                            </Box>
                            <Divider sx={{ my: 3 }} />
                            <Box>
                                <SuiTypography variant="h6" fontWeight="bold">
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
                    <DetailAccountCard studentInfo={studentInfo} />
                </Grid>
            </Grid>
            <Box my={5}>
                <TutorTableCard tutorInfo={tutorInfo} />
            </Box>
            <Box my={5}>
                <PaperCard studentInfo={studentInfo} />
            </Box>
            <Box my={5}>
                <AchievementCard studentInfo={studentInfo} />
            </Box>

            <Box mb={3} sx={{ float: 'right' }}>
                <SuiButton color="primary">Cập nhật</SuiButton>
            </Box>
        </>
    )
}
