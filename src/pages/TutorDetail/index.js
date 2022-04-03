import React, { useEffect, useState } from 'react'
import SuiTypography from 'components/SuiTypography'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import { Box, Grid, Paper, Tooltip } from '@mui/material'

import DetailInformation from './components/DetailInformation'
import PaperInformation from './components/PaperInformation'
import { useParams } from 'react-router-dom'
import { tutorApi } from 'apis/tutorApi'
import NotFound from 'pages/NotFound'

export default function TutorDetail() {
    const [loading, setLoading] = useState(false)
    const [tutor, setTutor] = useState()
    const { id } = useParams()

    const [isFound, setIsFound] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        if (id != 'new') {
            setLoading(true)
            await tutorApi
                .getTutorById(id)
                .then((res) => {
                    console.log(res.data)
                    setTutor(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    setLoading(false)
                    setIsFound(false)
                })
        }
    }

    return (
        <>
            {isFound ? (
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
                                        <input
                                            type="file"
                                            hidden
                                            id="raised-button-file"
                                        />
                                        <label htmlFor="raised-button-file">
                                            <Tooltip
                                                title="Click to change"
                                                placement="left-start"
                                            >
                                                <SuiAvatar
                                                    component="span"
                                                    sx={{ cursor: 'pointer' }}
                                                    alt="Tutor"
                                                    bgColor="dark"
                                                    // variant="rounded"
                                                    src={tutor?.portraitUrl}
                                                    // onClick={onclickAvatar}
                                                    size="xxl"
                                                />
                                            </Tooltip>
                                        </label>
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
                            <DetailInformation tutor={tutor} />
                        </Grid>
                    </Grid>
                    <Box my={5}>
                        <PaperInformation tutor={tutor} />
                    </Box>
                    <Box mb={3} sx={{ float: 'right' }}>
                        <SuiButton color="primary">Cập nhật</SuiButton>
                    </Box>
                </>
            ) : (
                <NotFound title="Không tìm thấy người giám hộ" />
            )}
        </>
    )
}
