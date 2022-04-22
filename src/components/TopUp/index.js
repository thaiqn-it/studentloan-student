import { useEffect, useState } from 'react'
import { paypalApi } from 'apis/paypalApi'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Modal,
    Typography,
} from '@mui/material'
import SuiInput from 'components/SuiInput'
import classes from './TopUp.module.css'
import { transactionApi } from 'apis/transactionApi'
import { PayPalButton } from 'react-paypal-button-v2'

import { exchangeCurrency } from 'utils/concurencyExchange'
import { walletApi } from 'apis/walletApi'
import SuiTypography from 'components/SuiTypography'
import { fCurrency } from 'utils/formatNumber'
import SuiButton from 'components/SuiButton'

const source = 'https://studentloanfpt.ddns.net'
const TopUpModal = ({ open, onClose, url }) => {
    useEffect(() => {
        window.addEventListener('message', (e) => {
            if (e.origin !== source) return

            onClose(e.data)
        })
    }, [])
    return (
        <Modal open={open}>
            <iframe title="Top Up" id="top-up-modal" href={url} />
        </Modal>
    )
}

export default function TopUp({ open, handleClose, reloadData, walletId }) {
    const title = 'Nạp tiền'
    const [money, setMoney] = useState()
    const [usd, setUsd] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const [transaction, setTransaction] = useState()
    const [url, setUrl] = useState()
    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await paypalApi.topUp(money)

            handleClose(false)
            const url = res.data
            // await setUrl(url)
            // await setModalOpen(modalOpen)
            // const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            // newWindow.opener.callbacks.push((value) => {
            //     console.log(value)
            // })
            // if (newWindow) newWindow.opener = null
            // window.location.href = url
            reloadData()
        } catch (e) {
            console.log(e)
        }
    }

    const handleModalClose = async (paymentId) => {
        try {
            // const data = { ...transaction, paypalTransaction: paymentId }
            // const res = await transactionApi.updateTransaction(data)
            // if (!res) throw new Error(res)
            setModalOpen(false)
        } catch (e) {}
    }

    const handleTopUpSuccess = async (paymentId) => {
        try {
            const data = {
                money,
                type: 'type',
                description: 'Nạp tiền từ paypal',
                walletId,
                recipientId: null,
                recipientName: 'Ví của tôi',
                senderId: '',
                senderName: 'Paypal',
                transactionFee: '',
                status: 'SUCCESS',
                paypalTransaction: paymentId,
            }
            const res = await transactionApi.createTransaction(data)
            console.log(res)
            const walletUpdateRes = await walletApi.updateWalletById(
                walletId,
                money
            )
            console.log(walletUpdateRes)
            if (!(res && walletUpdateRes)) throw new Error(res)
            setModalOpen(false)
            handleClose()
            reloadData()
        } catch (e) {
            console.log(e)
        }
    }

    const handleMoneyChange = (e) => {
        setMoney(e.target.value)
    }

    const exchange = async (money) => {
        const value = await exchangeCurrency(money).then((x) =>
            setUsd(x.toFixed(2))
        )
        return value
    }

    useEffect(() => {
        exchange(money)
    }, [money])
    return (
        <>
            <TopUpModal
                open={modalOpen}
                src={url}
                handleClose={handleModalClose}
            />
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
                            <SuiTypography align="center" variant="h4">{fCurrency(money)}</SuiTypography>
                            <SuiInput
                                value={money}
                                onChange={handleMoneyChange}
                                name={'money'}
                                type="number"
                                sx={{mt:3}}
                            />
                            {/* <Grid container mt={1}>
                                <Grid item xs={12} md={3}>
                                    <SuiButton color="primary" onClick={e=>setMoney(e.currentTarget.value)}>200.000</SuiButton>
                                </Grid>
                            </Grid> */}
                        </Box>
                    </Box>

                    <PayPalButton
                        onSuccess={(details, data) => {
                            handleTopUpSuccess(details.id)
                        }}
                        options={{
                            clientId:
                                'AX_lyXzg2GC8Gmc1Bm_XyNhbHuTKyBI1y2fHwiJ9TIjb98scF-hriTxED5CIT-_JPxglh5e7GmLzmiGm',
                        }}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: 'USD',
                                            value: usd,
                                        },
                                    },
                                ],
                                // application_context: {
                                //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                                // }
                            })
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <SuiButton color="dark" onClick={handleClose} size="large" variant="text">Hủy</SuiButton>
                </DialogActions>
            </Dialog>
        </>
    )
}
