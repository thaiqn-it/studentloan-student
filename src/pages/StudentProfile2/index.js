import { Avatar, Badge, Box, Divider, Grid, Paper } from '@mui/material'
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
import Loading from 'components/Loading'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import { imageApi } from 'apis/imageApi'

export default function StudentProfile2() {
    const [loading, setLoading] = useState(true)
    const [studentInfo, setStudentInfo] = useState(null)
    const [tutorInfo, setTutorInfo] = useState(null)
    const [achievements, setAchievements] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        await studentApi
            .getStudentProfile()
            .then((res) => {
                const { Archievements, User, SchoolMajor, ...student } =
                    res.data.student
                const tutor = res.data.tutor

                setStudentInfo(student)
                setTutorInfo(tutor)
                setAchievements(Archievements)
                setUserInfo(User)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
            })
    }

    const onFileDrop = (e) => {
        const newFile = e.target.files
        if (newFile && isValidInputFiles(newFile)) {
            connectUploadCloud(newFile, e)
        } else {
        }
    }

    const isValidInputFiles = (files) => {
        var flag = true
        if (files) {
            for (var i = 0; i < files.length; i++) {
                if (
                    files[i].type !== 'image/png' &&
                    files[i].type !== 'image/jpeg'
                ) {
                    flag = false
                }
            }
        }

        return flag
    }

    const connectUploadCloud = async (imageFile, event) => {
        const formData = new FormData()
        for (let i = 0; i < imageFile.length; i++) {
            formData.append(`file`, imageFile[i])
        }
        await imageApi
            .uploadImageWithProg(formData)
            .then((res) => {
                onChangeUser(null, event.target.name, res.data.url)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onChangeUser = (e, name, value) => {
        if (e) {
            e.preventDefault
            setUserInfo({
                ...userInfo,
                [e.target.name]: e.target.value,
            })
        } else {
            setUserInfo({
                ...userInfo,
                [name]: value,
            })
        }

    }

    const onChangeStudent = (e, name, value)=>{
        if (e) {
            e.preventDefault
            setStudentInfo({
                ...studentInfo,
                [e.target.name]: e.target.value,
            })
        } else {
            setStudentInfo({
                ...studentInfo,
                [name]: value,
            })
        }
    }

    return (
        <>
            {loading ? <Loading /> : null}
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
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    badgeContent={
                                        <label htmlFor="profileUrl">
                                            <input
                                                type="file"
                                                accept="image/jpeg,image/png"
                                                id="profileUrl"
                                                name="profileUrl"
                                                onChange={onFileDrop}
                                                hidden
                                            />
                                            <AddCircleIcon
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        </label>
                                    }
                                >
                                    <Avatar
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            objecFit: 'cover',
                                        }}
                                        alt="Student"
                                        src={userInfo?.profileUrl}
                                    />
                                </Badge>
                                <SuiTypography
                                    variant="h4"
                                    fontWeight="regular"
                                >
                                    {userInfo?.firstName}
                                    {" "}
                                    {userInfo?.lastName}
                                </SuiTypography>
                                <SuiButton color="error" size="small">
                                    Chưa xác thực
                                </SuiButton>
                            </Box>
                            {/* <Divider sx={{ my: 3 }} />
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
                            </Box> */}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <DetailAccountCard
                        studentInfo={studentInfo}
                        userInfo={userInfo}
                        onChangeUser={onChangeUser}
                    />
                </Grid>
            </Grid>
            <Box my={5}>
                <TutorTableCard tutorInfo={tutorInfo} />
            </Box>
            <Box my={5}>
                <PaperCard studentInfo={studentInfo} onChangeStudent={onChangeStudent}/>
            </Box>
            <Box my={5}>
                <AchievementCard achievements={achievements} />
            </Box>

            <Box mb={3} sx={{ float: 'right' }}>
                <SuiButton color="primary">Cập nhật</SuiButton>
            </Box>
        </>
    )
}
