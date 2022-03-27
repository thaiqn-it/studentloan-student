// import { Box, Container, Divider, Grid, Paper } from '@mui/material'
// import SuiButton from 'components/SuiButton'
// import SuiInput from 'components/SuiInput'
// import SuiTypography from 'components/SuiTypography'
// import React, { useState } from 'react'

// import { loanApi } from '../../apis/loanApi'

// export default function CreateLoanPost() {
// const data = {
//     totalMoney: '',
//     expectedGraduationTime: '',
//     duration: '',
//     status: 'DRAFT',
// }

// const [userData, setUserData] = useState(data)

// const createLoan = () => {
//     console.log(userData)
//     loanApi.createLoanPost(userData)
// }

// const handleOnchange = (e) => {
//     e.preventDefault()
//     setUserData({
//         ...userData,
//         [e.target.name]: e.target.value,
//     })

//     console.log(userData)
// }

// const verifyData = () => {
//     var flag = false
//     if (
//         data.money != null &&
//         data.duration != null &&
//         data.graduateTime != null
//     ) {
//         flag = true
//     }

//     return flag
// }

//     return (
//         <>
// <Divider sx={{ borderBottomWidth: 1, my: 1 }} />
// <Paper>
//     <Box height="85vh">
//         <SuiButton disable sx={{ borderRadius: 0 }} color="warning">
//             Draft
//         </SuiButton>
//         <Container maxWidth="sm">
//             <Box sx={{ paddingTop: '15%' }}>
//                 <SuiTypography
//                     variant="h4"
//                     fontWeight="regular"
//                     color="black"
//                     align="center"
//                     mb={5}
//                 >
//                     Hãy điền những thông tin bên dưới để tạo một hồ
//                     sơ vay
//                 </SuiTypography>
//                 <SuiTypography
//                     variant="h5"
//                     fontWeight="regular"
//                     color="text"
//                     align="center"
//                     mb={3}
//                 >
//                     Chọn số tiền bạn muốn vay và thời hạn vay
//                 </SuiTypography>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} md={12}>
//                         <SuiTypography
//                             variant="h6"
//                             fontWeight="regular"
//                         >
//                             Số tiền
//                         </SuiTypography>
//                         <SuiInput
//                             name="totalMoney"
//                             type="number"
//                             icon={{
//                                 component: 'đ',
//                                 direction: 'right',
//                             }}
//                             onChange={handleOnchange}
//                         />
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <SuiTypography
//                             variant="h6"
//                             fontWeight="regular"
//                         >
//                             Thời hạn vay
//                         </SuiTypography>
//                         <SuiInput
//                             name="duration"
//                             type="month"
//                             onChange={handleOnchange}
//                         />
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <SuiTypography
//                             variant="h6"
//                             fontWeight="regular"
//                         >
//                             Thời gian ra trường dự kiến
//                         </SuiTypography>
//                         <SuiInput
//                             name="expectedGraduationTime"
//                             type="month"
//                             onChange={handleOnchange}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Divider sx={{ borderBottomWidth: 1, mt: 10 }} />
//                 <SuiTypography variant="button">
//                     Chào mừng bạn trở lại !
//                 </SuiTypography>
//                 <SuiButton
//                     size="large"
//                     color="black"
//                     sx={{ marginTop: 1, float: 'right' }}
//                     onClick={createLoan}
//                 >
//                     Tạo
//                 </SuiButton>
//             </Box>
//         </Container>
//     </Box>
// </Paper>
//         </>
//     )
// }

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    CircularProgress,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

import CreateIcon from '@mui/icons-material/Create'
import PercentIcon from '@mui/icons-material/Percent'

import { getText } from 'number-to-text-vietnamese'

import { loanApi } from '../../apis/loanApi'
import { systemConfigApi } from '../../apis/systemConfigApi'

function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex' }} height="100vh" position="relative">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 0,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: 'zoom-in-zoom-out 2s ease-out infinite',
                    ' @keyframes zoom-in-zoom-out': {
                        '0% ': {
                            transform: 'scale(1, 1)',
                        },
                        '50%': {
                            transform: 'scale(1.5, 1.5)',
                        },
                        '100%': {
                            transform: 'scale(1, 1)',
                        },
                    },
                }}
            >
                <CircularProgress sx={{ marginTop: 2 }} />
            </Box>
        </Box>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />
})

export default function CreateLoanPost(props) {
    const { miniSide } = props
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [interest, setInterest] = useState()
    const [moneyText, setMoneyText] = useState("")
    // const [miniSideNav, setMiniSideNav] = useState(miniSide)

    const data = {
        totalMoney: '',
        interest: '',
        expectedGraduationTime: '',
        duration: '',
        postExpireAt: '',
        status: 'DRAFT',
    }

    const [userData, setUserData] = useState(data)

    const createLoan = async () => {
        setLoading(true)
        console.log(loading)
        await loanApi
            .createLoanPost(userData)
            .then((res) => {
                setLoading(true)
                console.log(res)
                let path = `/dashboard/request/${res.data.id}`
                history.push(path)
                setOpen(false)
            })
            .catch((e) => {
                setLoading(false)
                console.log(e)
            })
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
        }
        if (e.target.name === 'postExpireAt') {
            var day = new Date(realValue).toISOString()
            console.log(day)
            realValue = day
        }
        setUserData({
            ...userData,
            [e.target.name]: realValue,
        })

        console.log(userData)
    }

    const verifyData = () => {
        var flag = false
        if (
            data.money != null &&
            data.duration != null &&
            data.graduateTime != null
        ) {
            flag = true
        }

        return flag
    }

    const getMoneyText = (event) => {
        var money = Number(event.target.value)
        if (Math.floor(money) == money) {
            setMoneyText(getText(money))
            handleOnchange(event)
        }
    }

    const handleClickOpen = () => {
        getInterest()
        setOpen(true)
        setLoading(false)
    }

    function getInterest() {
        systemConfigApi.getInterest().then((res) => {
            setUserData({
                ...userData,
                interest: res.data.interest,
            })
            setInterest(res.data.interest)
        })
    }

    function getInterest() {
        systemConfigApi.getInterest().then((res) => {
            setUserData({
                ...userData,
                interest: res.data.value,
            })
            setInterest(res.data.value)
        })
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {miniSide ? (
                <IconButton
                    color="white"
                    sx={{
                        borderRadius: 20,
                        my: 2,
                        mx: 4,
                        backgroundColor: '#344767',
                    }}
                    onClick={handleClickOpen}
                >
                    <CreateIcon fontSize="small" />
                </IconButton>
            ) : (
                // <SuiButton
                //     sx={{ borderRadius: 20, my: 2, mx: 4 }}
                //     onClick={handleClickOpen}
                // >
                //     <CreateIcon />
                // </SuiButton>
                <SuiButton
                    color="primary"
                    startIcon={<CreateIcon />}
                    sx={{ borderRadius: 20, my: 2, mx: 4 }}
                    onClick={handleClickOpen}
                    disableFocusRipple
                >
                    Tạo hồ sơ vay
                </SuiButton>
            )}

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                {loading ? (
                    <CircularIndeterminate />
                ) : (
                    <>
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <SuiTypography
                                    sx={{ ml: 2, flex: 1 }}
                                    variant="h3"
                                    component="div"
                                    fontWeight="medium"
                                    color="primary"
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
                                color="warning"
                            >
                                Draft
                            </SuiButton>
                            <Container maxWidth="sm">
                                <Box sx={{ paddingTop: '10%' }}>
                                    <SuiTypography
                                        variant="h4"
                                        fontWeight="regular"
                                        color="black"
                                        align="center"
                                        mb={5}
                                    >
                                        Hãy điền những thông tin bên dưới để tạo
                                        một hồ sơ vay
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="h5"
                                        fontWeight="regular"
                                        color="text"
                                        align="center"
                                        mb={3}
                                    >
                                        Chọn số tiền bạn muốn vay và thời hạn
                                        vay
                                    </SuiTypography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="regular"
                                            >
                                                Số tiền
                                            </SuiTypography>
                                            <SuiInput
                                                name="totalMoney"
                                                type="number"
                                                icon={{
                                                    component: 'đ',
                                                    direction: 'right',
                                                }}
                                                onChange={getMoneyText}
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
                                                {moneyText}
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="regular"
                                            >
                                                Thời gian ra trường dự kiến
                                            </SuiTypography>
                                            <SuiInput
                                                name="expectedGraduationTime"
                                                type="month"
                                                onChange={handleOnchange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="regular"
                                            >
                                                Thời hạn vay (tháng)
                                            </SuiTypography>
                                            <SuiInput
                                                name="duration"
                                                type="number"
                                                onChange={handleOnchange}
                                            />
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
                                        color="black"
                                        sx={{
                                            marginTop: 1,
                                            float: 'right',
                                        }}
                                        onClick={createLoan}
                                    >
                                        Tạo
                                    </SuiButton>
                                </Box>
                            </Container>
                        </Box>
                    </>
                )}
            </Dialog>
        </div>
    )
}
