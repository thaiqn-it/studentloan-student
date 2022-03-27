import React, { useState } from 'react'
import { Container, Grid, Divider, Box } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

import { getText } from 'number-to-text-vietnamese'
import moment from 'moment'

export default function PostInfoPage(props) {
    const { loan, handleChange } = props

    // const [date, setDate] = useState(new Date())
    // const [demandImages, setDemandImages] = useState([])
    // const [moneyText, setMoneyText] = useState('')

    const handleOnchange = (e) => {
        e.preventDefault()
        handleChange(e)
    }

    const handleDateOnChange = (e) => {
        e.preventDefault()
        var realValue = e.target.value
        if (e.target.name === 'expectedGraduationTime') {
            var day = new Date(realValue)
            var day2 = new Date()
            realValue = diff_months(day, day2)
        }
        if (e.target.name === 'postExpireAt') {
            var day = new Date(realValue).toISOString()
            realValue = day
        }
        handleChange(null, e.target.name, realValue)
    }

    function diff_months(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000
        diff /= 60 * 60 * 24 * 7 * 4
        return Math.abs(Math.round(diff))
    }

    const getMoneyText = (event) => {
        var money = Number(event.target.value)
        if (Math.floor(money) == money) {
            handleChange(event)
        }
    }

    const getInitialMoneyText = (value) => {
        var money = Number(value)
        return getText(money) === 'không' ? null : getText(money)
    }


    function formatExpectGraduateTime(createTime, time){
        var day = new Date(createTime);
        var returnDate = new Date(day.setMonth(day.getMonth() + time))
        return moment(returnDate).format('YYYY-MM')
    }

    function formatExpireTime(time){
        return moment(time).format('YYYY-MM-DD')
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
                            Tiêu đề (*)
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
                        <SuiInput
                            multiline
                            placeholder="Tiêu đề"
                            value={loan.title}
                            onChange={handleOnchange}
                            name="title"
                        />
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
                            Thông tin vay (*)
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
                                <SuiInput
                                    type="month"
                                    onChange={handleDateOnChange}
                                    name="expectedGraduationTime"
                                    value={formatExpectGraduateTime(loan.postCreatedAt, loan.expectedGraduationTime)}
                                />
                            </Grid>
                            <Grid item xs="12" md="6">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    sx={{ marginBottom: 2 }}
                                >
                                    Thời gian bài đăng hết hạn
                                </SuiTypography>
                                <SuiInput
                                    type="date"
                                    onChange={handleOnchange}
                                    name="postExpireAt"
                                    value={formatExpireTime(loan.postExpireAt)}
                                />
                            </Grid>
                            <Grid item xs="12" md="6">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    sx={{ marginBottom: 2 }}
                                >
                                    Thời gian vay (tháng)
                                </SuiTypography>
                                <SuiInput
                                    type="number"
                                    onChange={handleOnchange}
                                    name="duration"
                                    value={loan.duration}
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
                            Mô tả (*)
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
                        <SuiInput
                            rows={10}
                            multiline
                            placeholder="Mô tả..."
                            onChange={handleOnchange}
                            name="description"
                        />
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
                            Số tiền kêu gọi (*)
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
                                <SuiInput
                                    onChange={getMoneyText}
                                    type="number"
                                    name="totalMoney"
                                    value={loan.totalMoney}
                                    icon={{
                                        component: 'đ',
                                        direction: 'right',
                                    }}
                                />
                            </Grid>
                            <Grid item xs="12" md="12">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                    name="moneyText"
                                    textTransform="capitalize"
                                >
                                    {getInitialMoneyText(loan.totalMoney)}
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
                            Số tiền kỳ vọng (*)
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
                                    name="expectedMoney"
                                    icon={{
                                        component: 'đ',
                                        direction: 'right',
                                    }}
                                />
                            </Grid>
                            <Grid item xs="12" md="12">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                    name="moneyText"
                                    textTransform="capitalize"
                                >
                                    {getInitialMoneyText(loan.expectedMoney)}
                                </SuiTypography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    )
}
