import React, { useState } from 'react'
import {
    Container,
    Typography,
    Grid,
    Divider,
    Box,
    CardMedia,
} from '@mui/material'
import DropFileInput from '../../components/DropFileZone'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'

import AchievementList from './components/AchievementList'
import YoutubeEmbed from './../../components/YoutubeEmbed'

import { utilApi } from '../../apis/utilApi'

export default function PostInfoPage(props) {
    const [date, setDate] = useState(new Date())
    const [demandImages, setDemandImages] = useState([])
    const [moneyText, setMoneyText] = useState('')

    const [youtubeId, setYoutubeId] = useState('')

    const onFileChangeURL = (newUrl) => {
        const id = new Date().getTime()
        const image = { description: 'Demand note', url: newUrl, id }
        setDemandImages((current) => [...current, image])
    }

    const onNext = () => {
        //save data
        props.handleStep(1)
    }

    const getMoneyText = (event) => {
        var money = Number(event.target.value)
        if (Math.floor(money) == money) {
            console.log(event.target.value)
            utilApi.getMoneyText(money).then((res) => {
                const data = res.data
                console.log(data)
                if (data.success === 'true') {
                    setMoneyText(data.result)
                    console.log(data)
                }
            })
        }
    }

    const onGetYoutubeUrl = (event) => {
        var url = event.target.value
        var regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
        var match = url.match(regExp)
        var returnUrl = match && match[7].length == 11 ? match[7] : false
        setYoutubeId(returnUrl)
    }

    return (
        <>
            <Box component="div" sx={{ padding: '3rem 0rem' }} id="post-info">
                <SuiTypography
                    variant="h4"
                    align="center"
                    fontWeight="regular"
                    color="black"
                >
                    Bắt đầu với những thứ đơn giản
                </SuiTypography>
                <SuiTypography
                    variant="h6"
                    align="center"
                    color="text"
                    fontWeight="regular"
                >
                    Hãy để mọi người biết thông tin của bạn
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
                            Tiêu đề
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Mô tả ngắn đề mục đích vay của bạn
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <SuiInput multiline placeholder="Tiêu đề" />
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
                            Thông tin vay
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Điền ngày dự kiến ra trường và ngày hết hạn của bài
                            đăng này, từ đó chúng tôi xác định được thời gian
                            vay
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="6">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    sx={{ marginBottom: 2 }}
                                >
                                    Thời gian ra trường dự kiến
                                </SuiTypography>
                                <SuiInput type="month" />
                            </Grid>
                            <Grid item xs="12" md="6">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    sx={{ marginBottom: 2 }}
                                >
                                    Thời gian bài đăng hết hạn
                                </SuiTypography>
                                <SuiInput type="date"/>
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
                            Mô tả
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Mô tả rõ mục đích vay, hoàn cảnh hiện tại của bạn
                        </SuiTypography>
                    </Grid>
                    <Grid
                        item
                        xs="12"
                        md="7"
                        sx={{
                            h5: {
                                fontSize: '15px',
                            },
                        }}
                    >
                        <SuiInput rows={10} multiline placeholder="Mô tả..." />
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
                            Số tiền kêu gọi
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Số tiền này sẽ được chuyển hoàn toàn vào ví Studen
                            Loan sau khi bài đăng đạt 100% và thẩm định
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="12">
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    textTransform="capitalize"
                                >
                                    Số tiền
                                </SuiTypography>
                            </Grid>
                            <Grid item xs="12" md="6">
                                {/* <TextField  align="right" variant="outlined" fullWidth /> */}
                                <SuiInput
                                    onChange={getMoneyText}
                                    type="number"
                                    icon={{
                                        component: 'đ',
                                        direction: 'right',
                                    }}
                                />
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                    name="moneyText"
                                >
                                    {moneyText}
                                </SuiTypography>
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
                            Số tiền kỳ vọng
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Nếu bài viết chưa đạt 100% nhưng số tiền kêu gọi
                            được lớn hơn hoặc bằng số tiền kỳ vọng chúng tôi vẫn
                            chấp nhận và giải ngân cho bạn
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="12">
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    textTransform="capitalize"
                                >
                                    Số tiền
                                </SuiTypography>
                            </Grid>
                            <Grid item xs="12" md="6">
                                {/* <TextField  align="right" variant="outlined" fullWidth /> */}
                                <SuiInput
                                    onChange={getMoneyText}
                                    type="number"
                                    icon={{
                                        component: 'đ',
                                        direction: 'right',
                                    }}
                                />
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                    name="moneyText"
                                >
                                    {moneyText}
                                </SuiTypography>
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
                            Video giới thiệu
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
                                ></SuiInput>
                                {youtubeId === '' ? null : (
                                    <YoutubeEmbed embedId={youtubeId} />
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
                            Giấy báo học phí
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
                                {demandImages.map((items) => (
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={items.url}
                                        alt={items.url}
                                        key={items.id}
                                    />
                                ))}
                                <DropFileInput
                                    onFileChangeURL={(url) =>
                                        onFileChangeURL(url)
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
                            Giấy xác nhận sinh viên
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
                                {demandImages.map((items) => (
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={items.url}
                                        alt={items.url}
                                        key={items.id}
                                    />
                                ))}
                                <DropFileInput
                                    onFileChangeURL={(url) =>
                                        onFileChangeURL(url)
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
