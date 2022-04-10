import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export default function SnackbarMessage(props) {
    const { open, snack, onClickClose } = props
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        onClickClose()
    }
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <Alert
                onClose={handleClose}
                severity={snack.color}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snack.message}
            </Alert>
        </Snackbar>
    )
}
