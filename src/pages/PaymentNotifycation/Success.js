import { Box, Card, ThemeProvider } from '@mui/material'
import theme from 'assets/theme'
import React from 'react'
import classes from './Success.module.css'

export default function Success(props) {
    return (
        <ThemeProvider theme={theme}>
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
                </Card>
            </Box>
        </ThemeProvider>
    )
}
