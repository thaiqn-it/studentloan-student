import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Divider,
    Box,
    TextField,
    Autocomplete,
} from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

import { getText } from 'number-to-text-vietnamese'
import { getOption } from 'utils/moneyCall'

import moment from 'moment'
import { systemConfigApi } from 'apis/systemConfigApi'
import { fDisplayMonth } from 'utils/formatTime'
import { addMonth } from 'utils/formatTime'
import { Element } from 'react-scroll'
import { fCurrencyNoVND } from 'utils/formatNumber'

export default function PostInfoPage(props) {
    const { loan, handleChange, errorMess } = props
    const [duration, setDuration] = useState('')
    const [durationOption, setDurationOption] = useState([])

    const [config, setConfig] = useState(null)

    useEffect(() => {
        getConfig()
        setDuration(loan?.duration + '')
    }, [loan])

    const getConfig = async () => {
        await systemConfigApi
            .getFee()
            .then((res) => {
                setConfig(res.data)
                var tempMinDuration =
                    res.data.minDuration + loan?.expectedGraduationTime
                setDurationOption(
                    getOption(tempMinDuration, res.data.maxDuration)
                )
            })
            .catch((err) => {
                let path = `/trang-chu/ho-so/chinh-sua/${res.data.id}`
                history.push(path)
            })
    }

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

    const handleChangeDuration = (e, value) => {
        setDuration(value.label)
    }

    function diff_months(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000
        diff /= 60 * 60 * 24 * 7 * 4
        return Math.abs(Math.round(diff))
    }

    const getInitialMoneyText = (value) => {
        var money = Number(value)
        var value = null
        try {
            value = getText(money)
            if (value === 'không') {
                value = null
            }
        } catch (error) {
            value = 'Số tiền quá lớn'
        }
        return value
    }

    function formatExpectGraduateTime(createTime, time) {
        var day = new Date(createTime)
        var returnDate = new Date(day.setMonth(day.getMonth() + time))
        return moment(returnDate).format('YYYY-MM')
    }

    function formatExpireTime(time) {
        return moment(time).format('YYYY-MM-DD')
    }

    const handleChangeTotalMoney = (e) => {
        handleChange(e)
    }

    const handleChangeExpectMoney = (e) => {
        handleChange(e)
    }

    return (
        <>
            <Box
                component="div"
                sx={{ padding: '3rem 0rem' }}
                id="post-info"
                name="post-info"
            >
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
                            Tiêu đề *
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
                        <Element name="scrollTitle">
                            <SuiInput
                                multiline
                                placeholder="Tiêu đề"
                                value={loan.title}
                                onChange={handleOnchange}
                                name="title"
                                error={
                                    errorMess &&
                                    (loan.title === null || loan.title === '')
                                }
                            />
                        </Element>
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
                            Thông tin vay *
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
                                    value={formatExpectGraduateTime(
                                        loan.postCreatedAt,
                                        loan.expectedGraduationTime
                                    )}
                                    inputProps={{
                                        min: fDisplayMonth(null),
                                    }}
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
                                    inputProps={{
                                        min: addMonth(
                                            null,
                                            config?.postExpireTime
                                        ),
                                    }}
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
                                {/* <SuiInput
                                    type="number"
                                    onChange={handleOnchange}
                                    name="duration"
                                    value={loan.duration}
                                /> */}
                                <Autocomplete
                                    disablePortal
                                    disableClearable
                                    onChange={(event, value) =>
                                        handleChangeDuration(event, value)
                                    }
                                    isOptionEqualToValue={(option, value) =>
                                        option.label === value
                                    }
                                    id="combo-box-duration"
                                    value={duration}
                                    options={durationOption}
                                    sx={{ width: '100%' }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
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
                            Mô tả *
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
                        <Element name="scrollDescription">
                            <SuiInput
                                rows={10}
                                multiline
                                placeholder="Mô tả..."
                                onChange={handleOnchange}
                                name="description"
                                value={loan.description}
                                error={
                                    errorMess &&
                                    (loan.description === null ||
                                        loan.description === '')
                                }
                            />
                        </Element>
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
                            Số tiền kêu gọi *
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
                                <Element name="scrollTotalMoney">
                                    <SuiInput
                                        onChange={handleChangeTotalMoney}
                                        type="number"
                                        name="totalMoney"
                                        value={loan.totalMoney}
                                        icon={{
                                            component: 'đ',
                                            direction: 'right',
                                        }}
                                        error={
                                            errorMess &&
                                            (loan.totalMoney === null ||
                                                loan.totalMoney === '')
                                        }
                                    />
                                </Element>
                            </Grid>
                            {loan.totalMoney > config?.maxRaiseMoney ||
                            loan.totalMoney < config?.minRaiseMoney ? (
                                <Grid item xs="12" md="6">
                                    <SuiTypography
                                        variant="caption"
                                        color="error"
                                    >
                                        Số tiền phải trong khoảng (
                                        {fCurrencyNoVND(config?.minRaiseMoney)}{' '}
                                        -{' '}
                                        {fCurrencyNoVND(config?.maxRaiseMoney)})
                                    </SuiTypography>
                                </Grid>
                            ) : null}

                            <Grid item xs="12" md="12">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                    name="moneyText"
                                    textTransform="capitalize"
                                >
                                    {getInitialMoneyText(loan?.totalMoney)}
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
                            Số tiền kỳ vọng *
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Nếu kết thúc thời gian kêu gọi nhưng bài viết chưa
                            đạt 100%, hệ thống sẽ dựa vào số tiền kỳ vọng mà
                            chấp nhận khoản vay (số tiền kỳ vọng phải nhỏ hơn số
                            tiền kêu gọi)
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
                                <Element name="scrollExpectedMoney">
                                    <SuiInput
                                        onChange={handleChangeExpectMoney}
                                        type="number"
                                        name="expectedMoney"
                                        value={loan.expectedMoney}
                                        icon={{
                                            component: 'đ',
                                            direction: 'right',
                                        }}
                                        error={
                                            errorMess &&
                                            (loan.expectedMoney === null ||
                                                loan.expectedMoney === '')
                                        }
                                    />
                                </Element>
                            </Grid>
                            {errorMess &&
                            (loan.expectedMoney > loan.totalMoney ||
                                loan.expectedMoney < config?.minRaiseMoney) ? (
                                <Grid item xs="12" md="6">
                                    <SuiTypography
                                        variant="caption"
                                        color="error"
                                    >
                                        Số tiền phải trong khoảng (
                                        {fCurrencyNoVND(config?.minRaiseMoney)}{' '}
                                        - {fCurrencyNoVND(loan?.totalMoney)})
                                    </SuiTypography>
                                </Grid>
                            ) : null}

                            <Grid item xs="12" md="12">
                                <SuiTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                    name="moneyText"
                                    textTransform="capitalize"
                                >
                                    {getInitialMoneyText(loan?.expectedMoney)}
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
