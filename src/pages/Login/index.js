import React, { useState } from 'react'
import {
    Link,
    Grid,
    Divider,
    CardMedia,
    Typography,
    TextField,
    Button,
    Container,
} from '@mui/material'
import styles from './Login.module.css'
import loginImage from '../../assets/loginImage.svg'
import { userApi } from '../../apis/userApi'
import { JWT_TOKEN } from '../../constants'
import { useHistory } from 'react-router'
import { useAuthDispatch } from 'context/authContext'
import { loginUser } from 'context/userAction'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const [error, setError] = useState(false)
    const dispatch = useAuthDispatch()
    const errorMessage = 'Tài Khoản Đăng Nhập Hoặc Mật Khẩu Bị Sai'

    const signIn = async (e) => {
        try {
            console.log('login')
            e.preventDefault()
            setError(false)
            const response = await loginUser(dispatch, email, password)
            if (!response.data.id) return setError(errorMessage)
            history.push('/trang-chu')
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
        <div>
            <Container
                maxWidth="md"
                sx={{ marginTop: 15 }}
                className={styles.container}
            >
                {' '}
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Grid item xs={12}>
                                <Typography variant="p">Welcome.</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Sign in to continue.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CardMedia component="img" image={loginImage} />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Grid container>
                                <Grid item xs={12} sx={{ marginTop: '4rem' }}>
                                    <TextField
                                        error={error}
                                        label="Email"
                                        name="email"
                                        value={email}
                                        autoComplete="email"
                                        onChange={handleInputEmail}
                                        autoFocus
                                        helperText={error && errorMessage}
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ marginTop: '1rem' }}>
                                    <TextField
                                        error={error}
                                        name="password"
                                        label="Mật khẩu"
                                        type="password"
                                        onChange={handleInputPassword}
                                        value={password}
                                        helperText={error && errorMessage}
                                        autoComplete="current-password"
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{ marginTop: '1rem' }}
                                >
                                    <Link href="/forgotPassword">
                                        Quên mật khẩu ?
                                    </Link>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{ marginTop: '1rem' }}
                                >
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{ color: 'white' }}
                                        onClick={signIn}
                                    >
                                        Đăng nhập
                                    </Button>
                                </Grid>
                                <Divider />
                                <Grid item xs={12} sx={{ marginTop: '1rem' }}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        href="/signup"
                                    >
                                        Tạo tài khoản
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}
