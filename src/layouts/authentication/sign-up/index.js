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

import { useState, useEffect } from 'react'

// react-router-dom components
import { Link, useHistory } from 'react-router-dom'

// @mui material components
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'

// Soft UI Dashboard React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'

// Authentication layout components
import BasicLayout from 'layouts/authentication/components/BasicLayout'
import Socials from 'layouts/authentication/components/Socials'
import Separator from 'layouts/authentication/components/Separator'

// Images
import curved6 from 'assets/images/curved-images/curved14.jpg'
import signupImage from "../../../assets/signupImage.svg"
import { userApi } from 'apis/userApi'
import { studentApi } from 'apis/studentApi'
import { ThemeProvider } from '@mui/material'
import theme from 'assets/theme'

function SignUp() {
    const userData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    }
    const defaultError = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        phone: null,
    }

    const [agreement, setAgremment] = useState(true)
    const [error, setError] = useState(defaultError)
    const history = useHistory()
    const [data, setData] = useState(userData)
    const handleSetAgremment = () => setAgremment(!agreement)

    const verifyOTP = async () => {
        // try {
        //   const token = otp;
        //   const secret = otpSecret;
        //   const res = await userApi.verifyOTP(token, secret);
        //   console.log(res);
        //   const isValid = res.data.isValid;
        //   if (isValid) {
        //     createAccount();
        //   }
        // } catch (e) {
        //   setError({ serverError: "server is not avaiable" });
        // }
      };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!verification()) return
        try {
            const student = {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                type: 'STUDENT',
                phoneNumber: data.phone,
            }
            const res = await userApi.signUp(student)
            console.log(res.data.id)
            const studentRes = await studentApi.createNewStudent({
                userId: res.data.id,
                status: 'ACTIVE',
            })
            if (res.data && studentRes.data)
                history.push('/authentication/sign-in')
        } catch (e) {
            console.log(e)
        }
        // checkEmail()
    }

    const handleChange = (e) => {
        e.preventDefault()
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const isEmail = (email) => {
        const emailExp = /\S+@\S+\.\S+/
        return emailExp.test(email)
    }
    const isPhone = (phone) => {
        const phoneExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        return phoneExp.test(phone)
    }

    const verification = () => {
        let verificationError = {}
        const { firstName, lastName, password, email, confirmPassword, phone } =
            data
        var flag = true
        if (firstName.length < 1) {
            verificationError = {
                ...verificationError,
                firstName: 'Họ không dược bỏ trống',
            }
            flag = false
        }
        if (lastName.length < 1) {
            verificationError = {
                ...verificationError,
                lastName: 'Tên không dược bỏ trống',
            }
            flag = false
        }

        if (!isEmail(email)) {
            verificationError = {
                ...verificationError,
                email: 'Email này bị sai',
            }
            flag = false
        }

        if (!isPhone(phone)) {
            verificationError = {
                ...verificationError,
                phone: 'Số điện thoại không đúng',
            }
            flag = false
        }
        if (password.length < 6) {
            verificationError = {
                ...verificationError,
                password: 'Mật khẩu có ít nhất 6 chữ só',
            }
            flag = false
        }
        if (password !== confirmPassword) {
            verificationError = {
                ...verificationError,
                confirmPassword: 'Xác thực mật khẩu không đúng',
            }
            flag = false
        }

        setError(verificationError)
        return flag
    }

    return (
        <BasicLayout
            title="Xin chào !"
            description="Hãy tạo tài khoản để bắt đầu khoản vay."
            image={signupImage}
        >
            <ThemeProvider theme={theme}>
                <Card>
                    <SuiBox p={3} mb={1} textAlign="center">
                        <SuiTypography variant="h3" fontWeight="regular">
                            Đăng ký
                        </SuiTypography>
                    </SuiBox>
                    {/* <SuiBox mb={2}>
                        <Socials />
                    </SuiBox>
                    <Separator /> */}
                    <form onSubmit={handleSubmit}>
                        <SuiBox pb={3} px={3}>
                            <SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        placeholder="Họ"
                                        type="text"
                                        name="firstName"
                                        error={error.firstName}
                                        value={data.firstName}
                                        onChange={handleChange}
                                    />
                                    {error.firstName && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.firstName}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        placeholder="Tên"
                                        type="text"
                                        name="lastName"
                                        error={error.lastName}
                                        value={data.lastName}
                                        onChange={handleChange}
                                    />
                                    {error.lastName && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.lastName}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        error={error.email}
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                    {error.email && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.email}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="phone"
                                        placeholder="Số điện thoại"
                                        name="phone"
                                        error={error.phone}
                                        value={data.phone}
                                        onChange={handleChange}
                                    />
                                    {error.phone && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.phone}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="password"
                                        placeholder="Mât Khẩu"
                                        name="password"
                                        error={error.password}
                                        value={data.password}
                                        onChange={handleChange}
                                    />
                                    {error.password && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.password}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="password"
                                        placeholder="Xác Thực Mât Khẩu"
                                        name="confirmPassword"
                                        error={error.confirmPassword}
                                        value={data.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {error.confirmPassword && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.confirmPassword}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox display="flex" alignItems="center">
                                    <Checkbox
                                        color="primary"
                                        checked={agreement}
                                        onChange={handleSetAgremment}
                                    />
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                        onClick={handleSetAgremment}
                                        sx={{
                                            cursor: 'poiner',
                                            userSelect: 'none',
                                        }}
                                    >
                                        &nbsp;&nbsp;Tôi đồng ý với &nbsp;
                                    </SuiTypography>
                                    <SuiTypography
                                        component="a"
                                        href="#"
                                        variant="button"
                                        fontWeight="bold"
                                        color="primary"
                                    >
                                        điều khoản sử dụng
                                    </SuiTypography>
                                </SuiBox>
                                <SuiBox mt={4} mb={1}>
                                    <SuiButton
                                        color="primary"
                                        type="submit"
                                        fullWidth
                                    >
                                        Đăng ký
                                    </SuiButton>
                                </SuiBox>
                                <SuiBox mt={3} textAlign="center">
                                    <SuiTypography
                                        variant="button"
                                        color="text"
                                        fontWeight="regular"
                                    >
                                        Bạn đã có tài khoản ?&nbsp;
                                        <SuiTypography
                                            component={Link}
                                            to="/authentication/sign-in"
                                            variant="button"
                                            color="primary"
                                            fontWeight="bold"
                                        >
                                            Đăng nhập
                                        </SuiTypography>
                                    </SuiTypography>
                                    <SuiBox>
                                        <SuiTypography
                                            component={Link}
                                            to="/"
                                            variant="caption"
                                            color="dark"
                                            fontWeight="medium"
                                        >
                                            Quay lại
                                        </SuiTypography>
                                    </SuiBox>
                                </SuiBox>
                            </SuiBox>
                        </SuiBox>
                    </form>
                </Card>
            </ThemeProvider>
        </BasicLayout>
    )
}

export default SignUp
