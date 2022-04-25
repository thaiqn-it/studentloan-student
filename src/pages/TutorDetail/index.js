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
import { renderTutorStatus } from 'utils/renderStatus'
import Loading from 'components/Loading'
import ComfirmDelete from 'components/ComfirmDelete'
import { isNullish } from 'utils/isNullish'
import { TUTOR_STATUS } from 'utils/enum'

export default function TutorDetail() {
    const { id } = useParams()
    const history = useHistory()

    const data = {
        name: '',
        phone: '',
        // email: "",
        birthday: '',
        address: '',
        citizenId: '',
        citizenCardCreatedDate: '',
        citizenCardCreatedPlace: '',
        backCitizenCardImageUrl: '',
        frontCitizenCardImageUrl: '',
        // portraitUrl:"",
        relation: '',
        status: TUTOR_STATUS.UNVERIFIED,
    }

    const [loading, setLoading] = useState(false)
    const [tutor, setTutor] = useState(data)

    const [openComfirm, setOpenConfirm] = useState(false)
    const [deleteValue, setDeleteValue] = useState(null)
    const [error, setError] = useState(false)

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
    }

    const handleSubmit = () => {
        if (id === 'tao') {
            if (isNullish(tutor)) {
                tutorApi
                    .createTutor(tutor)
                    .then((res) => {
                        history.push(`/trang-chu/thong-tin/`)
                    })
                    .catch((err) => {})
            } else {
                setError(true)
            }
        } else {
            tutorApi.updateTutor(id, tutor).then((res) => {
                history.push(`/trang-chu/thong-tin/`)
            })
        }
    }

    const renderStatusButton = () => {
        var objectStatus = renderTutorStatus(tutor?.status)

        return (
            <>
                {id !== 'tao' && tutor?.status ? (
                    <SuiButton
                        color={objectStatus.color}
                        size="small"
                        sx={{
                            pointerEvents: 'none',
                        }}
                    >
                        {objectStatus.message}
                    </SuiButton>
                ) : null}
            </>
        )
    }

    const handleOpenDelete = (id) => {
        setDeleteValue(id)
        setOpenConfirm(true)
    }

    const handleDelete = () => {
        tutorApi
            .deleteTutor(id)
            .then((res) => {
                setOpenConfirm(false)
                history.push(`/trang-chu/thong-tin/`)
            })
            .catch((err) => {
                setOpenConfirm(false)
            })
    }

    const handleClose = () => {
        setOpenConfirm(false)
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
                                    sx={{ mb: 1 }}
                                >
                                    {tutor?.name}
                                </SuiTypography>
                                {renderStatusButton()}
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <DetailInformation
                        erroMess={error}
                        tutor={tutor}
                        onChangeTutorInfo={onChangeTutorInfo}
                    />
                </Grid>
            </Grid>
            <Box my={5}>
                <PaperInformation
                    erroMess={error}
                    tutor={tutor}
                    onChangeTutorInfo={onChangeTutorInfo}
                />
            </Box>
            {tutor?.status === 'VERIFIED' ? null : (
                <Box mb={3} display="flex" justifyContent="space-between">
                    {id === 'tao' ? null : (
                        <>
                            <SuiButton
                                color="error"
                                onClick={handleOpenDelete}
                                size="large"
                            >
                                Xóa
                            </SuiButton>
                            <ComfirmDelete
                                open={openComfirm}
                                handleClose={handleClose}
                                title="người giám hộ"
                                handleDelete={handleDelete}
                            />
                        </>
                    )}
                    <SuiButton
                        color="primary"
                        onClick={handleSubmit}
                        size="large"
                    >
                        {id === 'tao' ? 'Tạo' : 'Cập nhật'}
                    </SuiButton>
                </Box>
            )}
        </>
    )
}
