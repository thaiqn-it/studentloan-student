import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import {
    Box,
    Container,
    Divider,
    Grid,
    Dialog,
    InputLabel,
    Select,
    MenuItem,
    Autocomplete,
    TextField,
    Tooltip,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

import Loading from 'components/Loading'

import CreateIcon from '@mui/icons-material/Create'
import PercentIcon from '@mui/icons-material/Percent'
import CloseIcon from '@mui/icons-material/Close'

import { getText } from 'number-to-text-vietnamese'

import { loanApi } from '../../apis/loanApi'
import { systemConfigApi } from '../../apis/systemConfigApi'
import { userApi } from 'apis/userApi'
import { isNullish } from 'utils/isNullish'
import { getOption } from 'utils/moneyCall'
import { fCurrency, fCurrencyNoVND } from 'utils/formatNumber'
import { addMonth } from 'utils/formatTime'
import { fDisplayMonth } from 'utils/formatTime'
import RequestVerify from 'components/RequestVerify'
import { Helmet } from 'react-helmet'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />
})

export default function CreateLoanPost(props) {
    const { miniSide } = props
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const data = {
        totalMoney: '',
        interest: '',
        fixedMoney: '',
        penaltyFee: '',
        expectedGraduationTime: '',
        duration: '',
        postExpireAt: '',
        status: 'DRAFT',
    }

    const [userData, setUserData] = useState(data)
    const [interest, setInterest] = useState()
    const [duration, setDuration] = useState(null)

    const [config, setConfig] = useState(null)

    const [durationOption, setDurationOption] = useState([])
    const [moneyText, setMoneyText] = useState('0')

    const [error, setError] = useState(false)

    const [openVerify, setOpenVerify] = useState(false)
    const [verifyMessage, setVerifyMessage] = useState({
        title: 'Tài khoản không thể thực hiện hành động này',
        message:
            'Bạn cần điền đầy đủ thông tin cá nhân và gửi yêu cầu xác thực đến quản trị viên',
        button: 'Xác thực tài khoản',
    })

    const createLoan = async () => {
        if (isNullish(userData)) {
            console.log(config)
            if (
                config.minRaiseMoney <= userData.totalMoney &&
                userData.totalMoney <= config.maxRaiseMoney
            ) {
                setError(false)

                setLoading(true)
                await loanApi
                    .createLoanPost(userData)
                    .then((res) => {
                        let path = `/trang-chu/ho-so/chinh-sua/${res.data.id}`
                        history.push(path)
                        history.go(0)
                        setOpen(false)
                    })
                    .catch((e) => {
                        setLoading(false)
                    })
            } else {
                setError(true)
            }
        } else {
            setError(true)
        }
    }

    function diff_months(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000
        diff /= 60 * 60 * 24 * 7 * 4
        return Math.abs(Math.round(diff))
    }

    const handleOnchange = (e) => {
        e.preventDefault()
        var realValue = e.target.value
        if (e.target.name === 'postExpireAt') {
            var day = new Date(realValue).toISOString()
            realValue = day
        }

        setUserData({
            ...userData,
            [e.target.name]: realValue,
        })
    }

    const handleChangeExpectGraduationTime = (e) => {
        var day = new Date(e.target.value)
        var firstDay = new Date(day.getFullYear(), day.getMonth(), 1)
        var day2 = new Date()
        var firstDay2 = new Date(day2.getFullYear(), day2.getMonth(), 1)

        var realValue = diff_months(firstDay, firstDay2)
        var tempMinDuration = config.minDuration + realValue
        setDurationOption(
            getOption(config.minDuration + realValue, config.maxDuration)
        )
        setDuration(tempMinDuration.toString())

        console.log(realValue)

        setUserData({
            ...userData,
            expectedGraduationTime: realValue,
            duration: tempMinDuration,
        })
    }

    const handleChangeDuration = (e, value) => {
        setDuration(value.label)
        setUserData({
            ...userData,
            ['duration']: Number(value.label),
        })
    }

    const getMoneyText = (event) => {
        var money = Number(event.target.value)
        if (Math.floor(money) == money) {
            setMoneyText(money)
            handleOnchange(event)
        }
    }

    const handleClickOpen = () => {
        userApi
            .getStudentProfile()
            .then((res) => {
                if (res.data.status === 'VERIFIED') {
                    getInterest()
                    setOpen(true)
                } else if (res.data.status === 'BAN') {
                    setVerifyMessage({
                        title: 'Tài khoản của bạn đã bị chặn',
                        message:
                            'Vui lòng gửi mail tới studentloanfpt@gmail.com để được hỗ trợ',
                        button: 'Xem',
                    })
                    setOpenVerify(true)
                } else {
                    setOpenVerify(true)
                }
                setLoading(false)
            })
            .catch((err) => {})
    }

    const getInterest = () => {
        systemConfigApi.getFee().then((res) => {
            setUserData({
                ...userData,
                interest: res.data.interest,
                fixedMoney: res.data.fixedMoney,
                penaltyFee: res.data.penaltyFee,
            })
            setConfig(res.data)
            setInterest(Number(res.data.interest) * 100)
        })
    }

    const handleClose = () => {
        setUserData(data)
        setError(false)
        setDuration(null)
        setMoneyText(0)
        setOpen(false)
    }

    const handleCloseVerify = (value) => {
        setOpenVerify(false)
        if (value === true) {
            history.push('/trang-chu/thong-tin')
        }
    }

    return (
        <div>
            {miniSide ? (
                <IconButton
                    color="white"
                    variant="gradient"
                    sx={{
                        borderRadius: 3,
                        my: 2,
                        mx: 4,
                        backgroundColor: '#028858',
                    }}
                    onClick={handleClickOpen}
                >
                    <CreateIcon fontSize="small" />
                </IconButton>
            ) : (
                <SuiButton
                    color="primary"
                    startIcon={<CreateIcon />}
                    sx={{ my: 2, mx: 4 }}
                    onClick={handleClickOpen}
                    disableFocusRipple
                >
                    Tạo hồ sơ vay
                </SuiButton>
            )}
            <RequestVerify
                open={openVerify}
                handleClose={handleCloseVerify}
                value={verifyMessage}
            />
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <>
                    <Helmet>
                        <title>Tạo hồ sơ vay - StudentLoan</title>
                    </Helmet>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <SuiTypography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h3"
                                component="div"
                                fontWeight="medium"
                                color="dark"
                                align="center"
                            >
                                Hồ sơ vay
                            </SuiTypography>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Divider sx={{ borderBottomWidth: 1, my: 1 }} />
                    <Box>
                        <SuiButton
                            disable
                            sx={{ borderRadius: 0 }}
                            color="dark"
                        >
                            Nháp
                        </SuiButton>

                        <SuiTypography
                            variant="h4"
                            fontWeight="regular"
                            color="dark"
                            align="center"
                            mb={3}
                        >
                            Hãy điền những thông tin bên dưới để tạo một hồ sơ
                            vay
                        </SuiTypography>
                        <SuiTypography
                            variant="h5"
                            fontWeight="regular"
                            color="text"
                            align="center"
                            mb={1}
                        >
                            Chọn số tiền bạn muốn vay và thời hạn vay
                        </SuiTypography>
                        <Container maxWidth="sm">
                            <Box sx={{ paddingTop: '5%' }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={12}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Số tiền
                                        </SuiTypography>
                                        <SuiTypography
                                            variant="h3"
                                            fontWeight="regular"
                                            align="center"
                                            sx={{ mb: 3 }}
                                        >
                                            {fCurrency(moneyText)}
                                        </SuiTypography>
                                        <Box
                                            display="flex"
                                            justifyContent="space-between"
                                            mb={1}
                                        >
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="bold"
                                            >
                                                {fCurrencyNoVND(
                                                    config?.minRaiseMoney
                                                )}
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="bold"
                                            >
                                                {fCurrencyNoVND(
                                                    config?.maxRaiseMoney
                                                )}
                                            </SuiTypography>
                                        </Box>
                                        <SuiInput
                                            error={
                                                userData?.totalMoney === '' &&
                                                error
                                            }
                                            name="totalMoney"
                                            type="number"
                                            icon={{
                                                component: 'đ',
                                                direction: 'right',
                                            }}
                                            onChange={getMoneyText}
                                        />
                                        {error &&
                                        (config?.minRaiseMoney >
                                            userData.totalMoney ||
                                            userData.totalMoney >
                                                config?.maxRaiseMoney) ? (
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                                color="error"
                                            >
                                                Số tiền không hợp lệ
                                            </SuiTypography>
                                        ) : null}
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Thời gian ra trường dự kiến
                                        </SuiTypography>
                                        <SuiInput
                                            error={
                                                userData?.expectedGraduationTime ===
                                                    '' && error
                                            }
                                            name="expectedGraduationTime"
                                            type="month"
                                            onChange={
                                                handleChangeExpectGraduationTime
                                            }
                                            inputProps={{
                                                min: fDisplayMonth(null),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Thời hạn vay (tháng)
                                        </SuiTypography>
                                        {/* <SuiInput
                                            error={
                                                userData?.duration === '' &&
                                                error
                                            }
                                            name="duration"
                                            type="number"
                                            onChange={handleOnchange}
                                            inputProps={{
                                                min: 12,
                                                max: 72,
                                            }}
                                        /> */}
                                        <Tooltip title="Vui lòng chọn thời gian dự kiến ra trường trước">
                                            <Autocomplete
                                                disabled={
                                                    userData?.expectedGraduationTime ===
                                                    ''
                                                }
                                                disablePortal
                                                disableClearable
                                                onChange={(event, value) =>
                                                    handleChangeDuration(
                                                        event,
                                                        value
                                                    )
                                                }
                                                isOptionEqualToValue={(
                                                    option,
                                                    value
                                                ) => option.label === value}
                                                id="combo-box-duration "
                                                value={duration}
                                                options={durationOption}
                                                sx={{ width: '100%' }}
                                                renderInput={(params) => (
                                                    <TextField {...params} />
                                                )}
                                            />
                                        </Tooltip>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Lãi suất
                                        </SuiTypography>
                                        <SuiInput
                                            name="interest"
                                            type="number"
                                            disabled
                                            value={interest}
                                            icon={{
                                                component: <PercentIcon />,
                                                direction: 'right',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Thời gian hồ sơ hết hạn
                                        </SuiTypography>
                                        <SuiInput
                                            inputProps={{
                                                min: addMonth(
                                                    null,
                                                    config?.postExpireTime
                                                ),
                                            }}
                                            error={
                                                userData?.postExpireAt === '' &&
                                                error
                                            }
                                            name="postExpireAt"
                                            type="date"
                                            onChange={handleOnchange}
                                        />
                                    </Grid>
                                </Grid>
                                <Divider
                                    sx={{
                                        borderBottomWidth: 1,
                                        mt: 10,
                                    }}
                                />
                                <SuiTypography variant="button">
                                    Chào mừng bạn trở lại !
                                </SuiTypography>
                                <SuiButton
                                    size="large"
                                    color="primary"
                                    sx={{
                                        marginTop: 1,
                                        float: 'right',
                                    }}
                                    onClick={createLoan}
                                >
                                    Tạo mới
                                </SuiButton>
                            </Box>
                        </Container>
                    </Box>
                    {loading ? <Loading /> : null}
                </>
            </Dialog>
        </div>
    )
}
