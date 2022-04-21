import { useState } from 'react'
import { paypalApi } from 'apis/paypalApi'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material'

import classes from './Transfer.module.css'
import SuiInput from 'components/SuiInput'
import { transactionApi } from 'apis/transactionApi'
import { walletApi } from 'apis/walletApi'


export default function Transfer({ open, handleClose, walletId, reloadData }) {
    const title = 'Rút tiền'

    const [money, setMoney] = useState()
    const [email, setEmail] = useState()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await paypalApi.transfer({
                email: email,
                money: money,
                accountId: walletId,
            })

            const data = {
                money,
                type: 'WITHDRAW',
                description: 'Rút tiền sang ví paypal',
                walletId,
                recipientId: null,
                recipientName: 'Paypal',
                senderId: '',
                senderName: 'Ví của tôi',
                transactionFee: '',
                status: 'SUCCESS',
                paypalTransaction: res.data.payoutId,
            }
            const transactionRes = await transactionApi.createTransaction(data)
            const walletRes = await walletApi.updateWalletById(
                walletId,
                -1 * money
            )
            handleClose()
            reloadData()
            if (!res) throw new Error()
            // const transaction = aw
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth={'sm'}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Box sx={{ height: '200px' }}>
                        <Box className={classes.inputBox}>
                            <Typography
                                variant="caption"
                                className={classes.title}
                            >
                                So tien
                            </Typography>
                            <SuiInput
                                type={'number'}
                                value={money}
                                onChange={(e) => setMoney(e.target.value)}
                                name={'money'}
                            />
                            {/* {error && (
                    <Typography variant="caption" className={classes.error}>
                        {helperText}
                    </Typography>
                )} */}
                        </Box>
                        <Box className={classes.inputBox}>
                            <Typography
                                variant="caption"
                                className={classes.title}
                            >
                                Email
                            </Typography>
                            <SuiInput
                                type={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name={'email'}
                            />
                            {/* {error && (
                    <Typography variant="caption" className={classes.error}>
                        {helperText}
                    </Typography>
                )} */}
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Huỷ</Button>
                    <Button onClick={handleFormSubmit}>Rút tiền</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
