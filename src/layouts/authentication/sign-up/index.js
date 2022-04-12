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
import { userApi } from 'apis/userApi'
import { studentApi } from 'apis/studentApi'

function SignUp() {
    const userData = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    }
    const defaultError = {
        name: null,
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!verification()) return
        console.log('pass verify')
        try {
            const [firstname, lastname] = data.name.split(' ')
            const student = {
                email: data.email,
                password: data.password,
                firstName: firstname,
                lastName: lastname,
                type: 'STUDENT',
                phoneNumber: data.phone,
            }
            const res = await userApi.signUp(student)
            console.log(res.data.id)
            const studentRes = await studentApi.createNewStudent({
                userId: res.data.id,
                status: 'ACTIVE',
            })
            console.log(studentRes.data)
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
        const { name, password, email, confirmPassword, phone } = data
        var flag = true
        if (name.length < 1) {
            verificationError = {
                ...verificationError,
                name: 'Tên không dược bỏ trống',
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
            // title="Welcome!"
            // description="Use these awesome forms to login or create new account in your project for free."
            image={curved6}
        >
            <Card>
                <SuiBox p={3} mb={1} textAlign="center">
                    <SuiTypography variant="h5" fontWeight="medium">
                        Đằng kí
                    </SuiTypography>
                </SuiBox>
                <SuiBox mb={2}>
                    <Socials />
                </SuiBox>
                <Separator />
                <form onSubmit={handleSubmit}>
                    <SuiBox pt={2} pb={3} px={3}>
                        <SuiBox>
                            <SuiBox mb={2}>
                                <SuiInput
                                    placeholder="Tên"
                                    type="text"
                                    name="name"
                                    error={error.name}
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                {error.name && (
                                    <SuiTypography
                                        component="label"
                                        variant="caption"
                                        fontWeight="bold"
                                        color="error"
                                    >
                                        {error.name}
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
                                    textGradient
                                >
                                    điều khoản sử dụng
                                </SuiTypography>
                            </SuiBox>
                            <SuiBox mt={4} mb={1}>
                                <SuiButton
                                    variant="gradient"
                                    color="dark"
                                    type="submit"
                                    fullWidth
                                >
                                    Đăng kí
                                </SuiButton>
                            </SuiBox>
                            <SuiBox mt={3} textAlign="center">
                                <SuiTypography
                                    variant="button"
                                    color="text"
                                    fontWeight="regular"
                                >
                                    Already have an account?&nbsp;
                                    <SuiTypography
                                        component={Link}
                                        to="/authentication/sign-in"
                                        variant="button"
                                        color="dark"
                                        fontWeight="bold"
                                        textGradient
                                    >
                                        Sign in
                                    </SuiTypography>
                                </SuiTypography>
                            </SuiBox>
                        </SuiBox>
                    </SuiBox>
                </form>
            </Card>
        </BasicLayout>
    )
}

export default SignUp
