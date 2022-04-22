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
import SnackbarMessage from 'components/SnackbarMessage'
import { isNullish } from 'utils/isNullish'
import { setDocTitle } from 'utils/dynamicDocTitle'
import { getOption } from 'utils/moneyCall'
import { fCurrency } from 'utils/formatNumber'
import { addMonth } from 'utils/formatTime'
import { fDisplayMonth } from 'utils/formatTime'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />
})

export default function CreateLoanPost(props) {
    const { miniSide } = props
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [interest, setInterest] = useState()

    const [actionSnack, setActionSnack] = useState(null)

    const [millionChoose, setMillionChoose] = useState('2')
    const [thousandChoose, setThousandChoose] = useState('000')
    const [duration, setDuration] = useState('')

    const [config, setConfig] = useState(null)

    const [millionOption, setMillionOption] = useState(null)
    const [thousandOption, setThousandOption] = useState([
        {
            id: 2,
            label: '500',
        },
        {
            id: 1,
            label: '000',
        },
    ])
    const [durationOption, setDurationOption] = useState([])

    const [error, setError] = useState(false)

    const [snack, setSnack] = useState({
        message: 'Xác thực',
        color: 'error',
    })

    const data = {
        totalMoney: millionChoose + thousandChoose + '000',
        interest: '',
        fixedMoney: '',
        penaltyFee: '',
        expectedGraduationTime: '',
        duration: '',
        postExpireAt: '',
        status: 'DRAFT',
    }

    const [userData, setUserData] = useState(data)

    const onClickClose = () => {
        setOpenSnack(false)
    }

    const createLoan = async () => {
        if (isNullish(userData)) {
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
    }

    function diff_months(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000
        diff /= 60 * 60 * 24 * 7 * 4
        return Math.abs(Math.round(diff))
    }

    const handleOnchange = (e) => {
        e.preventDefault()
        var realValue = e.target.value
        if (e.target.name === 'expectedGraduationTime') {
            var day = new Date(realValue)
            var day2 = new Date()
            realValue = diff_months(day, day2)
            var tempMinDuration = config.minDuration + realValue
            setDurationOption(getOption(config.minDuration + realValue, 72))
            setDuration(tempMinDuration.toString())
        }
        if (e.target.name === 'postExpireAt') {
            var day = new Date(realValue).toISOString()
            realValue = day
        }
        setUserData({
            ...userData,
            [e.target.name]: realValue,
        })
    }

    const handleChangeMoney = (e, value) => {
        var num = 0
        if (e.target.id.includes('million')) {
            if (Number(value.label + '000000') === config.maxRaiseMoney) {
                setThousandOption([
                    {
                        id: 1,
                        label: '000',
                    },
                ])
                setThousandChoose('000')
            } else {
                setThousandOption([
                    {
                        id: 2,
                        label: '500',
                    },
                    {
                        id: 1,
                        label: '000',
                    },
                ])
            }
            setMillionChoose(value.label)
            num = value.label + thousandChoose + '000'
        } else {
            setThousandChoose(value.label)
            num = millionChoose + value.label + '000'
        }
        setUserData({
            ...userData,
            ['totalMoney']: num,
        })
    }

    const handleChangeDuration = (e, value) => {
        setDuration(value.label)
        setUserData({
            ...userData,
            ['duration']: Number(value.label),
        })
    }

    // const getMoneyText = (event) => {
    //     var money = Number(event.target.value)
    //     if (Math.floor(money) == money) {
    //         setMoneyText(getText(money))
    //         handleOnchange(event)
    //     }
    // }

    const handleClickOpen = () => {
        getInterest()
        setDocTitle('Tạo hồ sơ vay - StudentLoan')
        userApi
            .getStudentProfile()
            .then((res) => {
                if (res.data.status === 'VERIFIED') {
                    setOpen(true)
                } else if (res.data.status === 'BAN') {
                    setActionSnack(ban)
                    setOpenSnack(true)
                } else {
                    setActionSnack(action)
                    setOpenSnack(true)
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
            var tempMin = Number(
                res.data.minRaiseMoney
                    .toString()
                    .slice(0, res.data.minRaiseMoney.toString().length - 6)
            )
            var tempMax = Number(
                res.data.maxRaiseMoney
                    .toString()
                    .slice(0, res.data.maxRaiseMoney.toString().length - 6)
            )

            setMillionOption(getOption(tempMin, tempMax))
            setInterest(Number(res.data.interest) * 100)
        })
    }

    const handleClose = () => {
        setUserData(data)
        setError(false)
        setDuration('')
        setMillionChoose(
            config.minRaiseMoney
                .toString()
                .slice(0, config.minRaiseMoney.toString().length - 6)
        )
        setThousandChoose('000')
        setOpen(false)
    }

    const action = {
        go: (
            <React.Fragment>
                <Box>
                    <SuiButton
                        color="white"
                        size="small"
                        variant="text"
                        href="/trang-chu/thong-tin"
                    >
                        Xác thực thông tin
                    </SuiButton>
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={onClickClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
            </React.Fragment>
        ),
        message: null,
    }

    const ban = {
        go: (
            <React.Fragment>
                <Box>
                    <SuiButton
                        color="white"
                        size="small"
                        variant="text"
                        href="/trang-chu/thong-tin"
                    >
                        Tài khoản bị chặn
                    </SuiButton>
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={onClickClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
            </React.Fragment>
        ),
        message: null,
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
            <SnackbarMessage
                open={openSnack}
                action={actionSnack}
                onClickClose={onClickClose}
            />
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <>
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
                                            {fCurrency(
                                                millionChoose +
                                                    thousandChoose +
                                                    '000'
                                            )}
                                        </SuiTypography>
                                        {/* <SuiInput
                                            name="totalMoney"
                                            type="number"
                                            icon={{
                                                component: 'đ',
                                                direction: 'right',
                                            }}
                                            onChange={getMoneyText}
                                        /> */}
                                        <Box>
                                            <Grid container>
                                                <Grid item xs={12} md={4}>
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-million"
                                                        value={millionChoose}
                                                        options={millionOption}
                                                        onChange={(
                                                            event,
                                                            value
                                                        ) =>
                                                            handleChangeMoney(
                                                                event,
                                                                value
                                                            )
                                                        }
                                                        isOptionEqualToValue={(
                                                            option,
                                                            value
                                                        ) =>
                                                            option.label ===
                                                            value
                                                        }
                                                        disableClearable
                                                        sx={{ width: '100%' }}
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Autocomplete
                                                        disablePortal
                                                        disableClearable
                                                        onChange={(
                                                            event,
                                                            value
                                                        ) =>
                                                            handleChangeMoney(
                                                                event,
                                                                value
                                                            )
                                                        }
                                                        isOptionEqualToValue={(
                                                            option,
                                                            value
                                                        ) =>
                                                            option.label ===
                                                            value
                                                        }
                                                        id="combo-box-thousand"
                                                        value={thousandChoose}
                                                        options={thousandOption}
                                                        sx={{ width: '100%' }}
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <SuiInput
                                                        value="000"
                                                        icon={{
                                                            component: 'đ',
                                                            direction: 'right',
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>
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
                                            onChange={handleOnchange}
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
