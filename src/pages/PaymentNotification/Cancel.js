import { Box, Card } from '@mui/material'

import React from 'react'
import classes from './Cancel.module.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


export default function Cancel(props) {
   const title = "Cancel"
    return (
        <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
         <Box className={classes.container}>
            <Card className={classes.card}>
                <div className={classes.icon}>
                    <CloseIcon className={classes.iconFont} fontSize="120px" />
                </div>
                <h1 className={classes.cancel}>Đả huỷ</h1>
                <p className={classes.typo}>
                    Chúng tôi đã nhận được yêu cầu huỷ giao dịch
                </p>
                <Button variant="contain" color="warning">
                    <Link to="/" className={classes.link}>
                        <Typography>Trở về trang chủ</Typography>
                    </Link>
                </Button>
            </Card>
        </Box></>
       
    )
}
