import React, { useEffect, useState } from 'react'
import { Container, Grid, Divider, Box, CardMedia } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

import { useParams } from 'react-router-dom'

import DropFileInput from '../../components/DropFileZone'
import YoutubeEmbed from './../../components/YoutubeEmbed'
import { getYoutubeId } from 'utils/youtube'
import { LOANMEDIA_STATUS } from 'utils/enum'

import { Element } from 'react-scroll'

export default function MediaPage(props) {
    const { id } = useParams()
    const { loanId, loanMedia, handleChange, errorMess } = props

    useEffect(() => {
        initiateData()
    }, [loanMedia])

    const [videoUrl, setVideoUrl] = useState(null)
    const [demandNote, setDemandNote] = useState({
        loanId: id,
        description: 'Giấy báo học phí',
        imageUrl: '',
        status: 'active',
        type: 'DEMANDNOTE',
        currentStatus: 'new',
    })
    const [studentCert, setStudentCert] = useState({
        loanId: id,
        description: 'Giấy xác nhận sinh viên',
        imageUrl: '',
        status: 'active',
        type: 'STUDENTCERT',
        currentStatus: 'new',
    })
    const [youtubeVideo, setYoutubeVideo] = useState({
        loanId: id,
        description: 'youtube-video',
        imageUrl: '',
        status: 'active',
        type: 'VIDEO',
        currentStatus: 'new',
    })
    const [transcript, setTranscript] = useState({
        loanId: id,
        description: 'Bảng điểm học kỳ gần nhất',
        imageUrl: '',
        status: 'active',
        type: 'TRANSCRIPT',
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
                    status: LOANMEDIA_STATUS.ACTIVE,
                }
            }
            setDemandNote(newDemand)
            handleChange(null, 'LoanMedia', newDemand)
        } else if (event.target.id === 'STUDENTCERT') {
            var newStudetCert = studentCert
            if (studentCert.currentStatus === 'new') {
                newStudetCert = { ...studentCert, imageUrl: newUrl }
            } else {
                newStudetCert = {
                    ...studentCert,
                    currentStatus: 'update',
                    imageUrl: newUrl,
                    status: LOANMEDIA_STATUS.ACTIVE,
                }
            }
            setStudentCert(newStudetCert)
            handleChange(null, 'LoanMedia', newStudetCert)
        } else {
            var newTranscript = transcript
            if (transcript.currentStatus === 'new') {
                newTranscript = { ...transcript, imageUrl: newUrl }
            } else {
                newTranscript = {
                    ...transcript,
                    currentStatus: 'update',
                    imageUrl: newUrl,
                    status: LOANMEDIA_STATUS.ACTIVE,
                }
            }
            setTranscript(newTranscript)
            handleChange(null, 'LoanMedia', newTranscript)
        }
    }

    const onGetYoutubeUrl = (event) => {
        var url = event.target.value
        var id = getYoutubeId(url)

        if (id !== false) {
            var loandMediaId = null
            var current = 'new'
            if (loanMedia.VIDEO.id !== undefined) {
                loandMediaId = loanMedia.VIDEO.id
                current = 'update'
            }
            var videoMedia = {
                ...sampleLoanMedia,
                loanId: loanId,
                id: loandMediaId,
                description: 'youtube-video',
                imageUrl: id,
                type: 'VIDEO',
                status: LOANMEDIA_STATUS.ACTIVE,
                currentStatus: current,
            }
            setVideoUrl('https://www.youtube.com/watch?v=' + id)
            handleChange(null, 'LoanMedia', videoMedia)
        } else {
            setVideoUrl(event.target.value)
        }
    }

    const onDelete = (id) => {
        if (id === 'DEMANDNOTE') {
            var newDemand = {
                ...demandNote,
                currentStatus: 'delete',
                imageUrl: '',
                status: LOANMEDIA_STATUS.INACTIVE,
            }
            setDemandNote(newDemand)
            handleChange(null, 'LoanMedia', newDemand)
        } else {
            var newStudetCert = {
                ...studentCert,
                currentStatus: 'delete',
                imageUrl: '',
                status: LOANMEDIA_STATUS.INACTIVE,
            }
            setDemandNote(newStudetCert)
            handleChange(null, 'LoanMedia', newStudetCert)
        }
    }

    function initiateData() {
        if (loanMedia) {
            if (loanMedia.VIDEO) {
                setYoutubeVideo(loanMedia.VIDEO)
                setVideoUrl(
                    'https://www.youtube.com/watch?v=' +
                        loanMedia.VIDEO.imageUrl
                )
                // initiateYoutubeVideo(loanMedia.VIDEO.imageUrl)
            } else {
                handleChange(null, 'LoanMedia', youtubeVideo)
            }
            if (loanMedia.DEMANDNOTE) {
                setDemandNote(loanMedia.DEMANDNOTE)
            } else {
                handleChange(null, 'LoanMedia', demandNote)
            }
            if (loanMedia.STUDENTCERT) {
                setStudentCert(loanMedia.STUDENTCERT)
            } else {
                handleChange(null, 'LoanMedia', studentCert)
            }
            if (loanMedia.TRANSCRIPT) {
                setTranscript(loanMedia.TRANSCRIPT)
            } else {
                handleChange(null, 'LoanMedia', transcript)
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
                        <Element name="scrollVideo">
                            <SuiInput
                                sx={{ marginBottom: 3 }}
                                placeholder="https://www.youtube.com/watch?v=id"
                                onChange={onGetYoutubeUrl}
                                name="videoUrl"
                                value={videoUrl}
                                error={
                                    errorMess &&
                                    (videoUrl === null || videoUrl === '')
                                }
                            />
                        </Element>
                        {videoUrl === null || videoUrl?.length < 43 ? null : (
                            <YoutubeEmbed url={youtubeVideo?.imageUrl} />
                        )}
                        {/* {videoUrl !== null && videoUrl.length < 43 ? (
                            <SuiTypography
                                variant="button"
                                fontWeight="regular"
                            >
                                Video không hợp lệ
                            </SuiTypography>
                        ) : null} */}
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
                            Giấy báo học phí *
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Chúng tôi cần giấy báo học phí như là bằng chứng cho
                            hồ sơ vay, điều này sẽ liên quan đến quá trình thẩm
                            định của hồ sơ vay
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="12">
                                <Element name="scrollDemandNote">
                                    <DropFileInput
                                        elementName={demandNote.type}
                                        elementId={demandNote.type}
                                        image={demandNote.imageUrl}
                                        onDelete={(id) => onDelete(id)}
                                        onFileChangeURL={(url, event) =>
                                            onFileChangeURL(url, event)
                                        }
                                    />
                                </Element>
                                {errorMess && demandNote.imageUrl === '' ? (
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="regular"
                                        color="error"
                                    >
                                        Giấy báo học phí không được để trống
                                    </SuiTypography>
                                ) : null}
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
                            Giấy xác nhận sinh viên *
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Giấy xác nhận sinh viên sẽ giúp hệ thống chắc chắn
                            bạn đúng là sinh viên của trường đại học và quá
                            trình thẩm định diễn sẽ ra thuận lợi hơn
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Element name="scrollStudentCert">
                            <DropFileInput
                                image={studentCert.imageUrl}
                                elementName={studentCert.type}
                                elementId={studentCert.type}
                                onDelete={(id) => onDelete(id)}
                                onFileChangeURL={(url, event) =>
                                    onFileChangeURL(url, event)
                                }
                            />
                        </Element>
                        {errorMess && studentCert.imageUrl === '' ? (
                            <SuiTypography
                                variant="caption"
                                fontWeight="regular"
                                color="error"
                            >
                                Giấy xác nhận sinh viên không được để trống
                            </SuiTypography>
                        ) : null}
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
                            Bảng điểm học kỳ gần nhất *
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Bảng điểm giúp thẩm định viên và nhà đâu tư đánh giá
                            được học lực của bạn. Bạn có thể cung cấp bảng điểm
                            THPT nếu bạn chưa bắt đầu chương trình đại học.
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Element name="scrollTranscript">
                            <DropFileInput
                                image={transcript.imageUrl}
                                elementName={transcript.type}
                                elementId={transcript.type}
                                onDelete={(id) => onDelete(id)}
                                onFileChangeURL={(url, event) =>
                                    onFileChangeURL(url, event)
                                }
                            />
                        </Element>
                        {errorMess && transcript.imageUrl === '' ? (
                            <SuiTypography
                                variant="caption"
                                fontWeight="regular"
                                color="error"
                            >
                                Giấy xác nhận sinh viên không được để trống
                            </SuiTypography>
                        ) : null}
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    )
}
