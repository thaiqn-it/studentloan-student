import React from 'react'

import {
    DialogTitle,
    Dialog,
    DialogContent,
    DialogContentText,
    Box,
    IconButton,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import CloseIcon from '@mui/icons-material/Close'

export default function RequestVerify(props) {
    const { open, handleClose, value } = props
    return (
        <>
            <Dialog
                onClose={() => handleClose(false)}
                open={open}
                maxWidth="sm"
            >
                <Box p={2}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={() => handleClose(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <DialogTitle id="responsive-dialog-title">
                        <SuiTypography
                            variant="h4"
                            fontWeight="medium"
                            align="center"
                        >
                            {value.title}
                        </SuiTypography>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText align="center">
                            {value.message}
                        </DialogContentText>
                    </DialogContent>
                    <SuiButton
                        color="warning"
                        sx={{ borderRadius: 0, mt: 2 }}
                        fullWidth
                        onClick={() => handleClose(true)}
                    >
                        {value.button}
                    </SuiButton>
                </Box>
            </Dialog>
        </>
    )
}
