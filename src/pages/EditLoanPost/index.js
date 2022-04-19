import React, { useState, useEffect } from 'react'

import PostInfoPage from './PostInfoPage'
import ArchievementPage from './ArchievementPage'
import ConfirmPage from './ConfirmPage'

import Box from '@mui/material/Box'
import { ButtonGroup, Container, Divider, Grid, Paper } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiBox from 'components/SuiBox'

import DeleteIcon from '@mui/icons-material/Delete'

import { Link } from 'react-scroll'

import { useParams, useHistory, useLocation } from 'react-router-dom'

import { loanApi } from '../../apis/loanApi'
import MediaPage from './MediaPage'

import { renderStatus } from 'utils/renderStatus'
import Loading from 'components/Loading'
import { setDocTitle } from 'utils/dynamicDocTitle'
import { loanMediaApi } from 'apis/loanMediaApi'
import { LOAN_STATUS } from 'utils/enum'
import ConfirmSign from './components/ConfirmSign'
import SnackbarMessage from 'components/SnackbarMessage'

export default function EditLoanPost() {
    const { id } = useParams()
    const history = useHistory()

    const [loan, setLoan] = useState({ LoanMedia: [] })
    const [loanMedia, setLoanMedia] = useState({})
    const [studentInfo, setStudentInfo] = useState({})
    const [achievements, setAchievements] = useState(null)
    const [loanHistory, setloanHistory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)

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

                const { User, Archievements } = Student
                setloanHistory(LoanHistories[0])
                setLoan(restLoanData)
                setLoanMedia(convertArrayToObject(LoanMedia, 'type'))
                setStudentInfo(Student)
                setAchievements(Archievements)
                setDocTitle(
                    restLoanData.title === null
                        ? 'Chỉnh sửa hồ sơ-StudentLoan'
                        : restLoanData.title + '-StudentLoan'
                )
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                history.push({
                    pathname: '/dashboard/404',
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

            console.log(loanMedia)
        }
    }

    const handleOnchangeAchievement = (value) => {
        setAchievements([...achievements, value])
    }

    const handleSubmit = () => {
        setOpenConfirm(true)
    }

    const handleConfirm = (value) => {
        if (value) {
            setIsLoading(true)
            for (const [key, value] of Object.entries(loanMedia)) {
                const { id, ...rest } = value
                if (value.currentStatus === 'new') {
                    loanMediaApi.createLoanMedia(rest)
                } else {
                    loanMediaApi.updateLoanMedia(id, rest)
                }
            }
            loanApi
                .updateLoanPost(id, 'WAITING', { loan, loanHistory })
                .then((res) => {
                    setIsChange(Date.now())
                    setIsLoading(false)
                    setOpenConfirm(false)
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
            if (value.currentStatus === 'new') {
                loanMediaApi.createLoanMedia(rest)
            } else {
                console.log(rest)
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
                >
                    Xóa hồ sơ
                </SuiButton>
                <SuiButton
                    sx={{ mr: 3, mb: 3 }}
                    color="dark"
                    variant="outlined"
                    size="large"
                    onClick={handleSave}
                >
                    Lưu
                </SuiButton>
                <SuiButton
                    color="primary"
                    size="large"
                    sx={{ mb: 3 }}
                    onClick={handleSubmit}
                >
                    Gửi
                </SuiButton>
            </>
        )
    }

    return (
        <>
            {isLoading ? <Loading /> : null}
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
                            loan={loan}
                            handleChange={handleOnchange}
                        />

                        <MediaPage
                            loanId={loan.id}
                            loanMedia={loanMedia}
                            handleChange={handleOnchange}
                        />

                        <ArchievementPage
                            studentId={studentInfo.id}
                            achievements={achievements}
                            handleChange={handleOnchangeAchievement}
                        />
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
            <SnackbarMessage snack={snack} open={openSnack} />
        </>
    )
}
