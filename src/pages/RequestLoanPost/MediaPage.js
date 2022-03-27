import React, { useEffect, useState } from 'react'
import { Container, Grid, Divider, Box, CardMedia } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

import DropFileInput from '../../components/DropFileZone'
import YoutubeEmbed from './../../components/YoutubeEmbed'

export default function MediaPage(props) {
    const { loanId, loanMedia, handleChange } = props

    useEffect(() => {
        initiateData()
    }, [loanMedia])

    const [videoId, setVideoId] = useState('')
    const [demandNote, setDemandNote] = useState({
        loanId: loanId,
        description: 'demand-note',
        imageUrl: '',
        status: 'active',
        type: 'DEMANDNOTE',
        currentStatus: 'new',
    })
    const [studentCert, setStudentCert] = useState({
        loanId: loanId,
        description: 'student-certification',
        imageUrl: '',
        status: 'active',
        type: 'STUDENTCERT',
        currentStatus: 'new',
    })
    const [youtubeVideo, setYoutubeVideo] = useState({
        loanId: loanId,
        description: 'youtube-video',
        imageUrl: '',
        status: 'active',
        type: 'VIDEO',
        currentStatus: 'new',
    })

    var sampleLoanMedia = {
        id: '',
        loanId: '',
        description: '',
        imageUrl: '',
        status: '',
        type: '',
        currentStatus: '',
    }

    const handleOnchange = (e) => {
        e.preventDefault()
        handleChange(e)
    }

    const onFileChangeURL = (newUrl, event) => {
        if (event.target.id === 'DEMANDNOTE') {
            var newDemand = demandNote
            if (demandNote.currentStatus === 'new') {
                newDemand = { ...demandNote, imageUrl: newUrl }
            } else {
                newDemand = {
                    ...demandNote,
                    currentStatus: 'update',
                    imageUrl: newUrl,
                    status: 'active',
                }
            }
            setDemandNote(newDemand)
            handleChange(null, 'LoanMedia', newDemand)
        } else {
            var newStudetCert = studentCert
            if (studentCert.currentStatus === 'new') {
                newStudetCert = { ...studentCert, imageUrl: newUrl }
            } else {
                newStudetCert = {
                    ...studentCert,
                    currentStatus: 'update',
                    imageUrl: newUrl,
                    status: 'active',
                }
            }
            setDemandNote(newStudetCert)
            handleChange(null, 'LoanMedia', newStudetCert)
        }
    }

    const onGetYoutubeUrl = (event) => {
        var url = event.target.value
        initiateYoutubeVideo(url)
        var loandMediaId = ''
        if (loanMedia.VIDEO) {
            loandMediaId = loanMedia.VIDEO.id
        }
        var videoMedia = {
            ...sampleLoanMedia,
            loanId: loanId,
            id: loandMediaId,
            description: 'youtube-video',
            imageUrl: url,
            type: 'VIDEO',
            status: 'active',
            currentStatus: 'new',
        }

        handleChange(null, 'LoanMedia', videoMedia)
    }

    const initiateYoutubeVideo = (url) => {
        var regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
        var match = url.match(regExp)
        var returnUrl = match && match[7].length == 11 ? match[7] : false
        setVideoId(returnUrl)
    }

    const onDelete = (id) => {
        if (id === 'DEMANDNOTE') {
            var newDemand = {
                ...demandNote,
                currentStatus: 'update',
                imageUrl: '',
                status: 'inactive',
            }
            setDemandNote(newDemand)
            handleChange(null, 'LoanMedia', newDemand)
        } else {
            var newStudetCert = {
                ...studentCert,
                currentStatus: 'update',
                imageUrl: '',
                status: 'inactive',
            }
            setDemandNote(newStudetCert)
            handleChange(null, 'LoanMedia', newStudetCert)
        }
    }

    function initiateData() {
        if (loanMedia) {
            if (loanMedia.VIDEO) {
                setYoutubeVideo(loanMedia.VIDEO)
                initiateYoutubeVideo(loanMedia.VIDEO.imageUrl)
            }
            if (loanMedia.DEMANDNOTE) {
                setDemandNote(loanMedia.DEMANDNOTE)
            }
            if (loanMedia.STUDENTCERT) {
                setStudentCert(loanMedia.STUDENTCERT)
            }
        }
    }

    return (
        <>
            <Container sx={{ padding: '3rem 3rem' }} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color="black"
                        >
                            Video giới thiệu (không bắt buộc)
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Bạn có thể tạo youtube video giới thiệu về hoàn cảnh
                            hiện tại và giới thiệu về những bằng cấp bạn đã đạt
                            được
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="12">
                                <SuiInput
                                    sx={{ marginBottom: 3 }}
                                    placeholder="https://www.youtube.com/watch?v=id"
                                    onChange={onGetYoutubeUrl}
                                    name="videoUrl"
                                    value={youtubeVideo.imageUrl}
                                ></SuiInput>
                                {videoId === '' ? null : (
                                    <YoutubeEmbed embedId={videoId} />
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
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
                            Giấy báo học phí (*)
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Chúng tôi cần giấy báo học phí như là bằng chứng cho
                            hồ sơ vay, điều này sẽ liên quan đến việc hồ sơ vay
                            của bạn có được duyệt hay không
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="12">
                                <DropFileInput
                                    elementName={demandNote.type}
                                    elementId={demandNote.type}
                                    image={demandNote.imageUrl}
                                    onDelete={(id) => onDelete(id)}
                                    onFileChangeURL={(url, event) =>
                                        onFileChangeURL(url, event)
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
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
                            Giấy xác nhận sinh viên (*)
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Giấy xác nhận sinh viên sẽ giúp hệ thống chắc chắn
                            bạn đúng là sinh viên của trường đại học và tăng
                            thêm uy tín với nhà đầu tư
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="12">
                                <DropFileInput
                                    image={studentCert.imageUrl}
                                    elementName={studentCert.type}
                                    elementId={studentCert.type}
                                    onDelete={(id) => onDelete(id)}
                                    onFileChangeURL={(url, event) =>
                                        onFileChangeURL(url, event)
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    )
}
