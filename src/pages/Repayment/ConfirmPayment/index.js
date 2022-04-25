import React, { useState } from 'react'

import { userApi } from '../../../apis/userApi'

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
import Loading from 'components/Loading'

export default function ConfirmPayment(props) {
    const { open, handleClose, title, handleConfirm, value } = props
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState(null)

    const handleConfirmPassword = () => {
        setLoading(true)
        userApi
            .verifyPassword({ password })
            .then((res) => {
                setLoading(false)
                handleConfirm(res.data)
            })
            .catch((err) => {
                setLoading(false)
                handleConfirm(false)
            })
    }

    return (
        <>
            <Dialog open={open} maxWidth="md">
                {loading ? <Loading /> : null}
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
                        Xác nhận thanh toán
                    </SuiTypography>

                    <DialogContentText align="center">
                        Hãy mật khẩu để xác thực
                    </DialogContentText>
                    <SuiTypography variant="h6" sx={{ mt: 3 }}>
                        Mật khẩu:
                    </SuiTypography>
                    <SuiInput
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SuiButton
                        color="primary"
                        sx={{ borderRadius: 0, mt: 2 }}
                        fullWidth
                        onClick={handleConfirmPassword}
                    >
                        Xác nhận
                    </SuiButton>
                </Box>
            </Dialog>
        </>
    )
}
