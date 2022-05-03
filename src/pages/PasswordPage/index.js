import { Box, Card, Container } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { userApi } from 'apis/userApi'
import Loading from 'components/Loading'
import SnackbarMessage from 'components/SnackbarMessage'
import { Helmet } from 'react-helmet'

export default function PasswordPage() {
    const [input, setInput] = useState({
        currentPassword: '',
        confirmPassword: '',
        newPassword: '',
    })
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [snack, setSnack] = useState({
        color: 'success',
        message: 'Cập nhật thành công',
    })
    const history = useHistory()
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (input.currentPassword === input.newPassword) {
            setMessage('Mật khẩu mới phải khác mật khẩu cũ')
            setError(true)
            return
        }
        if (input.newPassword.length < 6) {
            setMessage('Mật khẩu phải lớn hơn 6 ký tự')
            setError(true)
            return
        }

        if (input.confirmPassword !== input.newPassword) {
            setMessage('Xác nhận mật khẩu không đúng')
            setError(true)
            return
        }

        setError(false)
        setLoading(true)
        userApi
            .chagnePassword({
                password: input.currentPassword,
                newPassword: input.newPassword,
            })
            .then((res) => {
                setLoading(false)
                setOpenSnack(true)
            })
            .catch((err) => {
                setLoading(false)
                setSnack({ color: 'error', message: 'Mật khẩu không đúng' })
                setOpenSnack(true)
            })
    }

    const handleCloseSnack = () => {
        setOpenSnack(false)
    }
    return (
        <>
            {loading ? <Loading /> : null}
            <Helmet>
                <title>Đổi mật khẩu-StudentLoan</title>
            </Helmet>
            <SnackbarMessage
                snack={snack}
                open={openSnack}
                onClickClose={handleCloseSnack}
            />
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Thay đổi mật khẩu
            </SuiTypography>
            <Container maxWidth="md">
                <Card sx={{ boxShadow: 3 }}>
                    <SuiButton
                        size="medium"
                        color="primary"
                        sx={{ borderRadius: 0 }}
                    ></SuiButton>
                    <Box p={3}>
                        <SuiTypography variant="h6" color="black">
                            Mật khẩu hiện tại
                        </SuiTypography>
                        <SuiInput
                            type="password"
                            name="currentPassword"
                            onChange={handleChange}
                            error={
                                error &&
                                (input?.currentPassword === null ||
                                    input?.currentPassword === '')
                            }
                        />
                        <SuiTypography
                            variant="h6"
                            color="black"
                            sx={{ mt: 1 }}
                        >
                            Mật khẩu mới
                        </SuiTypography>
                        <SuiInput
                            type="password"
                            name="newPassword"
                            onChange={handleChange}
                            error={
                                error &&
                                (input?.newPassword === null ||
                                    input?.newPassword === '')
                            }
                        />
                        <SuiTypography variant="caption" color="black">
                            Ít nhất 6 ký tự
                        </SuiTypography>
                        <SuiTypography
                            variant="h6"
                            color="black"
                            sx={{ mt: 1 }}
                        >
                            Xác nhận lại mật khẩu mới
                        </SuiTypography>
                        <SuiInput
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            error={
                                error &&
                                (input?.confirmPassword === null ||
                                    input?.confirmPassword === '')
                            }
                        />
                        {error ? (
                            <SuiTypography
                                variant="caption"
                                color="error"
                                sx={{ mt: 1 }}
                                align="center"
                            >
                                {message}
                            </SuiTypography>
                        ) : null}

                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            sx={{ mt: 5 }}
                        >
                            {/* <SuiButton
                                size="medium"
                                color="secondary"
                                onClick={() => history.goBack()}
                            >
                                Hủy bỏ
                            </SuiButton> */}
                            <SuiButton
                                size="medium"
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Lưu thay đổi
                            </SuiButton>
                        </Box>
                    </Box>
                </Card>
            </Container>
        </>
    )
}
