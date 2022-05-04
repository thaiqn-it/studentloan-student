import React, { useRef, useState } from 'react'

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
    const { open, handleConfirm, firstName, lastName } = props
    const [name, setName] = useState(null)

    const handleClick = () => {
        if (name === firstName + ' ' + lastName) {
            handleConfirm(true)
        }
    }

    const handleClose = () => {
        handleConfirm(false)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

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
                        fontWeight="bold"
                        align="center"
                    >
                        Xác nhận đã ký khi kêu gọi thành công
                    </SuiTypography>

                    <DialogContentText align="center">
                        <SuiTypography>
                            Xác nhận đồng nghĩa bạn đã đồng ý ký hợp đồng khi
                            kêu gọi thành công
                        </SuiTypography>
                    </DialogContentText>
                    <Box sx={{ mt: 5 }}>
                        <SuiTypography variant="button" fontWeight="regular">
                            Vui lòng nhập{' '}
                            <SuiTypography variant="button">
                                {firstName + ' ' + lastName}{' '}
                            </SuiTypography>
                            để xác nhận
                        </SuiTypography>
                        <SuiInput onChange={onChangeName} name="name" />
                    </Box>
                    <SuiButton
                        color="primary"
                        sx={{ borderRadius: 0, mt: 2 }}
                        fullWidth
                        onClick={handleClick}
                        disabled={name !== firstName + ' ' + lastName}
                    >
                        <SuiTypography
                            variant="button"
                            color="white"
                            fontWeight="regular"
                        >
                            Tôi đã hiểu yêu cầu
                        </SuiTypography>
                    </SuiButton>
                </Box>
            </Dialog>
        </>
    )
}
