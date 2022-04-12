import { Box, Button, Card, Typography } from '@mui/material'
import theme from 'assets/theme'
import React from 'react'
import classes from './Success.module.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Success(props) {
    const title = 'Success'
    const params = new URL(document.location).searchParams
    const paymentId = params.get('paymentId')

    const sendMessage = () => {
        window.parent.postMessage(paymentId, 'https://studentloanfpt.ddns.net')
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Box className={classes.container}>
                <Card className={classes.card}>
                    <div className={classes.icon}>
                        <i className={`${classes.iconFont} checkmark`}>✓</i>
                    </div>
                    <h1 className={classes.success}>Hoàn tất</h1>
                    <p className={classes.typo}>
                        Chúng tôi đã ghi nhận giao dịch của bạn
                    </p>
                    <Button variant="contain">
                        <Link
                            to="/"
                            className={classes.link}
                            onClick={sendMessage}
                        >
                            <Typography>Trở về trang chủ</Typography>
                        </Link>
                    </Button>
                </Card>
            </Box>
        </>
    )
}
