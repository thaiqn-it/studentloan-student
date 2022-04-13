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

export default function ComfirmDelete(props) {
    const { open, handleClose, title, handleDelete, value } = props

    return (
        <>
            <Dialog onClose={handleClose} open={open} maxWidth="sm">
                <Box p={2}>
                    <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    </Box>
                    <DialogTitle id="responsive-dialog-title">
                        <SuiTypography
                            variant="h4"
                            fontWeight="medium"
                            align="center"
                        >
                            Bạn có chắc muốn xóa {title} ?
                        </SuiTypography>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText align="center">
                            Hành động này không thể được hoàn tác
                        </DialogContentText>
                    </DialogContent>
                    <SuiButton
                        color="error"
                        sx={{ borderRadius: 0, mt: 2 }}
                        fullWidth
                        onClick={() =>handleDelete(value)}
                    >
                        Xóa
                    </SuiButton>
                </Box>
            </Dialog>
        </>
    )
}
