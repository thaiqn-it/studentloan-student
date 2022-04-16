import React, { useState } from 'react'

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
import SuiInput from 'components/SuiInput'

export default function ConfirmSign(props) {
    const { open, handleClose, handleConfirm } = props

    return (
        <>
            <Dialog open={open} maxWidth="md">
                <Box p={2} width="768px">
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <SuiTypography
                        variant="h4"
                        fontWeight="medium"
                        align="center"
                    >
                        Xác nhận đã ký khi kêu gọi thành công
                    </SuiTypography>

                    <DialogContentText align="center">
                        Xác nhận đồng nghĩa bạn đồng ý ký vào hợp đồng khi gọi vốn thành công
                    </DialogContentText>

                    <SuiButton
                        color="primary"
                        sx={{ borderRadius: 0, mt: 2 }}
                        fullWidth
                        onClick={handleConfirm}
                    >
                        Xác nhận
                    </SuiButton>
                </Box>
            </Dialog>
        </>
    )
}
