import React, { useState, useEffect } from 'react'

import PostInfoPage from './PostInfoPage'
import ArchievementPage from './ArchievementPage'
import ConfirmPage from './ConfirmPage'

import Box from '@mui/material/Box'
import { ButtonGroup, Container, Divider, Grid, Paper } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiBox from 'components/SuiBox'

import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import SaveIcon from '@mui/icons-material/Save'

import Scroll, { Link, scroller } from 'react-scroll'
var scroll = Scroll.animateScroll

import { useParams, useHistory, useLocation } from 'react-router-dom'

import { loanApi } from '../../apis/loanApi'
import { notificationApi } from '..//..//apis/notificationApi'
import MediaPage from './MediaPage'

import { renderStatus } from 'utils/renderStatus'
import Loading from 'components/Loading'
import { loanMediaApi } from 'apis/loanMediaApi'
import { LOAN_STATUS, NOTIFICATION_TYPE } from 'utils/enum'
import ConfirmSign from './components/ConfirmSign'
import SnackbarMessage from 'components/SnackbarMessage'
import ComfirmDelete from 'components/ComfirmDelete'
import { Helmet } from 'react-helmet'

export default function EditLoanPost() {
    const { id } = useParams()
    const history = useHistory()

    const [loan, setLoan] = useState({ LoanMedia: [] })
    const [loanMedia, setLoanMedia] = useState({})
    const [studentInfo, setStudentInfo] = useState({})
    const [loanHistory, setloanHistory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    const [error, setError] = useState(false)

    const [snack, setSnack] = useState({
        color: 'error',
        message: 'Tên không trùng khớp',
    })
    const [openSnack, setOpenSnack] = useState(false)

    const [isChange, setIsChange] = useState('')
    useEffect(() => {
        setIsLoading(true)
        loanApi
            .getLoanById(id, 'edit')
            .then((res) => {
                const { LoanMedia, Student, LoanHistories, ...restLoanData } =
                    res.data.loan

                setloanHistory(LoanHistories[0])
                setLoan(restLoanData)
                setLoanMedia(convertArrayToObject(LoanMedia, 'type'))
                setStudentInfo(Student)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                history.push({
                    pathname: '/trang-chu/404',
                    state: { content: 'Không tìm thấy hồ sơ' },
                })
            })
    }, [isChange])

    const convertArrayToObject = (array, key) => {
        const initialValue = {}
        return array.reduce((obj, item) => {
            var newItem = { ...item, currentStatus: 'old' }
            return {
                ...obj,
                [item[key]]: newItem,
            }
        }, initialValue)
    }

    const handleOnchange = (e, name, value) => {
        if (e) {
            e.preventDefault()
            setLoan({
                ...loan,
                [e.target.name]: e.target.value,
            })
        } else {
            var realValue = value
            if (name === 'LoanMedia') {
                // var newObject = {...loanMedia.realValue.type,
                setLoanMedia({
                    ...loanMedia,
                    [realValue.type]: realValue,
                })
            }
            setLoan({
                ...loan,
                [name]: realValue,
            })
        }
    }

    const handleOnchangeAchievement = () => {
        setIsChange(Date.now())
    }

    const handleSubmit = () => {
        var flag = true
        var scrollTo = ''
        if (
            loanMedia.TRANSCRIPT.imageUrl === '' ||
            loanMedia.TRANSCRIPT.imageUrl === null
        ) {
            flag = false
            scrollTo = 'scrollTranscript'
        }
        if (
            loanMedia.STUDENTCERT.imageUrl === '' ||
            loanMedia.STUDENTCERT.imageUrl === null
        ) {
            flag = false
            scrollTo = 'scrollStudentCert'
        }

        if (
            loanMedia.DEMANDNOTE.imageUrl === '' ||
            loanMedia.DEMANDNOTE.imageUrl === null
        ) {
            flag = false
            scrollTo = 'scrollDemandNote'
        }
        // if (
        //     loanMedia.VIDEO.imageUrl === '' ||
        //     loanMedia.VIDEO.imageUrl === null
        // ) {
        //     flag = false
        //     scrollTo = 'scrollVideo'
        // }
        if (loan.expectedMoney === null || loan.expectedMoney === '') {
            flag = false
            scrollTo = 'scrollExpectedMoney'
        }
        if (loan.totalMoney === null || loan.totalMoney === '') {
            flag = false
            scrollTo = 'scrollTotalMoney'
        }
        if (loan.description === null || loan.description === '') {
            flag = false
            scrollTo = 'scrollDescription'
        }
        if (loan.title === null || loan.title === '') {
            flag = false
            scrollTo = 'scrollTitle'
        }

        if (flag == true) {
            setOpenConfirm(true)
        } else {
            setError(true)
            // scroll.scrollTo(scrollTo, {
            //     duration: 100,
            //     delay: 0,
            //     smooth: 'easeInOutQuart',
            // })
            scroller.scrollTo(scrollTo, {
                duration: 100,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -150,
            })
        }
    }

    const handleConfirm = (value) => {
        if (value) {
            setIsLoading(true)
            for (const [key, value] of Object.entries(loanMedia)) {
                const { id, ...rest } = value
                console.log(value)
                if (value.currentStatus === 'new') {
                    loanMediaApi.createLoanMedia(rest)
                } else {
                    loanMediaApi.updateLoanMedia(id, rest)
                }
            }
            loanApi
                .updateLoanPost(id, 'WAITING', { loan, loanHistory })
                .then((res) => {
                    notificationApi
                        .pushNotifToAdmin({
                            message: `${studentInfo.User.firstName} ${studentInfo.User.lastName} yêu cầu đăng tải hồ sơ`,
                            redirectUrl: `/dashboard/viewPost/${id}`,
                            notiType: NOTIFICATION_TYPE.USER,
                        })
                        .then((res) => {
                            setIsChange(Date.now())
                            setIsLoading(false)
                            setOpenConfirm(false)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    setIsLoading(false)
                })
        } else {
            setOpenConfirm(false)
        }
    }

    const handleSave = () => {
        setIsLoading(true)
        for (const [key, value] of Object.entries(loanMedia)) {
            const { id, ...rest } = value
            console.log(value)
            if (value.currentStatus === 'new') {
                loanMediaApi.createLoanMedia(rest)
            } else {
                loanMediaApi.updateLoanMedia(id, rest)
            }
        }
        loanApi
            .updateLoanPost(id, 'DRAFT', { loan, loanHistory })
            .then((res) => {
                setIsChange(Date.now())
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    const handleDelete = () => {
        setIsLoading(true)
        loanApi
            .updateLoanPost(id, LOAN_STATUS.DELETED, { loan, loanHistory })
            .then((res) => {
                setIsLoading(false)
                setOpenDelete(false)
                history.push('/trang-chu/ho-so/tat-ca')
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    const handleCloseDelete = () => {
        setOpenDelete(false)
    }

    const getStatus = () => {
        var statusObject = renderStatus(loanHistory?.type)

        return (
            <SuiButton
                size="large"
                color={statusObject.color}
                sx={{ borderRadius: 0 }}
            >
                {statusObject.status}
            </SuiButton>
        )
    }

    const getDeleteButton = () => {
        if (
            loanHistory?.type !== LOAN_STATUS.DRAFT &&
            loanHistory?.type !== LOAN_STATUS.REJECTED
        ) {
            return null
        }
        return (
            <>
                <SuiButton
                    sx={{ mr: 3, mb: 3 }}
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => setOpenDelete(true)}
                >
                    Xóa hồ sơ
                </SuiButton>
                <SuiButton
                    sx={{ mr: 3, mb: 3 }}
                    color="dark"
                    variant="outlined"
                    size="large"
                    onClick={handleSave}
                    startIcon={<SaveIcon />}
                >
                    Lưu
                </SuiButton>
                <SuiButton
                    color="primary"
                    size="large"
                    sx={{ mb: 3 }}
                    onClick={handleSubmit}
                    endIcon={<SendIcon />}
                >
                    Gửi
                </SuiButton>
            </>
        )
    }

    return (
        <>
            {isLoading ? <Loading /> : null}
            <Helmet>
                <title>
                    {loan.title === null
                        ? 'Chỉnh sửa hồ sơ-StudentLoan'
                        : loan.title + '-StudentLoan'}
                </title>
            </Helmet>
            <SuiBox
                position="fixed"
                sx={{ zIndex: 1, bottom: 0, boxShadow: 3 }}
                width="100%"
            >
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Link
                        activeClass="active"
                        to="post-info"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <SuiButton
                            sx={{
                                borderRadius: 0,
                            }}
                            color="primary"
                            variant="gradient"
                        >
                            Thông tin hồ sơ vay
                        </SuiButton>
                    </Link>
                    <Link
                        activeClass="active"
                        to="achievements"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <SuiButton
                            sx={{
                                borderRadius: 0,
                            }}
                            color="info"
                            variant="gradient"
                        >
                            Những thành tích
                        </SuiButton>
                    </Link>
                    <Link
                        activeClass="active"
                        to="personal-information"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <SuiButton
                            sx={{
                                borderRadius: 0,
                            }}
                            color="error"
                            variant="gradient"
                        >
                            Thông tin của bạn
                        </SuiButton>
                    </Link>
                    <SuiButton
                        href={`/trang-chu/ho-so/xem/${id}`}
                        sx={{
                            borderRadius: 0,
                        }}
                        color="warning"
                        variant="gradient"
                    >
                        Xem hồ sơ
                    </SuiButton>
                </ButtonGroup>
            </SuiBox>
            <SuiBox>
                <Paper elevation={6} sx={{ borderRadius: 3 }}>
                    <Box sx={{ width: '100%' }}>
                        {getStatus()}
                        <PostInfoPage
                            errorMess={error}
                            loan={loan}
                            handleChange={handleOnchange}
                        />

                        <MediaPage
                            errorMess={error}
                            loanId={loan.id}
                            loanMedia={loanMedia}
                            handleChange={handleOnchange}
                        />

                        <ArchievementPage />
                        <ConfirmPage studentInfo={studentInfo} />
                        <Divider />

                        <Box
                            sx={{
                                m: 3,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            {getDeleteButton()}
                        </Box>
                    </Box>
                </Paper>
            </SuiBox>
            <ConfirmSign
                open={openConfirm}
                firstName={studentInfo?.User?.firstName}
                lastName={studentInfo?.User?.lastName}
                handleConfirm={handleConfirm}
            />
            <ComfirmDelete
                title="hồ sơ vay"
                open={openDelete}
                handleClose={handleCloseDelete}
                handleDelete={handleDelete}
            />
            <SnackbarMessage snack={snack} open={openSnack} />
        </>
    )
}
