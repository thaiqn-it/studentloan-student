import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import {
    Container,
    Typography,
    Grid,
    Divider,
    Box,
    TextField,
    CardMedia,
} from '@mui/material'
import DropFileInput from '../../components/DropFileZone'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SuiBox from 'components/SuiBox'

import {utilApi} from '../../apis/utilApi'

export default function PostInfoPage(props) {
    const [date, setDate] = useState(new Date())
    const [demandImages, setDemandImages] = useState([])
    const [moneyText, setMoneyText] = useState('')

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

    return (
        <>
            <Box component="div" sx={{ padding: '3rem 0rem' }}>
                <Typography variant="h5" align="center">
                    Bắt đầu với những thứ đơn giản
                </Typography>
                <Typography variant="h6" align="center">
                    Hãy để mọi người biết thông tin của bạn
                </Typography>
            </Box>
            <Divider />

            <Container sx={{ padding: '3rem 3rem' }} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="medium"
                            textTransform="capitalize"
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

            <Container sx={{ padding: '3rem 3rem' }}>
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="medium"
                            textTransform="capitalize"
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
                                    variant="h6"
                                    fontWeight="medium"
                                    textTransform="capitalize"
                                    sx={{ marginBottom: 2 }}
                                >
                                    Thời gian ra trường dự kiến
                                </SuiTypography>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        label=""
                                        views={['year', 'month']}
                                        value={date}
                                        onChange={(newDate) => {
                                            setDate(newDate)
                                            console.log(newDate)
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs="12" md="6">
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="medium"
                                    textTransform="capitalize"
                                    sx={{ marginBottom: 2 }}
                                >
                                    Thời gian bài đăng hết hạn
                                </SuiTypography>
                                {/* <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  When this post expire
                </Typography> */}
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        label=""
                                        value={date}
                                        onChange={(newDate) => {
                                            setDate(newDate)
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
            <Container sx={{ padding: '3rem 3rem' }}>
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="medium"
                            textTransform="capitalize"
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
            <Container sx={{ padding: '3rem 3rem' }}>
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="medium"
                            textTransform="capitalize"
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
                                    fontWeight="medium"
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
            <Container sx={{ padding: '3rem 3rem' }}>
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="medium"
                            textTransform="capitalize"
                        >
                            Demand note
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            We need demand note as an evidence for your post.
                            This will affect whether your post is approved or
                            not
                        </SuiTypography>
                        {/* <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
              Demand note
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
            >
              We need demand note as an evidence for your post. This will affect
              whether your post is approved or not
            </Typography> */}
                    </Grid>
                    <Grid item xs="12" md="7">
                        {/* <Button
              onClick={showImage}
              variant="contained"
              color="secondary"
              sx={{
                margin: "0 auto",
                display: "block",
                marginRight: "0",
                textTransform: "none",
              }}
            >
              Add
            </Button> */}
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
