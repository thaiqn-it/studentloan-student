import { Box, Card, ThemeProvider } from '@mui/material'
import theme from 'assets/theme'
import React from 'react'
import classes from './Cancel.module.css'
import CloseIcon from '@mui/icons-material/Close'

export default function Cancel(props) {
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.container}>
                <Card className={classes.card}>
                    <div className={classes.icon}>
                        <CloseIcon
                            className={classes.iconFont}
                            fontSize="120px"
                        />
                    </div>
                    <h1 className={classes.cancel}>Cancel</h1>
                    <p className={classes.typo}>
                        We received your cancel request
                        <br /> we'll be in touch shortly!
                    </p>
                </Card>
            </Box>
        </ThemeProvider>
    )
}
