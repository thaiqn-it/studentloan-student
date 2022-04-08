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
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { Box, Container, Divider, Grid, Dialog } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

import Loading from 'components/Loading'

import CreateIcon from '@mui/icons-material/Create'
import PercentIcon from '@mui/icons-material/Percent'

import { getText } from 'number-to-text-vietnamese'

import { loanApi } from '../../apis/loanApi'
import { systemConfigApi } from '../../apis/systemConfigApi'

// function CircularIndeterminate() {
//     return (
//         <Backdrop open>
//             <Box
//                 sx={{ display: 'flex' }}
//                 height="50vh"
//                 position="relative"
//                 component="img"
//                 src={Loading}
//             />
//         </Backdrop>
//     )
// }

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />
})

export default function CreateLoanPost(props) {
    const { miniSide } = props
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [interest, setInterest] = useState()
    const [moneyText, setMoneyText] = useState('')
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
        if (isNullish(userData)) {
            setLoading(true)
            await loanApi
                .createLoanPost(userData)
                .then((res) => {
                    let path = `/dashboard/request/${res.data.id}`
                    history.push(path)
                    setOpen(false)
                })
                .catch((e) => {
                    setLoading(false)
                })
        }
    }

    const isNullish = (obj) => {
        var flag = true
        Object.values(obj).map((value) => {
            if (value === '') {
                flag = false
            }
        })

        return flag
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
            realValue = day
        }
        setUserData({
            ...userData,
            [e.target.name]: realValue,
        })
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

    const handleClose = () => {
        setUserData(data)
        setOpen(false)
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
                                color="black"
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
                                    Hãy điền những thông tin bên dưới để tạo một
                                    hồ sơ vay
                                </SuiTypography>
                                <SuiTypography
                                    variant="h5"
                                    fontWeight="regular"
                                    color="text"
                                    align="center"
                                    mb={3}
                                >
                                    Chọn số tiền bạn muốn vay và thời hạn vay
                                </SuiTypography>
                                <Grid container spacing={1}>
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
                                    color="primary"
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
                    {loading ? <Loading /> : null}
                </>
            </Dialog>
        </div>
    )
}
