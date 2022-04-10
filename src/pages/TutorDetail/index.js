import React, { useEffect, useState } from 'react'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import { Avatar, Badge, Box, Grid, Paper } from '@mui/material'

import DetailInformation from './components/DetailInformation'
import PaperInformation from './components/PaperInformation'
import { useParams } from 'react-router-dom'
import { tutorApi } from 'apis/tutorApi'
import { useHistory } from 'react-router-dom'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import { imageApi } from 'apis/imageApi'

export default function TutorDetail() {
    const [loading, setLoading] = useState(false)
    const [tutor, setTutor] = useState()
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        if (id != 'tao') {
            setLoading(true)
            await tutorApi
                .getTutorById(id)
                .then((res) => {
                    setTutor(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    setLoading(false)
                    history.push({
                        pathname: '/trang-chu/404',
                        state: { content: 'Không tìm thấy người giám hộ' },
                    })
                })
        }
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
                onChangeTutorInfo(null, event.target.name, res.data.url)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onChangeTutorInfo = (e, name, value) => {
        if (e) {
            e.preventDefault
            setTutor({
                ...tutor,
                [e.target.name]: e.target.value,
            })
        } else {
            setTutor({
                ...tutor,
                [name]: value,
            })
        }
        console.log(e.target.value)
        console.log(tutor)
    }

    const handleSubmit = () => {
        console.log("edit")

        if (id === 'tao') {
            tutorApi
                .createTutor(tutor)
                .then((res) => {
                    history.push(`/trang-chu/thong-tin/`)
                })
                .catch((err) => {})
        } else {
            tutorApi.updateTutor(id, tutor).then(res=>{
                history.push(`/trang-chu/thong-tin/`)
            })
        }
    }

    return (
        <>
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Thông tin người giám hộ
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
                                        <label htmlFor="portraitUrl">
                                            <input
                                                type="file"
                                                accept="image/jpeg,image/png"
                                                id="portraitUrl"
                                                name="portraitUrl"
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
                                        src={tutor?.portraitUrl}
                                    />
                                </Badge>
                                <SuiTypography
                                    variant="h4"
                                    fontWeight="regular"
                                >
                                    {tutor?.name}
                                </SuiTypography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <DetailInformation
                        tutor={tutor}
                        onChangeTutorInfo={onChangeTutorInfo}
                    />
                </Grid>
            </Grid>
            <Box my={5}>
                <PaperInformation
                    tutor={tutor}
                    onChangeTutorInfo={onChangeTutorInfo}
                />
            </Box>
            <Box mb={3} sx={{ float: 'right' }}>
                <SuiButton color="primary" onClick={handleSubmit} size="large">
                    {id === 'tao' ? 'Tạo' : 'Cập nhật'}
                </SuiButton>
            </Box>
        </>
    )
}
