import { Avatar, Badge, Box, Grid, Paper } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'

import DetailAccountCard from './components/DetailAccountCard'
import PaperCard from './components/PaperCard'
import AchievementCard from './components/AchievementCard'
import TutorTableCard from './components/TutorTableCard'

import { studentApi } from 'apis/studentApi'
import { userApi } from 'apis/userApi'
import { schoolMajorApi } from 'apis/schoolMajorApi'

import Loading from 'components/Loading'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { imageApi } from 'apis/imageApi'

import { renderUserStatus } from 'utils/renderStatus'
import { isNullish } from 'utils/isNullish'
import { USER_STATUS } from 'utils/enum'

export default function StudentProfile2() {
    const [loading, setLoading] = useState(true)
    const [studentInfo, setStudentInfo] = useState(null)
    const [tutorInfo, setTutorInfo] = useState(null)
    const [achievements, setAchievements] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [schoolMajor, setSchoolMajor] = useState(null)

    const [oldUserInfo, setOldUserInfo] = useState(null)
    const [oldStudentInfo, setOldStudentInfo] = useState(null)

    const [schoolAndMajor, setSchoolAndMajor] = useState(null)

    const [isChange, setIsChange] = useState(null)

    useEffect(() => {
        fetchData()
    }, [isChange])

    const fetchData = async () => {
        setLoading(true)
        await studentApi
            .getStudentProfile()
            .then((res) => {
                const { Archievements, User, SchoolMajor, ...student } =
                    res.data.student
                const tutors = res.data.tutors
                const achievements = res.data.achievements
                console.log(res.data)

                setStudentInfo(student)
                setOldStudentInfo(student)
                setTutorInfo(tutors)
                setAchievements(achievements)
                setUserInfo(User)
                setOldUserInfo(User)
                setSchoolMajor(SchoolMajor)
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

    const onChangeStudent = (e, name, value) => {
        var tempName = null
        var tempValue = null
        if (e) {
            e.preventDefault
            tempName = e.target.name
            tempValue = e.target.value
        } else {
            tempName = name
            tempValue = value
        }
        if (tempValue === '') {
            tempValue = null
        }
        setStudentInfo({
            ...studentInfo,
            [tempName]: tempValue,
        })
    }

    const onChangeSchoolMajor = (name, value) => {
        setSchoolAndMajor({ ...schoolAndMajor, [name]: value })
    }

    const renderStatusButton = () => {
        var objectStatus = renderUserStatus(userInfo?.status)
        console.log(userInfo?.status)

        return (
            <>
                <SuiButton
                    color={objectStatus.color}
                    size="small"
                    sx={{
                        pointerEvents: 'none',
                    }}
                >
                    {objectStatus.message}
                </SuiButton>
                {userInfo?.status === 'BAN' ? (
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <SuiTypography variant="button">Lý do:</SuiTypography>
                        <SuiTypography variant="button" fontWeight="light">
                            {userInfo?.reason}
                        </SuiTypography>
                    </Box>
                ) : null}
            </>
        )
    }

    const renderActionButton = () => {
        var status = userInfo?.status
        return (
            <>
                <Box mb={3} sx={{ float: 'right' }}>
                    {status === USER_STATUS.UNVERIFIED ? (
                        <SuiButton
                            color="info"
                            onClick={handleVerify}
                            size="large"
                            variant="outlined"
                            sx={{ mr: 3 }}
                        >
                            Xác thực
                        </SuiButton>
                    ) : null}
                    {status === USER_STATUS.VERIFIED ||
                    status === USER_STATUS.PENDING ? (
                        <SuiButton
                            color="primary"
                            onClick={handleUpdate}
                            size="large"
                        >
                            Cập nhật
                        </SuiButton>
                    ) : null}
                </Box>
            </>
        )
    }

    const deleteTutor = () => {
        setIsChange(Date.now())
    }

    const onChangeAchievement = () => {
        setIsChange(Date.now())
    }

    const handleVerify = () => {
        if (JSON.stringify(oldStudentInfo) !== JSON.stringify(studentInfo)) {
            schoolMajorApi
                .getBySchoolAndMajorId(
                    schoolAndMajor?.majorId,
                    schoolAndMajor?.schoolId
                )
                .then((res) => {
                    var schoolMajor = res.data
                    var temp = { ...studentInfo }
                    if (schoolMajor) {
                        temp = { ...temp, schoolMajorId: schoolMajor.id }
                    }
                    studentApi
                        .updateStudentInfo(temp, { status: 'PENDING' })
                        .then((res) => {
                            console.log(res)
                            setIsChange(Date.now())
                        })
                        .catch((err) => {})
                })
        }
        if (JSON.stringify(oldUserInfo) !== JSON.stringify(userInfo)) {
            const { id, ...restData } = userInfo
            userApi
                .updateUser(restData)
                .then((res) => {
                    console.log(res)
                    setIsChange(Date.now())
                })
                .catch((err) => {})
        }

    }

    const handleUpdate = () => {}

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
                                    sx={{ mb: 1 }}
                                >
                                    {userInfo?.firstName} {userInfo?.lastName}
                                </SuiTypography>
                                {renderStatusButton()}
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
                        schoolMajor={schoolMajor}
                        studentInfo={studentInfo}
                        userInfo={userInfo}
                        onChangeUser={onChangeUser}
                        onChangeSchoolMajor={onChangeSchoolMajor}
                    />
                </Grid>
            </Grid>
            <Box my={5}>
                <TutorTableCard
                    tutorInfo={tutorInfo}
                    deleteTutor={deleteTutor}
                />
            </Box>
            <Box my={5}>
                <PaperCard
                    studentInfo={studentInfo}
                    onChangeStudent={onChangeStudent}
                />
            </Box>
            <Box my={5}>
                <AchievementCard
                    achievements={achievements}
                    onChangeAchievement={onChangeAchievement}
                />
            </Box>
            {renderActionButton()}
        </>
    )
}
