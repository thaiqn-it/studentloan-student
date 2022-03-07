import { Box, Button, Card, Typography } from '@mui/material'
import theme from 'assets/theme'
import React from 'react'
import classes from './Success.module.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Success(props) {
    const title = 'Success'
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
                    <h1 className={classes.success}>Success</h1>
                    <p className={classes.typo}>
                        We received your payment request
                        <br /> we'll be in touch shortly!
                    </p>
                    <Button variant="contain" color="success">
                        <Link to="/">
                            <Typography>Go to Home</Typography>
                        </Link>
                    </Button>
                </Card>
            </Box>
        </>
    )
}
