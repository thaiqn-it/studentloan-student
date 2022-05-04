import { useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import SuiButton from 'components/SuiButton'
import { fCurrency } from 'utils/formatNumber'
import SuiTypography from 'components/SuiTypography'

export default function Transfer({ open, handleClose, walletId, reloadData }) {
    const history = useHistory()
    const title = 'Rút tiền'

    const [money, setMoney] = useState()
    const [email, setEmail] = useState()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        var path = '/trang-chu/thanh-toan/rut-tien'
        history.push({
            pathname: path,
            state: {
                paypal: {
                    email: email,
                    money: money,
                },
            },
        })
        // try {
        //     const res = await paypalApi.transfer({
        //         email: email,
        //         money: money,
        //         accountId: walletId,
        //     })

        //     const data = {
        //         money,
        //         type: 'WITHDRAW',
        //         description: 'Rút tiền sang ví paypal',
        //         walletId,
        //         recipientId: null,
        //         recipientName: 'Paypal',
        //         senderId: '',
        //         senderName: 'Ví của tôi',
        //         transactionFee: '',
        //         status: 'SUCCESS',
        //         paypalTransaction: res.data.payoutId,
        //     }
        //     const transactionRes = await transactionApi.createTransaction(data)
        //     const walletRes = await walletApi.updateWalletById(
        //         walletId,
        //         -1 * money
        //     )
        //     handleClose()
        //     reloadData()
        //     if (!res) throw new Error()
        //     // const transaction = aw
        // } catch (e) {
        //     console.log(e)
        // }
    }

    // useEffect(() => {
    //     })
    //     //     const res = await paypalApi.transfer({
    //     //         email: email,
    //     //         money: money,
    //     //         accountId: walletId,
    //     //     })

    //     //     const data = {
    //     //         money,
    //     //         type: 'WITHDRAW',
    //     //         description: 'Rút tiền sang ví paypal',
    //     //         walletId,
    //     //         recipientId: null,
    //     //         recipientName: 'Paypal',
    //     //         senderId: '',
    //     //         senderName: 'Ví của tôi',
    //     //         transactionFee: '',
    //     //         status: 'SUCCESS',
    //     //         paypalTransaction: res.data.payoutId,
    //     //     }
    //     //     const transactionRes = await transactionApi.createTransaction(data)
    //     //     const walletRes = await walletApi.updateWalletById(
    //     //         walletId,
    //     //         -1 * money
    //     //     )
    //     //     handleClose()
    //     //     reloadData()
    //     //     if (!res) throw new Error()
    //     //     // const transaction = aw
    //     // } catch (e) {
    //     //     console.log(e)
    //     // }
    // }

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
                                Số tiền
                            </Typography>
                            <SuiTypography align="center" variant="h4">
                                {fCurrency(money)}
                            </SuiTypography>
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
                                Tài khoản ví paypal
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
                <Box
                    display="flex"
                    justifyContent="space-between"
                    px={3}
                    pb={1}
                >
                    <SuiButton onClick={handleClose} color="dark">
                        Huỷ
                    </SuiButton>
                    <SuiButton onClick={handleFormSubmit} color="primary">
                        Rút tiền
                    </SuiButton>
                </Box>
            </Dialog>
        </>
    )
}
