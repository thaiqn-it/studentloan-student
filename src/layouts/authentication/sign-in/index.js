/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from 'react'

// react-router-dom components
import { Link } from 'react-router-dom'

// @mui material components
import Switch from '@mui/material/Switch'

// Soft UI Dashboard React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'

// Authentication layout components
import CoverLayout from 'layouts/authentication/components/CoverLayout'

// Images
import curved9 from 'assets/images/curved-images/curved-6.jpg'
import { loginUser } from 'context/userAction.js'
import { useHistory } from 'react-router-dom'
import { useAuthDispatch } from 'context/authContext'

function SignIn() {
    const [rememberMe, setRememberMe] = useState(true)

    const handleSetRememberMe = () => setRememberMe(!rememberMe)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const errorMessage = 'Tài Khoản Đăng Nhập Hoặc Mật Khẩu Bị Sai'
    const history = useHistory()
    const dispatch = useAuthDispatch()
    const signIn = async (e) => {
        try {
            e.preventDefault()
            setError(false)

            const response = await loginUser(dispatch, email, password)
            if (!response.data.id) return setError(errorMessage)
            history.push('/dashboard')
        } catch (err) {
            //handle Login
            setError(true)
        }
    }

    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <CoverLayout
        color="dark"
            title="Đăng Nhập"
            description="Xin hãy nhập email và mật khẩu để đăng nhập"
            image={curved9}
        >
            <SuiBox component="form" role="form" onSubmit={signIn}>
                <SuiBox mb={2}>
                    <SuiBox mb={1} ml={0.5}>
                        <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                        >
                            Email
                        </SuiTypography>
                    </SuiBox>
                    <SuiInput
                        type="email"
                        placeholder="Email"
                        error={error}
                        value={email}
                        onChange={handleInputEmail}
                        onClick={() => setError(false)}
                    />
                </SuiBox>
                <SuiBox mb={2}>
                    <SuiBox mb={1} ml={0.5}>
                        <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                        >
                            Mật Khẩu
                        </SuiTypography>
                    </SuiBox>

                    <SuiInput
                        type="password"
                        placeholder="Mật Khẩu"
                        error={error}
                        value={password}
                        onChange={handleInputPassword}
                        onClick={() => setError(false)}
                    />
                    {error && (
                        <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            color="error"
                        >
                            {errorMessage}
                        </SuiTypography>
                    )}
                </SuiBox>
                <SuiBox display="flex" alignItems="center">
                    <Switch
                        checked={rememberMe}
                        onChange={handleSetRememberMe}
                    />
                    <SuiTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={handleSetRememberMe}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                    >
                        &nbsp;&nbsp;Ghi nhớ đăng nhập
                    </SuiTypography>
                </SuiBox>
                <SuiBox mt={4} mb={1}>
                    <SuiButton
                        type="submit"
                        color="primary"
                        fullWidth
                        onClick={signIn}
                    >
                        Đăng Nhập
                    </SuiButton>
                </SuiBox>
                <SuiBox mt={3} textAlign="center">
                    <SuiTypography
                        variant="button"
                        color="text"
                        fontWeight="regular"
                    >
                        Chưa có tài khoảng ?
                        <SuiTypography
                            component={Link}
                            to="/authentication/sign-up"
                            variant="button"
                            color="primary"
                            fontWeight="medium"
                        >
                            Đăng kí
                        </SuiTypography>
                    </SuiTypography>
                </SuiBox>
            </SuiBox>
        </CoverLayout>
    )
}

export default SignIn
