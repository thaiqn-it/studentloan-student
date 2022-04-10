import React, { useEffect, useState } from 'react'
import SuiTypography from 'components/SuiTypography'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import { Box, Grid, Paper, Tooltip } from '@mui/material'

import DetailInformation from './components/DetailInformation'
import PaperInformation from './components/PaperInformation'
import { useParams } from 'react-router-dom'
import { tutorApi } from 'apis/tutorApi'
import { useHistory } from 'react-router-dom'

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
    )
}
