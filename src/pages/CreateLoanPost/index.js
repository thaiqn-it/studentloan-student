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
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    CircularProgress,
    CardMedia,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

import CreateIcon from '@mui/icons-material/Create'
import WaitingImage from '../../assets/waiting.svg'

import { loanApi } from '../../apis/loanApi'

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
                    top: '40%',
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
                <CardMedia component="img" image={WaitingImage} height={100} />
                <CircularProgress sx={{ marginTop: 2 }} />
            </Box>
        </Box>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />
})

export default function CreateLoanPost() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const data = {
        totalMoney: '',
        expectedGraduationTime: '',
        duration: '',
        status: 'DRAFT',
    }

    const [userData, setUserData] = useState(data)

    const createLoan = async () => {
        setLoading(true)
        console.log(loading)
        await loanApi
            .createLoanPost(userData)
            .then((data) => {
                setLoading(true)
                console.log(loading)
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
        if (e.target.name !== 'totalMoney') {
            var day = new Date(realValue)
            var day2 = new Date()

            console.log(diff_months(day, day2))
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

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <SuiButton
                color="dark"
                startIcon={<CreateIcon />}
                sx={{ borderRadius: 20, my: 2, mx: 4 }}
                onClick={handleClickOpen}
                disableFocusRipple
            >
                Tạo hồ sơ vay
            </SuiButton>
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
                                {/* <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton> */}
                                <SuiTypography
                                    sx={{ ml: 2, flex: 1 }}
                                    variant="h4"
                                    component="div"
                                    fontWeight="regular"
                                    color="primary"
                                    align="center"
                                >
                                    Hãy bắt đầu một hồ sơ đơn giản
                                </SuiTypography>
                                {/* <SuiButton
                                    autoFocus
                                    color="primary"
                                    onClick={handleClose}
                                >
                                    save
                                </SuiButton> */}
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
                        <Paper>
                            <Box height="85vh">
                                <SuiButton
                                    disable
                                    sx={{ borderRadius: 0 }}
                                    color="warning"
                                >
                                    Draft
                                </SuiButton>
                                <Container maxWidth="sm">
                                    <Box sx={{ paddingTop: '15%' }}>
                                        <SuiTypography
                                            variant="h4"
                                            fontWeight="regular"
                                            color="black"
                                            align="center"
                                            mb={5}
                                        >
                                            Hãy điền những thông tin bên dưới để
                                            tạo một hồ sơ vay
                                        </SuiTypography>
                                        <SuiTypography
                                            variant="h5"
                                            fontWeight="regular"
                                            color="text"
                                            align="center"
                                            mb={3}
                                        >
                                            Chọn số tiền bạn muốn vay và thời
                                            hạn vay
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
                                                    onChange={handleOnchange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <SuiTypography
                                                    variant="h6"
                                                    fontWeight="regular"
                                                >
                                                    Thời hạn vay
                                                </SuiTypography>
                                                <SuiInput
                                                    name="duration"
                                                    type="month"
                                                    onChange={handleOnchange}
                                                />
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
                        </Paper>
                    </>
                )}
            </Dialog>
        </div>
    )
}
